import { WishlistButton } from "@/components/public/wishlist-button/wishlist-button";
import { useWishlist } from "@/store/useWishlist";
import Image from "next/image";

export function Gallery({ product }: { product: Product }) {
  const { toggle } = useWishlist();
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white">
      <Image
        src={product.images[0]}
        alt={product.title}
        fill
        priority
        sizes="(max-width:768px) 100vw, 50vw"
        className="object-contain"
      />
      <div className="absolute right-2 top-2 z-10">
        <WishlistButton product={product} onClick={() => toggle(product)} />
      </div>
    </div>
  );
}
