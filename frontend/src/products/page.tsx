"use client";

import { useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section className="py-10">
      <Container>
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">All Products</h1>
          <p className="mt-2 text-gray-600">
            Browse fresh groceries, snacks, beverages and more.
          </p>
        </div>

        <ProductFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">No products found</h2>
            <p className="mt-2 text-gray-500">Try changing search or category filters.</p>
          </div>
        )}
      </Container>
    </section>
  );
}