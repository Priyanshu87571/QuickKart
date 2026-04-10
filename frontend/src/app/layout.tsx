import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "QuickKart",
  description: "Quick Commerce Grocery Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <Toaster position="top-right" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}