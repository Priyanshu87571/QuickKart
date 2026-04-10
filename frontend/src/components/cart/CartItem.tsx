"use client";

import { CartItemType, useCartStore } from "@/store/cartStore";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItem({ item }: { item: CartItemType }) {
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <img
        src={item.image}
        alt={item.name}
        className="h-28 w-28 rounded-xl object-cover"
      />

      <div className="flex-1">
        <p className="text-sm text-gray-500">{item.category}</p>
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.unit}</p>
        <p className="mt-2 text-lg font-bold text-gray-900">₹{item.price}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border bg-gray-50 px-3 py-2">
          <button onClick={() => decreaseQty(item.id)} className="p-1">
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-3 font-semibold">{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)} className="p-1">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="rounded-full bg-red-50 p-3 text-red-500 hover:bg-red-100"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}