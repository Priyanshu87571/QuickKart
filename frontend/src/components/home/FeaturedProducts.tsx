import { products } from "@/data/products";
import Container from "../layout/Container";
import ProductCard from "../product/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-10">
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Popular Products</h2>
          <button className="text-sm font-semibold text-green-600 hover:underline">
            View All
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}