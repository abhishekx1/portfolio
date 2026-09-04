import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Github, 
  Linkedin, 
  Instagram, 
  Code, 
  Mail, 
  CheckCircle2, 
  Terminal as TerminalIcon,
  Layers
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';
import { TerminalWidget } from './TerminalWidget';

export const Hero = ({ onOpenResumeModal }) => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel bg-dark-900/80 border-brand-cyan/20 text-xs text-slate-300 mb-6 shadow-lg shadow-cyan-950/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">{personalInfo.status}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-cyan font-mono">
                // Hello World, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                {personalInfo.name}
              </h1>

              {/* Dynamic Animated Role Switcher */}
              <div className="h-12 sm:h-14 flex items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-400 mr-2 font-display">
                  I craft
                </span>
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text-neon font-display"
                >
                  {personalInfo.titles[titleIndex]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-cyan to-brand-teal text-dark-950 hover:shadow-xl hover:shadow-brand-cyan/25 transition-all duration-300 font-display hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm glass-panel glass-panel-hover text-white border-white/10 hover:border-brand-cyan/40 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>Interactive Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-purple" />
                <span>Get in Touch</span>
              </a>
            </motion.div>

            {/* Socials Quick Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-4 text-slate-400"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-panel hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-panel hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.codepen}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-panel hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                title="CodePen Profile"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-panel hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Mini Interactive IDE Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Glow backdrop behind terminal */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/30 via-brand-purple/20 to-brand-teal/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              <TerminalWidget />
            </div>
          </motion.div>
        </div>

        {/* Stats Bento Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl flex flex-col gap-1 border-white/5 bg-dark-900/60"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white flex items-baseline gap-0.5">
                <span className="gradient-text-neon">{stat.value}</span>
                <span className="text-xs text-brand-cyan font-mono">{stat.suffix}</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
