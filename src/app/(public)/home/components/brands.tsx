"use client";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/public/section/section";

const mockedBrands = [
  {
    brandId: "1",
    name: "Knoll",
    imageUrl: "/images/brands/knoll.png",
  },
  {
    brandId: "2",
    name: "Gucci",
    imageUrl: "/images/brands/gucci.png",
  },
  {
    brandId: "3",
    name: "Calvin Klein",
    imageUrl: "/images/brands/ck.png",
  },
  {
    brandId: "4",
    name: "Chanel",
    imageUrl: "/images/brands/chanel.png",
  },
  {
    brandId: "5",
    name: "Dior",
    imageUrl: "/images/brands/dior.png",
  },
  {
    brandId: "6",
    name: "Dolce & Gabbana",
    imageUrl: "/images/brands/dolce-gabbana.png",
  },
];

export function Brands() {
  const brands = mockedBrands;

  return (
    <Section title="Marcas" id="brands" className="uppercase">
      <div className="flex flex-wrap justify-center gap-6">
        {brands.map((brand) => (
          <Link
            href={`/`}
            key={brand.brandId}
            className="group flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Image
              src={brand.imageUrl}
              alt={`Link para a marca ${brand.name}`}
              width={80}
              height={80}
              className="object-contain drop-shadow transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
