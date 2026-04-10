"use client";

import { categories } from "@/data/categories";

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function ProductFilters({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}: ProductFiltersProps) {
  return (
    <div className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <button className="rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700">
          Apply Filters
        </button>
      </div>
    </div>
  );
}