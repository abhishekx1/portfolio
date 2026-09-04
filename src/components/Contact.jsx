import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Instagram, 
  Code, 
  Sparkles,
  Phone,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mqkwdqvk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Let's Build Something <span className="gradient-text-neon">Extraordinary</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Looking for a skilled Frontend Software Developer with 3+ years experience in React, TypeScript, Redux, and modern web architectures? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email & Phone Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border-white/5 bg-dark-900/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Channels</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              
              <div className="flex items-center justify-between gap-3 bg-dark-950/70 p-3 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl glass-panel text-brand-cyan hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2 bg-dark-950/70 p-3 rounded-2xl border border-white/5 text-xs sm:text-sm font-mono text-slate-200">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>

              <div className="flex items-center gap-2 bg-dark-950/70 p-3 rounded-2xl border border-white/5 text-xs sm:text-sm font-mono text-slate-200">
                <Globe className="w-4 h-4 text-brand-purple shrink-0" />
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline">
                  {personalInfo.websiteDisplay}
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border-white/5 bg-dark-900/80 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Location & Availability</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{personalInfo.location}</p>
                  <p className="text-xs text-slate-400 mt-2">Available for Senior/Mid Frontend Developer, Full-time, and High-Impact Remote Roles worldwide.</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border-white/5 bg-dark-900/80 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Social Profiles & Repositories
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl glass-panel hover:border-brand-cyan/40 hover:text-brand-cyan transition-all text-xs font-semibold text-slate-200"
                >
                  <Github className="w-4 h-4 text-brand-cyan" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl glass-panel hover:border-brand-cyan/40 hover:text-brand-cyan transition-all text-xs font-semibold text-slate-200"
                >
                  <Linkedin className="w-4 h-4 text-brand-cyan" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.codepen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl glass-panel hover:border-brand-cyan/40 hover:text-brand-cyan transition-all text-xs font-semibold text-slate-200"
                >
                  <Code className="w-4 h-4 text-brand-purple" />
                  <span>CodePen</span>
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl glass-panel hover:border-brand-cyan/40 hover:text-brand-cyan transition-all text-xs font-semibold text-slate-200"
                >
                  <Instagram className="w-4 h-4 text-brand-purple" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border-white/5 bg-dark-900/80">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-mono text-slate-300">
                    Phone (Optional)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Frontend Software Developer Role"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, product requirements, or project goals..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-purple text-dark-950 hover:shadow-xl hover:shadow-brand-cyan/25 transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {formStatus === 'submitting' ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium">
                  ✨ Message delivered successfully! Abhishek will get back to you shortly.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center font-medium">
                  ⚠️ Something went wrong transmitting your message. Feel free to email directly at {personalInfo.email}.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
