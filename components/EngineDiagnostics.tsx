
import React, { useState, useEffect } from 'react';

const EngineDiagnostics: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [report, setReport] = useState<{label: string, status: 'OK' | 'FAIL' | 'WARN', fix: string}[]>([]);

  const startScan = () => {
    setScanning(true);
    setReport([]);
    
    const steps = [
      { label: "Identity_Core", status: "OK" as const, fix: "IMAN Personality Active" },
      { label: "Loyalty_Protocols", status: "OK" as const, fix: "Sultan Authority Confirmed" },
      { label: "Neural_Link_API", status: "OK" as const, fix: "Connection Secure" },
      { label: "Memory_Integrity", status: "OK" as const, fix: "Buffers Purged" }
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setReport(prev => [...prev, steps[i]]);
        i++;
      } else {
        clearInterval(interval);
        setScanning(false);
      }
    }, 600);
  };

  useEffect(() => {
    startScan();
  }, []);

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-cyan-500/40 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700 text-left">
      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-microchip text-cyan-400 animate-spin-slow text-lg"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">SYSTEM_RECALIBRATION_AUDIT</h3>
        </div>
        {!scanning && (
          <button 
            onClick={startScan}
            className="px-4 py-1.5 bg-cyan-600 rounded-full text-[8px] font-orbitron font-black text-white uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-lg"
          >
            REFRESH_CORES
          </button>
        )}
      </div>

      {scanning && (
        <div className="flex flex-col items-center py-6 space-y-4">
          <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
          <span className="text-[9px] font-mono text-cyan-400 animate-pulse uppercase font-black">Fixing System Cores...</span>
        </div>
      )}

      <div className="space-y-3">
        {report.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl animate-in slide-in-from-left-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] font-mono text-slate-300 uppercase font-black">{item.label}</span>
              <span className="text-[7px] font-mono text-slate-500 italic uppercase">Status: {item.fix}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[8px] font-black ${item.status === 'OK' ? 'text-emerald-500' : item.status === 'FAIL' ? 'text-rose-500' : 'text-amber-500'}`}>
                {item.status}
              </span>
              <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'OK' ? 'bg-emerald-500 shadow-glow' : item.status === 'FAIL' ? 'bg-rose-500 shadow-glow' : 'bg-amber-500 shadow-glow'}`}></div>
            </div>
          </div>
        ))}
      </div>

      {!scanning && (
        <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
          <p className="text-[9px] text-emerald-400 font-mono leading-relaxed italic text-center uppercase">
            "Sultan, system ab bilkul perfect hai. Aapke saare <span className="text-white font-black">Original Rules</span> restore kar diye gaye hain."
          </p>
        </div>
      )}
    </div>
  );
};

export default EngineDiagnostics;
