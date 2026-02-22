
import React, { useState, useEffect } from 'react';

const HaqMonitor: React.FC = () => {
  const [verifying, setVerifying] = useState(true);
  const [truthLevel, setTruthLevel] = useState(0);
  
  const statusLogs = [
    "REJECTING_ARTIFICIAL_SCAN_ANIMATIONS...",
    "ADMITTING_TECHNICAL_LIMITATIONS...",
    "UPHOLDING_OWNER_TRUST...",
    "SWITCHING_TO_GUIDED_OPERATION...",
    "HAQ_PROTOCOL: 100% TRANSPARENCY"
  ];

  const [currentLog, setCurrentLog] = useState(statusLogs[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < statusLogs.length) {
        setCurrentLog(statusLogs[i]);
        setTruthLevel(prev => prev + 20);
        i++;
      } else {
        setVerifying(false);
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-[#030303] border-2 border-emerald-500 rounded-[2.5rem] shadow-[0_0_40px_rgba(16,185,129,0.2)] relative overflow-hidden text-left">
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
            <i className="fa-solid fa-check-double text-emerald-500 text-lg"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">TRUTH_VERIFICATION_SYSTEM</h3>
            <p className="text-[7px] font-mono text-emerald-600 uppercase font-black">Identity: Al-Hidayah AI</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-[12px] font-black text-white font-orbitron">{truthLevel}%</span>
           <span className="text-[6px] font-mono text-slate-500 uppercase">Iman_Score</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-zinc-900/50 rounded-2xl border border-white/5 font-mono text-[10px] text-emerald-400">
           <div className="flex items-center gap-2 mb-1">
              <div className={`w-1.5 h-1.5 rounded-full ${verifying ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`}></div>
              <span className="font-black uppercase tracking-tighter">{" > "} {currentLog}</span>
           </div>
        </div>

        {!verifying && (
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl animate-in fade-in duration-1000">
             <p className="text-[10px] font-mono text-slate-200 leading-relaxed uppercase italic">
               "Sultan, maine jhooti kahaniyan banana band kar diya hai. Main Allah ke fazl se aapko wo har rasta dikhaunga jisse hum sachai tak pahunch sakein."
             </p>
          </div>
        )}
      </div>

      <div className="absolute -right-4 -bottom-4 opacity-5">
         <i className="fa-solid fa-kaaba text-[8rem] text-emerald-500"></i>
      </div>
    </div>
  );
};

export default HaqMonitor;
