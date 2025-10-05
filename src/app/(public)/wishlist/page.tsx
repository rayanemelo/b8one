"use client";
import { Heart, Trash2 } from "lucide-react";
import { useWishlist } from "@/store/useWishlist";
import { ProductCard } from "@/components/public/product-card/product-card";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const items = useWishlist((s) => s.items);
  const clear = useWishlist((s) => s.clear);
  const count = items.length;
  const hasItems = count > 0;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold uppercase">Meus Favoritos</h1>
          {count > 0 && (
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-sm text-zinc-700">
              {count} item{count !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        {hasItems && (
          <Button variant="outline" onClick={clear} className="inline-flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Limpar tudo
          </Button>
        )}
      </div>

      {!hasItems ? (
        <section className="flex h-[20vh] flex-col items-center justify-center text-center text-zinc-600">
          <Heart className="mb-3 h-10 w-10" />
          <p className="mb-4 text-sm">Você ainda não adicionou nenhum item aos favoritos.</p>
        </section>
      ) : (
        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
