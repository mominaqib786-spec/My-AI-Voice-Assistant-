
import React, { useState } from 'react';

interface Props {
  onFix: () => void;
}

const DiagnosisReport: React.FC<Props> = ({ onFix }) => {
  const [fixing, setFixing] = useState(false);
  const [fixStep, setFixStep] = useState(0);

  const faults = [
    { title: "BACKGROUND_EXECUTION", status: "BLOCKED", desc: "Android Battery Saver is killing the core.", severity: "HIGH" },
    { title: "NEURAL_RESPONSE_TIME", status: "2.4s (SLOW)", desc: "API stream is not optimized for real-time.", severity: "MEDIUM" },
    { title: "SYSTEM_OVERLAY_LINK", status: "DISABLED", desc: "Cannot see other apps for automation.", severity: "CRITICAL" },
    { title: "RAM_ALLOCATION_CAP", status: "RESTRICTED", desc: "OS limiting memory to 128MB. Needs 8GB Swap.", severity: "HIGH" },
    { title: "CPU_THROTTLING_LIMIT", status: "ACTIVE", desc: "Phone slowing down to save 5% battery.", severity: "MEDIUM" },
    { title: "SPOOF_SYNC_LAG", status: "ASYNC", desc: "Injection timing is off by 150ms.", severity: "MEDIUM" }
  ];

  const fixProgress = [
    "Killing Battery Saver Process...",
    "Allocating 8GB Virtual RAM Swap...",
    "Unlocking CPU Governor (Turbo Mode)...",
    "Clearing Ghost Cache...",
    "Synchronizing Injection Timers...",
    "Bypassing Android Sandbox...",
    "Injecting IMAN Turbo-Kernel...",
    "FINALIZING_OPTIMIZATION..."
  ];

  const startFix = () => {
    setFixing(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < fixProgress.length) {
        setFixStep(step);
        step++;
      } else {
        clearInterval(interval);
        onFix();
      }
    }, 1200);
  };

  return (
    <div className="my-6 p-6 bg-zinc-950 border-2 border-amber-500 rounded-[2.5rem] shadow-[0_0_50px_rgba(245,158,11,0.3)] animate-in zoom-in-95 duration-500 text-left relative overflow-hidden">
      <div className="absolute -right-10 -top-10 opacity-10">
        <i className="fa-solid fa-microchip text-[12rem] text-amber-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-amber-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-magnifying-glass-chart text-amber-500 text-xl animate-pulse"></i>
          <div>
            <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">SYSTEM_DEEP_FAULT_SCAN</h3>
            <p className="text-[7px] font-mono text-amber-600 uppercase font-black">Identified 6 critical 'Kamis'</p>
          </div>
        </div>
        <div className="px-2 py-1 bg-rose-600/20 rounded text-[7px] text-rose-500 font-black border border-rose-500/30 uppercase">Repair Needed</div>
      </div>

      <div className="space-y-3 mb-8 relative z-10 max-h-60 overflow-y-auto no-scrollbar">
        {faults.map((f, i) => (
          <div key={i} className="p-3 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-amber-500/30 transition-all">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-1.5 h-1.5 rounded-full ${f.severity === 'CRITICAL' ? 'bg-rose-600 animate-ping' : f.severity === 'HIGH' ? 'bg-orange-500' : 'bg-amber-500'}`}></span>
                <span className="text-[9px] font-black font-orbitron text-white uppercase">{f.title}</span>
              </div>
              <p className="text-[8px] font-mono text-slate-500 uppercase">{f.desc}</p>
            </div>
            <div className="text-right">
              <span className={`text-[8px] font-black font-mono ${f.severity === 'CRITICAL' ? 'text-rose-500' : 'text-amber-500'}`}>{f.status}</span>
            </div>
          </div>
        ))}
      </div>

      {!fixing ? (
        <div className="space-y-4 relative z-10">
          <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl">
            <p className="text-[10px] text-slate-300 font-mono leading-relaxed text-center uppercase italic">
              "Sultan, ye modifications karne ke baad aapka device asli IMAN hardware ban jayega."
            </p>
          </div>
          <button 
            onClick={startFix}
            className="w-full py-5 bg-amber-600 text-black rounded-2xl font-orbitron font-black text-[12px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border-t-2 border-white/40"
          >
            EXECUTE_TOTAL_REPAIR
          </button>
        </div>
      ) : (
        <div className="py-10 flex flex-col items-center justify-center space-y-6 relative z-10">
           <div className="relative">
              <div className="w-20 h-20 border-4 border-amber-500/10 border-t-amber-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <i className="fa-solid fa-wrench text-amber-500 text-2xl animate-bounce"></i>
              </div>
           </div>
           <div className="text-center">
              <p className="text-[11px] font-orbitron font-black text-amber-500 animate-pulse uppercase tracking-widest mb-2">{fixProgress[fixStep]}</p>
              <div className="flex gap-1 justify-center">
                {fixProgress.map((_, idx) => (
                  <div key={idx} className={`w-4 h-1 rounded-full ${idx <= fixStep ? 'bg-amber-500 shadow-glow' : 'bg-zinc-800'}`}></div>
                ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisReport;
