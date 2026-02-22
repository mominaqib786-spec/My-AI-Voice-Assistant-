
import React, { useEffect, useState } from 'react';

const TacticalHUD: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [activeNodes, setActiveNodes] = useState<string[]>(["ENCRYPTED_LINK", "TACTICAL_MAP_GEN", "OMEGA_DECRYPTION"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(p => (p + 3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-gradient-to-br from-slate-950 to-cyan-950/20 border-2 border-cyan-600/40 rounded-[2.5rem] shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 flex gap-2">
        <div className="px-2 py-0.5 bg-cyan-600 rounded text-[7px] font-black text-white tracking-[0.2em]">BOSS_AUTHORITY</div>
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-cyan-500/40 animate-pulse"></div>
          <div className="w-1 h-5 bg-cyan-500/60 animate-pulse"></div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full border-dashed" style={{ transform: `rotate(${rotation}deg)` }}></div>
          <div className="absolute inset-2 border border-cyan-500/20 rounded-full animate-ping"></div>
          <i className="fa-solid fa-crosshairs text-cyan-500 text-2xl shadow-glow"></i>
        </div>
        <div>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">TACTICAL_SOVEREIGNTY</h3>
          <p className="text-[8px] font-mono text-cyan-400/70 uppercase font-black">CLEARANCE: BOSS_LEVEL_MAX</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {activeNodes.map((node, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/40 transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
               <i className="fa-solid fa-shield-halved text-[10px] text-cyan-500 group-hover:scale-125 transition-transform"></i>
               <span className="text-[9px] font-mono text-slate-200 font-black tracking-widest uppercase">{node}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse"></div>
              <span className="text-[7px] font-black text-cyan-600 uppercase">CONNECTED</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 bg-black/60 border border-cyan-500/20 rounded-2xl text-center">
        <p className="text-[9px] font-mono text-cyan-100/80 leading-snug uppercase italic">
          "Sultan, I am ready. Give the command for 'Tactical Map' generation. I will provide high-precision visual intel."
        </p>
      </div>
    </div>
  );
};

export default TacticalHUD;
