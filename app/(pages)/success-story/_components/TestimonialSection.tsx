"use client";

export default function TestimonialSection() {

  const testimonials = [
    {
      message:
        "The mentorship and structured test series helped me crack NEET confidently.",
      name: "Riya Sharma",
    },
    {
      message:
        "Best coaching institute in Jaipur for serious medical aspirants.",
      name: "Aditya Verma",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 "
       data-aos="fade-up"
       >
        What Our Students Say
      </h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mb-12 rounded-full"></div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-10"
       data-aos="fade-up"
        data-aos-delay="200">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <p className="text-gray-700 italic leading-relaxed">
              "{item.message}"
            </p>

            <h4 className="mt-6 font-semibold text-blue-900">
              — {item.name}
            </h4>
          </div>
        ))}
      </div>

    </section>
  );
}