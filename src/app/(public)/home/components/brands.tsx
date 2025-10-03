"use client";;
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/public/section/section";

const mockedBrands = [
  {
    brandId: "1",
    name: "",
    imageUrl: "",
  },
  {
    brandId: "2",
    name: "",
    imageUrl: "",
  },
  {
    brandId: "3",
    name: "",
    imageUrl: "",
  },
  {
    brandId: "4",
    name: "",
    imageUrl: "",
  },
  {
    brandId: "5",
    name: "",
    imageUrl: "",
  },
  {
    brandId: "6",
    name: "",
    imageUrl: "",
  },
];

export function Brands() {
  const brands = mockedBrands

  return (
    <Section positionBlur="left" bgColor="background" title="Marcas" id="brands">
      <div className="flex flex-wrap justify-center gap-6">
        {brands.map((brand) => (
          <Link
            href={`/vehicles?brands=${brand.brandId}`}
            key={brand.brandId}
            className="
              group flex items-center justify-center
              w-40 h-40 rounded-full
              bg-zinc-950
              transition-all duration-300
              hover:bg-zinc-800 hover:scale-105
            "
          >
            <Image
              src={brand.imageUrl}
              alt={`Link para a marca ${brand.name}`}
              width={80}
              height={80}
              className="
                object-contain drop-shadow
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
