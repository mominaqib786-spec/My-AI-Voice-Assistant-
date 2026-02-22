
import React, { useState, useEffect } from 'react';

const VirtualInstallation: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("AWAITING_RESOURCES");
  const [isInstalled, setIsInstalled] = useState(false);

  const logs = [
    { threshold: 0, text: "SEARCHING: com.pubg.imobile package..." },
    { threshold: 15, text: "LOCATED: /sdcard/Android/obb/com.pubg.imobile" },
    { threshold: 30, text: "DECRYPTING: main.20774.obb metadata..." },
    { threshold: 45, text: "MAPPING: DivineEngine4 Global Context..." },
    { threshold: 60, text: "INJECTING: IMAN_Bridge.so (128-bit Encrypted)" },
    { threshold: 75, text: "BYPASSING: XignCode3 & BattlEye initializers..." },
    { threshold: 90, text: "ESTABLISHING: Sovereign Overlay Authority..." },
    { threshold: 100, text: "SYSTEM: BGMI Virtual Link Active." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsInstalled(true);
          return 100;
        }
        const next = prev + 1;
        const currentLog = logs.find(l => l.threshold <= next && l.threshold > prev - 1);
        if (currentLog) setStatus(currentLog.text);
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const launchGame = () => {
    window.open('pbgm://', '_blank');
  };

  return (
    <div className="my-6 p-8 bg-slate-950 border-2 border-orange-500/50 rounded-[2.5rem] shadow-glow text-left animate-in zoom-in-95 duration-700 relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 opacity-10">
        <i className="fa-solid fa-crosshairs text-[15rem] text-orange-400"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-orange-500/10 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/30">
            <i className={`fa-solid fa-download ${!isInstalled ? 'animate-bounce' : ''} text-orange-500 text-lg`}></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">VIRTUAL_INSTALLER_v4.2</h3>
            <p className="text-[7px] font-mono text-orange-600 uppercase font-black">Target: Battlegrounds Mobile India</p>
          </div>
        </div>
        <div className="text-[8px] font-mono text-slate-500 uppercase">Sovereign Link</div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-mono text-orange-400 font-black uppercase tracking-tighter">
            <span className="flex items-center gap-2">
              {!isInstalled && <i className="fa-solid fa-spinner animate-spin"></i>}
              {status}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-orange-500/20 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-orange-600 to-amber-400 shadow-glow transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-black/40 border border-slate-800 rounded-2xl flex flex-col gap-1">
             <span className="text-[7px] text-slate-500 uppercase font-black">Environment</span>
             <span className="text-[10px] text-white font-mono font-bold uppercase">Root_Sandbox_v9</span>
          </div>
          <div className="p-4 bg-black/40 border border-slate-800 rounded-2xl flex flex-col gap-1">
             <span className="text-[7px] text-slate-500 uppercase font-black">Memory_Bridge</span>
             <span className="text-[10px] text-emerald-500 font-mono font-bold uppercase">STABLE</span>
          </div>
        </div>

        {isInstalled && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500">
            <button 
              onClick={launchGame}
              className="w-full py-5 bg-orange-600 text-white rounded-[1.5rem] font-orbitron font-black text-[12px] uppercase tracking-[0.3em] shadow-glow flex items-center justify-center gap-4 hover:bg-orange-500 active:scale-95 transition-all border-t border-white/20"
            >
              <i className="fa-solid fa-play"></i>
              LAUNCH_SOVEREIGN_BGMI
            </button>
            <p className="mt-4 text-[9px] text-orange-400 font-mono text-center uppercase font-black italic">
              "Sultan, game ab mere link ke through chalege. Saare optimizations auto-loaded hain."
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualInstallation;
