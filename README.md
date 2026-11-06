# Own the Diff: runnable examples

Three small bugs that a green test suite lets through, plus the rubric and PR template that go with them. Needs Node.js (tested on version 24). There is nothing to install.

```bash
cd examples
node --test
```

All tests pass by design. The tests named "the bug" assert the wrong behavior so that you can see it.

| Folder | Ticket | What the PR's test checks |
|---|---|---|
| `01-test-copies-the-code` | 10% off orders of more than 10 units | The code against a copy of itself |
| `02-graceful-failure` | Ops must be able to switch checkout off during an incident | That nothing throws |
| `03-small-fixture` | Delete every expired session | 3 rows, with a page size of 100 |

I wrote these to illustrate each pattern. They are not logs of any AI tool's output or code from a real company. I wrote them with substantial help from an AI assistant, and nobody has measured whether the rules around them speed up review or reduce incidents.

`templates/` holds a ten-question review rubric that prints on one page, and a PR template you can copy to `.github/pull_request_template.md`.

The team rule these come from, the size limits and risk tiers the rubric refers to, and a 30-day trial plan are in a free 16-page sample: https://own-the-diff.pages.dev/ (Gumroad asks for an email to deliver it.)

Code and templates are MIT licensed.
