export type SortOption = "relevance" | "price_desc" | "price_asc" | "name_asc" | "name_desc";

const collator = new Intl.Collator("pt-BR", {
  sensitivity: "base",
  numeric: true,
});

export function sortProducts(products: Product[], option: SortOption): Product[] {
  const withIndex = products.map((p, i) => ({ p, i }));
  console.log("withIndex: ", withIndex);

  switch (option) {
    case "price_desc":
      withIndex.sort((a, b) => b.p.price - a.p.price || a.i - b.i);
      break;
    case "price_asc":
      withIndex.sort((a, b) => a.p.price - b.p.price || a.i - b.i);
      break;
    case "name_asc":
      withIndex.sort((a, b) => collator.compare(a.p.title, b.p.title) || a.i - b.i);
      break;
    case "name_desc":
      withIndex.sort((a, b) => collator.compare(b.p.title, a.p.title) || a.i - b.i);
      break;
    case "relevance":
    default:
      withIndex.sort((a, b) => a.i - b.i);
  }

  return withIndex.map((x) => x.p);
}
