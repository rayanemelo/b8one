import { formatToReal } from "@/utils/money";
import { RatingStars } from "./rating-stars";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/public/add-to-cart-button/add-to-cart-button";
import { calcDiscounted } from "@/utils/calc-discounted";
import { useCart } from "@/store/useCart";
import { ShieldCheck, Truck } from "lucide-react";

export function ProductInfos({ product }: { product: Product }) {
  const { final, hasDiscount } = calcDiscounted(product.price, product.discountPercentage);
  const { addToCart } = useCart();

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold uppercase text-black">{product.title}</h1>
      <span className="text-xs text-zinc-500">SKU: {product.sku}</span>
      <RatingStars rating={product.rating} />

      <div className="flex items-end gap-3">
        <span className="text-3xl font-extrabold text-black">{formatToReal(final)}</span>
        {hasDiscount && (
          <>
            <span className="text-lg text-zinc-500 line-through">
              {formatToReal(product.price)}
            </span>
            <Badge className="bg-black text-white">
              -{Math.round(product.discountPercentage)}%
            </Badge>
          </>
        )}
      </div>

      <p className="text-sm leading-relaxed text-zinc-700">{product.description}</p>

      <AddToCartButton
        onClick={() => {
          addToCart(product);
        }}
      />
      {product.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <Badge key={t} variant="outline">
              #{t}
            </Badge>
          ))}
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col rounded-lg border p-3">
          <div className="mb-2 flex items-center gap-2">
            <Truck className="h-4 w-4 text-zinc-600" />
            <h3 className="text-sm font-semibold">Frete & Envio</h3>
          </div>
          <p className="text-sm text-zinc-600">{product.shippingInformation}</p>
        </div>

        <div className="flex flex-col rounded-lg border p-3">
          <div className="mb-2 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-zinc-600" />
            <h3 className="text-sm font-semibold">Garantia</h3>
          </div>
          <p className="text-sm text-zinc-600">{product.warrantyInformation}</p>
        </div>
      </div>
    </div>
  );
}
