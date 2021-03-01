package testing

import (
	"fmt"

	pf "github.com/estuary/flow/go/protocols/flow"
)

// Driver executes test actions.
type Driver interface {
	// Apply one or more PendingStats of shards, which can now be expected to have completed.
	Stat(PendingStat) (readThrough *Clock, writeAt *Clock, _ error)
	// Execute an "Ingest" TestSpec_Step.
	Ingest(test *pf.TestSpec, testStep int) (writeAt *Clock, _ error)
	// Execute a "Verify" TestStep.
	Verify(test *pf.TestSpec, testStep int, from, to *Clock) error
	// Advance TestTime by the given delta.
	Advance(TestTime) error
}

// RunTestCase runs a test case using the given Graph and Driver.
func RunTestCase(graph *Graph, driver Driver, test *pf.TestSpec) error {
	var initial = graph.writeClock.Copy()
	var testStep = 0

	for {
		var ready, nextReady = graph.PopReadyStats()

		for _, stat := range ready {
			var read, write, err = driver.Stat(stat)
			if err != nil {
				return fmt.Errorf("driver.Stat: %w", err)
			}
			graph.CompletedStat(stat.Derivation, read, write)
		}

		// If we completed stats, loop again to look for more ready stats.
		if len(ready) != 0 {
			continue
		}

		var step *pf.TestSpec_Step
		if testStep != len(test.Steps) {
			step = &test.Steps[testStep]
		}

		// Ingest test steps always run immediately.
		if step != nil && step.StepType == pf.TestSpec_Step_INGEST {
			var write, err = driver.Ingest(test, testStep)
			if err != nil {
				return fmt.Errorf("driver.Ingest: %w", err)
			}
			graph.CompletedIngest(step.Collection, write)
			testStep++
			continue
		}

		// Verify steps may run only if no dependent PendingStats remain.
		if step != nil && step.StepType == pf.TestSpec_Step_VERIFY &&
			!graph.HasPendingParent(step.Collection) {

			if err := driver.Verify(test, testStep, initial, graph.writeClock); err != nil {
				return fmt.Errorf("driver.Verify: %w", err)
			}
			testStep++
			continue
		}

		// Advance time to unblock the next PendingStat.
		if nextReady != -1 {
			if err := driver.Advance(nextReady); err != nil {
				return fmt.Errorf("driver.Advance: %w", err)
			}
			graph.CompletedAdvance(nextReady)
			continue
		}

		// All steps are completed, and no pending stats remain. All done.
		if testStep != len(test.Steps) {
			panic("unexpected test steps remain")
		}
		return nil
	}
}