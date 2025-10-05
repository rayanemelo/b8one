export function calcDiscounted(price: number, discountPercentage?: number) {
  if (!discountPercentage || discountPercentage <= 0) return { final: price, hasDiscount: false };
  const final = Number((price * (1 - discountPercentage / 100)).toFixed(2));
  return { final, hasDiscount: true };
}
