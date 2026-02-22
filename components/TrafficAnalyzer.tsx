
import React, { useState, useEffect } from 'react';

const TrafficAnalyzer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [packets, setPackets] = useState<{id: number, x: number}[]>([]);

  const flowSteps = [
    { label: "USER_BROWSER", desc: "Aapka device bina login ke 'Guest Session' shuru karta hai.", icon: "fa-laptop" },
    { label: "WEBRTC_STUN", desc: "Public IP aur NAT bypass karke rasta banaya jata hai.", icon: "fa-tower-broadcast" },
    { label: "VOIP_GATEWAY", desc: "Website ki apni PAID ID background mein active hoti hai.", icon: "fa-server" },
    { label: "PSTN_NETWORK", desc: "Internet data ab asli phone line (Sim Card) mein badal chuka hai.", icon: "fa-phone-volume" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % flowSteps.length);
    }, 3000);
    
    const pInterval = setInterval(() => {
      setPackets(prev => [...prev, { id: Date.now(), x: 0 }].slice(-10));
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(pInterval);
    };
  }, []);

  return (
    <div className="my-8 p-6 bg-zinc-950 border-2 border-cyan-500/40 rounded-[3rem] shadow-2xl animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <i className="fa-solid fa-diagram-project text-6xl text-cyan-400"></i>
      </div>

      <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
          <i className="fa-solid fa-network-wired text-cyan-400 text-xl animate-pulse"></i>
        </div>
        <div>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">HOW_NO_LOGIN_CALLS_WORK</h3>
          <p className="text-[8px] font-mono text-cyan-600 uppercase font-black">Technical Anatomy of Guest Tunneling</p>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="flex justify-between items-start gap-2 h-24">
          {flowSteps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeStep === idx ? 'bg-cyan-500 text-black shadow-glow scale-125' : 'bg-zinc-900 text-slate-600 border border-white/5'}`}>
                <i className={`fa-solid ${step.icon} text-xs`}></i>
              </div>
              <span className={`text-[7px] font-black font-orbitron uppercase ${activeStep === idx ? 'text-cyan-400' : 'text-slate-700'}`}>{step.label}</span>
            </div>
          ))}
        </div>

        <div className="p-5 bg-black/60 border border-cyan-500/20 rounded-3xl min-h-[90px] animate-in fade-in duration-500">
           <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></div>
              <span className="text-[9px] font-black text-cyan-400 font-orbitron uppercase tracking-widest">{flowSteps[activeStep].label}_LOGIC</span>
           </div>
           <p className="text-[11px] font-mono text-slate-300 uppercase leading-relaxed italic">
             "{flowSteps[activeStep].desc}"
           </p>
        </div>

        <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
          <p className="text-[9px] font-mono text-amber-400 text-center uppercase leading-relaxed">
            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
            CAUTION: "No-Login" websites aapse paise nahi leti, lekin aapka <span className="text-white font-black underline">DATA</span> leti hain. Isliye wo ID nahi maangti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrafficAnalyzer;
