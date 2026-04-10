"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { Star, Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="relative">
          {product.discount && (
            <span className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
              {product.discount}% OFF
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="h-44 w-full rounded-xl object-cover"
          />
        </div>
      </Link>

      <div className="mt-4">
        <p className="text-xs text-gray-500">{product.category}</p>

        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 line-clamp-1 text-lg font-semibold text-gray-900 hover:text-green-600">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500">{product.unit}</p>

        <div className="mt-2 flex items-center gap-1 text-sm text-yellow-500">
          <Star className="h-4 w-4 fill-yellow-400" />
          <span className="font-medium text-gray-700">{product.rating}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice}
              </p>
            )}
          </div>

          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart 🛒");
            }}
            className="flex items-center gap-1 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}