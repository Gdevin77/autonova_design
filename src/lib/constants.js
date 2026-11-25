export const business = {
  name: "Circuit Savant",
  tagline: "Professional Automotive Key & ECU Solutions",
  area: import.meta.env.VITE_SERVICE_AREA || "Anywhere in Harare",
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || "+263 78 133 9253",
  phoneE164: import.meta.env.VITE_PHONE_E164 || "263781339253",
  whatsappE164: import.meta.env.VITE_WHATSAPP_E164 || "263781339253",
  phone2Display: "+263 71 300 9608",
  phone2E164: "263713009608",
  email: import.meta.env.VITE_EMAIL || "info@circuitsavant.co.zw"
};

export const contactLinks = {
  call: `tel:+${business.phoneE164}`,
  call2: `tel:+${business.phone2E164}`,
  email: `mailto:${business.email}`,
  instagram: "https://www.instagram.com/cir_cuitsavant",
  whatsapp: `https://wa.me/${business.whatsappE164}`
};

export const whatsappLink = (message) => `${contactLinks.whatsapp}?text=${encodeURIComponent(message)}`;

export const businessHours = [
  "Monday - Friday: 7:00 AM - 6:00 PM",
  "Saturday: 8:00 AM - 4:00 PM",
  "Sunday: Emergency call-outs"
];