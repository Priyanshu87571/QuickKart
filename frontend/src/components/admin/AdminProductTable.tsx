"use client";

const dummyProducts = [
  { id: 1, name: "Fresh Apples", category: "Fruits", price: 120, stock: 24 },
  { id: 2, name: "Milk", category: "Dairy", price: 30, stock: 40 },
  { id: 3, name: "Bread", category: "Bakery", price: 40, stock: 20 },
];

export default function AdminProductTable() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">All Products</h2>
        <button className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white hover:bg-green-700">
          + Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="pb-3">Name</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Stock</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyProducts.map((product) => (
              <tr key={product.id} className="border-b last:border-none">
                <td className="py-4 font-medium text-gray-900">{product.name}</td>
                <td className="py-4 text-gray-600">{product.category}</td>
                <td className="py-4 text-gray-600">₹{product.price}</td>
                <td className="py-4 text-gray-600">{product.stock}</td>
                <td className="py-4">
                  <div className="flex gap-3">
                    <button className="rounded-full border px-3 py-1 text-xs hover:bg-gray-100">
                      Edit
                    </button>
                    <button className="rounded-full border px-3 py-1 text-xs text-red-500 hover:bg-red-50">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}