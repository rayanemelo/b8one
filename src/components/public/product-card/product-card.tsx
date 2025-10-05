"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/public/card/card";
import { AddToCartButton } from "../add-to-cart-button/add-to-cart-button";
import { formatToReal } from "@/utils/money";
import { WishlistButton } from "../wishlist-button/wishlist-button";
import { useCart } from "@/store/useCart";
import { useWishlist } from "@/store/useWishlist";
import { Badge } from "@/components/ui/badge";
import { calcDiscounted } from "@/utils/calc-discounted";

const ProductCard = React.forwardRef<HTMLDivElement, Product>((product, ref) => {
  const { addToCart } = useCart();
  const { toggle } = useWishlist();

  const { final, hasDiscount } = calcDiscounted(product.price, product.discountPercentage);

  return (
    <div>
      <Card ref={ref} key={product.id} className="cursor-pointer border-none p-4 transition">
        <div className="relative h-[375px] w-full bg-white">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.images[0]}
              alt={`Imagem do produto ${product.title}`}
              fill
              className="object-contain"
            />
          </Link>

          <WishlistButton product={product} onClick={() => toggle(product)} />

          {hasDiscount && (
            <Badge className="absolute left-2 top-2 bg-black text-xs font-semibold text-white">
              -{Math.round(product.discountPercentage)}%
            </Badge>
          )}
        </div>

        <h3 className="mt-2 truncate text-left font-medium uppercase text-black">
          {product.title}
        </h3>

        <div className="my-1 text-left">
          {hasDiscount ? (
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-black">{formatToReal(final)}</p>
              <span className="text-sm text-zinc-500 line-through">
                {formatToReal(product.price)}
              </span>
            </div>
          ) : (
            <p className="text-lg font-bold text-black">{formatToReal(product.price)}</p>
          )}
        </div>

        <AddToCartButton onClick={() => addToCart(product)} />
      </Card>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export { ProductCard };
