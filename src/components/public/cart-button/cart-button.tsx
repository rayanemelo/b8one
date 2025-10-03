// components/Header.tsx
"use client";

import { ShoppingCart } from "lucide-react";

type CartButtonProps = {
  count?: number;
  onClick?: () => void;
};

export function CartButton({ count = 1, onClick }: CartButtonProps) {
  const hasItems = count > 0;

  return (
    <button
      onClick={onClick}
      aria-label={
        hasItems
          ? `Abrir carrinho com ${count} item(ns)`
          : "Abrir carrinho vazio"
      }
      className="relative inline-flex items-center justify-center h-11 w-11"
    >
      <ShoppingCart className="h-6 w-6 text-black" strokeWidth={1.8} />

      {hasItems && (
        <span
          className="absolute -top-[-1px] -right-1 min-w-[20px] h-5 px-1.5 inline-flex items-center justify-center rounded-full bg-black text-white text-xs font-semibold shadow-sm"
          aria-hidden="true"
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
