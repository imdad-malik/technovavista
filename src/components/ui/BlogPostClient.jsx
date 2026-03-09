"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function BlogPostClient({ title, description, image, content }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: "/icons/facebook.svg",
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    },
    {
      name: "Twitter",
      icon: "/icons/twitter.svg",
      url: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`,
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`,
    },
    {
      name: "WhatsApp",
      icon: "/icons/whatsapp.svg",
      url: `https://wa.me/?text=${currentUrl}`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">{description}</p>

      {image && (
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="rounded-lg mb-8 w-full object-cover"
        />
      )}

      <div
        className="prose max-w-none prose-img:rounded-md prose-a:text-blue-600 dark:prose-invert prose-video:w-full prose-video:h-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Share this article:</h3>
        <div className="flex space-x-4">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share on ${platform.name}`}
            >
              <Image
                src={platform.icon}
                alt={platform.name}
                width={32}
                height={32}
                className="hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
