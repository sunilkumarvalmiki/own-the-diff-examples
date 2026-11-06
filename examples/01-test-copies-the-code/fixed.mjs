export function lineTotalCents(unitCents, qty) {
  const rate = qty > 10 ? 0.9 : 1;
  return Math.round(unitCents * qty * rate);
}
