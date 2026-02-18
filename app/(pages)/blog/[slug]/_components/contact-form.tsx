"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";

const formSchema = z.object({
  senderName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  countryCode: z.string().min(1, 'Country code is required'),
  phone: z
    .string()
    .min(7, 'Phone number is too short')
    .max(15, 'Phone number is too long')
    .regex(/^[0-9]+$/, 'Phone number must be numeric'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: values.senderName,
          senderEmail: values.email,
          phone: values.phone,
          messageContent: values.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      reset();
      toast.success("Message sent successfully 🚀");
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Name
        </label>
        <input
          {...register("senderName")}
          className="w-full rounded-md border border-gray-300 px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-[#00023a] focus:border-[#00023a]"
          placeholder="Your name"
        />
        {errors.senderName && (
          <p className="text-sm text-red-500 mt-1">
            {errors.senderName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full rounded-md border border-gray-300 px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-[#00023a] focus:border-[#00023a]"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Phone Number
        </label>

        <div className="flex gap-2">
          {/* Phone Input */}
          <input
            {...register("phone")}
            type="tel"
            className="flex-1 rounded-md border border-gray-300 px-4 py-2
      focus:outline-none focus:ring-2 focus:ring-[#00023a] focus:border-[#00023a]"
            placeholder="Phone number"
          />
        </div>

        {(errors.countryCode || errors.phone) && (
          <p className="text-sm text-red-500 mt-1">
            {errors.countryCode?.message || errors.phone?.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full rounded-md border border-gray-300 px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-[#00023a] focus:border-[#00023a]"
          placeholder="Write your message..."
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2
        rounded-md bg-black text-white py-2 font-medium
        hover:bg-gray-900 disabled:opacity-60"
      >
        {isSubmitting && <FaSpinner className="animate-spin" />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
