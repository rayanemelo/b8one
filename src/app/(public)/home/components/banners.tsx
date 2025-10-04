"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Banner 1",
    imageDesktop: "/images/banners/banner2.webp",
    imageMobile: "/images/banners/banner2.webp",
  },
  {
    id: 2,
    title: "Banner 2",
    imageDesktop: "/images/banners/banner1.jpg",
    imageMobile: "/images/banners/banner1.jpg",
  },
  {
    id: 3,
    title: "Banner 3",
    imageDesktop: "",
    imageMobile: "",
  },
  {
    id: 4,
    title: "Banner 4",
    imageDesktop: "",
    imageMobile: "",
  },
];

export function Banners() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {banners.map((banner, index) => {
          const imageSrc = windowWidth >= 768 ? banner.imageDesktop : banner.imageMobile;

          if (!imageSrc) {
            return null;
          }

          return (
            <CarouselItem
              key={index}
              className="relative flex h-[300px] items-center justify-center md:h-[530px]"
            >
              <Image
                src={imageSrc}
                alt={`Banner ${index + 1}`}
                layout="fill"
                className="h-full w-full object-cover"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 transform border-none bg-black text-white hover:bg-black/50 hover:text-white">
        <ChevronLeftIcon strokeWidth={2.5} />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 transform border-none bg-black text-white hover:bg-black/50 hover:text-white">
        <ChevronRightIcon strokeWidth={2.5} />
      </CarouselNext>
    </Carousel>
  );
}
