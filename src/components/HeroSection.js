import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-br  flex items-center justify-center">
      {/* Menu and logo area */}

      {/* Main text content */}
      <div className="text-center px-8 md:px-16 w-full max-w-4xl">
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
      </div>
    </div>
  );
}
