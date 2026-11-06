// Ticket: "Ops must be able to switch checkout off during an incident."
export async function isCheckoutEnabled(fetchFlags) {
  try {
    const flags = await fetchFlags();
    return flags.checkout !== false;
  } catch (err) {
    console.warn("flag service unavailable, using default", err.message);
    return true; // keep the shop open
  }
}
