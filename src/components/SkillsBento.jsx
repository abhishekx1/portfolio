import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Sparkles, 
  Zap, 
  Cpu, 
  Flame, 
  Palette, 
  Smartphone, 
  Eye, 
  GitBranch, 
  Network, 
  Gauge, 
  Boxes, 
  ShieldCheck,
  Atom,
  Terminal,
  FileCode,
  FileCode2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon string names to Lucide icons
const iconMap = {
  Atom,
  Code2,
  FileCode,
  Terminal,
  Zap,
  Flame,
  Palette,
  Layers,
  Sparkles,
  Smartphone,
  Eye,
  FileCode2,
  GitBranch,
  Network,
  Cpu,
  Gauge,
  Boxes,
  ShieldCheck
};

export const SkillsBento = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Tech Stack & Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Skills <span className="gradient-text-neon">Architecture</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Specialized tools, modern frontend frameworks, and design system capabilities refined across real-world web engineering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 glass-panel rounded-2xl bg-dark-900/60 border-white/5 overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-brand-cyan text-dark-950 font-bold shadow-md shadow-brand-cyan/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Proficiencies
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-cyan text-dark-950 font-bold shadow-md shadow-brand-cyan/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border-white/5 bg-dark-900/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold font-display text-white">
                    {category.title}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-sm shadow-brand-cyan" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skill List with Progress Gauges */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div key={sIdx} className="group/item">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <div className="flex items-center gap-2 font-medium text-slate-200 group-hover/item:text-brand-cyan transition-colors">
                            <IconComponent className="w-3.5 h-3.5 text-brand-cyan/80 group-hover/item:text-brand-cyan" />
                            <span>{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                              {skill.tag}
                            </span>
                            <span className="font-mono text-slate-400 text-xs font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Animated Gauge Bar */}
                        <div className="h-1.5 w-full bg-dark-950 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: sIdx * 0.05 }}
                            className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-purple"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom tag strip */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} core proficiencies</span>
                <span className="text-brand-cyan">Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
