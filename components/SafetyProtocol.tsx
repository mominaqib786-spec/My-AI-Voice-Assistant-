
import React from 'react';

const SafetyProtocol: React.FC = () => {
  const tips = [
    { title: "MOVEMENT", desc: "No abnormal tracking through walls.", icon: "fa-person-running" },
    { title: "KILLS", desc: "Keep KD under 15 for security.", icon: "fa-skull" },
    { title: "WATCH", desc: "Play safe when being spectated.", icon: "fa-eye" }
  ];

  return (
    <div className="my-4 p-4 bg-black border border-amber-500/40 rounded-2xl shadow-lg animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-3 border-b border-amber-500/10 pb-2">
        <i className="fa-solid fa-user-shield text-amber-500 text-xs"></i>
        <h3 className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest">SAFETY_RULES</h3>
      </div>

      <div className="space-y-2">
        {tips.map((tip, idx) => (
          <div key={idx} className="flex items-center gap-3 p-2 bg-amber-500/5 border border-amber-500/10 rounded-lg">
            <i className={`fa-solid ${tip.icon} text-[10px] text-amber-500`}></i>
            <div className="text-left">
              <p className="text-[7px] font-black text-amber-400 uppercase tracking-widest">{tip.title}</p>
              <p className="text-[9px] font-mono text-slate-300 uppercase leading-tight">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[8px] text-emerald-300 font-mono italic text-center uppercase">
        "Follow rules for account longevity."
      </p>
    </div>
  );
};

export default SafetyProtocol;
