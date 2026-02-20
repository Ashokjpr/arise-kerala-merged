import { notFound } from "next/navigation";
import "../../blog/_components/style.css";
import Image from "next/image";
import { getGalleryBySlug } from "../_data/gallery";
import Collage from "./_components/collage";
import type { Metadata } from "next";

/* ---------------- METADATA ---------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    return {
      title: "Blog Not Found | Arise Medical Academy Jaipur",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `/gallery/${gallery.slug}`;

  return {
    /* =======================
       BASIC SEO
    ======================== */
    title: {
      default: gallery.title.slice(0,100),
      template: "%s | Arise Medical Academy Jaipur",
    },
    description: gallery.description.slice(0,200),
    keywords: gallery.tags,
    publisher: "Arise Medical Academy Jaipur",

    /* =======================
       CANONICAL
    ======================== */
    alternates: {
      canonical: canonicalUrl,
    },

    /* =======================
       ROBOTS
    ======================== */
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

    /* =======================
       OPEN GRAPH (Facebook, LinkedIn)
    ======================== */
    openGraph: {
      type: "article",
      title: gallery.title.slice(0,100),
      description: gallery.description.slice(0, 200),
      url: canonicalUrl,
      siteName: "Arise Medical Academy Jaipur",
      images: [
        {
          url: gallery.image,
          width: 1200,
          height: 630,
          alt: gallery.title,
        },
      ],
    //   publishedTime: gallery.publishDate,
    },

    /* =======================
       TWITTER
    ======================== */
    twitter: {
      card: "summary_large_image",
      title: gallery.title,
      description: gallery.description,
      images: [gallery.image],
    },

    /* =======================
       BASE URL
    ======================== */
    metadataBase: new URL("https://arisejaipur.com"),
  };
}

export default async function Gallery({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap
  const gallery = getGalleryBySlug(slug);
// console.log('gallery data',gallery);
  if (!gallery) notFound();

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
         <Collage></Collage>
        </div>
  );
}

// export default Gallery;
