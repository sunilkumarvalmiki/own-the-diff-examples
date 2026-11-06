# The ten-minute review rubric

Work in this order, because the first questions cost the least. If Q1 or Q2 fails, stop and return the PR.

**Tier 1:** Q1 to Q5, Q8 and Q9. **Tier 2 and Tier 3:** all ten. Ten minutes is a target for a first pass over a normal-sized PR, and it has not been measured. Tier 3 will take longer.

## Before you read the code

Q1. **Size,** excluding generated files. Over the hard limit with no live walkthrough booked? Return it. Between the soft and hard limits with no reading order? Return it.

Q2. **Explain test.** Are E1, E2 and E3 answered in the description, and specific to this change? If not, return it.

Q3. **Requirement.** Have you read the ticket, and can you say what correct means before looking at the diff?

## Read the tests first

Q4. **Independent tests.** Do expected values come from the requirement, without reusing the implementation's expression?

Q5. **Boundaries.** Is the exact limit from the ticket tested, along with one step on each side?

Q6. **Scale.** Does the test data cross the limits in the code: a second page, a second batch, a retry?

## Then the diff

Q7. **Failure paths.** For every `catch`, fallback and default: what happens when the dependency is down, and who decided that?

Q8. **Scope.** Does every changed file serve the ticket? Question any unrelated refactor, deleted test or loosened check.

Q9. **Dependencies.** Does each new package exist, is it the intended one, and is it maintained? Does a new helper duplicate an existing one?

Q10. **Your mental model.** Could you debug this at 2 a.m. without the author? If not, ask for clearer code or a walkthrough.

## Extra steps by tier

- **Tier 2 and Tier 3:** ask one follow-up on the E2 answer.
- **Tier 3:** second reviewer named, walkthrough held, reviewer's test linked.

## Record the result

- **Approved**, with the tier you reviewed it at.
- **Returned, not read:** failed Q1 or Q2.
- **Changes requested:** list the question numbers.
