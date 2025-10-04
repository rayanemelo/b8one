"use client";
import { useProduct } from "@/hooks/useProduct";
import { Section } from "@/components/public/section/section";
import { ProductCard } from "@/components/public/product-card/product-card";
import { SkeletonOfertas } from "./components/skeleton";

export default function OfertasPage() {
  const { products, isLoading } = useProduct();

  return (
    <Section title="Ofertas da Semana" className="uppercase w-full text-center">
      {isLoading ? (
        <SkeletonOfertas />
      ) : (
        <div className="grid grid-cols-4 gap-4 w-full max-w-8xl mx-auto ">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </Section>
  );
}
