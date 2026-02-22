
import React, { useState, useEffect } from 'react';

const HotSwapGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    let timer: any;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const startDeception = () => {
    setIsTimerRunning(true);
    setTimeLeft(15);
    setActiveStep(2);
  };

  const steps = [
    {
      id: 1,
      title: "FOLDER_PREPARATION",
      desc: "Apne mod files wale folder ka naam 'Content 1' rakhein. Game launch karein.",
      icon: "fa-folder-closed",
      color: "text-amber-400"
    },
    {
      id: 2,
      title: "LOADING_INTERCEPT",
      desc: "Loading bar dekhein... 50% par MT Manager switch karein.",
      icon: "fa-shuffle",
      color: "text-cyan-400"
    },
    {
      id: 3,
      title: "DIRECTORY_SWAP",
      desc: "'Content 1' folder ko rename karke 'Content' kar dein. Game naya folder detect karega.",
      icon: "fa-folder-open",
      color: "text-rose-500"
    }
  ];

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-cyan-500/50 rounded-[2.5rem] shadow-glow text-left animate-in zoom-in-95 duration-700 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4">
         <i className="fa-solid fa-folder-tree text-cyan-500 opacity-20 text-4xl"></i>
      </div>

      <div className="flex items-center gap-3 mb-6 border-b border-cyan-500/10 pb-4">
        <i className="fa-solid fa-mask text-cyan-500 text-lg animate-pulse"></i>
        <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">FOLDER_HOTSWAP_DECEPTION</h3>
      </div>

      <div className="space-y-6">
        {steps.map((step) => (
          <div 
            key={step.id} 
            onClick={() => setActiveStep(step.id)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${activeStep === step.id ? 'bg-cyan-500/10 border-cyan-500 shadow-lg' : 'bg-black/40 border-slate-800 opacity-50'}`}
          >
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-3">
                 <i className={`fa-solid ${step.icon} text-[10px] ${step.color}`}></i>
                 <span className={`text-[9px] font-black font-orbitron ${step.color} tracking-widest`}>{step.title}</span>
               </div>
               <span className="text-[8px] font-mono text-slate-500">Step 0{step.id}</span>
            </div>
            <p className="text-[10px] font-mono text-slate-300 uppercase leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {isTimerRunning ? (
          <div className="bg-black/60 p-4 rounded-2xl border border-rose-500/30 text-center animate-pulse">
            <p className="text-[8px] font-mono text-rose-500 uppercase font-black mb-1">FOLDER RENAME TIMER:</p>
            <p className="text-2xl font-orbitron font-black text-white">{timeLeft}s</p>
          </div>
        ) : (
          <button 
            onClick={startDeception}
            className="w-full py-4 bg-cyan-600 text-white rounded-2xl font-orbitron font-black text-[11px] uppercase tracking-widest shadow-glow active:scale-95 transition-all"
          >
            START_SWAP_TIMER
          </button>
        )}
      </div>

      <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
        <p className="text-[9px] text-emerald-400 font-mono text-center uppercase font-black tracking-tighter italic leading-relaxed">
          "Boss, folder rename karte hi game engine saari files andar se 'read' karna shuru kar dega."
        </p>
      </div>
    </div>
  );
};

export default HotSwapGuide;
