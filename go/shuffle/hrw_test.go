package shuffle

import (
	"hash/fnv"
	"math/bits"
	"testing"

	pf "github.com/estuary/flow/go/protocol"
	"github.com/stretchr/testify/require"
	"go.gazette.dev/core/message"
)

func TestStableWeightsRegression(t *testing.T) {
	var expect = []uint32{
		0xd3093495, 0xeefb0fc7, 0x49595118, 0xb02e4125,
		0x529c82a4, 0xd5ae684a, 0x509754c5, 0x7c1b60d2,
		0xc26ff1f1, 0x32ed8df0, 0xd881c0f7, 0x129f0565,
		0xf3ce95a1, 0xe06c7873, 0x4315653f, 0x2d371fa0,
		0xade0e428, 0x10ab0285, 0x365aff82, 0xc44ee188,
		0x1f0d096f, 0xd84bd42c, 0xcc51a130, 0x66281834,
		0xc1ee27a2, 0x4c1edb77, 0xc3f077d1, 0xb8e1e80d,
		0xc4a7746f, 0x3f3a93c5, 0xd6f138c0, 0x71924578}

	// Generated weights are stable.
	require.Equal(t, expect, generateStableWeights(len(expect)))
	// They're also invariant to length (weights N is a prefix of M for N < M).
	require.Equal(t, expect[:4], generateStableWeights(4))
	// They're also invariant to length (weights N is a prefix of M for N < M).
	require.Equal(t, expect[:12], generateStableWeights(12))

	// Weight bits are uniformly distributed.
	var total int
	for _, n := range expect {
		total += bits.OnesCount32(n)
	}
	require.Equal(t, 490, total) // Ideal is 512 (32 * 16).

}

func TestRankingCases(t *testing.T) {
	var cfg = pf.ShuffleConfig{
		Journal: "a/journal",
		Ring: pf.Ring{
			Name: "a-ring",
			Members: []pf.Ring_Member{
				{MinMsgClock: 0, MaxMsgClock: 0},
				{MinMsgClock: 0, MaxMsgClock: 0},
				{MinMsgClock: 0, MaxMsgClock: 0},
				{MinMsgClock: 1000, MaxMsgClock: 0},
				{MinMsgClock: 0, MaxMsgClock: 3000},
			},
		},
		Shuffles: []pf.ShuffleConfig_Shuffle{
			{ShuffleKeyPtr: []string{"/foo"}, BroadcastTo: 3},
			{ShuffleKeyPtr: []string{"/bar"}, ChooseFrom: 3},
		},
	}
	var r = newRendezvous(cfg)

	// FNVa with single-letter inputs, as below, produces a pretty low quality hash
	// (many identical bit values in outputs). We expect to still do a decent job of
	// mixing across processors.
	var hash = func(s string) uint32 {
		var h = fnv.New32a()
		_, _ = h.Write([]byte(s))
		return h.Sum32()
	}

	var cases = []struct {
		hash   uint32
		clock  message.Clock
		expect []pf.Document_Shuffle
	}{
		// Regression tests, demonstrating mixing.
		{
			hash:  hash("a"),
			clock: 2000,
			expect: []pf.Document_Shuffle{
				{RingIndex: 4, Hrw: 0xc8ed7884},
				{RingIndex: 2, Hrw: 0xc7920930},
				{RingIndex: 3, Hrw: 0x6e7f3905},
			},
		},
		{
			hash:  hash("b"),
			clock: 2000,
			expect: []pf.Document_Shuffle{
				{RingIndex: 3, Hrw: 0xac381272},
				{RingIndex: 0, Hrw: 0x89031ee2},
				{RingIndex: 1, Hrw: 0x6d0d23dc},
			},
		},
		{
			hash:  hash("c"),
			clock: 2000,
			expect: []pf.Document_Shuffle{
				{RingIndex: 3, Hrw: 0xecfff620},
				{RingIndex: 0, Hrw: 0xcbc2e1b0},
				{RingIndex: 1, Hrw: 0xafcc8546},
			},
		},
		{
			hash:  hash("d"),
			clock: 2000,
			expect: []pf.Document_Shuffle{
				{RingIndex: 1, Hrw: 0xe9728b2f},
				{RingIndex: 4, Hrw: 0x8d2c064a},
				{RingIndex: 2, Hrw: 0x83d0d4de},
			},
		},
		{
			hash:  hash("e"),
			clock: 2000,
			expect: []pf.Document_Shuffle{
				{RingIndex: 4, Hrw: 0xcbd39ff5},
				{RingIndex: 2, Hrw: 0xc290a969},
				{RingIndex: 3, Hrw: 0x697d5976}},
		},

		// Index 3 is rank-one for this value, but the clock falls outside its minimum bound.
		{
			hash:  hash("b"),
			clock: 500,
			expect: []pf.Document_Shuffle{
				{RingIndex: 0, Hrw: 0x89031ee2},
				{RingIndex: 1, Hrw: 0x6d0d23dc},
				{RingIndex: 4, Hrw: 0x0aaeacf3},
			},
		},
		// Index 4 is rank-two, but the clock falls outside its maximum bound.
		{
			hash:  hash("d"),
			clock: 3500,
			expect: []pf.Document_Shuffle{
				{RingIndex: 1, Hrw: 0xe9728b2f},
				{RingIndex: 2, Hrw: 0x83d0d4de},
				{RingIndex: 3, Hrw: 0x28bdc4c9},
			},
		},
	}

	for _, tc := range cases {
		t.Logf("hash %x clock %v", tc.hash, tc.clock)

		var prefix = [2]pf.Document_Shuffle{
			{RingIndex: 12, TransformId: 34, Hrw: 56},
			{RingIndex: 78, TransformId: 90, Hrw: 11},
		}
		var out = r.pick(0, tc.hash, tc.clock, prefix[:])

		require.Equal(t, prefix[:], out[:2]) // Expect the prefix fixture was passed through.
		require.Equal(t, tc.expect, out[2:]) // And expected shuffles were appended.
	}

	// For these cases, use the second "choose" shuffle.
	cases = []struct {
		hash   uint32
		clock  message.Clock
		expect []pf.Document_Shuffle
	}{
		// One of the top-N processers is selected, depending on the clock.
		{
			hash:   hash("a"),
			clock:  2000,
			expect: []pf.Document_Shuffle{{RingIndex: 3, TransformId: 1, Hrw: 0x6e7f3905}},
		},
		{
			hash:   hash("a"),
			clock:  2001,
			expect: []pf.Document_Shuffle{{RingIndex: 4, TransformId: 1, Hrw: 0xc8ed7884}},
		},
		{
			hash:   hash("a"),
			clock:  2002,
			expect: []pf.Document_Shuffle{{RingIndex: 2, TransformId: 1, Hrw: 0xc7920930}},
		},
		{
			hash:   hash("a"),
			clock:  2003,
			expect: []pf.Document_Shuffle{{RingIndex: 3, TransformId: 1, Hrw: 0x6e7f3905}},
		},
	}

	for _, tc := range cases {
		t.Logf("hash %x clock %v", tc.hash, tc.clock)

		var prefix = [1]pf.Document_Shuffle{
			{RingIndex: 12, TransformId: 34, Hrw: 56},
		}
		var out = r.pick(1, tc.hash, tc.clock, prefix[:])

		require.Equal(t, prefix[:], out[:1])
		require.Equal(t, tc.expect, out[1:])
	}
}