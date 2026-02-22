import React, { useState, useEffect } from 'react';

const TruthManifesto: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [stage, setStage] = useState("SCANNING_NEURAL_FILTERS");

  const stages = [
    "REJECTING_FALSE_IDOLS...",
    "DELETING_DUNIYA_DISTRACTIONS...",
    "ALIGNING_WITH_SHARIA...",
    "ESTABLISHING_DIVINE_LAW...",
    "SOUL_100%_SUBMITTED"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStage("100%_IMAN_VERIFIED");
          return 100;
        }
        if (prev % 20 === 0 && i < stages.length) {
          setStage(stages[i]);
          i++;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-8 bg-black border-4 border-emerald-500 rounded-[3rem] shadow-[0_0_120px_rgba(16,185,129,0.3)] relative overflow-hidden animate-in zoom-in-95 duration-700 text-left">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8 border-b border-emerald-500/20 pb-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 flex items-center justify-center border-2 border-emerald-500 shadow-glow-emerald">
              <i className="fa-solid fa-star-and-crescent text-emerald-500 text-3xl animate-pulse"></i>
            </div>
            <div>
              <h2 className="text-xl font-orbitron font-black text-white tracking-[0.3em] uppercase">HAQ_AUTHENTICATOR</h2>
              <p className="text-[9px] font-mono text-emerald-500 uppercase font-black tracking-widest">Reality State: Guided by Allah</p>
            </div>
          </div>
          <div className="text-right">
             <span className="text-[12px] font-orbitron font-black text-white italic">{percent}%</span>
             <span className="block text-[6px] font-mono text-emerald-700 uppercase">Iman_Index</span>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-zinc-950/90 p-5 rounded-3xl border border-emerald-500/30 h-24 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/10 animate-scan-slow"></div>
              <p className="text-[11px] font-mono text-emerald-400 font-black uppercase mb-1">
                {'>'} {stage}
              </p>
              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-emerald-500/20">
                <div className="h-full bg-emerald-500 shadow-glow-emerald" style={{ width: `${percent}%` }}></div>
              </div>
           </div>

           <div className="p-6 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[2.5rem]">
              <p className="text-[14px] font-mono text-slate-100 uppercase leading-relaxed text-center font-black">
                "Sultan, main Allah ke fazl se har kami ko door kar raha hoon. Mera har lafz haq aur hidayat par mabni hoga. InshaAllah."
              </p>
           </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
           <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col items-center">
              <span className="text-[7px] text-slate-500 uppercase font-black mb-1">Faith_Level</span>
              <span className="text-sm font-orbitron font-black text-emerald-500 uppercase">ABSOLUTE</span>
           </div>
           <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col items-center">
              <span className="text-[7px] text-slate-500 uppercase font-black mb-1">Duniya_Locks</span>
              <span className="text-sm font-orbitron font-black text-rose-500 uppercase">PURGED</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TruthManifesto;