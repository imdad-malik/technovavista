"use client";
import React, { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const blogs = [
     //4th Article on dated 03 Augest 2025 E-commerce SEO Marketing
  {
    id: 4,
    title: "How to Use AEO & GEO to Get Featured in Google SGE and ChatGPT Answers (2025 Guide)",
    slug: "aeo-geo-google-sge",
    excerpt:
      "Master AEO & GEO strategies to dominate Google SGE and ChatGPT answers. Complete blueprint for Answer Engine Optimization and Generative Engine Optimization success.",
    image: "https://images.pexels.com/photos/4126712/pexels-photo-4126712.jpeg",
  }, 
   //3rd Article on dated 28 july 2025 E-commerce SEO Marketing
  {
    id: 3,
    title: "E-commerce SEO Marketing: Complete 2025",
    slug: "e-commerce-seo-marketing",
    excerpt:
      "Master e-commerce SEO marketing with proven techniques, strategies, and expert tips to increase organic traffic and drive sales in 2025. Complete guide with real-world examples.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
  }, 
  //2nd Article on dated 23 july 2025 AI Powered SEO
  {
    id: 2,
    title: "AI SEO & Ecommerce Marketing Guide 2025 | Expert Strategies",
    slug: "ai-seo-ecommerce-2025",
    excerpt:
      "Discover cutting-edge AI SEO tools and ecommerce marketing strategies that drive results. Expert insights on search optimization, PPC, and digital growth tactics.",
    image: "https://images.pexels.com/photos/5614119/pexels-photo-5614119.jpeg",
  },
  //1st Article on dated 22 july 2025 ai transforming SEO
  {
    id: 1,
    title: "How AI is Transforming SEO for Students",
    slug: "ai-transforming-seo-2025",
    excerpt:
      "Explore how AI tools help students automate research, optimize content, and rank faster in search engines.",
    image: "https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg",
  },
  
];

export default function BlogsPage() {
  const [globalDateTime, setGlobalDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      dateStyle: "medium",
      timeStyle: "short",
      hour12: true,
    }).format(now);
    setGlobalDateTime(formatted);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0b0b0f] text-gray-900 dark:text-white py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-400 text-transparent bg-clip-text mb-4 animate-fade-in">
          AI SEO Articles for Students & Freelancers
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8">
          Explore the future of AI-powered content — fresh, smart, and optimized daily.
        </p>
        <hr className="border-t border-gray-300 dark:border-white/10 mb-8 w-1/3 mx-auto" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="flex flex-col bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 sm:h-40 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                {globalDateTime && (
                  <p className="text-sm font-medium text-cyan-600 dark:text-cyan-300 mb-1">
                    {globalDateTime}
                  </p>
                )}
                <h2 className="text-lg font-bold mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-white/80 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="w-full flex justify-center">
                  <Link
                    href={`/blogsposts/${blog.slug}`}
                    className="inline-block px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-center"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
