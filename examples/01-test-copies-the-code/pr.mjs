// Ticket: "10% off orders of more than 10 units."
export function lineTotalCents(unitCents, qty) {
  const rate = qty >= 10 ? 0.9 : 1;
  return Math.round(unitCents * qty * rate);
}
