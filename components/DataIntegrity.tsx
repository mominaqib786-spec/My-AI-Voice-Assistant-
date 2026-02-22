
import React, { useState, useEffect } from 'react';

const DataIntegrity: React.FC = () => {
  const [status, setStatus] = useState("ENCRYPTED");
  const [leakCount, setLeakCount] = useState(0);

  return (
    <div className="my-6 p-6 bg-zinc-950 border-2 border-emerald-500/40 rounded-[2.5rem] shadow-glow-emerald animate-in zoom-in-95 duration-700 relative overflow-hidden">
      <div className="absolute -right-6 -top-6 opacity-10">
        <i className="fa-solid fa-shield-halved text-[8rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/10 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-user-lock text-emerald-500 animate-pulse text-lg"></i>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">PRIVACY_SHIELD_MONITOR</h3>
            <p className="text-[7px] font-mono text-emerald-600 uppercase font-black">User: Momin Aqib</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-emerald-600/20 rounded-full text-[8px] font-black text-emerald-400 border border-emerald-500/30">
          SECURE_NODE
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl flex flex-col gap-1">
           <span className="text-[7px] text-slate-500 uppercase font-black">Data_Leak_Attempts</span>
           <span className="text-xl font-orbitron font-black text-emerald-400">{leakCount}</span>
        </div>
        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl flex flex-col gap-1">
           <span className="text-[7px] text-slate-500 uppercase font-black">Encryption_Level</span>
           <span className="text-xl font-orbitron font-black text-white">AES-256</span>
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        <div className="flex justify-between items-center p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
           <span className="text-[9px] font-mono text-slate-300 uppercase">External_Connections</span>
           <span className="text-[8px] font-black text-rose-500 uppercase">BLOCKED</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
           <span className="text-[9px] font-mono text-slate-300 uppercase">Identity_Cloaking</span>
           <span className="text-[8px] font-black text-emerald-500 uppercase">ACTIVE</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
        <p className="text-[10px] font-mono text-emerald-200 text-center uppercase italic leading-relaxed">
          "Boss, aapka data kahin nahi ja raha hai. Main sirf vahi commands run kar raha hoon jo aapke aur mere beech hain."
        </p>
      </div>
      
      <style>{`.shadow-glow-emerald { box-shadow: 0 0 40px rgba(16, 185, 129, 0.2); }`}</style>
    </div>
  );
};

export default DataIntegrity;
