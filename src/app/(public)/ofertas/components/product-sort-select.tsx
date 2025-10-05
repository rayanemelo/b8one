import { sortProducts } from "@/utils/sort-products";

type SortOption = "relevance" | "price_desc" | "price_asc" | "name_asc" | "name_desc";

type ProductSortSelectProps = {
  products: Product[];
  onSort?: (sorted: Product[], option: SortOption) => void;
  value?: SortOption;
  defaultValue?: SortOption;
  className?: string;
};

export function ProductSortSelect({
  products,
  onSort,
  value,
  defaultValue = "relevance",
}: ProductSortSelectProps) {
  const current = value !== undefined ? (value as SortOption) : defaultValue;

  const handleChange = (val: string) => {
    const option = (val as SortOption) ?? "relevance";
    if (onSort) {
      console.log("Sorting products by: ", option);
      const sorted = sortProducts(products, option);
      onSort(sorted, option);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <span className="text-sm font-semibold">Ordenar por:</span>
      <label htmlFor="product-sort" className="sr-only">
        Ordenar produtos
      </label>

      <div className="relative w-full md:w-64">
        <select
          id="product-sort"
          value={current}
          onChange={(e) => handleChange(e.target.value)}
          aria-label="Ordenar produtos"
          className="block h-10 w-full cursor-pointer appearance-none border border-black bg-white pl-3 pr-10 text-sm text-zinc-900 shadow-sm outline-none transition"
        >
          <option value="relevance">Relevância</option>
          <option value="price_desc">Preço: do maior ao menor</option>
          <option value="price_asc">Preço: do menor ao maior</option>
          <option value="name_asc">Nome em ordem crescente</option>
          <option value="name_desc">Nome em ordem decrescente</option>
        </select>

        {/* Chevron */}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8l4 4 4-4" />
        </svg>
      </div>
    </div>
  );
}
