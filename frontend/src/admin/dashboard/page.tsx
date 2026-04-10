"use client";

import Container from "@/components/layout/Container";
import AdminSidebar from "@/components/admin/AdminSidebar";
import StatCard from "@/components/admin/StatCard";
import AdminOrderTable from "@/components/admin/AdminOrderTable";
import { Package, ShoppingCart, IndianRupee, Users } from "lucide-react";

export default function AdminDashboardPage() {
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
                Admin Dashboard
              </h1>
              <p className="mt-2 text-gray-600">
                Monitor store performance, products, and order activity.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Total Products"
                value="128"
                icon={Package}
                subtitle="12 added this week"
              />
              <StatCard
                title="Total Orders"
                value="542"
                icon={ShoppingCart}
                subtitle="32 today"
              />
              <StatCard
                title="Revenue"
                value="₹48,920"
                icon={IndianRupee}
                subtitle="₹6,200 today"
              />
              <StatCard
                title="Customers"
                value="1,248"
                icon={Users}
                subtitle="85 new this month"
              />
            </div>

            <AdminOrderTable />
          </div>
        </div>
      </Container>
    </section>
  );
}