"use client";

import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      if (scrolledToBottom) {
        setShowFooter(true); // ✅ Only sets true, never false
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // ✅ Empty array = runs once only (no warning)

  if (!showFooter) return null;

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-background/50 backdrop-blur border-t z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} TechNovaVista. All rights reserved. — Created by{" "}
        <span className="font-medium text-primary">Imdad Malik</span>
      </div>
    </footer>
  );
};

export default Footer;
