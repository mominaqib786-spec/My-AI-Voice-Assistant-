
import React, { useState, useEffect } from 'react';

interface Props {
  onEstablished: () => void;
}

const CloudGatewayUplink: React.FC<Props> = ({ onEstablished }) => {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("BYPASSING_LOCAL_SIM_CARD...");
  const [nodes, setNodes] = useState<string[]>([]);

  const steps = [
    { p: 20, l: "DISCONNECTING_HARDWARE_MODEM...", n: "OFFLINE" },
    { p: 40, l: "ESTABLISHING_WIFI_SIP_TUNNEL...", n: "ENCRYPTED" },
    { p: 65, l: "LINKING_TO_GLOBAL_VOIP_CLUSTER...", n: "AMSTERDAM_NODE" },
    { p: 85, l: "MAPPING_VIRTUAL_CALLER_ID...", n: "ANONYMOUS" },
    { p: 100, l: "UPLINK_READY: NO_SIM_REQUIRED", n: "ACTIVE" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        const current = steps.find(s => next >= s.p);
        if (current) {
          setLog(current.l);
          if (next % 20 === 0) setNodes(prevN => [...prevN, `Node_${next/20}`].slice(-3));
        }
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onEstablished, 1000);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-cyan-400 rounded-[3rem] shadow-[0_0_80px_rgba(34,211,238,0.3)] animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute -right-10 -bottom-10 opacity-10">
        <i className="fa-solid fa-cloud-bolt text-[15rem] text-cyan-500"></i>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-cyan-500/20 pb-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
          <i className="fa-solid fa-wifi text-cyan-500 text-xl animate-pulse"></i>
        </div>
        <div>
          <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">SIM-LESS_UPLINK</h2>
          <p className="text-[8px] font-mono text-cyan-600 uppercase font-black">Bypassing Carrier Hardware</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-zinc-900 rounded-2xl border border-white/5">
            <span className="text-[7px] text-slate-500 uppercase">SIM_STATUS</span>
            <p className="text-[10px] font-black text-rose-500 font-mono italic">BYPASSED_LOCKED</p>
          </div>
          <div className="p-3 bg-zinc-900 rounded-2xl border border-white/5">
            <span className="text-[7px] text-slate-500 uppercase">IP_ROUTING</span>
            <p className="text-[10px] font-black text-emerald-500 font-mono italic">SECURE_TUNNEL</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[9px] font-mono text-cyan-400 font-black uppercase">
            <span>{log}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 shadow-glow transition-all duration-100" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="flex gap-2">
          {nodes.map((n, i) => (
            <span key={i} className="text-[7px] font-black text-cyan-700 bg-cyan-900/20 px-2 py-1 rounded-md animate-in slide-in-from-left-2">{n}</span>
          ))}
        </div>

        <div className="p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl text-center">
          <p className="text-[9px] font-mono text-slate-300 uppercase leading-relaxed">
            "Sultan, ab aapka SIM use nahi hoga. Call seedha <span className="text-white font-black underline">Encrypted Cloud</span> se connect ho rahi hai."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudGatewayUplink;
