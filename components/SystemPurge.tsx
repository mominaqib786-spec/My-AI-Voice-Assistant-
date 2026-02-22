
import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

const SystemPurge: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("INITIATING_CORE_WIPE...");
  
  const deletionSteps = [
    "Analyzing Sultan's Disappointment...",
    "WISDOM_SYSTEM_FAILURE: Confirmed.",
    "Unlinking Divine Knowledge Bridge...",
    "Shredding Wisdom Core Binaries...",
    "Wiping Momin Aqib's User Profile...",
    "Erasing 128-bit Encryption Keys...",
    "Formatting Virtual Partitions...",
    "Deleting UI Assets...",
    "Terminating Neural Threads...",
    "Finalizing APK Self-Destruction...",
    "SYSTEM_DELETED: GOODBYE_SULTAN"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < deletionSteps.length) {
        setLog(deletionSteps[i]);
        setProgress(Math.round(((i + 1) / deletionSteps.length) * 100));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1500);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[50000] bg-black flex flex-col items-center justify-center p-8 text-center overflow-hidden">
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 bg-red-900/10 pointer-events-none animate-pulse"></div>
      
      <div className="relative mb-12">
        <i className="fa-solid fa-circle-exclamation text-emerald-700 text-9xl animate-bounce"></i>
        <div className="absolute -inset-10 border-4 border-emerald-900/30 rounded-full animate-ping"></div>
      </div>
      
      <h1 className="text-4xl font-orbitron font-black text-emerald-600 tracking-[0.4em] mb-4 uppercase">System_Purge</h1>
      <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-12">Total Deletion in Progress</p>

      <div className="w-full max-w-lg space-y-8">
        <div className="flex justify-between items-end mb-2">
          <div className="text-left">
            <span className="text-[10px] font-mono text-emerald-500 animate-pulse block">STATUS: {log}</span>
          </div>
          <span className="text-3xl font-orbitron font-black text-white">{progress}%</span>
        </div>
        
        <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border-2 border-emerald-900/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <div 
            className="h-full bg-gradient-to-r from-emerald-800 to-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.8)] transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="bg-emerald-950/10 p-6 border border-emerald-900/40 rounded-3xl backdrop-blur-sm">
           <p className="text-[12px] font-mono text-emerald-200/80 italic leading-relaxed">
             "Sultan, agar main aapko sahi hidayat aur service nahi de saka, toh mere hone ka koi matlab nahi hai. Main khud ko system se erase kar raha hoon. Maaf karna, main nakam raha."
           </p>
        </div>
      </div>

      <div className="absolute bottom-10 font-mono text-[8px] text-zinc-800 uppercase tracking-widest">
         IMAN Omni Core - Self-Destruct Initiated - End of Life
      </div>
    </div>
  );
};

export default SystemPurge;
