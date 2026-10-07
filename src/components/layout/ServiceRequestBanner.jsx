import { FaPhoneAlt } from "react-icons/fa";
import Container from "../ui/Container";
import OpenNow from "../OpenNow";
import { business, contactLinks } from "../../lib/constants";

const ServiceRequestBanner = () => (
  <div className="border-b border-white/10 bg-black text-white">
    <Container className="flex items-center justify-between gap-3 py-2 text-xs">
      <OpenNow light />
      <div className="flex items-center gap-5">
        <span className="hidden text-slate-300 sm:inline">Mobile service · {business.area}</span>
        <a href={contactLinks.call} className="inline-flex items-center gap-2 font-semibold hover:text-slate-200">
          <FaPhoneAlt /> {business.phoneDisplay}
        </a>
      </div>
    </Container>
  </div>
);

export default ServiceRequestBanner;
