"use client";

import { twMerge } from "tailwind-merge";

type SellersSkeletonProps = React.ComponentProps<"div"> & {
  count?: number;
};

export function SellersSkeleton({ count = 2, className, ...props }: SellersSkeletonProps) {
  return (
    <div className={twMerge("flex flex-wrap justify-center gap-8", className)} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <SellerCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function SellerCardSkeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "flex max-w-64 animate-pulse flex-col items-center rounded-lg bg-zinc-900 px-4 py-7 shadow-md",
        className,
      )}
      {...props}
    >
      <div className="mb-4 h-16 w-16 rounded-full bg-zinc-700" />

      <div className="mb-2 h-5 w-32 rounded bg-zinc-700" />

      <div className="mb-4 h-4 w-44 rounded bg-zinc-700" />

      <div className="h-10 w-44 rounded-lg bg-zinc-700" />
    </div>
  );
}
