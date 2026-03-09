"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe, FaMapMarkerAlt, FaShoppingCart, FaCogs, FaRobot,
  FaMicrophone, FaChartLine, FaRocket, FaLaptopCode, FaLightbulb,
  FaWrench, FaBullhorn, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaPinterest,
} from "react-icons/fa";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Typewriter from "@/components/ui/Typewriter";
import ChatWidget from "@/components/ui/ChatWidget";
import { useTheme } from "next-themes";

const TYPING_TEXTS = [
  "AI-Powered SEO Agency",
  "Daily AI-Generated Articles",
  "Boost Your Rankings with TechNovaVista",
];

const seoServices = [
  { title: "International SEO", icon: <FaGlobe className="text-3xl text-blue-500" />, desc: "Expand your reach globally with multilingual AI optimization.", color: "from-blue-200/60 to-cyan-100/40 dark:from-blue-400/60 dark:to-cyan-300/40" },
  { title: "Local SEO", icon: <FaMapMarkerAlt className="text-3xl text-pink-500" />, desc: "Conquer local listings with AI-enhanced map and reviews strategy.", color: "from-pink-200/60 to-fuchsia-100/40 dark:from-pink-400/60 dark:to-fuchsia-300/40" },
  { title: "E-Commerce SEO", icon: <FaShoppingCart className="text-3xl text-green-500" />, desc: "Smart schema and product optimization using AI tools.", color: "from-green-200/60 to-emerald-100/40 dark:from-green-400/60 dark:to-emerald-300/40" },
  { title: "Technical SEO", icon: <FaCogs className="text-3xl text-yellow-500" />, desc: "Fix crawl issues, speed, and structure with AI audits.", color: "from-yellow-200/60 to-orange-100/40 dark:from-yellow-400/60 dark:to-orange-300/40" },
  { title: "Content AI SEO", icon: <FaRobot className="text-3xl text-purple-500" />, desc: "Create and optimize content using powerful AI models.", color: "from-purple-200/60 to-indigo-100/40 dark:from-purple-400/60 dark:to-indigo-300/40" },
  { title: "Voice Search SEO", icon: <FaMicrophone className="text-3xl text-red-500" />, desc: "Target voice assistants and conversational queries.", color: "from-red-200/60 to-pink-100/40 dark:from-red-400/60 dark:to-pink-300/40" },
  { title: "AI Analytics", icon: <FaChartLine className="text-3xl text-teal-500" />, desc: "Real-time dashboards with predictive analytics.", color: "from-teal-200/60 to-blue-100/40 dark:from-teal-400/60 dark:to-blue-300/40" },
  { title: "Growth Hacking SEO", icon: <FaRocket className="text-3xl text-orange-500" />, desc: "Hack organic growth using AI-based trend analysis.", color: "from-orange-200/60 to-yellow-100/40 dark:from-orange-400/60 dark:to-yellow-300/40" },
  { title: "AI Website Audits", icon: <FaLaptopCode className="text-3xl text-indigo-500" />, desc: "Full-page AI scanning and automated fixes.", color: "from-indigo-200/60 to-violet-100/40 dark:from-indigo-400/60 dark:to-violet-300/40" },
  { title: "Creative Optimization", icon: <FaLightbulb className="text-3xl text-yellow-400" />, desc: "AI-enhanced creatives and banners for SEO campaigns.", color: "from-yellow-100/60 to-orange-100/40 dark:from-yellow-200/60 dark:to-orange-200/40" },
  { title: "Tool Integration", icon: <FaWrench className="text-3xl text-gray-500" />, desc: "Integrate AI tools like GPT, Surfer, Frase, Jasper.", color: "from-gray-100/60 to-slate-100/30 dark:from-gray-300/60 dark:to-slate-400/30" },
  { title: "AI Influencer SEO", icon: <FaBullhorn className="text-3xl text-rose-400" />, desc: "Boost mentions, shares, and authority using AI insights.", color: "from-rose-200/60 to-pink-100/40 dark:from-rose-300/60 dark:to-pink-200/40" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setHasMounted(true);
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <main className="flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <AnimatePresence>
        {loading && (
          <motion.div
            className={`fixed inset-0 z-[9999] flex items-center justify-center ${isDark ? "bg-black/80" : "bg-white/80"} backdrop-blur-2xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className={`rounded-full w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center ${isDark ? "bg-white/10 border border-white/20" : "bg-black/10 border border-black/20"} shadow-2xl backdrop-blur-lg`}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
              <motion.h1
                className={`text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent ${isDark ? "bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300" : "bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400"}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                TechNovaVista
              </motion.h1>
              <motion.p
                className="mt-2 text-sm md:text-lg text-white/80 dark:text-white/60"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                CEO: Imdad Malik
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Hero Section */}
          <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 blur-[3px]" src="bg-blogs.mp4" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 dark:from-black/40 dark:via-black/20 dark:to-black/10 z-10 backdrop-blur-md" />
            <div className="relative z-20 flex flex-col items-center justify-center px-6 py-16 w-full max-w-4xl rounded-3xl bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 text-center drop-shadow-lg mb-6">
                Welcome to <span className="text-black dark:text-white">TechNovaVista</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
                <Typewriter texts={TYPING_TEXTS} />
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 text-center max-w-2xl mb-8">
                We are an AI-driven SEO agency publishing daily, high-quality articles to help you dominate search rankings and stay ahead in the digital world.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap justify-center mb-6">
                <a href="#articles" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">Explore Articles</a>
                <a href="/contact" className="bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/30 text-black dark:text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-black/20 dark:hover:bg-white/20 transition">Contact Us</a>
              </div>

              {/* Social Links Below Buttons */}
              <div className="flex space-x-6 mt-2">
                <a href="https://www.linkedin.com/in/imdad-malik/" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 hover:scale-110 transition transform text-2xl"><FaLinkedin /></a>
                <a href="https://www.instagram.com/imdadmalikseoexpert/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition transform text-2xl"><FaInstagram /></a>
                <a href="https://x.com/imdadmalikseo" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:scale-110 transition transform text-2xl"><FaTwitter /></a>
                <a href="https://web.facebook.com/imdadmalikseoexpert" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition transform text-2xl"><FaFacebook /></a>
                <a href="https://www.pinterest.com/imdadmalikseoexpert/" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:scale-110 transition transform text-2xl"><FaPinterest /></a>
                <a href="https://wa.me/03003985807" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition transform text-2xl"><FaWhatsapp /></a>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-4 bg-white dark:bg-neutral-900 w-full">
            <div className="max-w-5xl mx-auto text-center">
              <FadeInOnScroll delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Why Choose <span className="text-cyan-500">TechNovaVista</span>?
                </h2>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We merge the power of AI and real SEO strategies to skyrocket your search visibility with ease and intelligence.
                </p>
              </FadeInOnScroll>
            </div>
          </section>

          {/* Services Section */}
          <section className="bg-gray-50 dark:bg-black py-16 px-4 transition-colors w-full">
            <div className="max-w-6xl mx-auto">
              <FadeInOnScroll delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-10 drop-shadow-lg">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400">
                    Our AI-Powered SEO Services
                  </span>
                </h2>
              </FadeInOnScroll>
              <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {seoServices.map((service, index) => (
                  <FadeInOnScroll key={service.title} delay={index * 0.1}>
                    <div
                      className={`group relative flex flex-col justify-between items-start p-6 min-h-[260px] rounded-2xl shadow-xl bg-gradient-to-br ${service.color} backdrop-blur-md border border-black/10 dark:border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tr overflow-hidden`}
                    >
                      <div className="relative z-10 flex items-center mb-4">
                        {service.icon}
                        <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </span>
                      </div>
                      <p className="relative z-10 text-gray-800 dark:text-white/90 font-medium text-justify">
                        {service.desc}
                      </p>
                      <span className="relative z-10 mt-4 block h-1 w-0 group-hover:w-2/3 transition-all duration-500 bg-gradient-to-r from-black/60 to-black/0 dark:from-white/60 dark:to-white/0 rounded-full"></span>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="w-full py-20 px-4">
            <FadeInOnScroll delay={0.1}>
              <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-10">
                Premium AI SEO Plans
              </h2>
            </FadeInOnScroll>
            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {[
                {
                  title: "Basic Plan",
                  price: "$350",
                  features: [
                    "Up to 10 AI-optimized Keywords",
                    "On-Page Optimization",
                    "Smart AI Content Suggestions",
                    "Monthly Progress Report",
                    "Email Support",
                  ],
                },
                {
                  title: "Standard Plan",
                  price: "$699",
                  features: [
                    "30 AI-Enhanced Keywords",
                    "Technical & On-Page SEO",
                    "AI Content Generation",
                    "Competitor & Keyword Gap Analysis",
                    "Bi-Weekly Performance Updates",
                  ],
                },
                {
                  title: "Premium Plan",
                  price: "$1,199",
                  features: [
                    "Unlimited AI Keyword Research",
                    "Full Technical, On & Off-Page SEO",
                    "AI-Powered Content Strategy",
                    "Market & Competitor Intelligence",
                    "Weekly Reports + Live Consultations",
                    "24/7 Priority Client Support",
                  ],
                },
              ].map((plan, index) => (
                <FadeInOnScroll key={plan.title} delay={index * 0.15}>
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between h-full transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{plan.title}</h3>
                      <p className="text-3xl font-extrabold text-blue-600 dark:text-cyan-400 mb-4">{plan.price}</p>
                      <ul className="mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500">✔</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full mt-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 transition-all">
                      Choose {plan.title.split(" ")[0]}
                    </button>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </section>

          {/* Chat Widget */}
          <ChatWidget />
        </>
      )}
    </main>
  );
}
