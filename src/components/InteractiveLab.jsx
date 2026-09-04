import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sliders, Copy, Check, Eye, Code, Palette } from 'lucide-react';

export const InteractiveLab = () => {
  const [blur, setBlur] = useState(16);
  const [opacity, setOpacity] = useState(70);
  const [borderWidth, setBorderWidth] = useState(1);
  const [glowColor, setGlowColor] = useState('cyan');
  const [copied, setCopied] = useState(false);

  const glowStyles = {
    cyan: { color: '#00f2fe', shadow: 'rgba(0, 242, 254, 0.4)', class: 'from-brand-cyan to-brand-teal' },
    emerald: { color: '#05e6b7', shadow: 'rgba(5, 230, 183, 0.4)', class: 'from-emerald-400 to-teal-400' },
    purple: { color: '#8b5cf6', shadow: 'rgba(139, 92, 246, 0.4)', class: 'from-brand-purple to-pink-500' },
    pink: { color: '#ec4899', shadow: 'rgba(236, 72, 153, 0.4)', class: 'from-pink-500 to-rose-400' }
  };

  const currentGlow = glowStyles[glowColor];

  const generatedCss = `background: rgba(14, 20, 31, ${opacity / 100});
backdrop-filter: blur(${blur}px);
border: ${borderWidth}px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 10px 35px -5px ${currentGlow.shadow};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lab" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Frontend Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Glassmorphism & <span className="gradient-text-neon">Token Studio</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Experiment with real-time UI shaders, dynamic blur optics, and export custom Tailwind / CSS tokens.
            </p>
          </div>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-7 rounded-3xl border-white/5 bg-dark-900/80 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase tracking-wider">
              <Sliders className="w-4 h-4 text-brand-cyan" />
              <span>Shader Controls</span>
            </div>

            {/* Backdrop Blur Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Backdrop Blur</span>
                <span className="font-mono text-brand-cyan">{blur}px</span>
              </div>
              <input
                type="range"
                min="4"
                max="32"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
                className="w-full h-1.5 bg-dark-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            {/* Surface Opacity Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Surface Opacity</span>
                <span className="font-mono text-brand-cyan">{opacity}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="95"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full h-1.5 bg-dark-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            {/* Border Width Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Border Gauge</span>
                <span className="font-mono text-brand-cyan">{borderWidth}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                value={borderWidth}
                onChange={(e) => setBorderWidth(Number(e.target.value))}
                className="w-full h-1.5 bg-dark-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            {/* Accent Theme Switcher */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <span className="text-xs text-slate-300 block mb-2">Accent Aura</span>
              <div className="flex items-center gap-3">
                {Object.keys(glowStyles).map((colorKey) => (
                  <button
                    key={colorKey}
                    onClick={() => setGlowColor(colorKey)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      glowColor === colorKey
                        ? 'border-white scale-110 shadow-lg'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: glowStyles[colorKey].color }}
                  />
                ))}
              </div>
            </div>

            {/* Generated CSS Code snippet */}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Export Token</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-brand-cyan hover:underline"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy CSS'}</span>
                </button>
              </div>
              <pre className="p-3 rounded-xl bg-dark-950 font-mono text-[11px] text-slate-300 overflow-x-auto border border-white/5">
                <code>{generatedCss}</code>
              </pre>
            </div>
          </div>

          {/* Live Interactive Preview Canvas */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border-white/5 bg-dark-900/50 cyber-grid flex items-center justify-center relative overflow-hidden min-h-[380px]">
            {/* Background floating colorful shape elements */}
            <div className="absolute top-6 left-12 w-28 h-28 rounded-full bg-brand-cyan/40 blur-2xl animate-float" />
            <div className="absolute bottom-8 right-16 w-36 h-36 rounded-full bg-brand-purple/40 blur-2xl animate-float" style={{ animationDelay: '2s' }} />

            {/* The Live Tuned Glass Card */}
            <div
              style={{
                background: `rgba(14, 20, 31, ${opacity / 100})`,
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                border: `${borderWidth}px solid rgba(255, 255, 255, 0.12)`,
                boxShadow: `0 20px 45px -10px ${currentGlow.shadow}`
              }}
              className="relative z-10 w-full max-w-md p-6 sm:p-7 rounded-3xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${currentGlow.class} flex items-center justify-center text-dark-950 font-bold shadow-lg`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Live Shader Preview</h4>
                    <span className="text-xs font-mono text-slate-400">Reactive Component</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Active 60fps
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Adjust sliders on the left to dynamically calibrate backdrop optical density, border refractions, and glow radiuses.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400">Rendered in DOM</span>
                <span className="text-xs font-bold font-display text-white">Abhishek Srivastav</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
