import Container from "@/components/layout/Container";
import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <section className="py-16">
      <Container>
        <AuthForm type="register" />
      </Container>
    </section>
  );
}