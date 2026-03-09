"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  once = true,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: once });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration, delay },
      });
    }
  }, [inView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
