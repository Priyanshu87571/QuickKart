"use client";

export default function ProfileInfo() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>

      <div className="mt-6 space-y-4">
        <div>
          <label className="text-sm text-gray-500">Full Name</label>
          <input
            type="text"
            value="Priyanshu Raj"
            className="mt-1 w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">Email</label>
          <input
            type="email"
            value="priyanshu@email.com"
            className="mt-1 w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">Phone</label>
          <input
            type="text"
            value="9876543210"
            className="mt-1 w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        <button className="mt-4 rounded-full bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}