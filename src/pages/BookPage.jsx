import Seo from "../lib/seo";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import BookingForm from "../components/BookingForm";

const BookPage = () => (
  <>
    <Seo title="Book a Service | Circuit Savant" description="Request automotive key, ECU, injector coding, diagnostics, and mobile support in Harare." path="/book" />
    <section className="py-16">
      <SectionTitle eyebrow="Booking" title="Request Quote / Book Service" description="Share your vehicle details and issue. We will confirm availability quickly." />
      <Container className="mt-8 max-w-3xl">
        <div className="rounded-xl border border-line bg-surface p-6">
          <BookingForm />
        </div>
      </Container>
    </section>
  </>
);

export default BookPage;