package shuffle

import (
	"context"
	"io"

	pf "github.com/estuary/flow/go/protocol"
	"go.gazette.dev/core/broker/client"
	pb "go.gazette.dev/core/broker/protocol"
	"go.gazette.dev/core/message"
)

type coordinator struct {
	rjc pb.RoutedJournalClient
}

type ring struct {
	*coordinator
	ctx    context.Context
	cancel context.CancelFunc

	subscribers
	readChans []chan pf.ShuffleResponse
}

func (r *ring) onSubscribe(sub subscriber) {
	var rr = r.subscribers.add(sub)
	if rr == nil {
		return // This subscriber doesn't require starting a new read.
	}

	var readCh = make(chan pf.ShuffleResponse, 1)
	r.readChans = append(r.readChans, readCh)
	go readDocuments(r.ctx, r.coordinator.rjc, *rr, readCh)
}

func (r *ring) onRead(resp pf.ShuffleResponse, ok bool) {
	if !ok {
		// Reader at the top of the read stack has reached EOF.
		if len(r.readChans) <= 1 {
			panic("unexpected EOF from shuffle reader at stack bottom")
		}
		r.readChans = r.readChans[:len(r.readChans)-1]
		return
	} else if resp.TerminalError != "" {
		r.subscribers.stageResponses(resp)

	}
}

// readDocuments is a function variable for easy mocking in tests.
var readDocuments = func(
	ctx context.Context,
	rjc pb.RoutedJournalClient,
	req pb.ReadRequest,
	ch chan pf.ShuffleResponse,
) {
	defer close(ch)

	var rr = client.NewRetryReader(ctx, rjc, req)
	var it = message.NewReadUncommittedIter(rr, func(*pb.JournalSpec) (message.Message, error) {
		return new(pf.Document), nil
	})

	// Pop attempts to dequeue a pending ShuffleResponse that we can extend.
	// Or, it returns a new one if none is buffered.
	var popPending = func() (out pf.ShuffleResponse) {
		select {
		case out = <-ch:
		default:
		}
		return
	}

	for {
		var env, err = it.Next()
		var out = popPending()

		if l := len(out.Documents); l != 0 &&
			(out.Documents[l-1].End-out.Documents[0].Begin) >= responseSizeThreshold {
			// |out| is too large for us to extend. Put it back. This cannot block,
			// since buffer N=1, we dequeued above, and we're the only writer.
			ch <- out

			// Push an empty ShuffleResponse. This may block, applying back pressure
			// until the prior |out| is picked up by the channel reader.
			select {
			case ch <- pf.ShuffleResponse{}:
			case <-ctx.Done():
				return
			}
			// Pop it again, for us to extend.
			out = popPending()
		}

		if err == nil {
			var doc = *env.Message.(*pf.Document)
			doc.Begin, doc.End = env.Begin, env.End
			out.Documents = append(out.Documents, doc)
		} else if err != io.EOF {
			out.TerminalError = err.Error()
		}

		// Place back onto channel (cannot block).
		ch <- out

		if err != nil {
			return
		}
	}
}

const responseSizeThreshold int64 = 1 << 16 // 65KB.