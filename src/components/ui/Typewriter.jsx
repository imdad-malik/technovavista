"use client";
import React, { useEffect, useState } from "react";

export default function Typewriter({ texts, speed = 80, pause = 1200 }) {
  const [displayed, setDisplayed] = useState("");
  const [mounted, setMounted] = useState(false);
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

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

    setDisplayed(texts[textIdx].slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause, mounted]);

  if (!mounted) return null; // ← prevents hydration mismatch

  return (
    <span className="whitespace-nowrap border-r-2 dark:border-white border-black pr-1 animate-pulse">
      {displayed}
    </span>
  );
}
