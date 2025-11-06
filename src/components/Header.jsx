import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-blue-600 shadow-lg shadow-blue-500/20" />
          <span className="text-lg sm:text-xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
            S. Ezhil Savier
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
