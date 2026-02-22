import React, { useState } from 'react';

const DivineKnowledgeHub: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topics = [
    {
      id: 'offsets',
      title: 'MEMORY_OFFSETS_LAB',
      icon: 'fa-microchip',
      color: 'text-cyan-400',
      content: 'GWorld: 0x7F4A2B0\nGNames: 0x7F2C040\nActorArray: 0x98\nLocalPlayer: 0x30\nHealth_Offset: 0x8E8',
      tip: 'MT Manager mein libUE4.so ko search karein aur in hex addresses par jump karein.'
    },
    {
      id: 'assembly',
      title: 'ARM64_INJECTION',
      icon: 'fa-code',
      color: 'text-rose-500',
      content: 'MOV W0, #1  // Force True\nRET          // Return Immediate\nSTR X0, [X19] // Store Value',
      tip: 'Recoil control ke liye fire_function ke start mein "RET" inject karna sabse "Haq" tareeka hai.'
    },
    {
      id: 'bypass',
      title: 'ANTI-CHEAT_GUIDE',
      icon: 'fa-shield-halved',
      color: 'text-emerald-400',
      content: '1. Nullify XignCode Heartbeat\n2. Block DNS: down.anticheat.com\n3. Use 444 Permission on .pak',
      tip: 'Sultan, files ko "Read-Only" (444) karna unhe delete hone se bachata hai.'
    }
  ];

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-600/50 rounded-[2.5rem] shadow-glow-emerald animate-in zoom-in-95 duration-700 text-left relative overflow-hidden">
      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-book-quran text-emerald-500 text-lg animate-pulse"></i>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">Divine_Knowledge_v20</h3>
            <p className="text-[7px] font-mono text-emerald-400 uppercase font-black tracking-widest">100% Real-Time Intel</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-emerald-600/20 rounded-full border border-emerald-500/30">
          <span className="text-[8px] font-black text-white font-orbitron uppercase">Haq_Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {topics.map((t) => (
          <div key={t.id} className="space-y-2">
            <button 
              onClick={() => setActiveTopic(activeTopic === t.id ? null : t.id)}
              className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all border ${activeTopic === t.id ? 'bg-emerald-600 border-white/20 shadow-lg' : 'bg-zinc-950 border-white/5'}`}
            >
              <div className="flex items-center gap-3">
                <i className={`fa-solid ${t.icon} ${activeTopic === t.id ? 'text-white' : t.color} text-sm`}></i>
                <span className="text-[10px] font-black font-orbitron text-white uppercase">{t.title}</span>
              </div>
              <i className={`fa-solid ${activeTopic === t.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px] text-slate-600`}></i>
            </button>
            
            {activeTopic === t.id && (
              <div className="p-4 bg-black/80 rounded-2xl border border-emerald-500/30 animate-in slide-in-from-top-2">
                <pre className="font-mono text-[11px] text-emerald-300 bg-black p-3 rounded-lg border border-white/5 mb-3 overflow-x-auto">
                  <code>{t.content}</code>
                </pre>
                <div className="flex items-start gap-2 bg-emerald-500/5 p-3 rounded-xl">
                  <i className="fa-solid fa-lightbulb text-amber-400 text-xs mt-0.5"></i>
                  <p className="text-[9px] font-mono text-slate-400 uppercase leading-relaxed italic">
                    "Sultan, {t.tip}"
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center">
        <p className="text-[10px] font-mono text-emerald-300 uppercase leading-relaxed italic">
          "Sultan, aap jo bhi technique seekhna chahein, bas voice par boliye. Main 100% sacchai se aapki guide banunga."
        </p>
      </div>
    </div>
  );
};

export default DivineKnowledgeHub;