import { z } from "zod";

export const requestSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name."),
    phoneNumber: z.string().min(8, "Please enter a valid phone number."),
    preferredContact: z.enum(["Call", "WhatsApp"]),
    vehicleInfo: z.string().min(3, "Enter make, model, and year."),
    serviceNeeded: z.string().min(1, "Select a service."),
    otherService: z.string().optional(),
    location: z.string().min(2, "Enter location in Harare."),
    issueDescription: z.string().min(10, "Please provide more detail.")
  })
  .refine((data) => (data.serviceNeeded === "Other" ? Boolean(data.otherService?.trim()) : true), {
    path: ["otherService"],
    message: "Please specify the service."
  });

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phoneNumber: z.string().min(8, "Please enter a valid phone number."),
  preferredContact: z.enum(["Call", "WhatsApp"]),
  serviceNeeded: z.string().min(1, "Select a service."),
  message: z.string().min(10, "Please include enough detail.")
});