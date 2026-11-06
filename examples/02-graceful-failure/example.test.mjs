import assert from "node:assert/strict";
import { test } from "node:test";
import { prTest } from "./pr-test-excerpt.mjs";
import { isCheckoutEnabled } from "./pr.mjs";
import { makeCheckoutSwitch } from "./fixed.mjs";

const silenceWarnings = (t) => t.mock.method(console, "warn", () => {});
const off = async () => ({ checkout: false });
const down = async () => { throw new Error("timeout"); };

test("the PR's own test passes against the bug", async (t) => {
  silenceWarnings(t);
  await prTest();
});

test("the bug: ops switch checkout off, the flag service dies, checkout reopens", async (t) => {
  silenceWarnings(t);
  assert.equal(await isCheckoutEnabled(off), false);
  assert.equal(await isCheckoutEnabled(down), true);
});

test("the fix: an outage keeps the last value ops set", async () => {
  let responses = [off, down];
  const isEnabled = makeCheckoutSwitch(() => responses.shift()(), () => {});
  assert.equal(await isEnabled(), false);
  assert.equal(await isEnabled(), false);
});

test("the fix: an explicit on opens checkout, a malformed response does not", async () => {
  assert.equal(await makeCheckoutSwitch(async () => ({ checkout: true }), () => {})(), true);
  assert.equal(await makeCheckoutSwitch(async () => ({}), () => {})(), false);
});

test("the fix: with no value yet, an outage keeps checkout closed", async () => {
  const isEnabled = makeCheckoutSwitch(down, () => {});
  assert.equal(await isEnabled(), false);
});
