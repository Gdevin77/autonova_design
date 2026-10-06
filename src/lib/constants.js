export const business = {
  name: import.meta.env.VITE_BUSINESS_NAME || "AUTONOVA",
  tagline: "Professional Automotive Key & ECU Solutions",
  area: import.meta.env.VITE_SERVICE_AREA || "Anywhere in Harare",
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || "+263 77 123 4567",
  phoneE164: import.meta.env.VITE_PHONE_E164 || "263771234567",
  whatsappE164: import.meta.env.VITE_WHATSAPP_E164 || "263771234567"
};

export const contactLinks = {
  call: `tel:+${business.phoneE164}`,
  whatsapp: `https://wa.me/${business.whatsappE164}`
};

export const backendEnabled = String(import.meta.env.VITE_USE_BACKEND).toLowerCase() === "true";
export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const businessHours = [
  "Monday - Friday: 7:00 AM - 6:00 PM",
  "Saturday: 8:00 AM - 4:00 PM",
  "Sunday: Emergency call-outs"
];