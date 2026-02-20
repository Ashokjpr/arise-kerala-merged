"use client";

import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  image: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  index:number;
};

function BlogCard({ image, slug, title, description, tags,index }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block max-w-sm rounded overflow-hidden shadow-lg 
  transition-all duration-300 hover:shadow-xl hover:-translate-y-1 pointer"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      {/* Image wrapper (clips zoom) */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={250}
          className="w-full transition-transform duration-300 ease-in-out
                 group-hover:scale-110"
        />
      </div>

      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1
        text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default BlogCard;
