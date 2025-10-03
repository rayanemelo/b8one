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

const banners = [
  {
    id: 1,
    title: 'Banner 1',
    imageDesktop: 'https://img.freepik.com/vetores-gratis/banner-de-maquiador-de-textura-plana-desenhada-a-mao_23-2149368285.jpg',
    imageMobile: 'https://img.freepik.com/vetores-gratis/banner-de-maquiador-de-textura-plana-desenhada-a-mao_23-2149368285.jpg',
  },
  {
    id: 2,
    title: 'Banner 2',
    imageDesktop: 'https://img.freepik.com/vetores-gratis/modelo-de-banner-de-venda-de-beleza-realista_52683-94993.jpg?semt=ais_hybrid&w=740&q=80',
    imageMobile: 'https://img.freepik.com/vetores-gratis/modelo-de-banner-de-venda-de-beleza-realista_52683-94993.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 3,
    title: 'Banner 3',
    imageDesktop: 'https://img.freepik.com/vetores-gratis/banner-de-maquiador-de-textura-plana-desenhada-a-mao_23-2149368286.jpg?semt=ais_hybrid&w=740&q=80',
    imageMobile: ''
  },
  {
    id: 4,
    title: 'Banner 4',
    imageDesktop: '',
    imageMobile: 'https://img.freepik.com/vetores-gratis/post-de-facebook-de-maquiador-desenhado-a-mao_23-2149381460.jpg?semt=ais_incoming&w=740&q=80'
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
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition" />
    </Carousel>
  )
}