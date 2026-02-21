import Image from "next/image";
import ContactForm from "./_components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Contact Us - Arise Medical Academy Jaipur",
    template: "%s | Arise Medical Academy Jaipur",
  },

  description: "Best FMGE Acedemy in Jaipur | Arise Medical Academy Jaipur",

  keywords: [
    "blog",
    "best medical academy in jaipur",
    "Arise Medical Academy Jaipur",
  ],

  alternates: {
    canonical: "/contact-us",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "Arise Medical Academy Jaipur",
    url: "/",
    images: [
      {
        url: "/images/contact-us.webp",
        width: 1200,
        height: 630,
        alt: "Arise Medical Academy Jaipur Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/contact-us.webp"],
  },

  metadataBase: new URL("http://localhost:3000/"),
};

function ContactUs() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff]">
        <div className="relative flex  items-start justify-center contact-banner">
          <Image
            className="w-full "
            src="/images/contact-us.webp"
            alt="Blogs"
            width="1400"
            height={300}
          />
          <div className="overlay container">
            <h1 className="fs-3">Contact Us</h1>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-aos="fade-left"
                data-aos-delay={150}>
            Want to Contact Us ?
          </h2>
          <p className="text-lg text-gray-600" data-aos="fade-right"
                data-aos-delay={150}>
            Here are few ways to get in touch with us.
          </p>
        </div>

        {/* CARD */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#02024d] to-[#000033] text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
              {/* LEFT CONTENT */}
              <div>
                <h3 className="text-3xl font-semibold mb-4" data-aos="fade-left"
                data-aos-delay={150}>Get in Touch</h3>

                <p className="text-white/80 mb-8 leading-relaxed" data-aos="fade-right"
                data-aos-delay={150}>
                  Give us a call or drop by anytime. We endeavor to answer all
                  inquiries within 24 hours on business days. We will be happy
                  to answer your questions.
                </p>

                <ul className="space-y-6">
                  {/* ADDRESS */}
                  <li className="flex items-start gap-4" data-aos="fade-up"
                data-aos-delay={150}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white" style={{padding:"20px"}}>
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Address:</h4>
                      <p className="text-white/80">
                        plot no -26, Tonk Rd, near Pushp Enclave, Krishna Vihar, Sector 5, Pratap Nagar, Jaipur, Rajasthan 302033
                      </p>
                    </div>
                  </li>

                  {/* EMAIL */}
                  <li className="flex items-start gap-4" data-aos="fade-up"
                data-aos-delay={300}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Email:</h4>
                      <p className="text-white/80">arisemedicalacademyrajasthan@gmail.com</p>
                    </div>
                  </li>

                  {/* PHONE */}
                  <li className="flex items-start gap-4" data-aos="fade-up"
                data-aos-delay={450}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                      📞
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Phone:</h4>
                      <p className="text-white/80">+91 9929113115</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* RIGHT MAP */}
              <div className="w-full h-[350px] md:h-full rounded-3xl overflow-hidden bg-white" data-aos="fade-left"
                data-aos-delay={300}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4419.178352999524!2d75.80940947611911!3d26.79823796499951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9689e3c5fdb%3A0xc7addeea9bef570f!2sArise%20Medical%20Academy%20Jaipur%20-%20FMGE%2F%20NEXT%20Coaching%20%7C%20MCI%20Training%20Institute!5e1!3m2!1sen!2sin!4v1770210025103!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default ContactUs;
