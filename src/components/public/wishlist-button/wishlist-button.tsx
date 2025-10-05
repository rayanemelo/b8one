"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/store/useWishlist";
import { cn } from "@/lib/utils";

type WishlistButtonProps = {
  product: Product;
  onClick?: () => void;
};

export function WishlistButton({ product, onClick }: WishlistButtonProps) {
  const isInWishlist = useWishlist((s) => s.isInWishlist(String(product.id)));

  return (
    <button
      aria-label={isInWishlist ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      onClick={onClick}
      className={cn(
        "absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border transition-colors",
        isInWishlist ? "border-zinc-200 bg-zinc-100" : "border-zinc-200 bg-white",
      )}
    >
      <Heart
        className={cn(
          "h-5 w-5 transition-colors",
          isInWishlist ? "fill-black text-black" : "fill-none text-black",
        )}
      />
    </button>
  );
}
