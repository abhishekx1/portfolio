import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, FolderGit2, ArrowUpRight, Eye } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['all', 'Enterprise SaaS', 'Web3 & DeFi', 'Web UI', 'Creative JS'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Applications & Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Featured <span className="gradient-text-neon">Projects</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Real-world enterprise SaaS platforms, Web3 DeFi architectures, and high-performance interactive interfaces.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 glass-panel rounded-2xl bg-dark-900/60 border-white/5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-cyan text-dark-950 font-bold shadow-md shadow-brand-cyan/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Applications' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative glass-panel rounded-3xl overflow-hidden border-white/5 bg-dark-900/70 hover:border-brand-cyan/40 transition-all duration-500 flex flex-col justify-between shadow-xl"
              >
                {/* Project Image Preview Container */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-dark-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-dark-950/80 backdrop-blur-md text-brand-cyan border border-brand-cyan/30">
                      {project.category}
                    </span>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 rounded-full glass-panel bg-dark-950/80 text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                      title="Quick Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-brand-teal font-mono mt-0.5">
                      {project.subtitle}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 mb-5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:text-brand-teal transition-colors group/link"
                      >
                        <span>Explore Platform</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg glass-panel hover:border-white/20 transition-all"
                        >
                          Details
                        </button>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass-panel text-slate-400 hover:text-white hover:border-brand-cyan/40 transition-all"
                          title="View GitHub Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
