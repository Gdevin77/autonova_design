import Seo from "../lib/seo";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const ThankYouPage = () => (
  <>
    <Seo title="Thank You | Circuit Savant" description="Your service request has been received." path="/thank-you" />
    <section className="py-24">
      <Container className="max-w-2xl text-center">
        <div className="rounded-xl border border-accent/40 bg-surface p-8">
          <h1 className="text-3xl font-bold">Thank You</h1>
          <p className="mt-3 text-textMuted">Your request was submitted successfully. Circuit Savant will contact you shortly.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button as="link" to="/">Back Home</Button>
            <Button as="link" to="/services" variant="outline">View Services</Button>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default ThankYouPage;