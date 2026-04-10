"use client";

export default function AddressCard() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-gray-900">Home Address</h3>

      <p className="mt-2 text-sm text-gray-600">
        123, MG Road, Pune, Maharashtra - 411001
      </p>

      <div className="mt-4 flex gap-3">
        <button className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100">
          Edit
        </button>
        <button className="rounded-full border px-4 py-2 text-sm text-red-500 hover:bg-red-50">
          Delete
        </button>
      </div>
    </div>
  );
}