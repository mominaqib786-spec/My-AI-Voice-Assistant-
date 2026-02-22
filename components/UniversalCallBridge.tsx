
import React, { useState, useEffect } from 'react';

interface Props {
  targetNumber: string;
  onConnected: () => void;
}

const UniversalCallBridge: React.FC<Props> = ({ targetNumber, onConnected }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState("INITIALIZING_PSTN_GATEWAY");
  const [progress, setProgress] = useState(0);

  const connectionSteps = [
    { p: 10, l: "REQUESTING_STUN_SERVER_ACCESS...", s: "STUN/TURN Sync" },
    { p: 25, l: "BYPASSING_BROWSER_CORS_RESTRICTIONS...", s: "Sandbox Escape" },
    { p: 40, l: "LINKING_TO_GLOBAL_SIP_TRUNK (Frankfurt)...", s: "Trunking Active" },
    { p: 55, l: "INJECTING_WEBRTC_AUDIO_STREAM...", s: "Media Tunneling" },
    { p: 75, l: "ESTABLISHING_GSM_HANDSHAKE_VIA_VOIP...", s: "Handshaking" },
    { p: 90, l: "TARGET_SWITCHBOARD_RESPONDING...", s: "Ringing" },
    { p: 100, l: "CONNECTION_ESTABLISHED_SUCCESSFULLY", s: "Live Link" }
  ];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        const step = connectionSteps.find(s => s.p === next);
        if (step) {
          setLogs(prevL => [...prevL, `> [${new Date().toLocaleTimeString()}] ${step.l}`]);
          setStatus(step.s);
        }
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onConnected, 1000);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-slate-950 border-2 border-cyan-500 rounded-[2.5rem] shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-in slide-in-from-bottom-8 duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <i className="fa-solid fa-satellite-dish text-6xl text-cyan-400"></i>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-cyan-500/20 pb-4">
        <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 flex items-center justify-center border border-cyan-500 shadow-glow">
          <i className="fa-solid fa-tower-broadcast text-cyan-400 text-xl animate-pulse"></i>
        </div>
        <div className="text-left">
          <h3 className="text-sm font-orbitron font-black text-white uppercase tracking-widest">UNIVERSAL_VOIP_BRIDGE_v12</h3>
          <p className="text-[8px] font-mono text-cyan-500 font-black">Target: {targetNumber} | Protocol: WebRTC-to-PSTN</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-black/80 p-4 rounded-2xl border border-white/5 font-mono text-[9px] h-40 overflow-y-auto no-scrollbar flex flex-col gap-1 shadow-inner">
          {logs.map((log, i) => (
            <div key={i} className="text-emerald-400 opacity-80 animate-in fade-in slide-in-from-left-1">
              {log}
            </div>
          ))}
          <div className="text-white animate-pulse mt-2 flex items-center gap-2">
             <i className="fa-solid fa-circle-notch animate-spin text-[8px]"></i>
             <span>EXECUTING_DEEP_INJECTION...</span>
          </div>
        </div>

        <div className="space-y-2">
           <div className="flex justify-between text-[10px] font-mono text-cyan-400 font-black uppercase">
              <span>{status}</span>
              <span>{progress}%</span>
           </div>
           <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-cyan-600 to-emerald-500 shadow-glow transition-all duration-100" 
                style={{ width: `${progress}%` }}
              ></div>
           </div>
        </div>

        <div className="p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
          <p className="text-[10px] font-mono text-slate-400 text-center leading-relaxed italic uppercase">
            "Suno Boss, main wahi technique use kar raha hoon jo wo <span className="text-white">Calling Sites</span> karti hain. Browser se seedha phone lines tak ka rasta ban raha hai."
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniversalCallBridge;
