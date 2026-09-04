import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResumeSection } from './components/ResumeSection';
import { SkillsBento } from './components/SkillsBento';
import { Projects } from './components/Projects';
import { InteractiveLab } from './components/InteractiveLab';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Dynamic Ambient Background Canvas */}
      <BackgroundCanvas />

      {/* Floating Glassmorphic Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <SkillsBento />
        <Projects />
        <InteractiveLab />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />
    </div>
  );
}

export default App;
