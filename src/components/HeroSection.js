"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  // State to control the visibility of the scroll indicator
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  // Ref to the glow layer
  const glowLayerRef = useRef(null);

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  // Item variants for the staggered effect
  const itemVariants = {
    hidden: {
      opacity: 1,
      y: -20,
    },
    visible: {
      opacity: 30,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    // Set the mounted state to true after the component mounts
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Check if the component is mounted before adding event listeners
    if (!isMounted) return;

    // Function to handle mouse movement
    const handleMouseMove = (e) => {
      if (glowLayerRef.current) {
        const x = e.clientX;
        const y = e.clientY;

        glowLayerRef.current.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.9) 0%, transparent 30%)`;
        glowLayerRef.current.style.WebkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.9) 0%, transparent 30%)`;
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScrollForFade = 100;

      if (scrollPosition <= maxScrollForFade) {
        const newOpacity = 1 - scrollPosition / maxScrollForFade;
        setScrollOpacity(newOpacity);
      } else {
        setScrollOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  return (
    <>
      {/* The faint background grid */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-100 h-fit "
        style={{
          backgroundImage: `
            linear-gradient(var(--primary-text) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary-text) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          opacity: 0.05,
        }}
      />

      {/* The glow layer that will highlight the grid when hovering */}
      <div
        ref={glowLayerRef}
        className="absolute inset-0 pointer-events-auto transition-all duration-100 h-[85vh]"
        style={{
          backgroundImage: `
            linear-gradient(var(--secondary) 2px, transparent 1px),
            linear-gradient(90deg, var(--secondary) 2px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          maskImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, transparent 80%)",
          opacity: 0.7,
        }}
      />
      {/* The main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[90vh] w-full">
        <motion.div
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.div
            className="text-5xl md:text-6xl lg:text-7xl mb-2"
            variants={itemVariants}>
            <span>Embla</span>
          </motion.div>
          <motion.div
            className="text-5xl md:text-6xl lg:text-7xl mb-2 ml-12 md:ml-16"
            variants={itemVariants}>
            <span>Andersson</span>
          </motion.div>
          <motion.div
            className="text-secondary text-4xl md:text-6xl lg:text-7xl mb-2 ml-24 md:ml-32"
            variants={itemVariants}>
            <span>Frontend</span>
          </motion.div>
          <motion.div
            className="text-secondary text-4xl md:text-6xl lg:text-7xl ml-38 md:ml-48"
            variants={itemVariants}>
            <span>Developer</span>
          </motion.div>
        </motion.div>
        {/* Scroll indicator */}

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-sm text-primary-text flex flex-col items-center opacity-70"
          variants={itemVariants}
          style={{ opacity: scrollOpacity * 0.7 }}>
          <p>Scroll down to see more</p>
          <div className="mt-2">
            <svg
              className="animate-bounce w-2 h-2 bg-secondary rounded-full"
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
