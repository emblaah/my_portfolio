'use client'
import React from 'react';
import { ThemeToggle } from '../ThemeToggle';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50 border-b ">
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
