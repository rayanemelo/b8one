"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export function TopBar() {
  const mockMessages = [
    { message: "Frete grátis acima de R$199", link: "#" },
    { message: "Novidades em maquiagem e skincare", link: "#" },
    { message: "Descontos exclusivos só hoje!", link: "#" },
  ];

  return (
    <div className="flex h-9 w-full items-center justify-center bg-black px-6 py-2">
      <Carousel
        dir="rtl"
        plugins={[
          Autoplay({
            delay: 3000,
            jump: false,
          }),
        ]}
        opts={{
          loop: true,
          direction: "rtl",
        }}
      >
        <CarouselContent>
          {mockMessages.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex select-none justify-center text-sm text-white"
            >
              <Link href={item.link} dir="ltr">
                {item.message}
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
