"use client";

const dummyOrders = [
  { id: "QK1234", customer: "Rahul", total: 420, status: "Delivered" },
  { id: "QK5678", customer: "Anjali", total: 180, status: "Pending" },
  { id: "QK9012", customer: "Vikas", total: 250, status: "Out for Delivery" },
];

export default function AdminOrderTable() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="pb-3">Order ID</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Total</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr key={order.id} className="border-b last:border-none">
                <td className="py-4 font-medium text-gray-900">{order.id}</td>
                <td className="py-4 text-gray-600">{order.customer}</td>
                <td className="py-4 text-gray-600">₹{order.total}</td>
                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-600"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4">
                  <button className="rounded-full border px-3 py-1 text-xs hover:bg-gray-100">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}