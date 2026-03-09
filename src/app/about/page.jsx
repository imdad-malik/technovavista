"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Typewriter animation
function Typewriter({ texts, speed = 70, pause = 1200 }) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && charIdx < texts[textIdx].length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), speed);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), speed / 2);
    } else if (!deleting && charIdx === texts[textIdx].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((textIdx + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  useEffect(() => {
    setDisplayed(texts[textIdx].substring(0, charIdx));
  }, [charIdx, textIdx, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 border-r-2 border-fuchsia-400 pr-1 animate-pulse">
      {displayed}
    </span>
  );
}

const showcaseProjects = [
  {
    id: 1,
    title: "AI Content Generator",
    desc: "Automates high-quality, SEO-optimized articles daily using advanced LLMs.",
    image: "/placeholders/project1.jpg",
  },
  {
    id: 2,
    title: "SEO Audit Dashboard",
    desc: "Real-time technical SEO audits with actionable AI-powered insights.",
    image: "/placeholders/project2.jpg",
  },
  {
    id: 3,
    title: "Keyword Research AI",
    desc: "Discovers trending keywords and content gaps using AI-driven analysis.",
    image: "/placeholders/project3.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section - Light Theme */}
      <section className="bg-white text-gray-900 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            <Typewriter
              texts={[
                "About TechNovaVista",
                "AI-Powered SEO for the Future",
                "Empowering Students & Freelancers",
              ]}
            />
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <strong>TechNovaVista</strong> is your go-to hub for AI-powered SEO, helping content creators, students, and freelancers grow with modern strategies, tools, and insights.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* New unique buttons */}
            <a
              href="/team"
              className="border-2 border-fuchsia-500 text-fuchsia-700 px-8 py-3 rounded-full font-semibold hover:bg-fuchsia-100 transition-all"
            >
              Meet Our Team
            </a>
            <a
              href="/mission"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section - Gray Background */}
      <section className="bg-gray-100 text-gray-900 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-white shadow-lg border">
            <h3 className="text-4xl font-bold text-yellow-500">50K+</h3>
            <p>Monthly Readers</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-lg border">
            <h3 className="text-4xl font-bold text-fuchsia-500">300+</h3>
            <p>Articles Published</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-lg border">
            <h3 className="text-4xl font-bold text-cyan-500">120+</h3>
            <p>AI Tools Reviewed</p>
          </div>
        </div>
      </section>

      {/* Project Showcase - Light Gray */}
      <section className="bg-gray-50 text-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-fuchsia-600">
            Our AI Projects & Tools
          </h2>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {showcaseProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full opacity-90"
                  />
                  <span className="absolute text-white text-2xl font-bold drop-shadow-lg">
                    {project.title[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-center font-medium">
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
