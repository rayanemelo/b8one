"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "@/components/public/section/section";
import { twMerge } from "tailwind-merge";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";
import { ProductCard } from "@/components/public/product-card/product-card";
import { Button } from "@/components/ui/button";

export function Offers({ products }: { products: Product[] }) {
  const itemClass = twMerge(
    "basis-full sm:basis-1/2 lg:basis-1/3 shrink-0 min-w-[260px]"
  );


  const VerMais = ({ className }: { className?: string }) => {
    return <Button className={twMerge("rounded-none  w-full self-center h-11 hover:bg-black/85 uppercase", className)}>Ver mais</Button>;
  };

  return (
    <Section id="Offers" className="select-none mx-auto">
      <div className="flex items-center justify-center justify-between 2xl:gap-20 gap-2 flex-col 2xl:flex-row">
        <div className="text-black flex flex-col gap-2 2xl:items-start items-center">
          <p className="font-medium text-lg text-black/80 uppercase text-center 2xl:text-start">Ofertas</p>
          <h2 className="text-3xl font-bold uppercase">
            Descubra nossas melhores promoções
          </h2>
          <VerMais className="2xl:flex mt-5 hidden" />
        </div>

        <Carousel className="max-w-64 sm:max-w-[32rem] lg:max-w-[63rem] mx-auto">
          <CarouselContent className="px-2">

            {products.map((product) => (
              <CarouselItem key={product.id} className={itemClass}>
                <ProductCard {...product} />
              </CarouselItem>
            ))}


          </CarouselContent>

          <CarouselPrevious className="bg-black border-none hover:bg-black/50  text-white hover:text-white h-10 w-10">
            <ChevronLeftIcon strokeWidth={2.5} />
          </CarouselPrevious>
          <CarouselNext className="bg-black border-none hover:bg-black/50 text-white hover:text-white h-10 w-10">
            <ChevronRightIcon strokeWidth={2.5} />
          </CarouselNext>
        </Carousel>
        <VerMais className="2xl:hidden sm:w-1/3 mt-2" />

      </div>
    </Section>
  );
}
