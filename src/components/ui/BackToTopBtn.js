"use client";
import { IoIosArrowDropup } from "react-icons/io";


export default function BackToTopBtn() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleBackToTop}
      className="fixed bottom-4 right-4 transition-transform transform hover:scale-105">
      <IoIosArrowDropup className="w-10 h-10 bg-secondary text-background rounded-4xl"/>
    </button>
  );
}
