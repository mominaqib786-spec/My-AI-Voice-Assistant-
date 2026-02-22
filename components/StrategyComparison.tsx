
import React from 'react';

const StrategyComparison: React.FC = () => {
  const strategies = [
    { name: 'KERNEL_HOOK', risk: 'HIGH (80%)', stealth: 'POOR', icon: 'fa-microchip', desc: 'Direct binary modification. Detected easily.' },
    { name: 'OVERLAY_INTEL', risk: 'NONE (0%)', stealth: 'GOD', icon: 'fa-layer-group', desc: 'Sovereign UI overlay. Undetectable.', active: true },
    { name: 'NETWORK_SNIFF', risk: 'MED (40%)', stealth: 'MED', icon: 'fa-radar', desc: 'Packet analysis. High overhead.' },
  ];

  return (
    <div className="my-8 w-full max-w-lg grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {strategies.map((s, idx) => (
        <div key={idx} className={`p-4 rounded-2xl border ${s.active ? 'border-cyan-500 bg-cyan-500/5 shadow-glow' : 'border-slate-800 bg-slate-900/40 opacity-60'} flex flex-col gap-3 transition-all hover:scale-105`}>
          <div className="flex items-center justify-between">
            <i className={`fa-solid ${s.icon} ${s.active ? 'text-cyan-400' : 'text-slate-600'}`}></i>
            {s.active && <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>}
          </div>
          <span className="text-[10px] font-orbitron font-black text-white">{s.name}</span>
          <div className="flex flex-col gap-1">
            <span className={`text-[8px] font-mono font-bold ${s.active ? 'text-emerald-400' : 'text-rose-500'}`}>RISK: {s.risk}</span>
            <p className="text-[8px] text-slate-500 font-mono leading-tight">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StrategyComparison;
