import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { serviceOptions } from "../data/services";
import { business } from "../lib/constants";
import Input from "./ui/Input";
import Select from "./ui/Select";

const QuickQuote = () => {
  const [service, setService] = useState(serviceOptions[0]);
  const [vehicle, setVehicle] = useState("");
  const [area, setArea] = useState("");
  const text = `Hi ${business.name}, I need a quote.\nService: ${service}\nVehicle: ${vehicle || "-"}\nLocation: ${area || "-"}`;
  const href = `https://wa.me/${business.whatsappE164}?text=${encodeURIComponent(text)}`;

  return (
    <div className="rounded-2xl bg-surface p-6 text-textPrimary shadow-2xl sm:p-7">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">Free quote in minutes</p>
      <h2 className="mt-1 text-2xl font-extrabold">Tell us what's wrong</h2>
      <div className="mt-5 grid gap-4">
        <Select id="qq-service" label="Service needed" options={serviceOptions} value={service} onChange={(e) => setService(e.target.value)} />
        <Input id="qq-vehicle" label="Vehicle" placeholder="e.g. Toyota Axio 2014" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
        <Input id="qq-area" label="Your location in Harare" placeholder="e.g. Avondale" value={area} onChange={(e) => setArea(e.target.value)} />
        <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700">
          <FaWhatsapp size={18} /> Get my quote on WhatsApp
        </a>
        <p className="text-center text-xs text-textMuted">Opens WhatsApp with your details filled in.</p>
      </div>
    </div>
  );
};

export default QuickQuote;
