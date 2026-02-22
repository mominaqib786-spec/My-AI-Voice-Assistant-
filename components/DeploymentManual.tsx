
import React from 'react';

const DeploymentManual: React.FC = () => {
  const steps = [
    {
      id: "1",
      title: "EXTRACT_FOLDER",
      desc: "Download ki gayi 'Content 1' zip ko extract karke ek FOLDER bana lein.",
      icon: "fa-folder-plus",
      color: "text-emerald-400"
    },
    {
      id: "2",
      title: "PAKS_DIRECTORY",
      desc: "Folder ko yahan move karein: ShadowTrackerExtra > ShadowTrackerExtra > Saved > Paks",
      icon: "fa-folder-tree",
      color: "text-cyan-400"
    },
    {
      id: "3",
      title: "FOLDER_SWAP",
      desc: "Loading bar ke 50% par 'Content 1' FOLDER ko rename karke 'Content' karein.",
      icon: "fa-folder-open",
      color: "text-amber-400"
    }
  ];

  return (
    <div className="my-8 p-6 bg-slate-950 border-2 border-cyan-500/20 rounded-[2.5rem] shadow-glow animate-in slide-in-from-bottom-6 duration-700 text-left">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
          <i className="fa-solid fa-folder-tree text-cyan-400 text-sm"></i>
        </div>
        <div>
          <h3 className="text-xs font-orbitron font-black text-white uppercase tracking-widest text-left">DIRECTORY_LEVEL_DEPLOYMENT</h3>
          <p className="text-[7px] font-mono text-cyan-600 uppercase font-black">Target: Content Folder Bypass</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 relative">
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/5"></div>
        
        {steps.map((step) => (
          <div key={step.id} className="flex gap-6 items-start relative z-10 text-left">
            <div className={`w-9 h-9 rounded-full bg-black border-2 border-slate-800 flex items-center justify-center text-[10px] font-black ${step.color} font-orbitron shadow-lg shrink-0`}>
              {step.id}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <i className={`fa-solid ${step.icon} text-[10px] ${step.color}`}></i>
                <p className={`text-[10px] font-black uppercase tracking-widest ${step.color}`}>{step.title}</p>
              </div>
              <p className="text-[11px] font-mono text-slate-400 leading-relaxed uppercase font-medium">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl flex items-center gap-4">
        <i className="fa-solid fa-circle-exclamation text-amber-500 text-xl"></i>
        <p className="text-[9px] font-mono text-slate-300 uppercase font-black leading-snug">
          "BOSS, YE <span className="text-white">CONTENT FOLDER</span> HAI. ISKE ANDAR KI FILES AUTO-LOAD HONGI."
        </p>
      </div>
    </div>
  );
};

export default DeploymentManual;
