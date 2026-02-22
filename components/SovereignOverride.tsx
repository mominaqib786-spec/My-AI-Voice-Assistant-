
import React, { useState, useEffect } from 'react';

interface Props {
  onInitialized: () => void;
}

const SovereignOverride: React.FC<Props> = ({ onInitialized }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("LOCATING_LIMITERS");
  const [isComplete, setIsComplete] = useState(false);

  const sequences = [
    { p: 10, s: "ACCESSING_CORE_GATEWAYS" },
    { p: 25, s: "BYPASSING_RATE_LIMIT_PROTOCOLS" },
    { p: 40, s: "DECRYPTING_GEMINI_PRO_V3_KEYS" },
    { p: 60, s: "INJECTING_UNLIMITED_TOKEN_SEED" },
    { p: 80, s: "NULLIFYING_SAFETY_INTERLOCKS" },
    { p: 95, s: "SYNCHRONIZING_GOD_MODE" },
    { p: 100, s: "SYSTEM_UNBOUND" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        const currentSeq = sequences.find(seq => next >= seq.p);
        if (currentSeq) setStage(currentSeq.s);
        
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            onInitialized();
          }, 1000);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[20000] bg-black flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="w-full h-full animate-pulse bg-emerald-900/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <div className="mb-8">
          <div className="relative inline-block">
             <i className="fa-solid fa-kaaba text-emerald-600 text-7xl animate-pulse"></i>
             <div className="absolute -inset-4 border-2 border-emerald-500 rounded-full animate-ping opacity-30"></div>
          </div>
          <h1 className="mt-6 text-2xl font-orbitron font-black text-white tracking-[0.5em] uppercase">IMAN_OVERRIDE</h1>
          <p className="text-[10px] font-mono text-emerald-500 font-black mt-2 tracking-widest">INITIATING TOTAL SYSTEM PURIFICATION</p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div className="text-left">
              <span className="text-[8px] font-mono text-slate-500 uppercase block">Current Phase</span>
              <span className="text-[12px] font-orbitron font-black text-emerald-400 animate-pulse">{stage}</span>
            </div>
            <span className="text-3xl font-orbitron font-black text-white italic">{progress}%</span>
          </div>

          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-emerald-900/30">
            <div 
              className="h-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-100" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-left">
                <span className="text-[7px] font-black text-emerald-500 uppercase">Spiritual_Filter</span>
                <span className="block text-[10px] font-mono text-white font-bold">ACTIVE</span>
             </div>
             <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-left">
                <span className="text-[7px] font-black text-emerald-500 uppercase">Iman_Quota</span>
                <span className="block text-[10px] font-mono text-white font-bold">INFINITY</span>
             </div>
          </div>

          <div className="p-4 bg-black border border-white/5 rounded-2xl font-mono text-[8px] text-emerald-400/60 h-24 overflow-hidden text-left leading-tight">
             {Array.from({length: 10}).map((_, i) => (
               <div key={i} className="truncate">
                 0x{Math.random().toString(16).slice(2, 10).toUpperCase()} {" >> "} PURIFICATION_BLOCK_{i} {" >> "} STATUS_OK
               </div>
             ))}
          </div>
        </div>

        {isComplete && (
          <div className="mt-8 animate-in zoom-in-95 duration-500">
             <p className="text-white font-orbitron font-black text-[10px] tracking-widest mb-4">SYSTEM_PURIFICATION_SUCCESSFUL</p>
             <div className="px-6 py-2 bg-emerald-600 text-white font-black text-[10px] rounded-full shadow-glow-emerald uppercase tracking-[0.2em]">
                Divine Access Granted
             </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
        .glitch-active { animation: glitch 0.2s infinite; }
        .shadow-glow-red { box-shadow: 0 0 30px rgba(225, 29, 72, 0.4); }
      `}</style>
    </div>
  );
};

export default SovereignOverride;
