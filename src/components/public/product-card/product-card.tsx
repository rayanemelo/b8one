import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/public/card/card";
import { AddToCartButton } from "../add-to-cart-button/add-to-cart-button";
import { formatToReal } from "@/utils/money";
import { WishlistButton } from "../wishlist-button/wishlist-button";

const ProductCard = React.forwardRef<HTMLDivElement, Product>(
  (product, ref) => {
    return (
      <div>
        <Card
          ref={ref}
          key={product.id}
          className="p-4 border-none transition cursor-pointer"
        >
          <div className="relative w-full bg-white h-[375px]">
            <Link
              href="/"
            >
              <Image
                src={product.images[0]}
                alt={`Imagem do veículo ${product.title}`}
                fill
                className="object-contain"
              />
            </Link>
            <WishlistButton />
          </div>

          <h3 className="font-medium mt-2 text-black truncate uppercase text-left">
            {product.title}
          </h3>
          <p className="text-lg font-bold text-black my-1 text-left">
            {formatToReal(product.price)}
          </p>
          <AddToCartButton onClick={() => { console.log(`Adicionado ${product.title} ao carrinho`); }} />
        </Card>
      </div>
    );
  }
);

ProductCard.displayName = "Product";

export { ProductCard };
