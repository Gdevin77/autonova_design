import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { contactLinks } from "../../lib/constants";

const FloatingActions = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 md:hidden">
    <a href={contactLinks.call} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-glow">
      <FaPhoneAlt /> Call Now
    </a>
    <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white">
      <FaWhatsapp /> WhatsApp
    </a>
  </div>
);

export default FloatingActions;