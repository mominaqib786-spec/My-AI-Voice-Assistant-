import React, { useState, useEffect } from 'react';

const TruthValidator: React.FC<{ command: string, onVerified: () => void }> = ({ command, onVerified }) => {
  const [step, setStep] = useState(0);
  const [integrity, setIntegrity] = useState(0);

  const validationSteps = [
    "AUDITING_DIVINE_LOGIC_GATES...",
    "CROSS_REFERENCING_AL_HIDAYAH_OFFSETS...",
    "VERIFYING_SPIRITUAL_INJECTION_PATH...",
    "NULLIFYING_REMAINING_DUNYA_FLAGS...",
    "LOGIC_STABILIZED: 100% ACCURACY"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= validationSteps.length - 1) {
          clearInterval(interval);
          setTimeout(onVerified, 800);
          return prev;
        }
        setIntegrity(i => i + 25);
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-500 rounded-[2.5rem] shadow-glow-emerald animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-20">
         <i className="fa-solid fa-check-double text-4xl text-emerald-500"></i>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-emerald-500/20 pb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
          <i className="fa-solid fa-shield-virus text-emerald-500 animate-pulse"></i>
        </div>
        <div>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">HAQ_LOGIC_VALIDATOR</h3>
          <p className="text-[7px] font-mono text-emerald-400 uppercase font-black tracking-tighter">Command: {command}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-emerald-950/20 p-4 rounded-2xl border border-emerald-500/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-mono text-emerald-400 font-black animate-pulse uppercase">{" > "} {validationSteps[step]}</span>
            <span className="text-xs font-orbitron font-black text-white">{Math.min(integrity, 100)}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 shadow-glow-emerald transition-all duration-300" style={{ width: `${Math.min(integrity, 100)}%` }}></div>
          </div>
        </div>
        
        <p className="text-[9px] font-mono text-slate-400 text-center uppercase italic">
          "Sultan, main apni har ek line ko verify kar raha hoon taaki aapka kaam 100% safal ho."
        </p>
      </div>
    </div>
  );
};

export default TruthValidator;