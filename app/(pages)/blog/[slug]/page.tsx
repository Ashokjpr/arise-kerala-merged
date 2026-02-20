import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogBySlug } from "../_data/blogs";
import { ContactForm } from "./_components/contact-form";
import { SocialShare } from "./_components/social-share";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

/* ---------------- METADATA ---------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Arise Medical Academy Jaipur",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `/blog/${blog.slug}`;

  return {
    /* =======================
       BASIC SEO
    ======================== */
    title: {
      default: blog.title.slice(0,100),
      template: "%s | Arise Medical Academy Jaipur",
    },
    description: blog.description.slice(0, 200),
    keywords: blog.tags,
    authors: [{ name: blog.author }],
    creator: blog.author,
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
      title: blog.title.slice(0,100),
      description: blog.description.slice(0, 200),
      url: canonicalUrl,
      siteName: "Arise Medical Academy Jaipur",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      publishedTime: blog.publishDate,
      authors: [blog.author],
    },

    /* =======================
       TWITTER
    ======================== */
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },

    /* =======================
       BASE URL
    ======================== */
    metadataBase: new URL("https://arisejaipur.com"),
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <main className="min-h-screen w-full mx-auto px-2 sm:px-4 py-4 relative">
      <div className="min-h-screen max-w-6xl mx-auto relative z-0 px-3" >
        <h1 className="z-100 mb-16 mt-4 text-xl lg:text-3xl max-w-5xl mx-auto font-bold tracking-tight text-primary text-center text-[#043885]">
          {blog.title}
        </h1>
        <header className="container">
          <div className="space-y-1">
            <div className="text-muted-foreground scroll-smooth sm:px-8 p-0">
              {new Date(blog.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              &nbsp; • {blog.author}
            </div>
            {/* <h1 className="text-xl lg:text-3xl font-bold tracking-tight">
                {article?.title}
              </h1> */}
          </div>
        </header>
        <main className="container py-6 scroll-smooth sm:px-8 p-0 sm:w-full ">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            {/* Left Column */}
            <div className="space-y-8">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="rounded-lg"
              />

              <p className="prose prose-gray max-w-none dark:prose-invert">
                {blog.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-200 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <Card>
                <CardContent className="px-2 py-4">
                  <h3 className="font-medium text-lg md:text-xl mb-2">
                    Share:
                  </h3>
                  <SocialShare title={blog.title} />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-4">
                  <h3 className="font-medium text-lg md:text-2xl text-secondary text-center font-manrope tracking-normal">
                    Send Us A Message
                  </h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
