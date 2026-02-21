"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Icon } from "@iconify/react";

const testimonialData = [
      {
    imgSrc: "/images/ANESTHESIA.jpg",
    profession: "MBBS Graduate",
    comment:
      "Arise Jaipur provided excellent guidance and structured preparation that helped me clear FMGE confidently.",
    name: "Dr. Ananya S",
    rating: 4.5,
  },
  {
    imgSrc: "/images/ANESTHESIA.jpg",
    profession: "Medical Intern",
    comment:
      "The faculty and study materials are top-notch. Highly recommended for FMGE aspirants.",
    name: "Dr. Rahul M",
    rating: 5,
  },
  {
    imgSrc: "/images/ANESTHESIA.jpg",
    profession: "FMGE Aspirant",
    comment:
      "Daily tests and doubt sessions made all the difference in my preparation.",
    name: "Dr. Neha K",
    rating: 4,
  },
  {
    imgSrc: "/images/ANESTHESIA.jpg",
    profession: "MBBS Graduate",
    comment:
      "Arise Jaipur provided excellent guidance and structured preparation that helped me clear FMGE confidently.",
    name: "Dr. Ananya S",
    rating: 4.5,
  },
  {
    imgSrc: "/images/ANESTHESIA.jpg",
    profession: "Medical Intern",
    comment:
      "The faculty and study materials are top-notch. Highly recommended for FMGE aspirants.",
    name: "Dr. Rahul M",
    rating: 5,
  },
  {
    imgSrc: "/images/ANESTHESIA.jpg",
    profession: "FMGE Aspirant",
    comment:
      "Daily tests and doubt sessions made all the difference in my preparation.",
    name: "Dr. Neha K",
    rating: 4,
  },
];

const OurStudents = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 600,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <div className="flex gap-1">
        {[...Array(full)].map((_, i) => (
          <Icon
            key={`full-${i}`}
            icon="tabler:star-filled"
            className="text-yellow-500 text-lg"
          />
        ))}
        {half && (
          <Icon icon="tabler:star-half-filled" className="text-yellow-500 text-lg" />
        )}
        {[...Array(empty)].map((_, i) => (
          <Icon
            key={`empty-${i}`}
            icon="tabler:star-filled"
            className="text-gray-300 text-lg"
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonial" className="max-w-full">
      <Image
        src="/images/rajesthan-bg2.png"
        alt="Background Image"
        width={1200}
        height={400}
        className="absolute  w-screen h-[482px] object-cover opacity-100"
      />
       
      <div className=" relative bg-white/70 z-10 container mx-auto max-w-7xl pt-10 md:px-10 ">
        <h2 className="text-2xl md:text-5xl text-blue-900 font-semibold text-center mb-10 text-hover">
          Hear From Our Students​
          <hr/>
        </h2>
        

        <Slider {...settings}>
          {testimonialData.map((item, i) => (
            <div key={i} className="px-3 " 
             data-aos="fade-up"
            data-aos-delay={i * 100}
            >
              <div className="bg-white md:h-[250px]  rounded-2xl shadow-xl p-6 relative my-10">
                
                {/* Avatar */}
                <div className="absolute -top-10 left-6">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-full  border-4 border-yellow-100 object-cover"
                  />
                </div>

                {/* Content */}
                <p className="text-gray-600 mt-10 mb-6">
                  “{item.comment}”
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.profession}</p>
                  </div>
                  {renderStars(item.rating)}
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurStudents;
