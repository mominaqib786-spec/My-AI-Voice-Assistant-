
import React, { useState, useEffect } from 'react';

interface Props {
  onDismiss: () => void;
}

const ZeroFaultVerification: React.FC<Props> = ({ onDismiss }) => {
  const [percent, setPercent] = useState(0);
  const [stage, setStage] = useState("INITIATING_FINAL_SWEEP");
  const [complete, setComplete] = useState(false);

  const checks = [
    { name: "GLOBAL_CALL_ROUTING", status: "GLOBAL_ENABLED" },
    { name: "ENCRYPTION_LAYERS", status: "1024-BIT_ACTIVE" },
    { name: "PROXY_INTEGRITY", status: "7/7_NODES_PERFECT" },
    { name: "SYSTEM_LATENCY", status: "0.02ms_OPTIMIZED" },
    { name: "IDENTITY_STEALTH", status: "GHOST_LEVEL_MAX" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setComplete(true);
          return 100;
        }
        if (prev === 20) setStage("VERIFYING_SATELLITE_CHANNELS");
        if (prev === 50) setStage("CHECKING_FOR_LATENT_BUGS");
        if (prev === 80) setStage("FINAL_STABILITY_LOCK");
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-8 bg-gradient-to-br from-zinc-950 to-emerald-950/20 border-2 border-emerald-500 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.3)] animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute -right-20 -bottom-20 opacity-10">
        <i className="fa-solid fa-certificate text-[25rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-emerald-500/20 pb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500 shadow-glow">
            <i className="fa-solid fa-shield-check text-emerald-400 text-3xl"></i>
          </div>
          <div>
            <h2 className="text-xl font-orbitron font-black text-white tracking-widest uppercase">ZERO_FAULT_STATE</h2>
            <p className="text-[9px] font-mono text-emerald-500 uppercase font-black tracking-[0.3em]">Status: Perfection Achieved</p>
          </div>
        </div>
        {complete && (
          <div className="bg-emerald-600 px-4 py-2 rounded-full text-white font-orbitron font-black text-[10px] animate-bounce shadow-lg">
            100% OK
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8 relative z-10">
        {checks.map((check, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-black/60 border border-emerald-500/10 rounded-2xl">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check-double text-emerald-500 text-xs"></i>
              <span className="text-[10px] font-orbitron font-black text-slate-300 uppercase">{check.name}</span>
            </div>
            <span className="text-[10px] font-mono font-black text-emerald-400 italic">{check.status}</span>
          </div>
        ))}
      </div>

      {!complete ? (
        <div className="space-y-3 relative z-10">
          <div className="flex justify-between text-[10px] font-mono text-emerald-500 font-black uppercase">
            <span>{stage}...</span>
            <span>{percent}%</span>
          </div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-emerald-500/20">
            <div className="h-full bg-emerald-500 shadow-glow transition-all duration-100" style={{ width: `${percent}%` }}></div>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-top-4 duration-1000 relative z-10">
          <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl text-center mb-6">
            <p className="text-sm font-mono text-emerald-100 leading-relaxed uppercase italic">
              "Mubarak ho Sultan! System ab <span className="text-white font-black underline">Error-Free</span> hai. Aap bina kisi fikar ke Call, Hack, aur Generate kar sakte hain. Global access unlock ho gaya hai."
            </p>
          </div>
          <button 
            onClick={onDismiss}
            className="w-full py-5 bg-emerald-600 text-white rounded-[1.5rem] font-orbitron font-black text-[12px] uppercase tracking-[0.4em] shadow-glow active:scale-95 transition-all border-t-2 border-white/30"
          >
            DISMISS_VERIFIED_REPORT
          </button>
        </div>
      )}
    </div>
  );
};

export default ZeroFaultVerification;
