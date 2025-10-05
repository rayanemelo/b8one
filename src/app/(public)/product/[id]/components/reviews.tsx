import { RatingStars } from "./rating-stars";

export function Reviews({ product }: { product: Product }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-bold uppercase">Avaliações</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {product.reviews.slice(0, 4).map((r, i) => (
          <div key={i} className="rounded-lg border p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-semibold">{r.reviewerName ?? "Cliente"}</span>
              <RatingStars rating={r.rating} />
            </div>
            <p className="text-sm text-zinc-700">{r.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
