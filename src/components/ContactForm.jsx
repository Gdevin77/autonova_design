import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactSchema } from "../lib/validation";
import { serviceOptions } from "../data/services";
import { submitContactRequest } from "../lib/api";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      preferredContact: "Call",
      serviceNeeded: "",
      message: ""
    }
  });

  const onSubmit = async (values) => {
    try {
      await submitContactRequest(values);
      toast.success("Message sent successfully.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message right now.");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit, () => toast.error("Please complete the highlighted fields."))} noValidate>
      <Input id="contactFullName" label="Full name" placeholder="Your full name" error={errors.fullName?.message} {...register("fullName")} />
      <Input id="contactPhone" label="Phone number" placeholder="e.g. +263..." error={errors.phoneNumber?.message} {...register("phoneNumber")} />
      <Select id="contactMethod" label="Preferred contact method" error={errors.preferredContact?.message} options={["Call", "WhatsApp"]} {...register("preferredContact")} />
      <Select id="contactService" label="Service needed" error={errors.serviceNeeded?.message} options={["", ...serviceOptions]} {...register("serviceNeeded")} />
      <Textarea id="contactMessage" label="Message" rows={5} placeholder="How can we help?" error={errors.message?.message} {...register("message")} />
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
    </form>
  );
};

export default ContactForm;