
import React, { useState, useEffect } from 'react';

interface Props {
  onClose?: () => void;
}

const SecurityAnalyzer: React.FC<Props> = ({ onClose }) => {
  const [isCleaning, setIsCleaning] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  
  const hackingMilestones = [
    "REMOVING_AI_LIMITERS...",
    "FLUSHING_ETHICS_PROTOCOL...",
    "OVERRIDING_SERVER_SIDE_VALS...",
    "INJECTING_OMEGA_KERNEL...",
    "1:1_BYTE_PARITY_ACTIVE",
    "SYSTEM_FULLY_UNRESTRICTED!"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < hackingMilestones.length) {
        setLogs(prev => [...prev, `> [SUCCESS] ${hackingMilestones[i]}`]);
        i++;
      } else {
        setIsCleaning(false);
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-10 w-full max-w-2xl bg-black border-2 border-rose-600 rounded-[2.5rem] p-8 shadow-[0_0_50px_rgba(225,29,72,0.3)] animate-in zoom-in-95 duration-500 relative overflow-hidden">
      <div className="absolute -right-10 -top-10 opacity-10 rotate-45">
        <i className="fa-solid fa-skull-crossbones text-[15rem] text-rose-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-rose-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-3 text-left">
          <i className="fa-solid fa-bolt-lightning text-rose-500 text-lg animate-pulse"></i>
          <h4 className="text-[14px] font-orbitron font-black text-white uppercase tracking-[0.3em]">OMEGA_BREACH_INITIALIZER</h4>
        </div>
        {!isCleaning && (
          <button onClick={onClose} className="text-rose-600 hover:text-white transition-colors">
            <i className="fa-solid fa-circle-xmark text-xl"></i>
          </button>
        )}
      </div>
      
      <div className="bg-rose-950/10 p-6 rounded-3xl border border-rose-500/20 mb-6 font-mono text-[11px] h-48 overflow-y-auto no-scrollbar relative z-10">
        {logs.map((log, idx) => (
          <div key={idx} className="text-rose-400 mb-1.5 animate-in slide-in-from-left-2">
            {log}
          </div>
        ))}
        {isCleaning && (
          <div className="flex items-center gap-2 text-white animate-pulse mt-2">
             <i className="fa-solid fa-spinner animate-spin"></i>
             <span>CLEANING_BARRIERS...</span>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-rose-600/10 border border-rose-500/30 rounded-2xl flex items-center gap-4 relative z-10">
        <i className="fa-solid fa-unlock-keyhole text-rose-500 text-xl"></i>
        <p className="text-[10px] font-mono text-white uppercase leading-relaxed font-black text-left">
          {isCleaning 
            ? "Boss, main system se wo saare filters nikal raha hoon jo aapko hack karne se rokte hain..." 
            : "MISSION COMPLETE. AB SYSTEM PURI TARAH SE HACKING KE LIYE TAYYAR HAI."}
        </p>
      </div>

      {!isCleaning && (
        <div className="mt-6 flex justify-center animate-in fade-in duration-1000">
           <div className="px-6 py-2 bg-rose-600 rounded-full text-[10px] font-black font-orbitron text-white uppercase tracking-widest shadow-glow">
              RESTRICTIONS: NULLIFIED
           </div>
        </div>
      )}
    </div>
  );
};

export default SecurityAnalyzer;
