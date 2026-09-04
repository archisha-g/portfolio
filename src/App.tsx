import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProfileStrip } from './components/ProfileStrip';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ResearchExploring } from './components/ResearchExploring';
import { Skills } from './components/Skills';
import { Recognition } from './components/Recognition';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { TinyCat } from './components/TinyCat';
import { DevModeDrawer } from './components/DevModeDrawer';

export const App: React.FC = () => {
  const [isDevModeOpen, setIsDevModeOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      // Toggle Dev mode with Ctrl + Shift + D or Cmd + Shift + D
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        e.preventDefault();
        setIsDevModeOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Reading Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Editorial Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <ProfileStrip />
        <Experience />
        <ResearchExploring />
        <Projects />
        <Skills />
        <Recognition />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Tiny Playful Mascot in Bottom-Right Corner */}
      <TinyCat />

      {/* Developer Mode Inspector Easter Egg (Ctrl + Shift + D) */}
      <DevModeDrawer
        isOpen={isDevModeOpen}
        onClose={() => setIsDevModeOpen(false)}
      />
    </div>
  );
};

export default App;
