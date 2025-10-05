"use client";
import { ShoppingCart } from "lucide-react";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Minicart } from "../minicart/minicart";
import { useCart } from "@/store/useCart";

export function CartButton() {
  const { items } = useCart();

  const count = items.length;
  const hasItems = count > 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label={hasItems ? `Abrir carrinho com ${count} item(ns)` : "Abrir carrinho vazio"}
          className="relative inline-flex h-11 w-11 items-center justify-center"
        >
          <ShoppingCart className="h-6 w-6 text-black" strokeWidth={1.8} />
          {hasItems && (
            <span
              className="absolute -right-1 -top-[-1px] inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1.5 text-xs font-semibold text-white shadow-sm"
              aria-hidden="true"
            >
              {count > 99 ? "99+" : count}
            </span>
          )}
        </button>
      </SheetTrigger>

      <Minicart />
    </Sheet>
  );
}
