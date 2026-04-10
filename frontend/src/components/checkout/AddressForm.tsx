"use client";

export default function AddressForm() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Delivery Address</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Full Name"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="House / Flat No."
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Area / Street"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="City"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Pincode"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );
}