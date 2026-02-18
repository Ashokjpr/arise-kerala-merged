'use client';
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative pt-20  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">Arise Medical Academy Jaipur</h2>
        <p className="text-xl mb-8">
          A coaching and training institute focused on medical exam preparation, especially for FMGE/MCI Screening Examination and related exams.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-black px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            View All Courses
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
        <div className="mt-12">
            <Image
                src="/images/banner-2.webp"
                alt="Hero Image"
                width={1200}
                height={600}
                className="mx-auto min-w-[80%] "
            />
        </div>
      </div>
       
    </section>
  );
}
