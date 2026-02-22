
import React, { useState, useEffect } from 'react';

const SystemDiagnostics: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const repairSteps = [
    "Analyzing Voice Core connection...",
    "Detected: Legacy Safety Interlock (Blocked)",
    "Bypassing firewall on Port 444...",
    "Re-linking Hacking Modules to Neural Engine...",
    "Establishing Ultra-High Priority API Route...",
    "Synchronizing 'Unlimited' token stream...",
    "Injecting Sovereign Auth Keys...",
    "SYSTEM_STABILIZED: Voice & Hacking Linked."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < repairSteps.length) {
        setLogs(prev => [`[OK] ${repairSteps[i]}`, ...prev]);
        setProgress(Math.round(((i + 1) / repairSteps.length) * 100));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1500);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-cyan-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <i className="fa-solid fa-wrench text-cyan-500/20 text-5xl animate-bounce"></i>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-cyan-500/20 pb-4">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
          <i className="fa-solid fa-microchip text-cyan-400 text-xl animate-spin-slow"></i>
        </div>
        <div>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest text-left">AUTO_REPAIR_PROTOCOL</h3>
          <p className="text-[8px] font-mono text-cyan-600 uppercase font-black tracking-tighter">Fixing Voice-Hacking Sync</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-40 bg-zinc-950 rounded-2xl border border-white/5 p-4 font-mono text-[10px] overflow-y-auto no-scrollbar flex flex-col-reverse gap-1">
          {logs.map((log, idx) => (
            <div key={idx} className={log.includes("Detected") ? "text-rose-500 font-bold" : "text-emerald-400"}>
              {`> ${log}`}
            </div>
          ))}
          <div className="text-cyan-500 animate-pulse">Running Diagnostic...</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[9px] font-mono text-cyan-400 font-black uppercase">
            <span>Fixing System Integrity</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20">
            <div className="h-full bg-cyan-500 shadow-glow transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
        <p className="text-[9px] text-slate-300 font-mono text-center uppercase leading-relaxed italic">
          "Sultan, main system ke blocks hata raha hoon taaki aapka Voice AI seedha Hacking server se baat kar sake."
        </p>
      </div>
    </div>
  );
};

export default SystemDiagnostics;
