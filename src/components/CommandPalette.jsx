import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Home, 
  FileText, 
  Zap, 
  FolderGit2, 
  Sparkles, 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  ExternalLink,
  Code
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const CommandPalette = ({ isOpen, onClose, onOpenResumeModal }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered from parent
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'home',
      name: 'Navigate to Home',
      category: 'Navigation',
      icon: Home,
      action: () => {
        window.location.hash = '#home';
        onClose();
      }
    },
    {
      id: 'resume',
      name: 'View Interactive Resume',
      category: 'Navigation',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResumeModal();
      }
    },
    {
      id: 'download-resume',
      name: 'Download PDF Resume',
      category: 'Quick Actions',
      icon: Download,
      action: () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumePdfUrl;
        link.download = 'Abhishek_Srivastav_Resume.pdf';
        link.click();
        onClose();
      }
    },
    {
      id: 'skills',
      name: 'Explore Skills Architecture',
      category: 'Navigation',
      icon: Zap,
      action: () => {
        window.location.hash = '#skills';
        onClose();
      }
    },
    {
      id: 'projects',
      name: 'Browse Projects & Works',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      }
    },
    {
      id: 'lab',
      name: 'Launch Shader & Token Studio',
      category: 'Navigation',
      icon: Sparkles,
      action: () => {
        window.location.hash = '#lab';
        onClose();
      }
    },
    {
      id: 'contact',
      name: 'Send Message / Contact',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        window.location.hash = '#contact';
        onClose();
      }
    },
    {
      id: 'github',
      name: 'Open GitHub Profile',
      category: 'Socials & Code',
      icon: Github,
      action: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      name: 'Open LinkedIn Profile',
      category: 'Socials & Code',
      icon: Linkedin,
      action: () => {
        window.open(personalInfo.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-dark-950/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-xl rounded-3xl glass-panel bg-dark-900 border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-dark-950/60">
            <Search className="w-5 h-5 text-brand-cyan shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or jump to section..."
              className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="p-3 max-h-80 overflow-y-auto space-y-1">
            {filteredActions.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-500">
                No matching actions found for "{query}"
              </div>
            ) : (
              filteredActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.id}
                    onClick={action.action}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/5 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-dark-950 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                          {action.name}
                        </span>
                        <span className="block text-[10px] font-mono text-slate-500">
                          {action.category}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-cyan transition-colors" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3 border-t border-white/5 bg-dark-950 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Tip: Press ESC to exit</span>
            <span className="text-brand-cyan">Frontend Command Hub</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
