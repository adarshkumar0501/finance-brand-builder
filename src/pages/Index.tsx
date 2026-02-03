import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Services />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
