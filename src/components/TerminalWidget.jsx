import React, { useState } from 'react';
import { Copy, Check, Terminal, Play, Sparkles } from 'lucide-react';
import { interactiveSnippets } from '../data/portfolioData';

export const TerminalWidget = () => {
  const [activeTab, setActiveTab] = useState('component');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);

  const currentSnippet = interactiveSnippets.find((s) => s.id === activeTab) || interactiveSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setConsoleLogs(['Compiling modern UI components...', 'Applying obsidian glass tokens...', 'Running performance audit (Lighthouse: 100/100)...', 'Frontend successfully compiled & ready for production! ✨']);
    setTimeout(() => {
      setIsRunning(false);
    }, 1200);
  };

  return (
    <div className="w-full glass-panel rounded-2xl overflow-hidden shadow-2xl border-white/10 bg-dark-900/90 font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-dark-950/80 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-100 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          <div className="flex items-center gap-1 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[11px] font-medium tracking-tight">abhishek-ide ~ zsh</span>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="flex items-center gap-1 bg-dark-850 p-1 rounded-lg border border-white/5">
          {interactiveSnippets.map((snippet) => (
            <button
              key={snippet.id}
              onClick={() => {
                setActiveTab(snippet.id);
                setConsoleLogs([]);
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-sans transition-all ${
                activeTab === snippet.id
                  ? 'bg-brand-cyan/20 text-brand-cyan font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {snippet.title}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1 text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded hover:bg-emerald-500/30 transition-all font-sans"
            title="Execute simulation"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Building...' : 'Test Run'}</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 overflow-x-auto text-slate-300 leading-relaxed font-mono">
        <pre className="text-xs">
          <code>
            {currentSnippet.code.split('\n').map((line, idx) => (
              <div key={idx} className="table-row group">
                <span className="table-cell pr-4 text-slate-600 select-none text-[11px] text-right font-normal">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre">
                  {line
                    .replace(/(const|let|var|return|async|await|import|export|from|true|false)/g, '§KEYWORD§$1§RESET§')
                    .replace(/(".*?"|'.*?'|`.*?`)/g, '§STRING§$1§RESET§')
                    .replace(/(<[A-Za-z0-9]+|\/?>|<\/[A-Za-z0-9]+>)/g, '§TAG§$1§RESET§')
                    .split('§')
                    .map((segment, sIdx) => {
                      if (segment.startsWith('KEYWORD')) {
                        return (
                          <span key={sIdx} className="text-brand-purple font-semibold">
                            {segment.replace('KEYWORD', '')}
                          </span>
                        );
                      }
                      if (segment.startsWith('STRING')) {
                        return (
                          <span key={sIdx} className="text-emerald-400">
                            {segment.replace('STRING', '')}
                          </span>
                        );
                      }
                      if (segment.startsWith('TAG')) {
                        return (
                          <span key={sIdx} className="text-brand-cyan">
                            {segment.replace('TAG', '')}
                          </span>
                        );
                      }
                      if (segment === 'RESET') return null;
                      return segment;
                    })}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Mini Output Terminal */}
      {consoleLogs.length > 0 && (
        <div className="px-4 py-3 bg-dark-950 border-t border-white/5 text-[11px] text-emerald-400/90 flex flex-col gap-1 animate-fadeIn">
          <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span>Output Console:</span>
          </div>
          {consoleLogs.map((log, lIdx) => (
            <div key={lIdx} className="flex items-center gap-2">
              <span className="text-brand-cyan">❯</span>
              <span>{log}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
