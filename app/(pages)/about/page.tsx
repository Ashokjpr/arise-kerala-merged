"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import Link from 'next/link';
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image src="/next.svg" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-gray-900">
              Arise Kerala
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-orange-600">Home</Link>
            <Link href="/about" className="hover:text-orange-600">About</Link>
            <Link href="#mission" className="hover:text-orange-600">Mission</Link>
            <Link href="#contact" className="hover:text-orange-600">Contact</Link>
          </nav>

          <Link
            href="#contact"
            className="hidden md:inline-block rounded-full bg-orange-600 px-6 py-2 text-white transition hover:bg-orange-700"
          >
            Join Us
          </Link>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] pt-32"
      >
        <div
          className="container mx-auto px-6 text-center text-white"
          data-aos="fade-up"
        >
          <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
            Awakening a <span className="text-orange-400">New Kerala</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200">
            A people’s movement to rebuild values, leadership, and a better
            future for Kerala.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#about"
              className="rounded-full bg-orange-600 px-8 py-3 text-lg font-semibold text-white hover:bg-orange-700 transition"
            >
              Learn More
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="bg-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
              About Arise Kerala
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Arise Kerala is a visionary initiative aimed at empowering society
              through ethical leadership, innovation, and collective action.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe true progress begins with people who dare to stand up,
              think differently, and act responsibly.
            </p>
          </div>

          <div
            className="relative h-72 w-full rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <Image
              src="/globe.svg"
              alt="About"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section
        id="mission"
        className="bg-zinc-50 py-24"
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="mb-12 text-3xl md:text-4xl font-bold text-gray-900"
            data-aos="fade-up"
          >
            Our Mission
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div
              className="rounded-xl bg-white p-8 shadow hover:shadow-lg transition"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-people-group text-4xl text-orange-600 mb-4"></i>
              <h3 className="mb-3 text-xl font-semibold">Community</h3>
              <p className="text-gray-600">
                Strengthening communities through awareness and participation.
              </p>
            </div>

            <div
              className="rounded-xl bg-white p-8 shadow hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <i className="fa-solid fa-lightbulb text-4xl text-orange-600 mb-4"></i>
              <h3 className="mb-3 text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600">
                Encouraging new ideas to solve real societal problems.
              </p>
            </div>

            <div
              className="rounded-xl bg-white p-8 shadow hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <i className="fa-solid fa-scale-balanced text-4xl text-orange-600 mb-4"></i>
              <h3 className="mb-3 text-xl font-semibold">Integrity</h3>
              <p className="text-gray-600">
                Upholding values, transparency, and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="bg-orange-600 py-20 text-center text-white"
      >
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">
            Be a Part of the Change
          </h2>
          <p className="mb-8 text-lg text-orange-100">
            Join Arise Kerala and contribute to shaping a better future.
          </p>
          <Link
            href="#"
            className="inline-block rounded-full bg-white px-10 py-3 text-lg font-semibold text-orange-600 hover:bg-gray-100 transition"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-10 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <p className="mb-4">
            © {new Date().getFullYear()} Arise Kerala. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 text-xl">
            <Link href="#" className="hover:text-white">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link href="#" className="hover:text-white">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link href="#" className="hover:text-white">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
