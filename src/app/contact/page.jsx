"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaPinterest,
} from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null); // ✅ added state

  const sendEmail = async (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID,
        {
          to_email: e.target.user_email.value,
          to_name: e.target.user_name.value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      form.current.reset();
      recaptchaRef.current.reset();
      setCaptchaValue(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('/images/contact-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-lg" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Info + Socials + Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-gray-800 dark:text-gray-100"
          >
            <div className="bg-white/20 dark:bg-black/20 p-6 rounded-2xl backdrop-blur-md shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <FaEnvelope className="text-xl text-blue-600 dark:text-blue-400" />
                <span>info@technovavista.com</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <FaPhoneAlt className="text-xl text-pink-600 dark:text-pink-400" />
                <span>+92 300 3985807</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <FaMapMarkerAlt className="text-xl text-green-600 dark:text-green-400" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex gap-6 text-2xl">
                <a href="https://www.linkedin.com/in/imdad-malik/" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 hover:scale-110 transition transform"><FaLinkedin /></a>
                <a href="https://www.instagram.com/imdadmalikseoexpert/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition transform"><FaInstagram /></a>
                <a href="https://x.com/imdadmalikseo" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:scale-110 transition transform"><FaTwitter /></a>
                <a href="https://web.facebook.com/imdadmalikseoexpert" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition transform"><FaFacebook /></a>
                <a href="https://www.pinterest.com/imdadmalikseoexpert/" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:scale-110 transition transform"><FaPinterest /></a>
                <a href="https://wa.me/03003985807" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition transform"><FaWhatsapp /></a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg mt-6">
              <iframe
                src="https://maps.google.com/maps?q=Karachi,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/20 dark:bg-black/20 p-8 rounded-2xl backdrop-blur-md shadow-lg"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full bg-white/10 dark:bg-black/10 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full bg-white/10 dark:bg-black/10 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full bg-white/10 dark:bg-black/10 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(value) => setCaptchaValue(value)}
                ref={recaptchaRef}
                className="mt-4"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading
                    ? "bg-gray-400"
                    : "bg-gradient-to-r from-blue-600 to-purple-600"
                  } text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center text-lg text-gray-700 dark:text-gray-300"
        >
          <p>
            At <span className="font-semibold text-blue-600 dark:text-blue-400">TechNovaVista</span>, we don’t just build websites — we create digital experiences that convert. Reach out today and discover how we can grow your business with AI-powered SEO and world-class design.
          </p>
        </motion.div>
      </motion.div>

      <ToastContainer position="top-right" />
    </section>
  );
};

export default Contact;
