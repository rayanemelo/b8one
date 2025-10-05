import { formatToReal } from "@/utils/money";
import Link from "next/link";

import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type FooterMinicartProps = {
  subtotal: number;
  itemsCount: number;
  clearCart?: () => void;
};

export function FooterMinicart({ subtotal, itemsCount, clearCart }: FooterMinicartProps) {
  return (
    <div className="space-y-3 border-t px-5 py-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-600">Subtotal</span>
        <span className="text-base font-semibold">{formatToReal(subtotal)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-600">Quantidade</span>
        <span className="text-base font-semibold">{itemsCount}</span>
      </div>

      <div className="flex gap-2">
        {itemsCount > 0 && (
          <Button variant="outline" className="flex-1" onClick={() => clearCart?.()}>
            Limpar
          </Button>
        )}

        <SheetClose asChild>
          <Link href="/checkout" className="flex-1">
            <Button className="w-full rounded-sm bg-black uppercase text-white hover:bg-black/85">
              Ir ao checkout
            </Button>
          </Link>
        </SheetClose>
      </div>
    </div>
  );
}
