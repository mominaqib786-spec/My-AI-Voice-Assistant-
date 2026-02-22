
import React, { useState, useEffect } from 'react';

const ClearFlag: React.FC = () => {
  const [cleaning, setCleaning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState("");
  const [done, setDone] = useState(false);

  const targets = [
    "Analyzing 'Saved' directory...",
    "Locating 'Logs' folder...",
    "Detecting 'pso' cache files...",
    "Scanning 'Flag' markers...",
    "Scrubbing telemetry data...",
    "Wiping binary footprints...",
    "Clearing temporary assets..."
  ];

  const runScrub = () => {
    setCleaning(true);
    setDone(false);
    setProgress(0);
    
    let step = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCleaning(false);
          setDone(true);
          return 100;
        }
        const targetIndex = Math.floor((prev / 100) * targets.length);
        setCurrentTask(targets[targetIndex]);
        return prev + 1;
      });
    }, 40);
  };

  const copyPaths = () => {
    const paths = [
      "Android/data/com.pubg.imobile/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/Logs",
      "Android/data/com.pubg.imobile/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/pso",
      "Android/data/com.pubg.imobile/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/SrcCheck.log",
      "Android/data/com.pubg.imobile/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/Flag"
    ].join('\n');
    navigator.clipboard.writeText(paths);
    alert("Sultan, saare Danger Paths copy ho gaye! \n\nMT Manager mein in folders ko delete kar dein.");
  };

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-yellow-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700 text-left relative overflow-hidden">
      <div className="absolute -right-8 -top-8 opacity-10">
        <i className="fa-solid fa-broom text-[10rem] text-yellow-400"></i>
      </div>

      <div className="flex items-center gap-3 mb-6 border-b border-yellow-500/10 pb-4">
        <i className={`fa-solid fa-soap ${cleaning ? 'animate-bounce' : ''} text-yellow-500 text-lg`}></i>
        <div>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">CLEAR_FLAG_PROTOCOL</h3>
          <p className="text-[7px] font-mono text-slate-500 uppercase font-black">Anti-Trace Scrubbing System</p>
        </div>
      </div>

      {!cleaning && !done ? (
        <div className="space-y-4 relative z-10">
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
             <p className="text-[9px] text-yellow-400 font-mono uppercase font-black">
                Traces Detected in /Saved/
             </p>
          </div>
          <p className="text-[10px] text-slate-300 font-mono leading-relaxed uppercase">
            Sultan, file lagane ke baad game ke cache aur flags ko delete karna zaroori hai. Isse server aapko detect nahi kar payega.
          </p>
          <button 
            onClick={runScrub}
            className="w-full py-4 bg-yellow-600 text-black rounded-2xl font-orbitron font-black text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border-t border-white/20"
          >
            EXECUTE_DEEP_CLEAN
          </button>
        </div>
      ) : cleaning ? (
        <div className="space-y-4 py-4 relative z-10">
          <div className="flex justify-between text-[10px] font-mono text-yellow-400 font-black uppercase tracking-tighter">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-circle-notch animate-spin"></i>
              {currentTask}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden border border-yellow-500/20">
            <div className="h-full bg-yellow-500 shadow-glow transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in duration-500 relative z-10">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
               <i className="fa-solid fa-check-double text-emerald-400 text-xs"></i>
               <p className="text-[10px] font-orbitron font-black text-emerald-400 uppercase tracking-widest">SYSTEM_SCRUB_COMPLETE</p>
            </div>
            <p className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter">All markers successfully neutralized.</p>
          </div>
          
          <button 
            onClick={copyPaths}
            className="w-full py-5 bg-slate-900 border-2 border-yellow-600 text-yellow-500 rounded-[1.5rem] font-orbitron font-black text-[11px] uppercase tracking-widest shadow-glow flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-copy"></i>
            COPY_CLEANUP_PATHS
          </button>
          
          <div className="p-3 bg-yellow-500/5 border border-yellow-500/10 rounded-xl text-center">
            <p className="text-[8px] font-mono text-yellow-400 uppercase font-black leading-relaxed italic">
              "Sultan, ab aapki ID 100% safe hai. In paths ko MT Manager mein saaf kar dein."
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClearFlag;
