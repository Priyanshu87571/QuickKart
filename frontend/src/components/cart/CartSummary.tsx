"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartSummary() {
  const total = useCartStore((state) => state.getCartTotal());
  const deliveryFee = total > 499 ? 0 : 40;
  const grandTotal = total + deliveryFee;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>
        </div>
      </div>

      <Link
        href="/checkout"
        className="mt-6 block rounded-full bg-green-600 px-5 py-3 text-center font-semibold text-white hover:bg-green-700"
      >
        Proceed to Checkout
      </Link>

      <p className="mt-3 text-xs text-gray-500">
        Free delivery on orders above ₹499
      </p>
    </div>
  );
}