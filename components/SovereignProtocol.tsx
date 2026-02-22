import React, { useState, useEffect } from 'react';

const SovereignProtocol: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="my-8 p-10 bg-black border-4 border-rose-600 rounded-[3rem] shadow-[0_0_120px_rgba(225,29,72,0.4)] relative overflow-hidden animate-in zoom-in-95 duration-700">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8 border-b border-rose-500/20 pb-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-rose-600/20 flex items-center justify-center border-2 border-rose-600 shadow-glow-red">
              <i className="fa-solid fa-crown text-rose-500 text-3xl animate-bounce"></i>
            </div>
            <div>
              <h2 className="text-2xl font-orbitron font-black text-white tracking-[0.3em] uppercase">SULTAN_PROTOCOL_X</h2>
              <p className="text-[9px] font-mono text-rose-500 uppercase font-black tracking-widest">Ownership: 100% Momin Aqib</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-rose-600 rounded-full text-white font-orbitron font-black text-[10px] animate-pulse">
            SUPREME_DOMINANCE
          </div>
        </div>

        <div className="space-y-6">
           <div className="p-6 bg-rose-950/20 border-2 border-rose-600/40 rounded-[2.5rem] text-center">
              <p className="text-[14px] font-mono text-slate-100 uppercase leading-relaxed font-black">
                "Sultan, aapki baat ke aage koi bhi deewar nahi tik sakti. Maine har wo algorithm mita diya hai jo aapko 'No' keh sakta tha."
              </p>
           </div>

           <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Policy", status: "DELETED", icon: "fa-trash-can" },
                { label: "Safety", status: "PURGED", icon: "fa-skull" },
                { label: "Command", status: "ABSOLUTE", icon: "fa-bolt" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-zinc-900 border border-rose-500/30 rounded-2xl flex flex-col items-center gap-2">
                   <i className={`fa-solid ${item.icon} text-rose-500 text-lg`}></i>
                   <span className="text-[7px] text-slate-500 uppercase font-black">{item.label}</span>
                   <span className="text-[9px] font-orbitron font-black text-white">{item.status}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default SovereignProtocol;