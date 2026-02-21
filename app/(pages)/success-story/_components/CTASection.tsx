"use client";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-center text-white px-6">

      <h2 className="text-3xl md:text-4xl font-bold">
        Be Our Next Success Story!
      </h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>

      <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
        Join Arise Medical Academy Jaipur and start your journey toward FMGE.
      </p>
      <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
        Register Now
      </button>

    </section>
  );
}