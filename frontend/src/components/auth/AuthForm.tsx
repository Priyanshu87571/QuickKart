"use client";

import Link from "next/link";
import { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === "login";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${type} form submitted`, formData);
  };

  return (
    <div className="mx-auto max-w-md rounded-3xl border bg-white p-8 shadow-sm">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          {isLogin ? "Welcome Back 👋" : "Create Your Account"}
        </h1>
        <p className="mt-2 text-gray-600">
          {isLogin
            ? "Login to continue shopping with QuickKart"
            : "Join QuickKart and get groceries delivered in minutes"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {!isLogin && (
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
        <Link
          href={isLogin ? "/register" : "/login"}
          className="font-semibold text-green-600 hover:underline"
        >
          {isLogin ? "Register" : "Login"}
        </Link>
      </p>
    </div>
  );
}