import { WhatsappButton } from "@/layout/public/whatsapp-button";
import { Suspense } from "react";
import { Banners } from "../components/banners";
import { Brands } from "../components/brands";
import { InfoBar } from "../components/info-bar";
export default function HomePage() {
  return (
    <Suspense>
      <Banners />
      <InfoBar
      />
      <Brands />
      <WhatsappButton />
    </Suspense>
  );
}
