"use client";

import Container from "@/components/layout/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminProductTable from "@/components/admin/AdminProductTable";

export default function AdminProductsPage() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <AdminSidebar />
          </div>

          <div className="space-y-8 lg:col-span-3">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Product Management
              </h1>
              <p className="mt-2 text-gray-600">
                Add, edit, and manage all products available on QuickKart.
              </p>
            </div>

            <AdminProductTable />
          </div>
        </div>
      </Container>
    </section>
  );
}