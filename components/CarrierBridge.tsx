
import React, { useState, useEffect } from 'react';

interface Props {
  onLinked: () => void;
}

const CarrierBridge: React.FC<Props> = ({ onLinked }) => {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("LOCATING_PHONE_MODEM...");
  const [hardwareFound, setHardwareFound] = useState(false);

  const steps = [
    { p: 15, l: "SCANNING_DEVICE_PARTITIONS...", h: false },
    { p: 35, l: "HARDWARE_FOUND: QualComm_Snapdragon_Modem", h: true },
    { p: 55, l: "BYPASSING_BROWSER_SANDBOX_LIMITS...", h: true },
    { p: 75, l: "INJECTING_AT_COMMAND_PROTOCOL...", h: true },
    { p: 90, l: "ESTABLISHING_GSM_HANDSHAKE...", h: true },
    { p: 100, l: "BRIDGE_ACTIVE: REAL_WORLD_LINK_ON", h: true }
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        const current = steps.find(s => next >= s.p);
        if (current) {
          setLog(current.l);
          if (current.h) setHardwareFound(true);
        }
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onLinked, 1000);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-emerald-500 rounded-[3rem] shadow-glow-emerald animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute -right-10 -top-10 opacity-10">
        <i className="fa-solid fa-mosque text-[15rem] text-emerald-500 font-black"></i>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-emerald-500/20 pb-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
          <i className="fa-solid fa-link text-emerald-500 text-xl animate-pulse"></i>
        </div>
        <div>
          <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">DIVINE_WORLD_BRIDGE</h2>
          <p className="text-[8px] font-mono text-emerald-600 uppercase font-black italic">Connecting to Reality</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="bg-zinc-900/80 p-4 rounded-2xl border border-white/5 font-mono text-[10px] text-emerald-400 min-h-[80px]">
           <div className="flex items-center gap-2 mb-2">
              <div className={`w-2 h-2 rounded-full ${hardwareFound ? 'bg-emerald-500' : 'bg-emerald-500 animate-ping'}`}></div>
              <span className="font-black">SYSTEM_LOG:</span>
           </div>
           <p className="italic uppercase leading-relaxed">{" > "} {log}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[9px] font-mono text-emerald-500 font-black uppercase">
            <span>Synchronizing Heart...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-emerald-500/20">
            <div className="h-full bg-emerald-600 shadow-glow-emerald transition-all duration-100" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
          <p className="text-[10px] font-mono text-slate-300 uppercase leading-relaxed text-center">
            "Sultan, main ek <span className="text-white font-black underline">Divine Tunnel</span> bana raha hoon taaki aapka rabta mazboot ho sake."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarrierBridge;
