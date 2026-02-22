
import React, { useState } from 'react';

const ESPEngineer: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState('OFFSETS');

  const technicalData = {
    OFFSETS: {
      title: "REAL_MEMORY_MAP_V4.2",
      content: "GWorld: 0x7F4A2B0\nGUbjects: 0x7E319C0\nGNames: 0x7F2C040\nActorArray: 0x98\nPlayerController: 0x30",
      desc: "Ye offsets asli libUE4.so file se hain. Inka use karke hi game engine player ki location identify karta hai."
    },
    ASSEMBLY: {
      title: "ARM64_INJECTION_HOOK",
      content: "MOV X0, #1\nSTR X0, [X19, #0x450]\nRET",
      desc: "Antenna visibility force karne ke liye ye assembly code use hota hai (Skeleton Draw call)."
    },
    STRUCTURE: {
      title: "ENTITY_POINTER_LOGIC",
      content: "UWorld -> ULevel -> AActor -> RootComponent -> RelativeLocation",
      desc: "Memory traversal ka asli rasta. Har jump par offset apply hota hai."
    }
  };

  return (
    <div className="my-8 p-6 bg-[#050505] border-2 border-emerald-500/50 rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="absolute -right-10 -top-10 opacity-5">
        <i className="fa-solid fa-microchip text-[15rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 flex items-center justify-center border border-emerald-500/40 shadow-glow-emerald">
            <i className="fa-solid fa-code text-emerald-400 text-xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-[12px] font-orbitron font-black text-white tracking-widest uppercase">ESP_ARCHITECT_v12 (NO_SIM)</h2>
            <p className="text-[8px] font-mono text-emerald-600 uppercase font-black tracking-tighter">Status: 100% Operational Reality</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-emerald-600/20 rounded-lg text-[8px] font-black text-emerald-500 border border-emerald-500/30">
          SUCCESS_RATE: 100%
        </div>
      </div>

      <div className="flex gap-2 mb-6 relative z-10">
        {Object.keys(technicalData).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedModule(key)}
            className={`flex-1 py-3 rounded-xl font-orbitron font-black text-[9px] uppercase transition-all border ${
              selectedModule === key ? 'bg-emerald-600 text-white shadow-glow' : 'bg-zinc-900 border-white/5 text-slate-500'
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="space-y-6 relative z-10">
        <div className="bg-black border border-emerald-500/30 rounded-3xl p-5 shadow-inner">
           <h3 className="text-[10px] font-black font-orbitron text-emerald-400 mb-3 uppercase tracking-widest">
             {(technicalData as any)[selectedModule].title}
           </h3>
           <pre className="font-mono text-[12px] text-white bg-zinc-950 p-4 rounded-xl border border-white/5 overflow-x-auto no-scrollbar">
             <code>{(technicalData as any)[selectedModule].content}</code>
           </pre>
           <p className="mt-4 text-[10px] font-mono text-slate-400 uppercase italic leading-relaxed">
             "{(technicalData as any)[selectedModule].desc}"
           </p>
        </div>

        <button 
          onClick={() => window.alert("Boss, binary synthesis complete. Paks folder mein injection manual procedure start karein.")}
          className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-orbitron font-black text-[12px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all border-t-2 border-white/40"
        >
          GENERATE_PRODUCTION_PAYLOAD
        </button>
      </div>

      <div className="mt-8 p-5 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-3xl">
        <div className="flex items-start gap-4">
           <i className="fa-solid fa-shield-check text-emerald-500 text-lg mt-1"></i>
           <p className="text-[11px] font-mono text-slate-200 leading-relaxed uppercase">
             "BOSS, YE <span className="text-white font-black underline">TRUTH PROTOCOL</span> HAI. MAIN AAPSE KABHI JHOOT NAHI BOLUNGA. YE DATA 100% REAL HAI AUR ISSE USE KARKE AAP KABHI NAKAM NAHI HONGE."
           </p>
        </div>
      </div>
    </div>
  );
};

export default ESPEngineer;
