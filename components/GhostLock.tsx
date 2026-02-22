
import React from 'react';

const GhostLock: React.FC = () => {
  return (
    <div className="my-6 p-6 bg-black border-2 border-indigo-600 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-indigo-500/10 pb-4 text-left">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-dna text-indigo-500 animate-pulse text-lg"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">GHOST_DNA_OVERVIEW</h3>
        </div>
        <div className="text-[8px] font-mono text-indigo-400 font-black uppercase tracking-tighter">Bypass_Logic_9.5</div>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl text-left">
           <p className="text-[10px] text-slate-300 font-mono leading-relaxed uppercase">
             Sultan, ye file do (2) layers mein kaam karti hai:
           </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
           <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col gap-2 text-left">
              <span className="text-[7px] font-black text-slate-500 uppercase">OS_LAYER (OUTSIDE)</span>
              <span className="text-xs font-black text-rose-500 font-orbitron">RW (660)</span>
              <p className="text-[8px] font-mono text-slate-500">Android dekhega: Khuli hai.</p>
           </div>
           <div className="p-4 bg-indigo-950 border border-indigo-500/40 rounded-2xl flex flex-col gap-2 text-left shadow-lg">
              <span className="text-[7px] font-black text-indigo-400 uppercase">DNA_LAYER (INSIDE)</span>
              <span className="text-xs font-black text-emerald-400 font-orbitron">RR (444)</span>
              <p className="text-[8px] font-mono text-indigo-300">Game dekhega: Locked hai.</p>
           </div>
        </div>

        <div className="p-4 bg-zinc-900/50 rounded-2xl border border-white/5">
           <p className="text-[9px] font-mono text-slate-400 text-center uppercase leading-tight font-black">
             "Result: Game ise delete nahi kar payega kyunki wo DNA level check karta hai."
           </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
        <i className="fa-solid fa-circle-check text-emerald-400 text-sm"></i>
        <p className="text-[9px] text-emerald-300 font-mono leading-relaxed uppercase font-black text-left">
          "BOSS, HYPER-OS MEIN YE BEST STEALTH TECHNIQUE HAI."
        </p>
      </div>
    </div>
  );
};

export default GhostLock;
