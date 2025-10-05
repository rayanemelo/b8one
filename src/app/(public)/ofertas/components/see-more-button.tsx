import { Button } from "@/components/ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function SeeMoreButton({ className }: { className?: string }) {
  return (
    <Button
      className={twMerge("rounded-xs h-11 w-full bg-black uppercase hover:bg-black/85", className)}
    >
      <Link href="/ofertas">Ver mais</Link>
    </Button>
  );
}
