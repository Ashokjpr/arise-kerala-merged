"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

function Footer() {
  const headerData = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Registration Fees", href: "/registration-fees" },
    { label: "Register Now", href: "/register" },
  ];

  const otherLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Courses", href: "/courses" },
  ];

  return (
    <footer className="relative bg-[#e9ecf7]/20 text-black pt-10 w-full overflow-hidden">

      {/* Jaipur Skyline Background */}
      <div
        className="absolute inset-0 bg-repeat-x bg-bottom opacity-15 pointer-events-none
        bg-cover md:bg-repeat-x md:bg-auto"
        style={{
          backgroundImage: "url('/images/rajesthan-bg2.png')",
          // backgroundSize: "auto",
        }}
      />

      <div className="relative container mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-wrap justify-around gap-y-10 gap-x-10 mx-auto text-center lg:text-left">

          {/* Logo + Social */}
          <div className="basis-full lg:basis-[15%] flex flex-col items-center lg:items-start">
            <Image src="/arise-logo.png" alt="Logo" width={150} height={150} />

            <div className="flex gap-4 mt-4">
              <Link href="https://www.facebook.com/AriseMedAcademy" className="text-2xl md:text-3xl text-white rounded-md bg-[#2540ae]">
                <Icon icon="tabler:brand-facebook" />
              </Link>
              <Link href="https://x.com/arisemedical1" className="text-2xl md:text-3xl text-white rounded-md bg-black">
                <Icon icon="tabler:brand-x" />
              </Link>
              <Link href="https://www.instagram.com/arisejaipur/" className="text-white rounded-md text-2xl md:text-3xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                <Icon icon="tabler:brand-instagram" />
              </Link>
            </div>

            {/* <div className="flex gap-4 mt-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.arisemobile.app"
                target="_blank"
              >
                <Image
                  src="/images/android.png"
                  alt="Android App"
                  width={120}
                  height={40}
                  className="min-h-[35px]"
                />
              </Link>

              <Link
                href="https://apps.apple.com/in/app/arise-medical-academy/id1581256443"
                target="_blank"
              >
                <Image
                  src="/images/apple.png"
                  alt="Apple App"
                  width={120}
                  height={40}
                  className="min-h-[35px]"
                />
              </Link>
            </div> */}
          </div>

          {/* Links */}
          <div className="md:basis-[15%]">
            <h3 className="mb-4 text-xl md:text-2xl font-medium">Links</h3>
            <ul className="space-y-2">
              {headerData.map((item, index) => (
                <li key={index} className="text-black/80 hover:text-black">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div className="md:basis-[15%]">
            <h3 className="mb-4 text-xl md:text-2xl font-medium">Other</h3>
            <ul className="space-y-2">
              {otherLinks.map((item, i) => (
                <li key={i} className="text-black/80 hover:text-black">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl md:text-2xl font-medium">Get In Touch</h3>

            <Link
              href="tel:+919929113115"
              className="flex items-center gap-2 hover:text-green-700 transition"
            >
              <Icon icon="tabler:phone" className="text-xl md:text-2xl" />
              <span className="text-black/80 text-sm md:text-base">
                +91 99291 13115
              </span>
            </Link>

            <Link
              href="mailto:info@arisemedicalacademy.com"
              className="flex items-center gap-2 mt-3 hover:text-green-700 transition"
            >
              <Icon icon="tabler:mail" className="text-xl md:text-2xl" />
              <span className="text-black/80 text-sm md:text-base">
                info@arisemedicalacademy.com
              </span>
            </Link>

            <Link
              href="https://maps.app.goo.gl/L8STX88Bf25zAabX6"
              target="_blank"
              className="flex items-center gap-0.5 mt-3 hover:text-green-700 transition"
            >
              <Icon icon="tabler:brand-google-maps" className="text-6xl md:text-3xl mt-1" />
              <span className="text-black/80 text-sm text-start ed max-w-sm">
                Plot no -26, Tonk Rd, near Pushp Enclave, Krishna Vihar,
                Sector 5, Pratap Nagar, Jaipur, Rajasthan 302033
              </span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-10 flex flex-col lg:flex-row items-center justify-around gap-4 text-center text-sm bg-[#2540ae] text-white py-2">
        <p>
          ©2026 All Rights Reserved by{" "}
          <Link href="/">arisemedicalacademyjaipur.com</Link>
        </p>

        <div className="flex gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
