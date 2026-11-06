# Own the Diff: runnable examples

Three small bugs that a green test suite lets through. Each folder holds:

- `pr.mjs`: the code as proposed in the pull request
- `pr-test-excerpt.mjs`: the test the pull request ships with
- `fixed.mjs`: one possible correction
- `example.test.mjs`: shows the PR test passing, pins the bug, and checks the fix

Needs Node.js (tested on version 24). There is nothing to install. From this folder, run:

```bash
node --test
```

All tests pass by design: the tests named "the bug" assert the wrong behavior so that you can see it.

The author wrote these examples to illustrate each pattern. They are not logs of any AI tool's output, and they are not taken from any real company's code.
