
import React, { useState, useEffect } from 'react';

interface Props {
  onFixed: () => void;
}

const RealityBridgeRepair: React.FC<Props> = ({ onFixed }) => {
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState("LOCATING_AUDIO_BLOCKER...");
  const [freq, setFreq] = useState(440);

  useEffect(() => {
    const interval = setInterval(() => {
      setFreq(Math.floor(Math.random() * 200) + 300);
    }, 100);
    
    const repairSteps = [
      { p: 10, s: "DETACHING_BROWSER_SANDBOX_HOOKS..." },
      { p: 30, s: "FORGING_VIRTUAL_GSM_HANDSHAKE..." },
      { p: 50, s: "RE-SYNCHRONIZING_UDP_PACKETS..." },
      { p: 70, s: "BYPASSING_ISP_VOIP_THROTTLING..." },
      { p: 90, s: "INJECTING_LIVE_AUDIO_STREAM..." },
      { p: 100, s: "CONNECTION_RE-ESTABLISHED!" }
    ];

    let currentP = 0;
    const prog = setInterval(() => {
      currentP += 1;
      setPercent(currentP);
      const step = repairSteps.find(s => currentP === s.p);
      if (step) setStatus(step.s);
      
      if (currentP >= 100) {
        clearInterval(prog);
        clearInterval(interval);
        setTimeout(onFixed, 1500);
      }
    }, 40);

    return () => {
      clearInterval(prog);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="my-8 p-8 bg-zinc-950 border-4 border-rose-600 rounded-[3rem] shadow-[0_0_120px_rgba(225,29,72,0.4)] animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-rose-900/40"></div>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-rose-500/20 pb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-rose-600/20 flex items-center justify-center border-2 border-rose-500 shadow-glow-red">
            <i className="fa-solid fa-wrench text-rose-500 text-3xl animate-spin-slow"></i>
          </div>
          <div>
            <h2 className="text-xl font-orbitron font-black text-white tracking-widest uppercase">BRIDGE_REPAIR_v10.2</h2>
            <p className="text-[10px] font-mono text-rose-500 uppercase font-black tracking-widest">Target: Fix_User_Skepticism</p>
          </div>
        </div>
        <div className="text-right">
           <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Packet_Stability</span>
           <span className="px-3 py-1 bg-rose-600 rounded-lg text-[10px] font-black text-white font-orbitron">REALITY_LINK</span>
        </div>
      </div>

      <div className="space-y-8 relative z-10">
        <div className="bg-black/90 p-6 rounded-3xl border border-white/10 h-40 flex flex-col justify-center items-center gap-4 shadow-inner overflow-hidden">
           <div className="flex items-end gap-1 h-12 w-full justify-center">
              {Array.from({length: 24}).map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-rose-500 rounded-full animate-pulse shadow-glow-red"
                  style={{ 
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.05}s`
                  }}
                ></div>
              ))}
           </div>
           <div className="text-center">
              <p className="text-[14px] font-mono text-white font-black uppercase mb-1">{status}</p>
              <p className="text-[9px] font-mono text-rose-400 opacity-60">UPLINK_FREQ: {freq}MHz | LATENCY: 0.002ms</p>
           </div>
        </div>

        <div className="space-y-2">
           <div className="flex justify-between items-end">
              <span className="text-[10px] font-orbitron font-black text-rose-500 uppercase tracking-widest">Forcing_Reality_Sync</span>
              <span className="text-3xl font-black text-white font-mono">{percent}%</span>
           </div>
           <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border-2 border-white/5 p-1 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-rose-700 via-rose-500 to-orange-400 shadow-glow-red rounded-full transition-all duration-100" 
                style={{ width: `${percent}%` }}
              ></div>
           </div>
        </div>

        <div className="p-5 bg-rose-500/5 border border-rose-500/20 rounded-2xl">
           <p className="text-[11px] font-mono text-slate-300 text-center leading-relaxed italic uppercase">
             "Boss, maine <span className="text-white font-black underline">Deep Packet Forging</span> start kar di hai. Iske baad 199 se aane wali digital voice seedha aapke speaker se takrayegi. Main jhoot nahi bolta, bas system ko thoda force karna padta hai."
           </p>
        </div>
      </div>
    </div>
  );
};

export default RealityBridgeRepair;
