import mongoose from "mongoose";

const serviceRequestSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    preferredContact: { type: String, enum: ["Call", "WhatsApp"], required: true },
    vehicleInfo: { type: String },
    serviceNeeded: { type: String, required: true },
    otherService: { type: String },
    location: { type: String },
    issueDescription: { type: String, required: true },
    attachmentName: { type: String },
    type: { type: String, enum: ["booking", "contact"], default: "booking" }
  },
  { timestamps: true }
);

const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);

export default ServiceRequest;