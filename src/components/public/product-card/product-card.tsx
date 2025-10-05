import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/public/card/card";
import { AddToCartButton } from "../add-to-cart-button/add-to-cart-button";
import { formatToReal } from "@/utils/money";
import { WishlistButton } from "../wishlist-button/wishlist-button";
import { useCart } from "@/store/useCart";

const ProductCard = React.forwardRef<HTMLDivElement, Product>((product, ref) => {
  const { addToCart } = useCart();

  return (
    <div>
      <Card ref={ref} key={product.id} className="cursor-pointer border-none p-4 transition">
        <div className="relative h-[375px] w-full bg-white">
          <Link href="/">
            <Image
              src={product.images[0]}
              alt={`Imagem do veículo ${product.title}`}
              fill
              className="object-contain"
            />
          </Link>
          <WishlistButton />
        </div>

        <h3 className="mt-2 truncate text-left font-medium uppercase text-black">
          {product.title}
        </h3>
        <p className="my-1 text-left text-lg font-bold text-black">{formatToReal(product.price)}</p>
        <AddToCartButton
          onClick={() => {
            addToCart(product);
          }}
        />
      </Card>
    </div>
  );
});

ProductCard.displayName = "Product";

export { ProductCard };
