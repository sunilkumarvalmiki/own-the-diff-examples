import assert from "node:assert/strict";
import { lineTotalCents } from "./pr.mjs";

// The PR's own test. It passes, and it proves nothing about the ticket.
export function prTest() {
  for (const qty of [1, 5, 10, 25]) {
    const expected = Math.round(999 * qty * (qty >= 10 ? 0.9 : 1));
    assert.equal(lineTotalCents(999, qty), expected);
  }
}
