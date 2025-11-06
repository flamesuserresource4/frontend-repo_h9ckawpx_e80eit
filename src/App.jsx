import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0B1020] via-[#0A0F1C] to-black selection:bg-teal-400/30 selection:text-white">
      <Header />
      <Hero />
      <main>
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
