import { Star } from "lucide-react";

export function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="h-4 w-4 fill-current" />
      ))}
      {half && <Star className="h-4 w-4 fill-current opacity-60" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className="h-4 w-4" />
      ))}
      <span className="ml-2 text-sm text-zinc-600">{rating.toFixed(1)}</span>
    </div>
  );
}
