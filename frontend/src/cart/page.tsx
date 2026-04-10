"use client";

import Container from "@/components/layout/Container";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <section className="py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Your Cart</h1>
          <p className="mt-2 text-gray-600">
            Review your selected items before checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Your cart is empty 🛒</h2>
            <p className="mt-2 text-gray-600">
              Add some fresh groceries and essentials to get started.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}