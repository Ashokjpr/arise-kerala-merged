"use client";
import Link from "next/link";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";



export default function RegisterPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.mypipeline.co.in/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center p-2 pt-10 md:p-15 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/classroom1.jpg')",
        backgroundSize: "1440px 600px",
        //  minHeight: "600px",
      }}
    >
      {/* text overlay */}
      {/* <div className="absolute inset-0   mt-7 md:hidden flex  justify-center">
      
      </div> */}

      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-b from-sky-100 to-blue-200">

          {/* CENTERED CONTENT */}
          <div className="flex flex-col items-center justify-center text-center flex-1 space-y-4 -mt-50">
            <h2 className="text-3xl font-bold text-blue-900">
              Welcome to Arise Medical Academy Jaipur
            </h2>



            <p className="text-blue-800 text-sm leading-relaxed max-w-md">
              Join Arise Medical Academy and begin your journey towards excellence
              in medical education with expert faculty and proven results.
            </p>

            <h2 className="group mt-10 text-3xl font-bold text-blue-900 flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105">
              Register Now
              <Icon
                icon="mdi:arrow-right"
                className="text-3xl font-bold  transition-transform duration-300 group-hover:translate-x-1"
              />
            </h2>

          </div>

          {/* SOCIAL ICONS */}
          <div className='flex items-center justify-center gap-15'>
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

          

        </div>


        {/* RIGHT SIDE */}
        <div className="  bg-gradient-to-b from-white to-sky-50 ">

          <div className=" rounded-xl border border-blue-100">
            <h2 className="md:hidden text-2xl mt-10 text-center font-bold text-blue-800  ">
              Register Now
            </h2>
            <iframe
              src="https://link.mypipeline.co.in/widget/form/HapRfceVhemVmPCKFdlA"
              title="Lead Form"
              className="w-full min-h-[1085px] border-0"
              // scrolling="yes"
            />
          </div>
        </div>
      </div>
    </section>
  );
}