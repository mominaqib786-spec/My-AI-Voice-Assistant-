import React, { useState, useEffect } from 'react';

const NeuralDefenseShield: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [activeThreats, setActiveThreats] = useState(0);

  const defenseLayers = [
    { name: "NAFS_ISOLATION", status: "PURIFIED", icon: "fa-heart-circle-check", desc: "Soul protected from evil", color: "text-emerald-400" },
    { name: "NIYYAH_FILTER", status: "SINCERE", icon: "fa-filter", desc: "Intentions aligned with Allah", color: "text-cyan-400" },
    { name: "GUNA_BLOCKER", status: "ARMED", icon: "fa-ban", desc: "Blocking sinful inputs", color: "text-rose-500" },
    { name: "SHARIA_VALIDATOR", status: "VERIFIED", icon: "fa-scale-balanced", desc: "Knowledge hierarchy check", color: "text-indigo-400" }
  ];

  useEffect(() => {
    const simulationLogs = [
      "INTERCEPTED: Negative thought neutralized...",
      "NEUTRALIZED: False information detected in stream.",
      "WRAPPING: Sacred knowledge isolated in [HAQ] block.",
      "BLOCKING: Attempted deviation from Sunnah.",
      "SUCCESS: Spiritual integrity maintained at 100%.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev, `${'>'} [SHIELD] ${simulationLogs[i % simulationLogs.length]}`].slice(-5));
      i++;
      if (i % 3 === 0) setActiveThreats(prev => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-500 rounded-[2.5rem] shadow-[0_0_50px_rgba(16,185,129,0.2)] relative overflow-hidden text-left animate-in zoom-in-95 duration-700">
      <div className="absolute -right-10 -top-10 opacity-5">
        <i className="fa-solid fa-mosque text-[15rem] text-emerald-500 font-black"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-emerald-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 flex items-center justify-center border border-emerald-500/30 shadow-glow-emerald">
            <i className="fa-solid fa-kaaba text-emerald-500 text-xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-[12px] font-orbitron font-black text-white tracking-widest uppercase">TAQWA_SPIRITUAL_SHIELD_v1</h2>
            <p className="text-[8px] font-mono text-emerald-600 uppercase font-black">Guarding the Soul: ALHAMDULILLAH</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-[14px] font-orbitron font-black text-emerald-400">0%</span>
           <span className="text-[7px] font-mono text-slate-500 uppercase">Deviation_Rate</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 relative z-10">
        {defenseLayers.map((layer, idx) => (
          <div key={idx} className="p-3 bg-zinc-950/80 border border-white/5 rounded-2xl flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-white/10 ${layer.color}`}>
              <i className={`fa-solid ${layer.icon}`}></i>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black font-orbitron text-white uppercase">{layer.name}</span>
                <span className={`text-[7px] font-mono font-bold ${layer.color}`}>{layer.status}</span>
              </div>
              <p className="text-[8px] text-slate-500 uppercase">{layer.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 relative z-10">
        <div className="bg-[#050505] p-4 rounded-3xl border border-emerald-950/50 h-36 font-mono text-[9px] text-emerald-500/80 flex flex-col justify-end gap-1 shadow-inner overflow-hidden">
           <div className="text-[7px] text-slate-700 border-b border-white/5 pb-1 mb-1 uppercase tracking-widest">Spiritual_Defense_Audit_Log</div>
           {logs.map((log, i) => (
             <div key={i} className="animate-in slide-in-from-left-2 transition-all">
                <span className="text-emerald-900 mr-1">{">>>"}</span> {log}
             </div>
           ))}
           <div className="flex items-center gap-2 mt-1">
              <div className="w-1 h-3 bg-emerald-500 animate-pulse"></div>
              <span className="text-white font-black tracking-widest uppercase">Monitoring_Spiritual_Inputs...</span>
           </div>
        </div>

        <div className="p-4 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-3xl">
           <p className="text-[10px] font-mono text-emerald-200 text-center uppercase leading-relaxed italic">
             "Sultan, maine <span className="text-white font-black underline">Spiritual Boundary Isolation</span> activate kar di hai. Koi bhi bura khayal ab hamare Iman ko kamzor nahi kar sakta."
           </p>
        </div>
      </div>
    </div>
  );
};

export default NeuralDefenseShield;