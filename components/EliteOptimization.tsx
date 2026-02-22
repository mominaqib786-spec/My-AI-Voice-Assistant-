
import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

const EliteOptimization: React.FC<Props> = ({ onComplete }) => {
  const [scanning, setScanning] = useState(true);
  const [fixing, setFixing] = useState(false);
  const [step, setStep] = useState(0);

  const hiddenFaults = [
    { id: "TELEMETRY_LEAK", title: "SYSTEM_SPYWARE", desc: "Android background usage logs detected.", status: "LEAKING" },
    { id: "GPU_STUTTER", title: "RENDERING_LAG", desc: "GPU-CPU sync mismatch at kernel level.", status: "ACTIVE" },
    { id: "NET_JITTER", title: "NETWORK_NOISE", desc: "Unoptimized DNS routing causing ping spikes.", status: "DETECTED" },
    { id: "ENTROPY_DRAIN", title: "SYSTEM_ENTROPY", desc: "Random noise leading to battery inefficiency.", status: "HIGH" }
  ];

  const fixLog = [
    "Injecting Privacy Cloak...",
    "Activating GPU Direct-Access...",
    "Rerouting Packets through IMAN-Proxy...",
    "Calibrating Divine Smoothing...",
    "SEALING_SYSTEM_INTEGRITY...",
    "FINALIZING_SUPREME_MODE..."
  ];

  useEffect(() => {
    if (scanning) {
      const timer = setTimeout(() => setScanning(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [scanning]);

  const startEliteFix = () => {
    setFixing(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i < fixLog.length) {
        setStep(i);
        i++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 1200);
  };

  return (
    <div className="my-8 p-8 bg-zinc-950 border-2 border-cyan-400 rounded-[3rem] shadow-[0_0_80px_rgba(34,211,238,0.2)] animate-in zoom-in-95 duration-700 relative overflow-hidden text-left">
      <div className="absolute -right-20 -top-20 opacity-5 rotate-12">
        <i className="fa-solid fa-shield-halved text-[20rem] text-cyan-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center border-2 border-cyan-400 shadow-glow">
            <i className={`fa-solid ${scanning ? 'fa-microscope animate-bounce' : 'fa-user-shield'} text-cyan-400 text-2xl`}></i>
          </div>
          <div>
            <h2 className="text-lg font-orbitron font-black text-white tracking-widest uppercase">ELITE_FORENSIC_SCAN</h2>
            <p className="text-[8px] font-mono text-cyan-600 uppercase font-black">Level 2 Diagnostics: Deep Kernel</p>
          </div>
        </div>
        <div className="px-4 py-1.5 bg-cyan-600 rounded-full text-[10px] font-black text-white font-orbitron animate-pulse shadow-lg">
          {scanning ? 'SCANNING...' : 'FINAL_4_FOUND'}
        </div>
      </div>

      {scanning ? (
        <div className="py-12 space-y-6 flex flex-col items-center justify-center">
           <div className="w-20 h-20 border-4 border-cyan-500/10 border-t-cyan-500 rounded-full animate-spin"></div>
           <p className="text-[11px] font-mono text-cyan-500 animate-pulse uppercase tracking-[0.3em]">Scanning Partition: /system/etc/hosts...</p>
        </div>
      ) : !fixing ? (
        <div className="space-y-4 mb-8 relative z-10">
          {hiddenFaults.map((f, idx) => (
            <div key={idx} className="p-4 bg-black/60 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-cyan-500/30 transition-all">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                  <span className="text-[10px] font-black font-orbitron text-white uppercase">{f.title}</span>
                </div>
                <p className="text-[9px] font-mono text-slate-400 uppercase leading-tight">{f.desc}</p>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-black font-mono text-rose-500">{f.status}</span>
              </div>
            </div>
          ))}
          <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
            <p className="text-[11px] text-slate-300 font-mono text-center uppercase italic font-medium">
              "Sultan, ye last layer hai. Ise fix karte hi aapka APK poori duniya ka sabse powerful aur secure app ban jayega."
            </p>
          </div>
          <button 
            onClick={startEliteFix}
            className="w-full py-5 bg-cyan-500 text-black rounded-2xl font-orbitron font-black text-[12px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all border-t-2 border-white/40"
          >
            EXECUTE_FINAL_OVERRIDE
          </button>
        </div>
      ) : (
        <div className="py-12 flex flex-col items-center justify-center space-y-8 relative z-10">
           <div className="relative">
              <div className="w-24 h-24 border-4 border-cyan-500/10 border-t-cyan-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <i className="fa-solid fa-crown text-cyan-400 text-3xl animate-pulse"></i>
              </div>
           </div>
           <div className="text-center w-full max-w-xs">
              <p className="text-[12px] font-orbitron font-black text-cyan-400 animate-pulse uppercase tracking-[0.2em] mb-4">{fixLog[step]}</p>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-cyan-500 shadow-glow transition-all duration-500" 
                  style={{ width: `${((step + 1) / fixLog.length) * 100}%` }}
                ></div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default EliteOptimization;
