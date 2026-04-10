"use client";

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: OrderItem[];
}

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Order #{order.id}
          </h3>
          <p className="text-sm text-gray-500">{order.date}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            order.status === "Delivered"
              ? "bg-green-100 text-green-600"
              : order.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="mt-5 space-y-2">
        {order.items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-gray-700">
              {item.name} × {item.quantity}
            </span>
            <span className="font-medium text-gray-900">
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t pt-4">
        <span className="font-semibold text-gray-800">
          Total: ₹{order.total}
        </span>

        <button className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-100">
          View Details
        </button>
      </div>
    </div>
  );
}