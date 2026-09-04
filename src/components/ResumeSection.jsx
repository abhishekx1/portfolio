import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ChevronRight
} from 'lucide-react';
import { experience, education, personalInfo } from '../data/portfolioData';

export const ResumeSection = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="resume" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Career & Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Interactive <span className="gradient-text-neon">Resume</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Proven track record of engineering responsive, high-performance web applications with clean architecture and delightful UI/UX.
            </p>
          </div>

          {/* Quick PDF & Modal Actions */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePdfUrl}
              download="Abhishek_Srivastav_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel glass-panel-hover text-xs font-semibold text-slate-200 border-white/10 hover:text-white"
            >
              <Download className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-cyan text-dark-950 text-xs font-bold hover:bg-brand-teal transition-all shadow-md shadow-brand-cyan/20"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full View</span>
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 p-1.5 glass-panel rounded-2xl max-w-md mb-8 bg-dark-900/60 border-white/5">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 text-white border border-brand-cyan/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Experience & Roles</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 text-white border border-brand-cyan/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-brand-purple" />
            <span>Education & Studies</span>
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {experience.map((item, index) => (
                <div
                  key={item.id}
                  className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border-white/5 bg-dark-900/70 relative overflow-hidden group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-brand-cyan transition-colors">
                          {item.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-300 mt-1">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-purple" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-6">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-white/5">
                    <span className="text-[11px] font-mono text-slate-500 uppercase">Technologies:</span>
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-300 border border-white/5 group-hover:border-brand-cyan/20 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border-white/5 bg-dark-900/70"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-brand-cyan mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {edu.notes}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
