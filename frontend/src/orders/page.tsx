"use client";

import Container from "@/components/layout/Container";
import OrderCard from "@/components/orders/OrderCard";

const dummyOrders = [
  {
    id: "QK1234",
    date: "April 5, 2026",
    status: "Delivered",
    total: 420,
    items: [
      { id: 1, name: "Apples", quantity: 2, price: 120 },
      { id: 2, name: "Milk", quantity: 2, price: 30 },
    ],
  },
  {
    id: "QK5678",
    date: "April 7, 2026",
    status: "Pending",
    total: 180,
    items: [
      { id: 3, name: "Bread", quantity: 2, price: 40 },
      { id: 4, name: "Chips", quantity: 2, price: 25 },
    ],
  },
];

export default function OrdersPage() {
  return (
    <section className="py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            My Orders
          </h1>
          <p className="mt-2 text-gray-600">
            Track your recent purchases and delivery status.
          </p>
        </div>

        <div className="space-y-6">
          {dummyOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </Container>
    </section>
  );
}