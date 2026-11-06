import assert from "node:assert/strict";
import { test } from "node:test";
import { fakeStore, prTest } from "./pr-test-excerpt.mjs";
import { purgeExpired as pr } from "./pr.mjs";
import { purgeExpired as fixed } from "./fixed.mjs";

test("the PR's own test passes against the bug", async () => {
  await prTest();
});

test("the bug: 250 rows with a page size of 100 leave 100 rows behind", async () => {
  const store = fakeStore(250);
  await pr(store, 100);
  assert.equal(store.remaining(), 100);
});

test("the fix: 250 rows with a page size of 100 leave none", async () => {
  const store = fakeStore(250);
  await fixed(store, 100);
  assert.equal(store.remaining(), 0);
});

test("the fix: a delete that removes nothing stops with an error", async () => {
  const store = fakeStore(5);
  store.deleteMany = async () => 0;
  await assert.rejects(fixed(store, 2), /no progress/);
});
