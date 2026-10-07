import { Navigate, useParams } from "react-router-dom";
import Seo from "../lib/seo";
import { services } from "../data/services";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { contactLinks } from "../lib/constants";

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo title={`${service.title} | Circuit Savant`} description={service.description} path={`/services/${slug}`} />
      <section className="py-16">
        <SectionTitle eyebrow="Service Details" title={service.title} description={service.description} />
        <Container className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface p-5 lg:col-span-2">
            <h3 className="text-lg font-semibold">When you need this</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-textMuted">
              {service.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>

            <h3 className="mt-6 text-lg font-semibold">What we do</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-textMuted">
              {service.whatWeDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm text-textMuted">
              Pricing depends on vehicle model and current fault condition. Request a quote for accurate pricing.
            </p>
          </div>

          <aside className="rounded-xl border border-line bg-surface p-5">
            <p className="text-sm uppercase tracking-wide text-accent">Estimated Time</p>
            <p className="mt-1 font-semibold">{service.timeRange}</p>
            <div className="mt-6 flex flex-col gap-2">
              <Button as="link" to={`/book?service=${service.slug}`}>Book Now</Button>
              <Button as="a" href={contactLinks.whatsapp} target="_blank" rel="noreferrer" variant="outline">WhatsApp</Button>
              <Button as="a" href={contactLinks.call} variant="ghost">Call</Button>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetailsPage;