// src/components/public/category/categories-skeleton.tsx
"use client";

import { twMerge } from "tailwind-merge";

type CategoriesSkeletonProps = React.ComponentProps<"div"> & {
  /** quantidade de cards (default 8) */
  count?: number;
};

export function CategoriesSkeleton({ count = 8, className, ...props }: CategoriesSkeletonProps) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
      {...props}
    >
      {Array.from({ length: count }).map((_, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function CategoryCardSkeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "h-28 w-full animate-pulse rounded-xl bg-zinc-950/70 px-4",
        "flex items-center gap-6",
        className,
      )}
      {...props}
    >
      <div className="h-10 w-10 rounded-lg bg-zinc-700" />
      <div className="h-5 w-28 rounded bg-zinc-700" />
    </div>
  );
}
