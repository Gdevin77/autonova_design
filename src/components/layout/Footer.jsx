import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { businessHours, contactLinks } from "../../lib/constants";

const Footer = () => (
  <footer className="mt-20 border-t border-navy bg-navy text-white">
    <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <img src={`${import.meta.env.BASE_URL}logo-full.png`} alt="Circuit Savant - Precision Automotive Diagnostics & Repair" className="h-28 w-auto" />
        <p className="mt-2 text-sm text-slate-300">Professional Automotive Key & ECU Solutions. Mobile service anywhere in Harare.</p>
        <div className="mt-4 flex gap-3 text-slate-300">
          <a href={contactLinks.whatsapp} aria-label="WhatsApp" className="rounded bg-white/10 p-2 hover:text-white">
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Facebook" className="rounded bg-white/10 p-2 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="rounded bg-white/10 p-2 hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-semibold">Quick Links</h4>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/services" className="hover:text-white">Services</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">Business Hours</h4>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {businessHours.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">Need Service?</h4>
        <p className="mt-2 text-sm text-slate-300">Anywhere in Harare with mobile support.</p>
        <div className="mt-4 flex flex-col gap-2">
          <Button as="a" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">WhatsApp</Button>
          <Button as="link" to="/book" variant="ghost">Request a Service</Button>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;