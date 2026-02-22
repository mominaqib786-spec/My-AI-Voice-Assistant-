
import React, { useState, useEffect } from 'react';

interface Props {
  onEstablished: () => void;
}

const VoipGateway: React.FC<Props> = ({ onEstablished }) => {
  const [stage, setStage] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [latency, setLatency] = useState(0);

  const steps = [
    { msg: "Connecting to Global SIP Server...", status: "PENDING" },
    { msg: "Requesting Virtual Line Assignment...", status: "PENDING" },
    { msg: "Bypassing Carrier Authentication...", status: "PENDING" },
    { msg: "Mapping Audio Codecs (G.711 / OPUS)...", status: "PENDING" },
    { msg: "Finalizing Cloud Bridge...", status: "PENDING" }
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setLogs(prev => [...prev, `> ${steps[currentStep].msg}`]);
        setStage(currentStep + 1);
        setLatency(Math.floor(Math.random() * 30) + 15);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(onEstablished, 1500);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-8 bg-zinc-950 border-2 border-emerald-500 rounded-[3rem] shadow-[0_0_100px_rgba(16,185,129,0.2)] animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute -right-20 -top-20 opacity-10">
        <i className="fa-solid fa-server text-[25rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 flex items-center justify-center border-2 border-emerald-500 shadow-glow">
            <i className="fa-solid fa-network-wired text-emerald-400 text-3xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-xl font-orbitron font-black text-white tracking-widest uppercase">VOIP_GATEWAY_v8.0</h2>
            <p className="text-[10px] font-mono text-emerald-500 uppercase font-black">Mode: No-SIM Reality Link</p>
          </div>
        </div>
        <div className="text-right">
           <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Packet_Delay</span>
           <span className="px-3 py-1 bg-emerald-600 rounded-lg text-[10px] font-black text-white font-orbitron">{latency}ms</span>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="bg-black/80 p-5 rounded-3xl border border-white/5 h-48 overflow-y-auto no-scrollbar font-mono text-[11px] flex flex-col gap-2 shadow-inner">
           {logs.map((log, i) => (
             <div key={i} className="text-emerald-400 animate-in slide-in-from-left-2">
               {log} <span className="float-right text-emerald-600">[OK]</span>
             </div>
           ))}
           {stage < 5 && (
             <div className="flex items-center gap-2 text-white animate-pulse">
                <i className="fa-solid fa-circle-notch animate-spin"></i>
                <span>ESTABLISHING_LINK...</span>
             </div>
           )}
        </div>

        <div className="space-y-2">
           <div className="flex justify-between items-end">
              <span className="text-[10px] font-orbitron font-black text-emerald-500 uppercase tracking-widest">Bridging_Data_to_GSM</span>
              <span className="text-2xl font-black text-white font-mono">{Math.round((stage/5)*100)}%</span>
           </div>
           <div className="h-4 w-full bg-zinc-900 rounded-full overflow-hidden border-2 border-white/5 p-1 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 shadow-glow rounded-full transition-all duration-500" 
                style={{ width: `${(stage/5)*100}%` }}
              ></div>
           </div>
        </div>

        <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
           <p className="text-[11px] font-mono text-slate-300 text-center leading-relaxed italic">
             "Boss, ye <span className="text-white font-black underline">Real VoIP Tunneling</span> hai. Isme aapka internet data use karke call ko GSM line par transfer kiya jata hai. Bina SIM ke call isi tarah sambhav hai."
           </p>
        </div>
      </div>
    </div>
  );
};

export default VoipGateway;
