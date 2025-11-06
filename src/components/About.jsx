import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div className="relative p-6 rounded-2xl bg-white/10 border border-white/15 shadow-xl shadow-blue-500/10 backdrop-blur-md">
          <h3 className="text-xl font-semibold text-white/90">About Me</h3>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m <span className="font-semibold text-white">S. Ezhil Savier</span>, a passionate software developer with a love for blending creativity and technology.
            I specialize in designing and developing intelligent, user-focused digital solutions — from AI-driven tools to visually stunning web applications.
            My mission is to turn complex ideas into seamless, impactful digital experiences.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="p-5 rounded-xl bg-white/10 border border-white/15">
            <p className="text-sm text-white/70">Focus</p>
            <p className="mt-2 text-white">AI & ML, Web Development, Interactive UX</p>
          </div>
          <div className="p-5 rounded-xl bg-white/10 border border-white/15">
            <p className="text-sm text-white/70">Tooling</p>
            <p className="mt-2 text-white">React, FastAPI, Tailwind, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
