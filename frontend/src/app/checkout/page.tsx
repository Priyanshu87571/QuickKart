"use client";

import Container from "@/components/layout/Container";
import AddressForm from "@/components/checkout/AddressForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function CheckoutPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.getCartTotal());

  const deliveryFee = total > 499 ? 0 : 40;
  const grandTotal = total + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <section className="py-16">
        <Container>
          <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900">No items to checkout</h1>
            <p className="mt-3 text-gray-600">
              Your cart is empty. Add products before placing an order.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Browse Products
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Checkout</h1>
          <p className="mt-2 text-gray-600">
            Complete your delivery details and payment to place your order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <AddressForm />
            <PaymentMethod />
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-gray-900">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t pt-4 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-4">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-full bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">
              Place Order
            </button>

            <p className="mt-3 text-xs text-gray-500">
              Orders are usually delivered within 10–20 minutes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}