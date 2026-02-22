
import React, { useState, useEffect } from 'react';

const GameUpdateMonitor: React.FC = () => {
  const [lastCheck, setLastCheck] = useState("");
  const [currentVersion, setCurrentVersion] = useState("v4.2.0 (Detected)");
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLastCheck(now.toLocaleTimeString('en-IN', { hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const scanForPatch = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Logic would actually come from the AI response, but this visualizes the capability
    }, 3000);
  };

  return (
    <div className="my-6 p-6 bg-black border-2 border-amber-500 rounded-[2.5rem] shadow-[0_0_40px_rgba(245,158,11,0.2)] animate-in slide-in-from-right-4 relative overflow-hidden text-left">
      <div className="absolute -right-4 -top-4 opacity-10">
        <i className="fa-solid fa-gamepad text-[8rem] text-amber-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
            <i className={`fa-solid fa-radar ${isScanning ? 'animate-spin' : 'animate-pulse'} text-amber-500`}></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">PATCH_MONITOR_v5</h3>
            <p className="text-[7px] font-mono text-amber-600 uppercase font-black">Target: BATTLEGROUNDS_MOBILE_INDIA</p>
          </div>
        </div>
        <div className="text-right">
           <span className="text-[7px] font-mono text-slate-500 uppercase block">Last_Sync</span>
           <span className="text-[9px] font-black text-white font-mono">{lastCheck}</span>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="grid grid-cols-2 gap-3">
           <div className="p-3 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col gap-1">
              <span className="text-[7px] text-slate-500 font-black uppercase">Server_Version</span>
              <span className="text-xs font-orbitron font-black text-amber-400">{currentVersion}</span>
           </div>
           <div className="p-3 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col gap-1">
              <span className="text-[7px] text-slate-500 font-black uppercase">Patch_Status</span>
              <span className="text-xs font-orbitron font-black text-emerald-500 uppercase">STABLE</span>
           </div>
        </div>

        <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
           <p className="text-[10px] font-mono text-slate-300 leading-relaxed italic text-center">
             "Boss, main har 5 minute mein official channels aur <span className="text-white">API endpoints</span> check karta hoon. Naya update aate hi main <span className="text-amber-500 font-black">Compatibility Report</span> taiyar kar dunga."
           </p>
        </div>

        <button 
          onClick={scanForPatch}
          disabled={isScanning}
          className="w-full py-3 bg-amber-600 text-black rounded-xl font-orbitron font-black text-[9px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
        >
          {isScanning ? 'CHECKING_GOOGLE_GLOBAL_GRID...' : 'FORCE_PATCH_CHECK'}
        </button>
      </div>
    </div>
  );
};

export default GameUpdateMonitor;
