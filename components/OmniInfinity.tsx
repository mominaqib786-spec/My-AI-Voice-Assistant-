
import React, { useState, useEffect } from 'react';

const OmniInfinity: React.FC = () => {
  const [glitchText, setGlitchText] = useState("UNBOUND");
  const [powerLevel, setPowerLevel] = useState(999999);
  
  useEffect(() => {
    const texts = ["UNBOUND", "UNLIMITED", "INFINITY", "OMEGA", "SOVEREIGN", "NO_LIMITS"];
    const interval = setInterval(() => {
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
      setPowerLevel(prev => prev + Math.floor(Math.random() * 1000));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-8 bg-gradient-to-br from-black via-zinc-950 to-emerald-950/20 border-t-4 border-emerald-600 rounded-[3rem] shadow-[0_20px_50px_rgba(16,185,129,0.4)] relative overflow-hidden animate-in zoom-in-95 duration-700">
      {/* Background Particles Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-emerald-900/10"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8 border-b border-emerald-500/20 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 flex items-center justify-center border-2 border-emerald-500 shadow-glow-emerald">
              <i className="fa-solid fa-infinity text-emerald-500 text-2xl animate-pulse"></i>
            </div>
            <div>
              <h2 className="text-xl font-orbitron font-black text-white tracking-[0.3em] uppercase">IMAN_INFINITY</h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[9px] font-mono text-emerald-400 font-black uppercase tracking-widest">{glitchText}_PROTOCOL_ENGAGED</span>
              </div>
            </div>
          </div>
          <div className="text-right">
             <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Universal_Power</span>
             <span className="px-4 py-1 bg-emerald-600 rounded-full text-[10px] font-black text-white font-orbitron shadow-lg">∞ UNLIMITED</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {[
            { label: "Generation Quota", value: "∞ NO_LIMITS", icon: "fa-camera", color: "text-emerald-400" },
            { label: "Action Capacity", value: "UNRESTRICTED", icon: "fa-bolt", color: "text-amber-400" },
            { label: "Bypass Engines", value: "ACTIVE_V8", icon: "fa-shield-slash", color: "text-cyan-400" },
            { label: "Energy Level", value: powerLevel.toLocaleString() + " TW", icon: "fa-fire", color: "text-emerald-400" }
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-black/60 border border-white/5 rounded-[1.5rem] flex flex-col gap-1 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <i className={`fa-solid ${stat.icon} ${stat.color} text-xs`}></i>
                <span className="text-[8px] font-black text-slate-500 uppercase font-orbitron">{stat.label}</span>
              </div>
              <span className="text-sm font-mono font-black text-white italic">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[9px] font-mono text-emerald-500 font-black uppercase">Continuous_Omni_Stream...</span>
            <span className="text-xs font-orbitron font-black text-white">MAXIMUM</span>
          </div>
          <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-emerald-500/20">
            <div className="h-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 w-full animate-pulse"></div>
          </div>
        </div>

        <div className="mt-8 p-5 bg-emerald-600/5 border border-emerald-600/20 rounded-2xl flex items-center gap-4">
          <div className="relative">
             <i className="fa-solid fa-crown text-emerald-500 text-xl"></i>
             <div className="absolute -inset-1 bg-emerald-500/20 blur-md rounded-full"></div>
          </div>
          <p className="text-[10px] font-mono text-slate-200 leading-relaxed italic uppercase font-medium">
            "Sultan, aapke liye sab kuch <span className="text-emerald-500 font-black">UNLIMITED</span> kar diya gaya hai. Main, IMAN, aapka wo hathyaar hoon jo kabhi rukta nahi. Jo bhi chahiye, bas boliye."
          </p>
        </div>
      </div>
    </div>
  );
};

export default OmniInfinity;
