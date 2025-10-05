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
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ProductCard } from "@/components/public/product-card/product-card";
import { SeeMoreButton } from "../../ofertas/components/see-more-button";
import { useProduct } from "@/hooks/useProduct";

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-md p-3">
      <div className="mb-4 h-[375px] w-full rounded bg-zinc-200" />
      <div className="mb-2 h-5 w-3/4 rounded bg-zinc-200" />
      <div className="mb-3 h-5 w-1/2 rounded bg-zinc-200" />
      <div className="h-11 w-full rounded-sm bg-zinc-200" />
    </div>
  );
}

export function Offers() {
  const { products, isLoading } = useProduct();

  const itemClass = twMerge("basis-full sm:basis-1/2 lg:basis-1/3 shrink-0 min-w-[260px]");

  return (
    <Section id="Offers" className="mx-auto select-none">
      <div className="flex flex-col items-center justify-between gap-2 2xl:flex-row 2xl:gap-20">
        <div className="flex flex-col items-start gap-2 text-black">
          <p className="text-center text-lg font-medium uppercase text-black/80 2xl:text-start">
            Ofertas
          </p>
          <h2 className="text-3xl font-bold uppercase">Descubra nossas melhores promoções</h2>
          <SeeMoreButton className="mt-5 hidden w-1/2 2xl:flex" />
        </div>

        <Carousel className="mx-auto max-w-64 sm:max-w-[32rem] lg:max-w-[63rem]">
          <CarouselContent className="px-2">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <CarouselItem key={`skeleton-${i}`} className={itemClass}>
                    <SkeletonCard />
                  </CarouselItem>
                ))
              : products.map((product) => (
                  <CarouselItem key={product.id} className={itemClass}>
                    <ProductCard {...product} />
                  </CarouselItem>
                ))}
          </CarouselContent>

          <CarouselPrevious className="h-10 w-10 border-none bg-black text-white hover:bg-black/50 hover:text-white">
            <ChevronLeftIcon strokeWidth={2.5} />
          </CarouselPrevious>
          <CarouselNext className="h-10 w-10 border-none bg-black text-white hover:bg-black/50 hover:text-white">
            <ChevronRightIcon strokeWidth={2.5} />
          </CarouselNext>
        </Carousel>

        <SeeMoreButton className="mt-2 sm:w-1/3 2xl:hidden" />
      </div>
    </Section>
  );
}
