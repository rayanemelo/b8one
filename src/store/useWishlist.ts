// src/store/useWishlist.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
  items: Product[];
  add: (product: Product) => void;
  remove: (idOrKey: string) => void;
  toggle: (product: Product) => void;
  clear: () => void;
  isInWishlist: (idOrKey: string) => boolean;
  count: number;
};

const getKey = (p: Partial<Product>) => String(p.id);

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product) => {
        const key = getKey(product);
        const exists = get().items.some((it) => getKey(it) === key);
        if (exists) return; // evita duplicados
        set({ items: [...get().items, product] });
      },
      remove: (idOrKey) => {
        set({ items: get().items.filter((it) => getKey(it) !== String(idOrKey)) });
      },
      toggle: (product) => {
        const key = getKey(product);
        const exists = get().items.some((it) => getKey(it) === key);
        if (exists) {
          set({ items: get().items.filter((it) => getKey(it) !== key) });
        } else {
          set({ items: [...get().items, product] });
        }
      },
      clear: () => set({ items: [] }),
      isInWishlist: (idOrKey) => get().items.some((it) => getKey(it) === String(idOrKey)),
      get count() {
        return get().items.length;
      },
    }),
    { name: "wishlist-storage" },
  ),
);
