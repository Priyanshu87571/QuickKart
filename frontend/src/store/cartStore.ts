"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  unit: string;
  rating: number;
}

interface CartStore {
  cartItems: CartItemType[];
  addToCart: (product: CartItemType, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (product, quantity = 1) => {
        const existing = get().cartItems.find((item) => item.id === product.id);

        if (existing) {
          set({
            cartItems: get().cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cartItems: [...get().cartItems, { ...product, quantity }],
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cartItems: get().cartItems.filter((item) => item.id !== id),
        });
      },

      increaseQty: (id) => {
        set({
          cartItems: get().cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decreaseQty: (id) => {
        set({
          cartItems: get().cartItems
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      clearCart: () => set({ cartItems: [] }),

      getCartCount: () =>
        get().cartItems.reduce((total, item) => total + item.quantity, 0),

      getCartTotal: () =>
        get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: "quickkart-cart", // localStorage key
    }
  )
);