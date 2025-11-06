import React from 'react';

const projects = [
  {
    title: 'MemoSnap',
    desc: 'A web application that captures and preserves cherished photo memories. Features intelligent tagging, smooth navigation, and emotional storytelling through design.',
    accent: 'from-teal-300 to-teal-500',
    thumb: 'Gallery grid with glowing thumbnails',
  },
  {
    title: 'Sentient Shopper',
    desc: 'An AI-powered shopping assistant that understands emotions and preferences to suggest products intuitively. Combines computer vision, recommendation systems, and predictive insights.',
    accent: 'from-blue-400 to-blue-600',
    thumb: 'AI brain, cart, analytics dashboard',
  },
  {
    title: 'StockVision',
    desc: 'A data-driven stock analysis and forecasting tool that visualizes trends with clarity and precision. Empowers users with AI-enhanced predictions and interactive dashboards.',
    accent: 'from-blue-500 to-indigo-600',
    thumb: 'Holographic data charts rising from panel',
  },
];

function ProjectCard({ title, desc, accent, thumb }) {
  return (
    <div className="group relative rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow">
      <div className={`h-36 rounded-xl bg-gradient-to-br ${accent} opacity-90`} aria-label={thumb} />
      <h4 className="mt-5 text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-white/80 leading-relaxed">{desc}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-teal-300 text-sm">
        <span>Explore</span>
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-white/90">Featured Projects</h3>
        <p className="mt-2 text-white/70 max-w-2xl">Three interactive 3D-inspired panels highlighting recent work.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
