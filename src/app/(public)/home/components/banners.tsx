'use client';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";

const banners = [
  {
    id: 1,
    title: 'Banner 1',
    imageDesktop: '/images/banners/banner2.webp',
    imageMobile: '/images/banners/banner2.webp',
  },
  {
    id: 2,
    title: 'Banner 2',
    imageDesktop: '/images/banners/banner1.jpg',
    imageMobile: '/images/banners/banner1.jpg',
  },
  {
    id: 3,
    title: 'Banner 3',
    imageDesktop: '',
    imageMobile: ''
  },
  {
    id: 4,
    title: 'Banner 4',
    imageDesktop: '',
    imageMobile: ''
  },
]

export function Banners() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
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
            <CarouselItem key={index} className="relative flex justify-center items-center h-[300px] md:h-[700px]">
              <Image
                src={imageSrc}
                alt={`Banner ${index + 1}`}
                layout="fill"
                className="object-cover w-full h-full"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black border-none hover:bg-black/50  text-white hover:text-white h-10 w-10">
        <ChevronLeftIcon strokeWidth={2.5} />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black border-none hover:bg-black/50 text-white hover:text-white h-10 w-10">
        <ChevronRightIcon strokeWidth={2.5} />
      </CarouselNext>
    </Carousel>
  )
}