"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setHasScrolled(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (hasScrolled) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  const handleBackToTop = () => {
    if (hasScrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-4 right-4 flex items-center justify-center hover:text-secondary bg-secondary-background rounded-full p-1 duration-300 ease-in cursor-pointer border border-secondary">
          <ArrowUp size={36} />
        </button>
      )}
    </>
  );
}
