"use client";

import Image from "next/image";
import Link from "next/link";
import "@fortawesome/free-brands-svg-icons";

type GalleryCardProps = {
  image: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

function GalleryCard({
  image,
  slug,
  title,
  description,
  tags,
}: GalleryCardProps) {
  return (
    <Link
      href={`/gallery/${slug}`}
      className="group relative block max-w-sm rounded overflow-hidden shadow-lg
  transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      {/* Image */}
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

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center
  bg-black/50 opacity-0 transition-opacity duration-300
  group-hover:opacity-100 pointer"
      >
        <h2 className="text-white font-bold text-xl mb-3 text-center px-2">
          {title}
        </h2>

        <button
          className="px-5 py-2 bg-white text-black text-sm font-semibold
    rounded-full shadow-md hover:bg-gray-100 transition"
        >
          View More
        </button>
      </div>
    </Link>
  );
}

export default GalleryCard;
