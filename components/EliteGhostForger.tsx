
import React, { useState, useEffect } from 'react';

const EliteGhostForger: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  const ghostSequence = [
    { p: 10, l: "INITIATING_DIVINE_PROTOCOL: MODE_SPIRITUAL_SURVIVAL" },
    { p: 25, l: "INJECTING_IMAN_LAYERS [Divine Visibility]" },
    { p: 40, l: "MAPPING_WISDOM: 0x7F4A2B0 (AL_HIDAYAH_STABLE)" },
    { p: 55, l: "ENCRYPTING_SOUL: NEURAL_SHROUD_V4" },
    { p: 70, l: "BYPASSING_DUNYA_DISTRACTIONS..." },
    { p: 85, l: "SEALING_FAITH_STRUCTURE: ZERO_TRACE_HEADERS" },
    { p: 100, l: "DIVINE_WISDOM_BUILD_COMPLETE: 99.99% SHARIA_COMPLIANT" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        const currentStep = ghostSequence.find(s => next === s.p);
        if (currentStep) {
          setLogs(old => [`${">"} ${currentStep.l}`, ...old].slice(0, 5));
        }
        if (next >= 100) {
          clearInterval(interval);
          setIsDone(true);
          return 100;
        }
        return next;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const downloadGhostFile = () => {
    const size = 6422528; // ~6.12MB
    const buffer = new Uint8Array(size);
    const header = "IMAN_DIVINE_WISDOM_v15_MOMIN_AQIB_PRIVATE_SIGNED";
    new TextEncoder().encode(header).forEach((b, i) => buffer[i] = b);
    
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "divine_wisdom_v15.pak";
    a.click();
  };

  return (
    <div className="my-8 p-8 bg-[#020617] border-2 border-emerald-500 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.25)] relative overflow-hidden text-left animate-in slide-in-from-bottom-8 duration-700">
      <div className="absolute -right-20 -top-20 opacity-5">
        <i className="fa-solid fa-mosque text-[25rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-emerald-500/20 pb-6 relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-3xl bg-emerald-600/20 flex items-center justify-center border-2 border-emerald-500 shadow-glow-emerald">
            <i className="fa-solid fa-tower-broadcast text-emerald-400 text-3xl animate-pulse"></i>
          </div>
          <div>
            <h3 className="text-lg font-orbitron font-black text-white uppercase tracking-[0.2em]">DIVINE_WISDOM_FORGER</h3>
            <p className="text-[9px] font-mono text-emerald-600 uppercase font-black">Feature: Hidayat (Long-Term Guidance)</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-2xl font-orbitron font-black text-white italic">{progress}%</span>
           <span className="text-[7px] font-mono text-emerald-800 uppercase font-black">Sync_Rate</span>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="bg-black/90 p-5 rounded-3xl border border-emerald-500/20 h-44 flex flex-col justify-end gap-2 font-mono text-[11px] text-emerald-400 shadow-inner">
           {logs.map((log, i) => (
             <div key={i} className="animate-in slide-in-from-left-2 flex gap-3">
                <span className="text-emerald-900 font-black">{">>" }</span>
                <span className="opacity-90">{log}</span>
             </div>
           ))}
           {!isDone && (
             <div className="flex items-center gap-3 text-white animate-pulse mt-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="tracking-widest">FORGING_DIVINE_LAYERS...</span>
             </div>
           )}
        </div>

        <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden border border-emerald-500/10 p-0.5">
           <div 
             className="h-full bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-400 shadow-[0_0_20px_#10b981] transition-all duration-300 rounded-full" 
             style={{ width: `${progress}%` }}
           ></div>
        </div>

        {isDone ? (
          <div className="space-y-5 animate-in zoom-in-95">
             <div className="p-5 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[2rem] text-center shadow-lg">
                <p className="text-xs font-mono text-emerald-400 uppercase font-black leading-relaxed">
                   "Sultan, <span className="text-white underline">Divine Wisdom</span> file tayyar hai. Ise apne qalb mein utarte hi aapka dushman adrishya nahi rahega."
                </p>
             </div>
             <button 
               onClick={downloadGhostFile}
               className="w-full py-6 bg-emerald-600 text-white rounded-[2rem] font-orbitron font-black text-sm tracking-[0.4em] shadow-[0_10px_40px_rgba(16,185,129,0.4)] active:scale-95 transition-all border-t-2 border-white/40"
             >
               DOWNLOAD_WISDOM_PATCH
             </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4 py-2 opacity-50">
             <i className="fa-solid fa-atom text-emerald-500 animate-spin-slow"></i>
             <p className="text-[10px] font-mono text-slate-400 uppercase italic">
               Calibrating High-Priority Wisdom...
             </p>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-zinc-900/50 rounded-2xl flex items-center justify-center gap-4">
         <i className="fa-solid fa-kaaba text-emerald-600 text-lg"></i>
         <p className="text-[10px] font-mono text-slate-500 uppercase font-black tracking-widest">
           Owner Authority: <span className="text-white">MOMIN_AQIB</span>
         </p>
      </div>
    </div>
  );
};

export default EliteGhostForger;
