import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/15 text-xs sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          Portfolio Interface
        </span>
        <h2 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight text-white drop-shadow">
          Transforming ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">digital reality</span>
        </h2>
        <p className="mt-4 max-w-2xl text-white/80">
          A modern, minimalist, and immersive 3D workspace that blends design and technology.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
    </section>
  );
}
