"use client";

import { useState } from "react";

export default function PaymentMethod() {
  const [selected, setSelected] = useState("cod");

  const methods = [
    { id: "cod", label: "Cash on Delivery" },
    { id: "upi", label: "UPI Payment" },
    { id: "card", label: "Credit / Debit Card" },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>

      <div className="mt-6 space-y-4">
        {methods.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-4 transition ${
              selected === method.id
                ? "border-green-600 bg-green-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <span className="font-medium text-gray-800">{method.label}</span>
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="h-4 w-4 accent-green-600"
            />
          </label>
        ))}
      </div>
    </div>
  );
}