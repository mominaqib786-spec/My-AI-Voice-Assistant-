
import React, { useMemo } from 'react';

interface Props {
  isActive: boolean;
  nodes?: string[];
}

const QuantumGrid: React.FC<Props> = ({ isActive, nodes = [] }) => {
  const gridCells = useMemo(() => Array.from({ length: 20 }, (_, i) => i), []);

  return (
    <div className="relative w-full h-32 bg-slate-950/50 rounded-3xl border border-cyan-500/20 overflow-hidden p-4 mb-6">
      <div className="absolute top-2 left-4 flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400 animate-pulse' : 'bg-slate-700'}`}></div>
        <span className="text-[9px] font-orbitron font-black text-cyan-400/70 tracking-widest uppercase">Distributed_HPC_Cluster</span>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-2">
        {gridCells.map((i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${
              isActive 
                ? (Math.random() > 0.5 ? 'bg-cyan-500 shadow-glow' : 'bg-slate-800') 
                : 'bg-slate-900'
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 overflow-hidden">
        {nodes.map((node, idx) => (
          <div key={idx} className="flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md animate-in slide-in-from-left-2">
            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
            <span className="text-[7px] font-mono text-cyan-300 font-bold">{node}</span>
          </div>
        ))}
        {isActive && (
          <div className="text-[8px] font-mono text-slate-500 animate-pulse ml-auto">
            PARALLEL_PROCESSING_ACTIVE...
          </div>
        )}
      </div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-1/2 w-full animate-scan-slow"></div>
    </div>
  );
};

export default QuantumGrid;
