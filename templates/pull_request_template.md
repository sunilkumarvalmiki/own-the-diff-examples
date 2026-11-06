## Ticket

Link and one-line requirement:

## Explain test

Answer in your own words. You own every line here, however it was produced.

**E1. What behavior changes for a user or a calling system?**

**E2. Which part is most likely to be wrong, and why do you think it is right?**

**E3. How do you know it works? What did you run, and what did you see?**

## Risk tier (highest that applies)

- [ ] Tier 1 Contained: reverted in one step, no data effect
- [ ] Tier 2 Shared: public API, shared library, background job, or called by other teams
- [ ] Tier 3 Irreversible: money, authentication, permissions, personal data, deletes, migrations, concurrency

## When something fails

Which dependencies can fail here, and what does the code do when they do?

## Checks

- [ ] Within the hard size limit, or live walkthrough booked
- [ ] Expected values in tests come from the ticket
- [ ] Test data crosses every limit in the code (page, batch, retry)
- [ ] New dependencies checked by hand, or none added

## Reading order (only if between the soft and hard size limits)
