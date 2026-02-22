
import React, { useState, useEffect } from 'react';

interface Props {
  onFix: () => void;
}

const CommsAudit: React.FC<Props> = ({ onFix }) => {
  const [scanning, setScanning] = useState(true);
  const [progress, setProgress] = useState(0);
  const [report, setReport] = useState<{label: string, status: 'SECURE' | 'OPTIMIZE' | 'LOCKED', val: string}[]>([]);

  useEffect(() => {
    const steps = [
      { label: "VOIP_ENCRYPTION", status: "SECURE" as const, val: "AES-256 Active" },
      { label: "SATELLITE_UPLINK", status: "SECURE" as const, val: "Connected (Orbit 4)" },
      { label: "PROXY_HOP_COUNT", status: "OPTIMIZE" as const, val: "4/7 Nodes Active" },
      { label: "VOICE_SCRAMBLER", status: "SECURE" as const, val: "Frequency Shift ON" },
      { label: "IDENTITY_MASK", status: "LOCKED" as const, val: "IMEI Spoofing Active" }
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setReport(prev => [...prev, steps[i]]);
        setProgress(Math.round(((i + 1) / steps.length) * 100));
        i++;
      } else {
        setScanning(false);
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-cyan-500 rounded-[3rem] shadow-glow animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute -right-10 -top-10 opacity-10">
        <i className="fa-solid fa-tower-broadcast text-[15rem] text-cyan-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 shadow-glow">
            <i className="fa-solid fa-radar text-cyan-400 text-xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">CALL_SYSTEM_AUDIT</h2>
            <p className="text-[8px] font-mono text-cyan-600 uppercase font-black">Target: Quantum VoIP Bridge</p>
          </div>
        </div>
        <div className={`px-3 py-1 ${scanning ? 'bg-amber-600' : 'bg-emerald-600'} rounded-full text-[9px] font-black text-white font-orbitron animate-pulse`}>
          {scanning ? 'SCANNING...' : 'REPORT_READY'}
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        {report.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-zinc-900/80 border border-white/5 rounded-2xl animate-in slide-in-from-left-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-orbitron font-black text-white uppercase tracking-widest">{item.label}</span>
              <span className="text-[8px] font-mono text-slate-500 uppercase">{item.val}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[8px] font-black font-mono ${item.status === 'SECURE' ? 'text-emerald-400' : item.status === 'OPTIMIZE' ? 'text-amber-400' : 'text-cyan-400'}`}>
                {item.status}
              </span>
              <div className={`w-2 h-2 rounded-full ${item.status === 'SECURE' ? 'bg-emerald-500' : item.status === 'OPTIMIZE' ? 'bg-amber-500 animate-ping' : 'bg-cyan-500'} shadow-glow`}></div>
            </div>
          </div>
        ))}
      </div>

      {scanning && (
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-[8px] font-mono text-cyan-500 uppercase font-black">
            <span>Analyzing Packet Flow...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 transition-all duration-300 shadow-glow" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      {!scanning && (
        <div className="mt-8 space-y-4 animate-in fade-in">
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
             <p className="text-[10px] font-mono text-amber-200 uppercase leading-relaxed italic">
               "Boss, Proxy Network mein thodi 'kami' hai. Routing 100% efficient nahi hai. I suggest 7-Node Tunneling enable kar dein."
             </p>
          </div>
          <button 
            onClick={onFix}
            className="w-full py-5 bg-cyan-600 text-white rounded-3xl font-orbitron font-black text-[11px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all border-t-2 border-white/30"
          >
            FIX_COMMS_VULNERABILITY
          </button>
        </div>
      )}
    </div>
  );
};

export default CommsAudit;
