import assert from "node:assert/strict";
import { isCheckoutEnabled } from "./pr.mjs";

// The PR's own test. "Handles errors gracefully" is true and beside the point.
export async function prTest() {
  const down = async () => { throw new Error("timeout"); };
  await assert.doesNotReject(isCheckoutEnabled(down));
}
