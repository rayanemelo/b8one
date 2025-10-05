"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { CartButton } from "@/layout/public/header/components/cart-button/cart-button";
import { Logo } from "@/components/public/logo/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <Link
              href="/wishlist"
              aria-label="Abrir wishlist"
              className="inline-flex h-10 w-10 items-center justify-center md:h-11 md:w-11"
            >
              <Heart className="h-6 w-6 text-black md:h-6 md:w-6" strokeWidth={1.8} />
            </Link>

            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
}
