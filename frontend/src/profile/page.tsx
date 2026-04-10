"use client";

import Container from "@/components/layout/Container";
import ProfileInfo from "@/components/profile/ProfileInfo";
import AddressCard from "@/components/profile/AddressCard";

export default function ProfilePage() {
  return (
    <section className="py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            My Profile
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your personal information and addresses.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProfileInfo />
          </div>

          <div className="space-y-4">
            <AddressCard />
            <button className="w-full rounded-2xl border border-dashed py-4 text-sm text-gray-600 hover:bg-gray-50">
              + Add New Address
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}