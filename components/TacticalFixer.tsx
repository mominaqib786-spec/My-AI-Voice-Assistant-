
import React, { useState } from 'react';

const TacticalFixer: React.FC = () => {
  const [step, setStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "DIRECT_DEPLOY_CONFIRM",
      icon: "fa-bolt",
      desc: "Boss, ye file bilkul DIRECT hai. Iske liye kisi third-party app ya setting ki zaroorat nahi hai. Bas paste karo aur khelo.",
      fix: "Direct system link active hai. No password, no injection needed."
    },
    {
      id: 2,
      title: "MISSING_FOLDERS_SKIP",
      icon: "fa-folder-minus",
      desc: "Agar 'Logs', 'pso', ya 'Shaders' nahi mil rahe, toh iska matlab game 'Clean State' mein hai. Step skip karke aage badhein.",
      fix: "In folders ka na hona koi problem nahi hai, balki system ke liye accha hai."
    },
    {
      id: 3,
      title: "ULTIMATE_PATH_CHECK",
      icon: "fa-location-crosshairs",
      desc: "Ye path check karein: Android > data > com.pubg.imobile > files > UE4Game > ShadowTrackerExtra > ShadowTrackerExtra > Saved > Paks.",
      fix: "Dhyan rahe, 'ShadowTrackerExtra' folder do baar hota hai. Aapne file dusre wale ke andar 'Paks' mein hi daalni hai."
    },
    {
      id: 4,
      title: "LOBBY_STABILITY_FIX",
      icon: "fa-chess-rook",
      desc: "Lobby mein rukne par bhi file kaam karegi. Bas game start karne se pehle puraana game background se hata dein (Force Stop).",
      fix: "Sovereign Build 20760 auto-loads in Lobby."
    }
  ];

  return (
    <div className="my-6 p-6 bg-black border-2 border-rose-600 rounded-[2.5rem] shadow-glow animate-in slide-in-from-right-10 duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-rose-500/20 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-screwdriver-wrench text-rose-500 animate-pulse"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">DIRECT_DEPLOYMENT_PROTOCOL</h3>
        </div>
        <div className="text-[8px] font-mono text-rose-400 font-black">STEP: 0{step}/04</div>
      </div>

      <div className="mb-6 min-h-[100px] animate-in fade-in duration-500 text-left">
        <div className="flex items-center gap-3 mb-2">
           <i className={`fa-solid ${steps[step-1].icon} text-rose-400 text-sm`}></i>
           <span className="text-[10px] font-black text-white uppercase tracking-widest font-orbitron">{steps[step-1].title}</span>
        </div>
        <p className="text-[10px] text-slate-300 font-mono leading-relaxed uppercase">
          {steps[step-1].desc}
        </p>
        <div className="mt-4 p-3 bg-rose-500/5 border border-rose-500/20 rounded-xl">
           <p className="text-[8px] font-mono text-rose-400 font-black italic uppercase">
             ADVICE: {steps[step-1].fix}
           </p>
        </div>
      </div>

      <div className="flex gap-3">
        {step > 1 && (
          <button 
            onClick={() => setStep(s => s - 1)}
            className="flex-1 py-3 bg-slate-900 text-slate-400 rounded-2xl font-orbitron font-black text-[9px] uppercase tracking-widest border border-slate-800"
          >
            PREV
          </button>
        )}
        <button 
          onClick={() => step < 4 ? setStep(s => s + 1) : setStep(1)}
          className="flex-[2] py-3 bg-rose-600 text-white rounded-2xl font-orbitron font-black text-[9px] uppercase tracking-widest shadow-glow"
        >
          {step < 4 ? 'NEXT_STEP' : 'SYSTEM_RELOAD'}
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {[1,2,3,4].map(i => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${step === i ? 'bg-rose-500 scale-150' : 'bg-slate-800'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default TacticalFixer;
