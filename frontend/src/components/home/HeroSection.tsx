import Container from "../layout/Container";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-12">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              Delivery in 10 minutes
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Groceries delivered at <span className="text-green-600">lightning speed</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Fresh fruits, vegetables, dairy, snacks and more — all delivered super fast.
            </p>
            <button className="mt-6 rounded-full bg-green-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-green-700">
              Shop Now
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              alt="Groceries"
              className="h-[320px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}