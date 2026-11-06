// The default on failure is now a named, reviewed decision.
// This team chose "last known value, else closed".
export function makeCheckoutSwitch(fetchFlags, log = console.error) {
  let lastKnown = false;
  return async function isCheckoutEnabled() {
    try {
      const flags = await fetchFlags();
      lastKnown = flags.checkout === true; // a missing field also means closed
    } catch (err) {
      log("flag service unavailable, using last known value", err.message);
    }
    return lastKnown;
  };
}
