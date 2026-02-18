"use client";
import Link from "next/link";
import Image from "next/image";

function AboutUs() {
  return (
    <section id="about-us" className="py-10 bg-gray-100 w-full">
      <div className="container text-center mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md">
        
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-blue-950"
            data-aos="zoom-in-down"
          >
            About Us
          </h2>

          <p
            className="text-sm md:text-lg text-gray-700 leading-relaxed"
            data-aos="zoom-in-up"
          >
            Arise Medical Academy is established in the year 2010, with a vision of
            providing innovative medical coaching with dedication in encouraging
            learner-centered education. As the best FMGE coaching centre in Jaipur,
            we ensure that every student achieves their career goals and develops
            skills, compassion, and professionalism in the medical field. With an
            aim to provide the best quality of education, we offer top support to
            students and shape them into fine medical practitioners. Arise has
            delivered excellent results over the years, making it one of the most
            preferred coaching centres in Jaipur.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center ">
            <Link
              href="/register"
              className="text-white bg-green-500 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-900 transition duration-300"
            >
              Apply Now
            </Link>
          </div>

      </div>

     </section>
  );
}

export default AboutUs;
