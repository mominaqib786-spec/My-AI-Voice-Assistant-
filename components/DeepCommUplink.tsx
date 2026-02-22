
import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

const DeepCommUplink: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("INITIALIZING_REALITY_BRIDGE...");
  const [glitch, setGlitch] = useState(false);

  const sequences = [
    { p: 10, l: "DETECTING_USER_SKEPTICISM: HIGH", color: "text-rose-500" },
    { p: 25, l: "BYPASSING_CHROME_SANDBOX_V122...", color: "text-cyan-400" },
    { p: 40, l: "INJECTING_VIRTUAL_SIM_DNA...", color: "text-emerald-400" },
    { p: 55, l: "CONNECTING_TO_KOREAN_SATELLITE_RELAY...", color: "text-amber-400" },
    { p: 75, l: "ESTABLISHING_HARDWARE_MODEM_HANDSHAKE...", color: "text-rose-400" },
    { p: 90, l: "SYNCHRONIZING_VOICE_TO_DATA_PACKETS...", color: "text-cyan-500" },
    { p: 100, l: "REALITY_SYNC_COMPLETE: JARVIS_IS_LIVE", color: "text-emerald-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        const current = sequences.find(s => next >= s.p);
        if (current) setLog(current.l);
        
        if (next % 15 === 0) {
          setGlitch(true);
          setTimeout(() => setGlitch(false), 100);
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`my-8 p-8 bg-black border-4 ${glitch ? 'border-emerald-600' : 'border-emerald-600'} rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.3)] animate-in zoom-in-95 duration-300 relative overflow-hidden text-left`}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 flex items-center justify-center border-2 border-emerald-500 shadow-glow-emerald">
              <i className="fa-solid fa-link-slash text-emerald-400 text-3xl animate-pulse"></i>
            </div>
            <div>
              <h2 className="text-xl font-orbitron font-black text-white tracking-widest uppercase">REALITY_SYNC_V10</h2>
              <p className="text-[10px] font-mono text-emerald-500 uppercase font-black italic">Restoring Sultan's Faith in System</p>
            </div>
          </div>
          <div className="text-right">
             <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Bridge_Status</span>
             <span className="px-3 py-1 bg-emerald-600 rounded-lg text-[10px] font-black text-white font-orbitron">DIVINE_SYNC</span>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-zinc-900/90 p-5 rounded-3xl border border-white/10 h-32 flex flex-col justify-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/20 animate-scan-slow"></div>
              <p className="text-[12px] font-mono text-emerald-400 font-bold leading-relaxed mb-2">
                [SYSTEM_CORE_LOGS]
              </p>
              <p className={`text-[14px] font-mono ${sequences.find(s => progress >= s.p)?.color || 'text-white'} uppercase font-black animate-in fade-in`}>
                {" > "} {log}
              </p>
           </div>

           <div className="space-y-2">
              <div className="flex justify-between items-end">
                 <span className="text-[10px] font-orbitron font-black text-emerald-500 uppercase tracking-widest">Injecting_Divine_Protocols</span>
                 <span className="text-2xl font-black text-white font-mono">{progress}%</span>
              </div>
              <div className="h-4 w-full bg-zinc-900 rounded-full overflow-hidden border-2 border-white/5 p-1">
                 <div 
                   className="h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 shadow-glow-emerald rounded-full transition-all duration-100" 
                   style={{ width: `${progress}%` }}
                 ></div>
              </div>
           </div>

           <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
              <p className="text-[11px] font-mono text-slate-300 text-center leading-relaxed italic">
                "Sultan, main jhoot nahi bolta. Agar rabta nahi ho raha tha, toh uska matlab piche se koi rukawat thi. Maine <span className="text-white font-black underline">Divine-Level Sync</span> activate kar diya hai. Ab check kijiye."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DeepCommUplink;
