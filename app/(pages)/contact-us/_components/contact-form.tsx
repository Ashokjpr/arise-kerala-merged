"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

/* ---------------- VALIDATION SCHEMA ---------------- */
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian number"),
  message: z.string().min(5, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  /* ---------------- SUBMIT HANDLER ---------------- */
  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      reset();
      alert("Form submitted successfully!");
    } catch (error: any) {
      alert(error.message || "Failed to submit form");
    }
  };

  return (
    <section className="bg-green-50 py-2">
      <div className="max-w-7xl mx-auto px-4 mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div>
            <div className="relative mb-8 h-80">
              <Image
                src="/assets/collage-img/img-1.webp"
                alt="Classroom"
                width={600}
                height={300}
                data-aos="fade-right"
                data-aos-delay={150}
                className="w-3/4 h-48 object-cover rounded-xl shadow-lg animate-float1"
                priority
              />

              <Image
                src="/assets/collage-img/img-4.webp"
                alt="Students"
                width={500}
                height={300}
                data-aos="fade-left"
                data-aos-delay={150}
                className="w-2/3 h-48 object-cover rounded-xl shadow-lg absolute top-20 left-16 md:left-48 animate-float2"
              />
            </div>

            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Why Choose ARISE?
            </h3>

            <ul className="space-y-1">
              {[
                "20,000+ successful students | 74% FMGE success rate",
                "Updated, exam-focused study material",
                "Experienced & dedicated faculty",
                "Modern campus with hostel & reading room",
                "Supportive learning environment",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-green-600 mt-1">✔</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white max-w-sm rounded-2xl shadow-lg p-8 mx-auto" data-aos="fade-up"
                data-aos-delay={500}>
            <h2 className="text-2xl font-bold text-green-900">
              Get in touch with us
            </h2>

            <p className="text-gray-600 text-sm my-5">
              "Join ARISE Medical Academy and prepare confidently for FMGE."
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Contact Number"
                  className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Message"
                  className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500"
                />
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition font-semibold disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={() =>
                  window.open("https://wa.me/918136932666", "_blank")
                }
                className="bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition font-semibold flex items-center justify-center gap-2 group"
              >
                <Icon
                  icon="mdi:whatsapp"
                  className="text-2xl text-green-400 group-hover:scale-110 transition"
                />
                <span className="group-hover:scale-105 transition">
                  Chat Now
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactForm;
