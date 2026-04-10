import Container from "@/components/layout/Container";
import AuthForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <section className="py-16">
      <Container>
        <AuthForm type="login" />
      </Container>
    </section>
  );
}