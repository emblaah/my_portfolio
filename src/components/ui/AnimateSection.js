"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AnimateSection({
  children,
  className = "",
  delay = 0.2,
  theshold = 0.15,
}) {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            controls.start("visible");
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: theshold,
      }
    );
    observer.observe(section);
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [controls, theshold, hasAnimated]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}>
      {children}
    </motion.section>
  );
}
