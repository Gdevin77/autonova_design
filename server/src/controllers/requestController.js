import ServiceRequest from "../models/ServiceRequest.js";
import { sendRequestMail } from "../utils/mailer.js";

const buildBookingHtml = (payload) => `
  <h2>New Circuit Savant Booking Request</h2>
  <p><strong>Name:</strong> ${payload.fullName}</p>
  <p><strong>Phone:</strong> ${payload.phoneNumber}</p>
  <p><strong>Preferred Contact:</strong> ${payload.preferredContact}</p>
  <p><strong>Vehicle:</strong> ${payload.vehicleInfo || "N/A"}</p>
  <p><strong>Service:</strong> ${payload.serviceNeeded}${payload.otherService ? ` (${payload.otherService})` : ""}</p>
  <p><strong>Location:</strong> ${payload.location || "N/A"}</p>
  <p><strong>Issue:</strong> ${payload.issueDescription}</p>
`;

const buildContactHtml = (payload) => `
  <h2>New Circuit Savant Contact Request</h2>
  <p><strong>Name:</strong> ${payload.fullName}</p>
  <p><strong>Phone:</strong> ${payload.phoneNumber}</p>
  <p><strong>Preferred Contact:</strong> ${payload.preferredContact}</p>
  <p><strong>Service:</strong> ${payload.serviceNeeded}</p>
  <p><strong>Message:</strong> ${payload.message}</p>
`;

export const createBookingRequest = async (req, res) => {
  const payload = req.body;
  const file = req.file;

  const created = await ServiceRequest.create({
    fullName: payload.fullName,
    phoneNumber: payload.phoneNumber,
    preferredContact: payload.preferredContact,
    vehicleInfo: payload.vehicleInfo,
    serviceNeeded: payload.serviceNeeded,
    otherService: payload.otherService,
    location: payload.location,
    issueDescription: payload.issueDescription,
    attachmentName: file?.originalname,
    type: "booking"
  });

  await sendRequestMail({
    subject: `Circuit Savant Booking Request - ${payload.fullName}`,
    html: buildBookingHtml(payload),
    attachment: file
      ? {
          filename: file.originalname,
          content: file.buffer
        }
      : undefined
  });

  res.status(201).json({ message: "Request created", id: created._id });
};

export const createContactRequest = async (req, res) => {
  const payload = req.body;

  const created = await ServiceRequest.create({
    fullName: payload.fullName,
    phoneNumber: payload.phoneNumber,
    preferredContact: payload.preferredContact,
    serviceNeeded: payload.serviceNeeded,
    issueDescription: payload.message,
    type: "contact"
  });

  await sendRequestMail({
    subject: `Circuit Savant Contact - ${payload.fullName}`,
    html: buildContactHtml(payload)
  });

  res.status(201).json({ message: "Contact request created", id: created._id });
};