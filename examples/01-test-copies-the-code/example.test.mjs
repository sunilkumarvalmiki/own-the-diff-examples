import assert from "node:assert/strict";
import { test } from "node:test";
import { prTest } from "./pr-test-excerpt.mjs";
import { lineTotalCents as pr } from "./pr.mjs";
import { lineTotalCents as fixed } from "./fixed.mjs";

test("the PR's own test passes against the bug", () => {
  prTest();
});

test("the bug: exactly 10 units get a discount the ticket does not allow", () => {
  assert.equal(pr(999, 10), 8991);
});

test("the fix: 10 units pay full price, 11 units get 10% off", () => {
  assert.equal(fixed(999, 10), 9990);
  assert.equal(fixed(999, 11), 9890);
});
