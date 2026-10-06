import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { requestSchema } from "../lib/validation";
import { serviceOptions, services } from "../data/services";
import { backendEnabled } from "../lib/constants";
import { submitBookingRequest } from "../lib/api";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";

const BookingForm = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const preset = services.find((item) => item.slug === params.get("service"))?.title || "";
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      preferredContact: "Call",
      vehicleInfo: "",
      serviceNeeded: preset,
      otherService: "",
      location: "",
      issueDescription: ""
    }
  });

  const selectedService = watch("serviceNeeded");

  const onSubmit = async (values) => {
    try {
      await submitBookingRequest(values);
      toast.success("Request submitted successfully.");
      navigate("/thank-you");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit. Please try again or call us directly.");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input id="fullName" label="Full name" placeholder="Your full name" error={errors.fullName?.message} {...register("fullName")} />
      <Input id="phoneNumber" label="Phone number" placeholder="e.g. +263..." error={errors.phoneNumber?.message} {...register("phoneNumber")} />
      <Select id="preferredContact" label="Preferred contact method" error={errors.preferredContact?.message} options={["Call", "WhatsApp"]} {...register("preferredContact")} />
      <Input id="vehicleInfo" label="Vehicle make/model/year" placeholder="Toyota Axio 2014" error={errors.vehicleInfo?.message} {...register("vehicleInfo")} />
      <Select id="serviceNeeded" label="Service needed" error={errors.serviceNeeded?.message} options={["", ...serviceOptions]} {...register("serviceNeeded")} />

      {selectedService === "Other" ? (
        <Input id="otherService" label="Specify service" placeholder="Describe service needed" error={errors.otherService?.message} {...register("otherService")} />
      ) : null}

      <Input id="location" label="Location in Harare" placeholder="e.g. Avondale" error={errors.location?.message} {...register("location")} />
      <Textarea id="issueDescription" label="Description of issue" rows={5} placeholder="Describe symptoms or dashboard warnings" error={errors.issueDescription?.message} {...register("issueDescription")} />

      {backendEnabled ? (
        <div className="space-y-1">
          <label htmlFor="attachment" className="block text-sm font-medium text-textPrimary">Optional file upload (error code photo)</label>
          <input id="attachment" type="file" accept="image/*" className="w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm" {...register("attachment")} />
        </div>
      ) : null}

      <Button type="submit" className="mt-2" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit Request"}</Button>
    </form>
  );
};

export default BookingForm;