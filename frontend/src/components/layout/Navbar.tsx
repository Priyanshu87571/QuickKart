"use client";

import Link from "next/link";
import { ShoppingCart, Search, MapPin, User } from "lucide-react";
import Container from "./Container";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const cartCount = useCartStore((state) => state.getCartCount());

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-extrabold text-green-600">
              QuickKart
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/orders">Orders</Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-2 rounded-full border bg-gray-50 px-4 py-2 w-full max-w-xl">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search for groceries, snacks..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-700">
            <MapPin className="h-4 w-4 text-green-600" />
            Deliver in 10 mins
          </div>

          <div className="flex items-center gap-4">
            <Link href="/profile">
              <User className="h-5 w-5 text-gray-700" />
            </Link>

            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 rounded-full bg-green-600 px-1.5 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}