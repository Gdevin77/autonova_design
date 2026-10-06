import Seo from "../lib/seo";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const NotFoundPage = () => (
  <>
    <Seo title="Page Not Found | AUTONOVA" description="The page you requested does not exist." path="/404" />
    <section className="py-24">
      <Container className="text-center">
        <h1 className="text-5xl font-extrabold text-accent">404</h1>
        <p className="mt-4 text-lg">Page not found</p>
        <p className="mt-2 text-textMuted">The page you are looking for might have moved or no longer exists.</p>
        <Button as="link" to="/" className="mt-6">Back to Home</Button>
      </Container>
    </section>
  </>
);

export default NotFoundPage;