"use client";

import { Product } from "@/types/product";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="h-[420px] w-full rounded-2xl object-cover"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-green-600">{product.category}</p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900">{product.name}</h1>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-5 w-5 fill-yellow-400" />
            <span className="font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">• In Stock: {product.stock}</span>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <div className="mt-6 rounded-2xl bg-green-50 p-4">
          <p className="text-sm font-semibold text-green-700">Delivery in 10–15 mins</p>
          <p className="mt-1 text-sm text-gray-600">
            Fast delivery available in your nearby area.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Description</h3>
          <p className="mt-2 leading-7 text-gray-600">{product.description}</p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center rounded-full border bg-white px-4 py-2">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="p-1"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 font-semibold">{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)} className="p-1">
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-green-700"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm">
          <h4 className="font-semibold text-gray-900">Product Info</h4>
          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <p><span className="font-medium text-gray-800">Brand:</span> {product.brand}</p>
            <p><span className="font-medium text-gray-800">Unit:</span> {product.unit}</p>
            <p><span className="font-medium text-gray-800">Category:</span> {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}