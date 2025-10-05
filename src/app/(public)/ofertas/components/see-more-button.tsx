import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function SeeMoreButton({ className }: { className?: string }) {
  return (
    <Link
      href="/ofertas"
      className={twMerge(
        "rounded-xs flex h-11 w-full items-center justify-center bg-black uppercase text-white hover:bg-black/85",
        className,
      )}
    >
      Ver mais
    </Link>
  );
}
