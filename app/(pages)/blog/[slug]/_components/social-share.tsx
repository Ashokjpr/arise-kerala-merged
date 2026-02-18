'use client';

import { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
  FaLink,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from 'react-share';

export function SocialShare({ title }: { title: string }) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const buttonClass =
    'h-10 w-10 flex items-center justify-center rounded bg-[#00023a] transition duration-300 ease-in-out transform hover:-translate-y-[5px] hover:-text-red';

  return (
    <div className="flex gap-2 relative">
      <FacebookShareButton url={url}>
        <div className={buttonClass}>
          <FaFacebook className="text-white text-lg" />
        </div>
      </FacebookShareButton>

      <LinkedinShareButton url={url} title={title}>
        <div className={buttonClass}>
          <FaLinkedin className="text-white text-lg" />
        </div>
      </LinkedinShareButton>

      <PinterestShareButton
        url={url}
        media="/images/blog-image.jpeg"
        description={title}
      >
        <div className={buttonClass}>
          <FaPinterest className="text-white text-lg" />
        </div>
      </PinterestShareButton>

      <TwitterShareButton url={url} title={title}>
        <div className={buttonClass}>
          <FaXTwitter className="text-white text-lg" />
        </div>
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <div className={buttonClass}>
          <FaWhatsapp className="text-white text-lg" />
        </div>
      </WhatsappShareButton>

      {/* Copy link */}
      <div className="relative">
        <button onClick={handleCopy} className={buttonClass}>
          <FaLink className="text-white text-lg" />
        </button>

        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2
            bg-black text-white text-xs px-2 py-1 rounded">
            Copied
          </span>
        )}
      </div>
    </div>
  );
}
