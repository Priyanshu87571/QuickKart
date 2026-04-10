"use client";

import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, UserCircle } from "lucide-react";

export default function AdminSidebar() {
  const links = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
    { href: "/profile", label: "Profile", icon: UserCircle },
  ];

  return (
    <aside className="h-full rounded-3xl border bg-white p-5 shadow-sm">
      <h2 className="mb-6 text-2xl font-extrabold text-green-600">QuickKart Admin</h2>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
            >
              <Icon className="h-5 w-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}