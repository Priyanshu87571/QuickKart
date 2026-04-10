import Container from "@/components/layout/Container";
import ProductDetails from "@/components/product/ProductDetails";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) return notFound();

  return (
    <section className="py-10">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </section>
  );
}