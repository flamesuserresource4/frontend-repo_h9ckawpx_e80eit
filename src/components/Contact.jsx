import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-white/10 bg-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start justify-between gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white/90">Let’s Connect</h3>
          <p className="mt-2 text-white/70 max-w-xl">Open to collaborations, freelance projects, and full-time opportunities.</p>
        </div>
        <div className="grid gap-3 text-white/90">
          <a href="mailto:sanjayraina023@gmail.com" className="inline-flex items-center gap-3 hover:text-white">
            <span className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-white/10">📧</span>
            sanjayraina023@gmail.com
          </a>
          <a href="https://github.com/sanjayraina" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-white">
            <span className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-white/10">💻</span>
            github.com/sanjayraina
          </a>
        </div>
      </div>
    </section>
  );
}
