"use client";
import { useMemo } from "react";
import { useParams, notFound } from "next/navigation";

import { useProduct } from "@/hooks/useProduct";
import { BreadcrumbProductPage } from "./components/breadcrumb";
import { Gallery } from "./components/gallery";
import { Skeleton } from "./components/skeleton";
import { Reviews } from "./components/reviews";
import { ProductInfos } from "./components/infos";

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const productId = Number(params.id);

  const { products, isLoading } = useProduct();
  const product = useMemo(
    () => products.find((p) => Number(p.id) === productId),
    [products, productId],
  );

  if (isLoading) return <Skeleton />;
  if (!product) return notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <BreadcrumbProductPage title={product.title} />

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Gallery product={product} />

        <ProductInfos product={product} />
      </section>

      {product.reviews?.length > 0 && <Reviews product={product} />}
    </main>
  );
}
