import Seo from "../lib/seo";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ContactForm from "../components/ContactForm";
import Button from "../components/ui/Button";
import { business, businessHours, contactLinks } from "../lib/constants";

const mapKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY;
const mapSrc = mapKey
  ? `https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=Harare+Zimbabwe`
  : "https://www.google.com/maps?q=Harare%20Zimbabwe&output=embed";

const ContactPage = () => (
  <>
    <Seo title="Contact AUTONOVA" description="Call, WhatsApp, or send a service request to AUTONOVA for support anywhere in Harare." path="/contact" />
    <section className="py-16">
      <SectionTitle eyebrow="Contact" title="Get In Touch" description="Reach us by call, WhatsApp, or the contact form." />
      <Container className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface p-6">
          <h3 className="text-lg font-semibold">Contact Options</h3>
          <p className="mt-2 text-textMuted">{business.area}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button as="a" href={contactLinks.call}>Call</Button>
            <Button as="a" href={contactLinks.whatsapp} target="_blank" rel="noreferrer" variant="outline">WhatsApp</Button>
          </div>

          <h4 className="mt-6 font-semibold">Business Hours</h4>
          <ul className="mt-2 space-y-1 text-sm text-textMuted">
            {businessHours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <div className="mt-6 overflow-hidden rounded-xl border border-line" aria-label="Map of Harare service area">
            <iframe
              title="Harare map"
              src={mapSrc}
              width="100%"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-6">
          <ContactForm />
        </div>
      </Container>
    </section>
  </>
);

export default ContactPage;