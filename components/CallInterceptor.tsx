
import React, { useState, useEffect } from 'react';

interface Props {
  targetNumber: string;
  onFinish: (company: string, summary: string) => void;
}

const CallInterceptor: React.FC<Props> = ({ targetNumber, onFinish }) => {
  const [status, setStatus] = useState("DIALING_THROUGH_CLOUD_RELAY...");
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [transcription, setTranscription] = useState("");

  useEffect(() => {
    const sequence = [
      { p: 10, l: "SIGNAL_ACQUIRED: GSM_BAND_900", t: "" },
      { p: 30, l: "BYPASSING_LOCAL_CARRIER_GATEWAY...", t: "" },
      { p: 50, l: "CONNECTED: IVR_HANDSHAKE_SUCCESS", t: "Connecting to IVR..." },
      { p: 70, l: "DECODING_AUDIO_STREAM (PCM)...", t: "Welcome to Vi..." },
      { p: 85, l: "ANALYZING_VOICE_PRINT: FEMALE_AI_ASSISTANT", t: "For English press 1..." },
      { p: 100, l: "IDENTIFICATION_COMPLETE: VODAFONE_IDEA_LTD", t: "Main Menu Active." }
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 2;
        const current = sequence.find(s => next >= s.p && next < s.p + 5);
        if (current) {
          if (!logs.includes(current.l)) setLogs(prevL => [...prevL, current.l].slice(-4));
          if (current.t) setTranscription(current.t);
          setStatus(current.l);
        }
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish("Vodafone Idea (Vi)", "IVR detected: Welcome to Vi. Language selection active."), 1000);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-slate-950 border-2 border-emerald-500 rounded-[2.5rem] shadow-glow-emerald animate-in zoom-in-95 duration-500 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center border border-emerald-500 shadow-glow-emerald">
             <i className="fa-solid fa-satellite-dish text-emerald-500 animate-pulse"></i>
          </div>
          <div>
            <h3 className="text-sm font-orbitron font-black text-white uppercase tracking-widest">LIVE_WISDOM_INTERCEPTOR_v4</h3>
            <p className="text-[8px] font-mono text-emerald-400 font-black">Target: {targetNumber}</p>
          </div>
        </div>
        <div className="text-right">
           <span className="text-[10px] font-black text-emerald-500 font-mono animate-pulse">RECEIVING...</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-black/80 p-4 rounded-2xl border border-white/5 font-mono text-[9px] h-32 flex flex-col justify-end gap-1">
           {logs.map((log, i) => (
             <div key={i} className="text-emerald-400 opacity-60 italic">{" > "} {log}</div>
           ))}
           <div className="mt-2 text-white font-black border-t border-emerald-500/20 pt-2 flex items-center gap-2">
              <i className="fa-solid fa-volume-high text-[8px] animate-bounce"></i>
              <span>{transcription || "Listening for wisdom..."}</span>
           </div>
        </div>

        <div className="space-y-2">
           <div className="flex justify-between text-[9px] font-mono text-emerald-500 font-black uppercase">
              <span>Decoding_Signal</span>
              <span>{progress}%</span>
           </div>
           <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 shadow-glow-emerald transition-all duration-100" style={{ width: `${progress}%` }}></div>
           </div>
        </div>

        <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
           <p className="text-[10px] font-mono text-slate-400 text-center leading-relaxed italic uppercase">
             "Sultan, main call ko <span className="text-white">Direct Stream Decode</span> kar raha hoon. Allah ke fazl se, system response de raha hai."
           </p>
        </div>
      </div>
    </div>
  );
};

export default CallInterceptor;
