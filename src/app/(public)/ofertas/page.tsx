"use client";
import { useProduct } from "@/hooks/useProduct";
import { Section } from "@/components/public/section/section";
import { ProductCard } from "@/components/public/product-card/product-card";
import { SkeletonOfertas } from "./components/skeleton";
import { ProductSortSelect } from "./components/product-sort-select";
import { useEffect, useState } from "react";

export default function OfertasPage() {
  const { products, isLoading } = useProduct();
  const [visibleProducts, setVisibleProducts] = useState<Product[]>(products);
  console.log("visibleProducts: ", visibleProducts);

  useEffect(() => {
    setVisibleProducts(products);
  }, [products]);

  return (
    <Section title="Ofertas da Semana" className="w-full text-center uppercase">
      <ProductSortSelect
        products={products}
        onSort={(sorted) => setVisibleProducts(sorted)}
        className="ml-auto"
      />
      {isLoading ? (
        <SkeletonOfertas />
      ) : (
        <div className="grid w-full max-w-8xl grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </Section>
  );
}
