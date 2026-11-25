export const business = {
  name: import.meta.env.VITE_BUSINESS_NAME || "Circuit Savant",
  tagline: "Professional Automotive Key & ECU Solutions",
  area: import.meta.env.VITE_SERVICE_AREA || "Anywhere in Harare",
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || "+263 77 123 4567",
  phoneE164: import.meta.env.VITE_PHONE_E164 || "263771234567",
  whatsappE164: import.meta.env.VITE_WHATSAPP_E164 || "263771234567",
  email: import.meta.env.VITE_EMAIL || "info@circuitsavant.co.zw"
};

export const contactLinks = {
  call: `tel:+${business.phoneE164}`,
  email: `mailto:${business.email}`,
  whatsapp: `https://wa.me/${business.whatsappE164}`
};

export const whatsappLink = (message) => `${contactLinks.whatsapp}?text=${encodeURIComponent(message)}`;

export const businessHours = [
  "Monday - Friday: 7:00 AM - 6:00 PM",
  "Saturday: 8:00 AM - 4:00 PM",
  "Sunday: Emergency call-outs"
];