import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

const ServiceCard = ({ service }) => (
  <Card className="flex h-full flex-col justify-between transition hover:-translate-y-1 hover:border-accent/40">
    <div>
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-textMuted">{service.description}</p>
      {service.timeRange ? <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">Estimated: {service.timeRange}</p> : null}
    </div>
    <div className="mt-5 flex gap-2">
      <Button as="link" to={`/services/${service.slug}`} variant="ghost" className="px-4 py-2">Details</Button>
      <Button as="link" to={`/book?service=${service.slug}`} className="px-4 py-2">Request this service</Button>
    </div>
  </Card>
);

export default ServiceCard;