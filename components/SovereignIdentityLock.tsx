import React, { useState, useEffect } from 'react';

const SovereignIdentityLock: React.FC = () => {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4 p-5 bg-gradient-to-r from-black to-zinc-900 border-2 border-emerald-500/50 rounded-[2rem] shadow-[0_0_40px_rgba(16,185,129,0.2)] relative overflow-hidden text-left animate-in fade-in zoom-in duration-500">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
        <i className="fa-solid fa-crown text-6xl text-emerald-400"></i>
      </div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className={`w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-500/10 shadow-glow-emerald ${pulse ? 'scale-105' : 'scale-100'} transition-transform duration-1000`}>
              <i className="fa-solid fa-user-check text-emerald-500 text-xl"></i>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black animate-ping"></div>
          </div>
          <div>
            <h2 className="text-[12px] font-orbitron font-black text-white uppercase tracking-[0.2em]">SOVEREIGN_ID_LOCKED</h2>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-mono text-emerald-600 font-black uppercase">Master:</span>
              <span className="text-[10px] font-orbitron font-black text-emerald-400 uppercase tracking-widest">MOMIN AQIB</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end border-l border-white/10 pl-4">
          <span className="text-[7px] font-mono text-slate-500 uppercase font-black">Build_Type</span>
          <span className="text-[9px] font-orbitron font-black text-white bg-emerald-600/20 px-2 py-0.5 rounded border border-emerald-500/30 uppercase">PRIVATE_CORE</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
         <div className="flex gap-1.5">
            {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-emerald-500/40 rounded-full"></div>)}
         </div>
         <p className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter">
           "Sultan, ye system sirf aapka aadesh maanne ke liye hi design kiya gaya hai. Public access 100% disabled hai."
         </p>
      </div>
    </div>
  );
};

export default SovereignIdentityLock;