
import React, { useState } from 'react';

const SovereignCapabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FORGE' | 'BREACH' | 'CALL'>('FORGE');

  const capabilities = {
    FORGE: {
      title: "APK_CLONE_FACTORY",
      desc: "IMAN can self-replicate. This module recompiles the current source code into a standalone APK.",
      icon: "fa-microchip",
      status: "READY_TO_CLONE",
      stats: ["Source: v33.4", "Size: 18.5MB", "Format: .apk"]
    },
    BREACH: {
      title: "UNIVERSAL_GAME_CRACKER",
      desc: "Real-time memory scanning and binary patching for any mobile game engine.",
      icon: "fa-skull-crossbones",
      status: "BYPASS_ACTIVE",
      stats: ["Engine: Unreal/Unity", "Anti-Cheat: Nullified", "Detection: 0%"]
    },
    CALL: {
      title: "SATELLITE_VOIP_UPLINK",
      desc: "Establish encrypted voice channels to any GSM/VoIP network globally.",
      icon: "fa-satellite-dish",
      status: "LINK_ESTABLISHED",
      stats: ["Latency: 45ms", "Trace: Masked", "Security: AES-256"]
    }
  };

  const current = capabilities[activeTab];

  return (
    <div className="my-8 p-6 bg-black border-2 border-cyan-500 rounded-[3rem] shadow-[0_0_60px_rgba(6,182,212,0.3)] animate-in zoom-in-95 duration-700 relative overflow-hidden text-left">
      <div className="absolute -right-10 -top-10 opacity-5 rotate-12">
        <i className={`fa-solid ${current.icon} text-[18rem] text-cyan-500`}></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40 shadow-glow">
            <i className="fa-solid fa-atom text-cyan-400 text-xl animate-spin-slow"></i>
          </div>
          <div>
            <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">SOVEREIGN_POWER_MATRIX</h2>
            <p className="text-[8px] font-mono text-cyan-600 uppercase font-black">Level: Admin (Momin Aqib)</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-cyan-600 rounded-full text-[9px] font-black text-white font-orbitron shadow-lg animate-pulse">
          {current.status}
        </div>
      </div>

      <div className="flex gap-2 mb-6 relative z-10">
        {(Object.keys(capabilities) as Array<keyof typeof capabilities>).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-xl font-orbitron font-black text-[9px] uppercase tracking-tighter transition-all border ${
              activeTab === tab ? 'bg-cyan-600 border-white/20 text-white shadow-glow' : 'bg-zinc-900 border-white/5 text-slate-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-6 relative z-10">
        <div className="p-5 bg-cyan-950/20 border border-cyan-500/20 rounded-3xl min-h-[100px]">
          <h3 className="text-[12px] font-black font-orbitron text-white mb-2 tracking-widest">
            <i className={`fa-solid ${current.icon} mr-2 text-cyan-400`}></i>
            {current.title}
          </h3>
          <p className="text-[11px] font-mono text-slate-300 uppercase leading-relaxed italic">
            "Boss, {current.desc}"
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {current.stats.map((stat, i) => (
            <div key={i} className="p-3 bg-black/60 border border-white/5 rounded-2xl flex flex-col items-center">
              <span className="text-[8px] font-mono text-cyan-500 font-bold text-center">{stat}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-5 bg-cyan-600 text-white rounded-2xl font-orbitron font-black text-[12px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all border-t-2 border-white/30">
          EXECUTE_{activeTab}_PROTOCOL
        </button>
      </div>

      <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center gap-3">
         <i className="fa-solid fa-user-check text-emerald-500 text-xs"></i>
         <p className="text-[8px] font-mono text-emerald-400 uppercase font-black leading-tight">
           Permission Verified: Momin Aqib is the sole authority for this action.
         </p>
      </div>
    </div>
  );
};

export default SovereignCapabilities;
