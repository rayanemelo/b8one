"use client";
import { WhatsappButton } from "@/layout/public/whatsapp-button/whatsapp-button";
import { Suspense } from "react";
import { Banners } from "./components/banners";
import { Brands } from "./components/brands";
import { InfoBar } from "./components/info-bar";
import { Offers } from "./components/offers";

export default function HomePage() {
  return (
    <Suspense>
      <Banners />
      <InfoBar />
      <Offers />
      <Brands />
      <WhatsappButton />
    </Suspense>
  );
}
