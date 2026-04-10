import { categories } from "@/data/categories";
import Container from "../layout/Container";

export default function CategorySection() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border bg-white p-4 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="text-4xl">{category.image}</div>
              <p className="mt-2 text-sm font-medium text-gray-700">{category.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}