'use client';

import { useState } from "react";

const faqs = [
  {
    q: "What courses does Arise Medical Academy offer?",
    a: "Arise Medical Academy offers comprehensive courses for FMGE preparation, including Regular Batches, Crash Courses, and specialised Achievers Batches for final year students.",
  },
  {
    q: "How are the classes conducted?",
    a: "We offer both online and offline classes to accommodate different learning preferences. Our classes are led by experienced faculty and include interactive sessions and regular tests.",
  },
  {
    q: "How many branches does Arise have?",
    a: "Arise has 5 branches in Hyderabad, Delhi, Jaipur, Chennai, and Taliparamba, Kerala.",
  },
  {
    q: "How can I communicate with the Arise team?",
    a: "You can communicate with us through our social media channels or reach out directly at +91 76809 29292.",
  },
  {
    q: "How can I enrol in a course?",
    a: "You can enrol in a course by visiting our website and filling out the enrollment form, or by contacting us directly at 7680929292 for assistance.",
  },
  {
    q: "What is included in the study material?",
    a: "Our study material includes detailed workbooks, an extensive question bank, previous year questions, image-based learning resources, and up-to-date exam information.",
  },
  {
    q: "What makes Arise Medical Academy different from other institutes?",
    a: "Arise Medical Academy stands out due to our experienced faculty, comprehensive study material, extensive question bank, and the ability to start preparation early with our Achievers Batches. We also stay updated with the latest exam formats and patterns.",
  },
  {
    q: "Can I access the study material and classes online?",
    a: "Yes, our app provides access to all study materials, classes, and additional resources online, allowing you to study anytime, anywhere.",
  },
];


export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" pb-10 mt-25 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-8">
          FAQs
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray hover:bg-green-50 transition"
              >
                <span>
                  {index + 1}. {faq.q}
                </span>

                <span className="text-xl">
                  {openIndex === index ? "x" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
