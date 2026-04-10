"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  subtitle: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="mt-2 text-3xl font-extrabold text-gray-900">{value}</h3>
        </div>
        <div className="rounded-full bg-green-50 p-3 text-green-600">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}