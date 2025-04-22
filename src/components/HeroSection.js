"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Grid configuration
  const gridSize = {
    rows: 10,
    cols: 10,
  };

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

  // Generate grid cells
  const renderGrid = () => {
    const cells = [];
    for (let i = 0; i < gridSize.rows * gridSize.cols; i++) {
      const row = Math.floor(i / gridSize.cols);
      const col = i % gridSize.cols;

      cells.push(
        <div
          key={i}
          className="border dark:border-secondary border-opacity-20 dark:border-opacity-20"
          style={{
            gridRow: row + 1,
            gridColumn: col + 1,
          }}
          onMouseEnter={() => setHoveredCell(i)}
          onMouseLeave={() => setHoveredCell(null)}>
          <motion.div
            className="h-full w-full bg-secondary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              backgroundColor:
                hoveredCell === i
                  ? "rgba(var(--color-secondary), 0.2)"
                  : hoveredCell === i - 1 ||
                    hoveredCell === i + 1 ||
                    hoveredCell === i - gridSize.cols ||
                    hoveredCell === i + gridSize.cols
                  ? "rgba(var(--color-secondary), 0.05)"
                  : "rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Effect for neighboring cells */}
          {(hoveredCell === i - 1 ||
            hoveredCell === i + 1 ||
            hoveredCell === i - gridSize.cols ||
            hoveredCell === i + gridSize.cols) && (
            <motion.div
              className="absolute inset-0 bg-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="relative h-screen">
      {/* Grid background */}
      <div
        className="absolute inset-0 grid z-0"
        style={{
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
          gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
        }}>
        {renderGrid()}
      </div>

      {/* Hero section positioned above grid */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-svh">
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
            className="text-5xl md:text-6xl lg:text-7xl mb-2 ml-24 md:ml-32"
            variants={itemVariants}>
            <span>Frontend</span>
          </motion.div>
          <motion.div
            className="text-5xl md:text-6xl lg:text-7xl ml-38 md:ml-48"
            variants={itemVariants}>
            <span>Developer</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
