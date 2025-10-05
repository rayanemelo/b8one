"use client";
import { useEffect, useState } from "react";

import { useProduct } from "@/hooks/useProduct";
import { ProductCard } from "@/components/public/product-card/product-card";
import { SkeletonOfertas } from "./components/skeleton";
import { ProductSortSelect } from "./components/product-sort-select";
import { BreadcrumbOfertas } from "./components/breadcrumb";
import { TitleSection } from "@/components/public/section/title-section";

export default function OfertasPage() {
  const { products, isLoading } = useProduct();
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(products);

  useEffect(() => {
    setVisibleProducts(products);
  }, [products]);

  return (
    <div className="mx-auto my-8 w-full max-w-9xl text-center uppercase">
      <div className="flex flex-col justify-center gap-6">
        <BreadcrumbOfertas />
        <TitleSection title="Ofertas da Semana" />
        <ProductSortSelect products={products} onSort={(sorted) => setVisibleProducts(sorted)} />

        {isLoading ? (
          <SkeletonOfertas />
        ) : (
          <div className="mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(325px,1fr))] gap-4 sm:gap-5 lg:gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
