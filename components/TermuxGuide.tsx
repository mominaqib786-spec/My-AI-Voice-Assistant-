
import React, { useState } from 'react';

const TermuxGuide: React.FC = () => {
  const [step, setStep] = useState(1);

  const copyToClipboard = (text: string, msg: string) => {
    navigator.clipboard.writeText(text);
    alert(msg);
  };

  const steps = [
    {
      id: 1,
      title: "STORAGE_ACCESS",
      command: "termux-setup-storage",
      desc: "Termux ko permission dein taaki folders modify ho sakein.",
      btnText: "COPY_STORAGE_CMD"
    },
    {
      id: 2,
      title: "DIRECTORY_SYNC",
      command: "cd /sdcard/Android/data/com.pubg.imobile/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/Paks/",
      desc: "Paks folder tak jaayein jahan 'Content' folder rakha hai.",
      btnText: "COPY_PAKS_PATH"
    },
    {
      id: 3,
      title: "RECURSIVE_GHOST_LOCK",
      command: "chmod -R 444 Content/",
      desc: "Poore 'Content' folder aur uske andar ki saari hack files ko lock karne ka command.",
      btnText: "COPY_RECURSIVE_LOCK"
    }
  ];

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-emerald-600 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700 text-left">
      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/10 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-terminal text-emerald-500 animate-pulse text-lg"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">TERMUX_FOLDER_LOCK</h3>
        </div>
        <div className="text-[8px] font-mono text-emerald-400 font-black">STEP: 0{step}/03</div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-black border border-emerald-500/20 rounded-2xl">
          <p className="text-[10px] font-black text-emerald-400 uppercase mb-2 font-orbitron">{steps[step-1].title}</p>
          <p className="text-[11px] text-slate-300 font-mono leading-relaxed uppercase mb-4">
            {steps[step-1].desc}
          </p>
          <div className="bg-zinc-900 p-3 rounded-xl border border-white/5 mb-4 overflow-x-auto no-scrollbar">
             <code className="text-[10px] text-white font-mono whitespace-nowrap">{steps[step-1].command}</code>
          </div>
          <button 
            onClick={() => copyToClipboard(steps[step-1].command, "Command Copy!")}
            className="w-full py-3 bg-emerald-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-copy"></i>
            {steps[step-1].btnText}
          </button>
        </div>

        <div className="flex gap-2">
          {[1,2,3].map(i => (
            <button 
              key={i}
              onClick={() => setStep(i)}
              className={`flex-1 h-1.5 rounded-full transition-all ${step === i ? 'bg-emerald-500 w-8' : 'bg-slate-800'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
        <p className="text-[9px] text-slate-400 font-mono leading-relaxed italic text-center uppercase">
          "Boss, <span className="text-emerald-400 font-black">-R (Recursive)</span> zaroori hai taaki folder ke andar ki saari files lock ho jayein."
        </p>
      </div>
    </div>
  );
};

export default TermuxGuide;
