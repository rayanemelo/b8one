import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  items: Product[];
  addToCart: (product: Product) => void;
  removeOneFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const items = get().items;
        set({ items: [...items, product] });
      },
      removeOneFromCart: (id) => {
        const items = get().items;
        const idx = items.findIndex((p) => String(p.id) === String(id));
        if (idx === -1) return;
        const next = [...items];
        next.splice(idx, 1);
        set({ items: next });
      },
      clearCart: () => set({ items: [] }),
    }),
    { name: "cart-storage" },
  ),
);
