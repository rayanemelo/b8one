import { ShoppingCart } from "lucide-react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ProductItemMinicart } from "./product-item-minicart";
import { FooterMinicart } from "./footer-minicart";
import { useCart } from "@/store/useCart";

export function Minicart() {
  const { items, removeOneFromCart, clearCart } = useCart();
  const hasItems = items.length > 0;

  const groupedItems = Object.values(
    items.reduce(
      (acc, item) => {
        const key = String(item.id);
        if (!acc[key]) acc[key] = { ...item, quantity: 0 };
        acc[key].quantity += 1;
        return acc;
      },
      {} as Record<string, Product & { quantity: number }>,
    ),
  );

  const subtotal = groupedItems.reduce(
    (acc, item) => acc + Number(item.price ?? 0) * item.quantity,
    0,
  );

  return (
    <SheetContent side="right" className="w-[360px] p-0">
      <div className="flex h-full flex-col">
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle className="text-lg">Seu carrinho</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-auto px-5 py-4">
          {!hasItems ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-zinc-600">
              <ShoppingCart className="mb-2 h-8 w-8" />
              <p className="text-sm">Seu carrinho está vazio</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {groupedItems.map((item) => (
                <ProductItemMinicart
                  key={item.id}
                  handleRemove={() => removeOneFromCart(String(item.id))}
                  {...item}
                />
              ))}
            </ul>
          )}
        </div>

        <FooterMinicart subtotal={subtotal} hasItems={hasItems} clearCart={clearCart} />
      </div>
    </SheetContent>
  );
}
