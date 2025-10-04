"use client";
import { WhatsappButton } from "@/layout/public/whatsapp-button/whatsapp-button";
import { Suspense } from "react";
import { Banners } from "./components/banners";
import { Brands } from "./components/brands";
import { InfoBar } from "./components/info-bar";
import { useProduct } from "@/hooks/useProduct";
import { Offers } from "./components/offers";

export default function HomePage() {
  const { products } = useProduct();
  console.log("products: ", products);

  return (
    <Suspense>
      <Banners />
      <InfoBar />
      <Offers products={products} />
      <Brands />
      <WhatsappButton />
    </Suspense>
  );
}
