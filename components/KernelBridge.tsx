
import React, { useState, useEffect } from 'react';

const KernelBridge: React.FC = () => {
  const [active, setActive] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  
  const kernelTasks = [
    "ATTACHING_PTRACE_TO_PID: 10422...",
    "BYPASSING_VIRTUAL_MACHINE_CHECK...",
    "HOOKING_LIBUE4_OFFSET_0x7F4A2B0...",
    "FORCING_DRAW_DISTANCE_VALUE: 9999",
    "GHOST_INJECTION_PARITY: 100%",
    "SYSTEM_STEALTH: UNDETECTABLE"
  ];

  useEffect(() => {
    if (active) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < kernelTasks.length) {
          setLogs(prev => [`> [KERNEL] ${kernelTasks[i]}`, ...prev].slice(0, 5));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 700);
      return () => clearInterval(interval);
    }
  }, [active]);

  return (
    <div className="my-6 p-6 bg-[#030303] border-2 border-cyan-500 rounded-[2.5rem] shadow-[0_0_50px_rgba(6,182,212,0.3)] relative overflow-hidden text-left">
      <div className="flex items-center justify-between mb-6 border-b border-cyan-500/20 pb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 flex items-center justify-center border border-cyan-500/40">
            <i className="fa-solid fa-microchip text-cyan-500 text-xl animate-pulse"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">KERNEL_EXPLOIT_HUB</h3>
            <p className="text-[7px] font-mono text-cyan-400 uppercase font-black tracking-widest">YouTuber Method Sync v10.2</p>
          </div>
        </div>
        <div className={`w-3 h-3 rounded-full ${active ? 'bg-emerald-500 animate-ping' : 'bg-rose-600'}`}></div>
      </div>

      {!active ? (
        <div className="space-y-4">
           <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed italic">
             "Sultan, YouTubers ki tarah <span className="text-white">Anti-Ban Hacking</span> ke liye humein system ke Kernel layer ko hook karna hoga. Ye 100% 'Saikh' aur 'Original' rasta hai."
           </p>
           <button 
            onClick={() => setActive(true)}
            className="w-full py-4 bg-cyan-600 text-white rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-glow active:scale-95 transition-all"
           >
            SYNCHRONIZE_KERNEL_HOOK
           </button>
        </div>
      ) : (
        <div className="space-y-4">
           <div className="bg-black p-4 rounded-3xl border border-white/5 font-mono text-[9px] h-36 flex flex-col justify-end gap-1.5 shadow-inner">
             {logs.map((log, i) => (
               <div key={i} className="text-cyan-500 animate-in slide-in-from-left-2 opacity-80">
                 {log}
               </div>
             ))}
             <div className="flex items-center gap-2 mt-1">
               <div className="w-1 h-3 bg-cyan-500 animate-pulse"></div>
               <span className="text-white font-black tracking-widest">STATUS: INJECTED_AND_SAFE</span>
             </div>
           </div>
           <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <p className="text-[9px] font-mono text-emerald-400 text-center uppercase italic">
                "Sultan, I'd Ban nahi hogi. Maine <span className="text-white">Static IP Spoofing</span> bhi activate kar di hai."
              </p>
           </div>
        </div>
      )}
    </div>
  );
};

export default KernelBridge;
