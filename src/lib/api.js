import axios from "axios";
import emailjs from "emailjs-com";
import { apiBaseUrl, backendEnabled } from "./constants";

export const submitBookingRequest = async (values) => {
  if (backendEnabled) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === "attachment") {
        if (value?.[0]) {
          formData.append("attachment", value[0]);
        }
        return;
      }
      formData.append(key, value ?? "");
    });

    await axios.post(`${apiBaseUrl}/api/requests`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return;
  }

  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      full_name: values.fullName,
      phone_number: values.phoneNumber,
      preferred_contact: values.preferredContact,
      vehicle_info: values.vehicleInfo,
      service_needed: values.serviceNeeded === "Other" ? values.otherService : values.serviceNeeded,
      location: values.location,
      issue_description: values.issueDescription
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

export const submitContactRequest = async (values) => {
  if (backendEnabled) {
    await axios.post(`${apiBaseUrl}/api/requests/contact`, values);
    return;
  }

  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      full_name: values.fullName,
      phone_number: values.phoneNumber,
      preferred_contact: values.preferredContact,
      service_needed: values.serviceNeeded,
      issue_description: values.message
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};