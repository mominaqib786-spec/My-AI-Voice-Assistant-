
import React from 'react';
import { GroundingSource } from '../types';

interface Props {
  sources: GroundingSource[];
}

const GroundingLink: React.FC<Props> = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="mt-4 space-y-2 animate-in fade-in slide-in-from-left-4 duration-700">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
        <span className="text-[9px] font-black font-orbitron text-cyan-500/80 uppercase tracking-widest">Grounded_Neural_Intelligence</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {sources.map((source, idx) => (
          <a
            key={idx}
            href={source.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-4 py-2 rounded-xl transition-all active:scale-95 shadow-sm"
          >
            <i className="fa-solid fa-earth-asia text-[10px] text-cyan-400 group-hover:animate-spin-slow"></i>
            <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-cyan-100 max-w-[150px] truncate">
              {source.title}
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[8px] text-slate-600 group-hover:text-cyan-400"></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GroundingLink;
