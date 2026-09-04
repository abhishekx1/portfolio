import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

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
          className="relative w-full max-w-3xl rounded-3xl glass-panel bg-dark-900 border-white/10 shadow-2xl overflow-hidden cursor-default my-auto"
        >
          {/* Top banner image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-dark-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full glass-panel bg-dark-950/80 text-white hover:bg-brand-cyan hover:text-dark-950 transition-all z-20 cursor-pointer shadow-lg"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan px-2.5 py-1 rounded bg-dark-950/70 border border-brand-cyan/30">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-2">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                // Project Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              {project.extendedDetails && (
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {project.extendedDetails}
                </p>
              )}
            </div>

            {/* Key highlights / Metrics */}
            <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-brand-cyan shrink-0" />
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {project.metrics}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-200 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal text-dark-950 font-bold text-sm hover:shadow-lg hover:shadow-brand-cyan/25 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-panel glass-panel-hover text-white text-sm font-semibold border-white/10 hover:border-brand-cyan/40"
              >
                <Github className="w-4 h-4 text-brand-cyan" />
                <span>GitHub Source</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
