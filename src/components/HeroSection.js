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

      // Check if this cell is the hovered one or adjacent to it
      const isHovered = hoveredCell === i;
      const isAdjacent =
        hoveredCell === i - 1 ||
        hoveredCell === i + 1 ||
        hoveredCell === i - gridSize.cols ||
        hoveredCell === i + gridSize.cols;

      cells.push(
        <motion.div
          key={i}
          className={`border dark:border-secondary border-opacity-20 dark:border-opacity-20 hover:bg-text-secondary hover:bg-opacity-10 rounded-lg`}
          style={{
            gridRow: row + 1,
            gridColumn: col + 1,
          }}
          onMouseEnter={() => setHoveredCell(i)}
          onMouseLeave={() => setHoveredCell(null)}
          animate={{
            backgroundColor: isHovered
              ? "var(--secondary)"
              : isAdjacent
              ? "var(--secondary)"
              : "transparent",
            opacity: isHovered ? 0.3 : isAdjacent ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
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
        }}
        onMouseEnter={() =>
          document.querySelector(".grid").classList.add("grid-active")
        }
        onMouseLeave={() =>
          document.querySelector(".grid").classList.remove("grid-active")
        }>
        {renderGrid()}
      </div>

      {/* Hero section positioned above grid */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <motion.div
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.div
            className="text-6xl md:text-6xl lg:text-7xl mb-2"
            variants={itemVariants}>
            <span>Embla</span>
          </motion.div>
          <motion.div
            className="text-6xl md:text-6xl lg:text-7xl mb-2 ml-12 md:ml-16"
            variants={itemVariants}>
            <span>Andersson</span>
          </motion.div>
          <motion.div
            className="text-text-secondary text-5xl md:text-6xl lg:text-7xl mb-2 ml-24 md:ml-32"
            variants={itemVariants}>
            <span>Frontend</span>
          </motion.div>
          <motion.div
            className="text-text-secondary text-5xl md:text-6xl lg:text-7xl ml-38 md:ml-48"
            variants={itemVariants}>
            <span>Developer</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
