"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
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
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div >
      <div className="flex items-center justify-center h-screen">
        <motion.div
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.div
            className="text-3xl md:text-5xl mb-2"
            variants={itemVariants}>
            <span>Embla</span>
          </motion.div>
          <motion.div
            className="text-3xl md:text-5xl mb-2 ml-8 md:ml-16"
            variants={itemVariants}>
            <span>Andersson</span>
          </motion.div>
          <motion.div
            className="text-3xl md:text-5xl  ml-16 md:ml-32"
            variants={itemVariants}>
            <span>Frontend Developer</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Main text content */}
    </div>
  );
}

{
  /* <div className="text-center px-8 md:px-16 w-full max-w-4xl">
  <h1>
    <div className="text-5xl md:text-7xl opacity-90 mb-2">Hello</div>
    <div className="text-7xl md:text-9xl opacity-90 leading-tight">
      my name
    </div>
    <div className="text-7xl md:text-9xl opacity-90 leading-tight">
      is <span className="italic text-8xl md:text-10xl">Embla</span>
    </div>
    <div className="text-3xl md:text-4xl opacity-80 mt-4">
      a Frontend Developer
    </div>
  </h1>
</div> */
}
