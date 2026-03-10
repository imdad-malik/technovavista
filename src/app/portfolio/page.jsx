"use client"; // 👈 Only here

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PortfolioClient() {

  const services = [
    {
      title: "On-Page SEO Optimization",
      items: [
        "Keyword Research & Optimization",
        "Content Architecture & SEO",
        "Semantic & LLM Optimization",
        "Meta & Header Tag Optimization",
        "Internal Linking Strategies",
      ],
    },
    {
      title: "Technical SEO Optimization",
      items: [
        "Website Technical Audits",
        "Core Web Vitals & Speed Optimization",
        "Crawlability & Indexing Improvements",
        "Structured Data & Schema Implementation",
        "Advanced Internal Linking",
      ],
    },
    {
      title: "Off-Page SEO & Authority Building",
      items: [
        "High-Quality Backlink Acquisition",
        "Content Marketing & Outreach",
        "Social Signals Optimization",
        "Guest Posting & Brand Authority",
        "Local & International Link Building",
      ],
    },
  ];

  const ribbonTools = [
    { name: "Google", logo: "/google.png" },
    { name: "Ahrefs", logo: "/ahrefs.png" },
    { name: "SEMrush", logo: "/semrush.png" },
    { name: "SurferSEO", logo: "/surferseo.png" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-16">

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <motion.div
          initial={{ opacity:0, y:0 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Imdad Malik | Global Technical SEO & <br/>
            <span className="text-blue-500">
              AI Search Optimization Specialist 
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            I am a Global Technical SEO & AI Search Optimization Expert specializing in AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) strategies. I help international businesses, SaaS platforms, ecommerce stores, and enterprise brands increase organic traffic, improve search visibility, and dominate AI-powered search engines like Google, Bing, ChatGPT, and Gemini. My expertise includes advanced technical SEO audits, on-page optimization, off-page authority building, content architecture, semantic search, and AI-driven search strategies. Certified in Coursera and SurferSEO, I deliver measurable results that scale global organic growth and maximize ROI for businesses across competitive markets.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="https://wa.me/03003985807"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Contact on WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/imdad-malik/"
              className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity:0, scale:0.95 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.6 }}
          className="flex justify-center md:justify-end items-start"
        >
          <div className="w-[380px] h-[380px] relative">
            <Image
              src="/imdad-malik-seo-expert.jpg"
              alt="Imdad Malik SEO Expert"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* MOVING TOOL RIBBON */}
      <section className="mt-8 overflow-hidden">
        <div className="flex animate-scroll gap-10 items-center">
          {ribbonTools.concat(ribbonTools).map((tool, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6 py-4 rounded-xl">
              <Image
                src={tool.logo}
                width={200}  
                height={200} 
                alt={tool.name}
                className="object-contain"
              />
              <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mt-16 grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ scale:1.05 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-4">{service.title}</h2>
              <div className="flex mb-4">
                {Array.from({ length:5 }).map((_,i)=>(<FaStar key={i} className="text-yellow-400"/>))}
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {service.items.map((item, idx)=>(<li key={idx}>{item}</li>))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CERTIFICATIONS */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Certifications</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* COURSERA */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border flex flex-col justify-between">
            <Image
              src="/coursera-certificate.jpg"
              width={300}
              height={300}
              alt="Coursera SEO Certification"
              className="mx-auto rounded-lg"
            />
            <div className="mt-6 text-justify">
              <h4 className="text-xl font-semibold text-center">
                SEO Specialization – University of California, Davis (Coursera, 2025)
              </h4>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                Activities and societies: University of California, Davis Coursera Alumni – Engaged in SEO specialization alumni projects, collaborating on research, case studies, and industry discussions.
                <br/><br/>
                Successfully completed a globally recognized SEO specialization program, covering advanced keyword research, technical SEO, content optimization, and analytics. The program included hands-on projects and real-world case studies guided by academic SEO professionals.
                <br/><br/>
                This certification demonstrates a strong foundation in modern SEO techniques including on-page optimization, content structuring, SERP analysis, and performance measurement aligned with Google’s E-E-A-T standards.
                <br/><br/>
                <strong>Skills:</strong> International SEO Strategy, SGE & AI-Driven SEO.
              </p>
            </div>
          </div>

          {/* SURFER SEO */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border flex flex-col justify-between">
            <Image
              src="/surferseo-certificate.jpg"
              width={300}
              height={300}
              alt="Surfer SEO Certification"
              className="mx-auto rounded-lg"
            />
            <div className="mt-6 text-justify">
              <h4 className="text-xl font-semibold text-center">
                Surfer SEO Masterclass (2025)
              </h4>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                Activities and societies: Surfer SEO Masterclass.
                <br/><br/>
                Engaged in AI-driven content strategy projects, applying NLP and SERP analysis to optimize on-page content and develop scalable SEO workflows including keyword clustering strategies.
                <br/><br/>
                Completed alongside the SEO Specialization at University of California, Davis (Coursera, 2025), gaining advanced expertise in keyword research, technical SEO, content optimization, analytics, and AI/NLP-driven content strategy.
                <br/><br/>
                Participated in hands-on projects and real-world case studies including keyword mapping, topical authority building, SERP analysis, and scalable SEO workflows aligned with Google’s E-E-A-T standards.
                <br/><br/>
                <strong>Skills:</strong> On-Page SEO Optimization, AI & NLP Content Strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold">Grow Your Organic Traffic Globally</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Hire a global AI SEO specialist to scale your business with modern SEO strategies.
        </p>
        <a
          href="https://wa.me/03003985807"
          className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Start SEO Project
        </a>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </main>
  );
}