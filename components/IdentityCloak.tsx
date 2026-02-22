
import React, { useState, useEffect } from 'react';

interface Props {
  onComplete: (maskedNumber: string) => void;
}

const IdentityCloak: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fakeNumber, setFakeNumber] = useState("GEN_RANDOM...");
  const [log, setLog] = useState("ENCRYPTING_ORIGIN_ID...");

  const sequences = [
    { p: 20, l: "BLOCKING_REAL_CALLER_ID...", n: "+1 (415) XXX-XXXX" },
    { p: 45, l: "SPOOFING_GSM_SIGNATURE...", n: "+44 7700 900XXX" },
    { p: 70, l: "ROUTING_THROUGH_TOR_BRIDGE...", n: "+971 50 XXX XXXX" },
    { p: 90, l: "FINALIZING_ANONYMOUS_LINK...", n: "PRIVATE_NUMBER" },
    { p: 100, l: "CLOAK_ENGAGED: YOU_ARE_A_GHOST", n: "HIDDEN" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        const current = sequences.find(s => next >= s.p);
        if (current) {
          setLog(current.l);
          if (next < 100) setFakeNumber(current.n);
        }
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete("HIDDEN"), 1000);
          return 100;
        }
        return next;
      });
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-8 bg-black border-2 border-indigo-500 rounded-[3rem] shadow-[0_0_80px_rgba(99,102,241,0.3)] animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute -left-20 -bottom-20 opacity-10">
        <i className="fa-solid fa-user-secret text-[20rem] text-indigo-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-indigo-500/20 pb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center border-2 border-indigo-500 shadow-glow">
            <i className="fa-solid fa-mask text-indigo-400 text-3xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-xl font-orbitron font-black text-white tracking-widest uppercase">GHOST_IDENTITY_CLOAK</h2>
            <p className="text-[9px] font-mono text-indigo-500 uppercase font-black tracking-[0.3em]">Status: Anonymizing...</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-zinc-900 border border-indigo-500/20 rounded-2xl">
             <span className="text-[7px] text-slate-500 font-black uppercase">Visible_ID</span>
             <p className="text-sm font-mono font-black text-rose-500 truncate">{fakeNumber}</p>
          </div>
          <div className="p-4 bg-zinc-900 border border-indigo-500/20 rounded-2xl">
             <span className="text-[7px] text-slate-500 font-black uppercase">Trace_Status</span>
             <p className="text-sm font-mono font-black text-emerald-500">FAILED</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-mono text-indigo-400 font-black uppercase">
            <span>{log}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 shadow-glow transition-all duration-100" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-3xl">
          <p className="text-sm font-mono text-indigo-100 text-center uppercase italic leading-relaxed">
            "Boss, aapka <span className="text-white font-black underline">Real Number</span> block kar diya gaya hai. Ab aapki pehchaan koi nahi jaan payega."
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdentityCloak;
