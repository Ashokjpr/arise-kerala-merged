import GalleryCard from "./_components/GalleryCard";
import { GalleryData } from "./_components/GalleryData";
import "../blog/_components/style.css";
import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Blog Page - Arise Medical Academy Jaipur",
    template: "%s | Arise Medical Academy Jaipur",
  },

  description: "Arise Medical Academy Jaipur",

  keywords: [
    "blog",
    "best medical academy in jaipur",
    "Arise Medical Academy Jaipur",
  ],

  alternates: {
    canonical: "/blog",
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
        url: "/images/blog-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Arise Medical Academy Jaipur Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/blog-image.jpeg"],
  },

  metadataBase: new URL("http://localhost:3000/"),
};

function Gallery() {
  return (
    <div className="relative bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff]">
          <div className="relative flex  items-start justify-center blog-banner">
            <Image
                    className="w-full "
                    src="/images/blog-image.jpeg"
                    alt="Blogs"
                    width="1400"
                    height={350}
                  />
                  <div className="overlay">
                    <h1 className="fs-3">Gallery</h1>
                  </div>
            
          </div>
          <div className="flex items-start justify-center  my-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GalleryData.map((blog, index) => (
              <div key={blog.id} data-aos="fade-up"
                data-aos-delay={index * 200}>
                <GalleryCard
                image={blog.image}
                slug={blog.slug}
                title={blog.title}
                description={blog.description}
                tags={blog.tags}
              />
              </div>
            ))}
          </div>
          </div>
        </div>
  );
}

export default Gallery;
