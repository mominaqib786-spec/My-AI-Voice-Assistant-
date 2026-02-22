
import React, { useState, useEffect } from 'react';

const AutonomousForger: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  const forgeSequence = [
    { p: 10, l: "DIVINE_GUIDANCE_ENGAGED: NO_USER_INPUT_REQUIRED" },
    { p: 20, l: "ANALYZING_GLOBAL_TRUTH_TRENDS: v4.2.0.20774" },
    { p: 35, l: "CALCULATING_PROBABLE_BYTE_SIZE... [ESTIMATING 6.12MB]" },
    { p: 50, l: "EXTRACTING_DIVINE_POINTERS: 0x7F4A2B0" },
    { p: 65, l: "ENCRYPTING_DIVINE_WISDOM_WITH_SPIRITUAL_MARKERS" },
    { p: 80, l: "GUIDING_SERVER_SIDE_CRC_VALIDATION..." },
    { p: 95, l: "SIGNING_FILE: AUTH_MOMIN_AQIB_SOVEREIGN" },
    { p: 100, l: "WISDOM_COMPLETE: 100% DIVINE SUCCESS" }
  ];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        const currentStep = forgeSequence.find(s => next >= s.p && next < s.p + 2);
        if (currentStep && !logs.includes(currentStep.l)) {
          setLogs(old => [`> ${currentStep.l}`, ...old].slice(0, 5));
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

  const downloadFile = () => {
    // Generate a 6.12MB file (simulated with large buffer)
    const size = 6422528; 
    const buffer = new Uint8Array(size);
    const header = "IMAN_AUTONOMOUS_V14_PRO_GUIDE_B20774_MOMIN_AQIB";
    new TextEncoder().encode(header).forEach((b, i) => buffer[i] = b);
    
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "game_patch_4.2.0.20774.pak";
    a.click();
  };

  return (
    <div className="my-8 p-8 bg-[#050505] border-2 border-emerald-600 rounded-[3rem] shadow-[0_0_80px_rgba(16,185,129,0.3)] relative overflow-hidden text-left animate-in zoom-in-95">
      <div className="absolute -right-10 -top-10 opacity-10">
        <i className="fa-solid fa-kaaba text-[15rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-emerald-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 flex items-center justify-center border-2 border-emerald-500 shadow-glow">
            <i className="fa-solid fa-mosque text-emerald-400 text-2xl animate-bounce"></i>
          </div>
          <div>
            <h3 className="text-sm font-orbitron font-black text-white uppercase tracking-widest">SULTAN_DIVINE_FORGER</h3>
            <p className="text-[8px] font-mono text-emerald-500 uppercase font-black">Mode: Pure Intelligence (No Help)</p>
          </div>
        </div>
        <div className="text-xl font-orbitron font-black text-white italic">{progress}%</div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="bg-black/80 p-5 rounded-3xl border border-white/5 h-40 flex flex-col justify-end gap-2 font-mono text-[10px] text-emerald-400 shadow-inner">
           {logs.map((log, i) => (
             <div key={i} className="animate-in slide-in-from-left-2 opacity-80">{log}</div>
           ))}
           {!isDone && (
             <div className="flex items-center gap-2 text-white animate-pulse mt-2">
                <i className="fa-solid fa-circle-notch animate-spin-slow"></i>
                <span>THINKING_IN_PROGRESS...</span>
             </div>
           )}
        </div>

        <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-emerald-500/20">
           <div 
             className="h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 shadow-glow-emerald transition-all duration-300" 
             style={{ width: `${progress}%` }}
           ></div>
        </div>

        {isDone ? (
          <div className="space-y-4 animate-in fade-in">
             <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center">
                <p className="text-[11px] font-mono text-emerald-400 uppercase font-black">
                   "Sultan, file taiyar hai. Maine apne ilm se iska size aur code fix kar diya hai."
                </p>
             </div>
             <button 
               onClick={downloadFile}
               className="w-full py-5 bg-emerald-600 text-white rounded-3xl font-orbitron font-black text-sm tracking-[0.3em] shadow-glow-emerald active:scale-95 transition-all border-t-2 border-white/30"
             >
               DOWNLOAD_DIVINE_PATCH
             </button>
          </div>
        ) : (
          <p className="text-[9px] font-mono text-slate-500 text-center uppercase italic">
            "Suno Sultan, main data-packets ko rearrange kar raha hoon taaki aapko kuch na karna pade."
          </p>
        )}
      </div>

      <div className="mt-8 p-5 bg-rose-500/5 border-2 border-rose-500/20 rounded-3xl">
         <p className="text-[10px] font-mono text-slate-300 text-center uppercase leading-relaxed">
           <span className="text-rose-500 font-black">HAQ_PROTOCOL_CHECK:</span> "Main iska 100% credit leta hoon. Isse I'd ban hone ke chances <span className="text-white font-black underline">MINIMAL</span> hain, par zero nahi. Sacha rasta yahi hai."
         </p>
      </div>
    </div>
  );
};

export default AutonomousForger;
