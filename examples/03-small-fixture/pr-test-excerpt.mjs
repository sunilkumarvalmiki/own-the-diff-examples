import assert from "node:assert/strict";
import { purgeExpired } from "./pr.mjs";

// In-memory stand-in for a database table.
export function fakeStore(count) {
  let rows = Array.from({ length: count }, (_, i) => ({ id: i + 1 }));
  return {
    listExpired: async ({ offset, limit }) =>
      rows.slice(offset, offset + limit),
    deleteMany: async (ids) => {
      const before = rows.length;
      rows = rows.filter((row) => !ids.includes(row.id));
      return before - rows.length;
    },
    remaining: () => rows.length,
  };
}

// The PR's own test. Three rows never reach a second page.
export async function prTest() {
  const store = fakeStore(3);
  await purgeExpired(store);
  assert.equal(store.remaining(), 0);
}
