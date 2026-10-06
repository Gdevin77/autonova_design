import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Button from "./ui/Button";
import { contactLinks } from "../lib/constants";

const ContactButtons = () => (
  <div className="flex flex-wrap gap-3">
    <Button as="a" href={contactLinks.call}><FaPhoneAlt className="mr-2" />Call Now</Button>
    <Button as="a" href={contactLinks.whatsapp} target="_blank" rel="noreferrer" variant="outline"><FaWhatsapp className="mr-2" />WhatsApp</Button>
    <Button as="link" to="/book" variant="ghost">Book a Service</Button>
  </div>
);

export default ContactButtons;