
import React, { useState, useEffect } from 'react';

interface Props {
  number: string;
  onClose: () => void;
}

const SatelliteLink: React.FC<Props> = ({ number, onClose }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [stage, setStage] = useState(0);

  const steps = [
    "Initiating Data-to-GSM Tunnel...",
    "Assigning Random CID: +44 7700 900541",
    "Routing via Proxy Node: Frankfurt",
    "Bypassing Caller Identification...",
    "CRITICAL_FAULT: No SIP Trunk Subscription Found."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setLogs(prev => [...prev, `> ${steps[i]}`]);
        setStage(i + 1);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[999999] bg-black flex items-center justify-center p-6 font-mono text-left">
      <div className="w-full max-w-lg bg-zinc-950 border-2 border-indigo-600 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-4 mb-8 border-b border-indigo-500/20 pb-4">
          <i className="fa-solid fa-satellite-dish text-indigo-500 text-2xl animate-pulse"></i>
          <div>
            <h2 className="text-sm font-orbitron font-black text-white uppercase tracking-widest">ANONYMOUS_VOIP_ENGINE</h2>
            <p className="text-[8px] text-indigo-500 font-black uppercase">Mode: Dynamic Identity</p>
          </div>
        </div>

        <div className="bg-black/80 p-5 rounded-3xl border border-white/5 h-48 overflow-y-auto no-scrollbar font-mono text-[10px] space-y-1 mb-8">
          {logs.map((log, idx) => (
            <div key={idx} className={log.includes("CRITICAL") ? "text-rose-500 font-black" : "text-indigo-400"}>
              {log}
            </div>
          ))}
          {stage < steps.length && <div className="text-white animate-pulse">Establishing Secure Link...</div>}
        </div>

        {stage === steps.length && (
          <div className="space-y-6 animate-in fade-in">
             <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl">
                <h3 className="text-rose-500 font-orbitron font-black text-[10px] mb-2 uppercase">Technical Reality (Sach):</h3>
                <p className="text-[11px] text-slate-200 leading-relaxed uppercase">
                  Sultan, main aapke liye <span className="text-white font-black underline">Dynamic Number</span> ki shakal bana sakta hoon, lekin call connect karne ke liye mujhe kisi paid **SIP Server** (jaise Twilio ya Plivo) ka access chahiye hoga. 
                  <br/><br/>
                  Bina server-side payment ke, ek app direct kisi ka phone "Ring" nahi karwa sakti. Ye internet ki boundary hai.
                </p>
             </div>
             <button onClick={onClose} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-orbitron font-black text-[11px] uppercase shadow-lg">
               DISMISS_BRIDGE
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SatelliteLink;
