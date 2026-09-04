import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sparkles,
  CheckCircle2,
  Phone,
  Globe
} from 'lucide-react';
import { personalInfo, experience, education, technicalSkills, projects } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/80 backdrop-blur-xl cursor-pointer"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel bg-dark-900 border-white/10 shadow-2xl p-6 sm:p-10 text-slate-100 cursor-default my-auto"
        >
          {/* Header Controls Bar */}
          <div className="sticky -top-6 -mx-6 sm:-top-10 sm:-mx-10 px-6 sm:px-10 py-4 mb-6 bg-dark-950/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Live Interactive Resume
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.resumePdfUrl}
                download="Abhishek_Srivastav_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan text-dark-950 text-xs font-bold hover:bg-brand-teal transition-all shadow"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg glass-panel text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Resume Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document */}
          <div className="space-y-8 font-sans">
            {/* Header Block */}
            <div className="border-b border-white/10 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-lg font-semibold gradient-text-neon mt-1">
                    {personalInfo.role} • 3+ Years Experience
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 space-y-1.5 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-brand-purple" />
                    <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">
                      {personalInfo.websiteDisplay}
                    </a>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-purple" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mt-5 p-4 rounded-2xl bg-dark-950/60 border border-white/5">
                <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-bold block mb-1">
                  Professional Summary
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
            </div>

            {/* Technical Skills Breakdown per Updated Resume */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-cyan font-bold text-sm tracking-wider uppercase font-mono">
                <Code2 className="w-4 h-4" />
                <span>Technical Skills</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-dark-950/60 border border-white/5 space-y-1.5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Languages</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">{technicalSkills.languages.join(' • ')}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-dark-950/60 border border-white/5 space-y-1.5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Frontend</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">{technicalSkills.frontend.join(' • ')}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-dark-950/60 border border-white/5 space-y-1.5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">API & Integration</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">{technicalSkills.apiIntegration.join(' • ')}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-dark-950/60 border border-white/5 space-y-1.5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Testing</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">{technicalSkills.testing.join(' • ')}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-dark-950/60 border border-white/5 space-y-1.5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tools & Workflow</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">{technicalSkills.tools.join(' • ')}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-dark-950/60 border border-white/5 space-y-1.5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Deployment & DevOps</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">{technicalSkills.deployment.join(' • ')}</p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-cyan font-bold text-sm tracking-wider uppercase font-mono">
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </div>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.id} className="p-5 rounded-2xl bg-dark-950/60 border border-white/5 space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h3 className="font-bold text-white text-base">{exp.company}</h3>
                        <p className="text-xs font-semibold text-brand-cyan">{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-slate-300 block">{exp.period}</span>
                        <span className="text-[11px] font-mono text-slate-500">{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 pt-2 border-t border-white/5">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-cyan font-bold text-sm tracking-wider uppercase font-mono">
                <Sparkles className="w-4 h-4" />
                <span>Key Projects</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-white">{proj.title}</h4>
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline text-xs flex items-center gap-1">
                        <span>Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.tags.slice(0, 5).map((t, idx) => (
                        <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-cyan font-bold text-sm tracking-wider uppercase font-mono">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-dark-950/60 border border-white/5">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-sm text-white">{edu.degree}</h4>
                        <p className="text-xs text-brand-purple mt-0.5">{edu.institution} • {edu.location}</p>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
