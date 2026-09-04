import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-dark-950/80 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-dark-950 font-black text-xs">
            AS
          </span>
          <div>
            <p className="text-xs font-semibold text-white">
              {personalInfo.name} • Frontend Developer
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Designed & Engineered with React, Tailwind CSS, & Framer Motion
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all flex items-center gap-1 text-xs font-mono"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
