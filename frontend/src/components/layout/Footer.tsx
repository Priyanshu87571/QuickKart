import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-green-600">QuickKart</h2>
            <p className="mt-2 text-sm text-gray-600">
              Groceries and essentials delivered to your doorstep in minutes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
              <li>Orders</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}