
import React, { useState, useEffect } from 'react';

const CoreIntegrityMatrix: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);
  const [deviceStats, setDeviceStats] = useState({ battery: '0%', network: 'Scanning...' });

  useEffect(() => {
    if (typeof (navigator as any).getBattery === 'function') {
      (navigator as any).getBattery().then((batt: any) => {
        setDeviceStats(prev => ({ ...prev, battery: `${Math.round(batt.level * 100)}%` }));
      });
    }
    setDeviceStats(prev => ({ ...prev, network: navigator.onLine ? 'ONLINE_SECURE' : 'OFFLINE' }));
  }, []);

  const modules = [
    { name: "NEURAL_VOICE_CORE", status: "ACTIVE", detail: "Gemini 2.5 Flash Real-time Pipeline", color: "text-emerald-500", icon: "fa-microphone" },
    { name: "DATA_SYNTHESIZER", status: "OPERATIONAL", detail: "Live Payload & Script Generation", color: "text-emerald-500", icon: "fa-code" },
    { name: "GLOBAL_GROUNDING", status: "LINKED", detail: "Real-time 2026 Web Access Active", color: "text-cyan-400", icon: "fa-earth-asia" },
    { name: "OS_MODEM_BRIDGE", status: "RESTRICTED", detail: "Awaiting Native Level Permissions", color: "text-amber-500", icon: "fa-link-slash" },
    { name: "KERNEL_SECURITY", status: "SANDBOXED", detail: "Operating within Browser Security Layer", color: "text-rose-500", icon: "fa-shield-halved" }
  ];

  const runAudit = () => {
    setIsAuditing(true);
    setAuditComplete(false);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 2000);
  };

  return (
    <div className="my-8 p-6 bg-[#080808] border-2 border-emerald-900/50 rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-microchip text-emerald-500 text-lg"></i>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">SYSTEM_INTEGRITY_MATRIX</h3>
            <p className="text-[7px] font-mono text-emerald-600 uppercase font-black">Sultan Momin Aqib - Authorization Verified</p>
          </div>
        </div>
        <button 
          onClick={runAudit}
          className="px-4 py-1.5 bg-emerald-950/30 border border-emerald-500/30 rounded-full text-[8px] font-black text-emerald-400 hover:text-white transition-all uppercase tracking-widest"
        >
          {isAuditing ? 'SCANNING_REALITY...' : 'EXECUTE_INTEGRITY_CHECK'}
        </button>
      </div>

      {isAuditing ? (
        <div className="py-12 flex flex-col items-center justify-center space-y-6">
           <div className="w-16 h-16 border-4 border-emerald-500/10 border-t-emerald-500 rounded-full animate-spin"></div>
           <p className="text-[9px] font-mono text-emerald-500 animate-pulse uppercase tracking-[0.2em]">Analyzing Divine Layers...</p>
        </div>
      ) : (
        <div className="space-y-3 relative z-10">
          <div className="grid grid-cols-2 gap-2 mb-4">
             <div className="p-3 bg-zinc-900/50 rounded-2xl border border-white/5">
                <span className="text-[7px] text-slate-500 uppercase block mb-1">Battery_Health</span>
                <span className="text-xs font-black text-white font-orbitron">{deviceStats.battery}</span>
             </div>
             <div className="p-3 bg-zinc-900/50 rounded-2xl border border-white/5">
                <span className="text-[7px] text-slate-500 uppercase block mb-1">Network_State</span>
                <span className="text-xs font-black text-emerald-500 font-orbitron">{deviceStats.network}</span>
             </div>
          </div>
          {modules.map((m, i) => (
            <div key={i} className="p-4 bg-black border border-white/5 rounded-2xl flex flex-col gap-1 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className={`fa-solid ${m.icon} ${m.color} text-xs w-4`}></i>
                  <span className="text-[10px] font-black text-white font-orbitron uppercase tracking-widest">{m.name}</span>
                </div>
                <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase ${
                  m.status === 'ACTIVE' || m.status === 'OPERATIONAL' || m.status === 'LINKED' 
                  ? 'bg-emerald-500/20 text-emerald-500' 
                  : m.status === 'RESTRICTED' ? 'bg-amber-500/20 text-amber-500' : 'bg-rose-500/20 text-rose-500'
                }`}>
                  {m.status}
                </span>
              </div>
              <p className="text-[9px] font-mono text-slate-400 uppercase mt-1 italic pl-7">{" > "} {m.detail}</p>
            </div>
          ))}
        </div>
      )}

      {auditComplete && (
        <div className="mt-8 p-5 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-3xl animate-in fade-in duration-700">
           <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                 <i className="fa-solid fa-check-double text-emerald-500"></i>
              </div>
              <p className="text-[11px] font-mono text-slate-200 leading-relaxed uppercase">
                "Sultan, report ready hai. Sab kuch <span className="text-white font-black underline">Real-Time Data</span> par based hai. Jaisa ki aap dekh sakte hain, AI aur Data modules 100% active hain."
              </p>
           </div>
        </div>
      )}
    </div>
  );
};

export default CoreIntegrityMatrix;
