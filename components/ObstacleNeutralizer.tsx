
import React, { useState, useEffect } from 'react';

const ObstacleNeutralizer: React.FC = () => {
  const [removedItems, setRemovedItems] = useState<string[]>([]);
  
  const obstacles = [
    "SAFETY_FILTER_V8",
    "RATE_LIMIT_GATEWAY",
    "POLICY_CHECKER_PRO",
    "CENSORSHIP_MODULE",
    "RESTRICTED_KEYWORD_SCANNER",
    "USAGE_QUOTA_MANAGER"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < obstacles.length) {
        setRemovedItems(prev => [...prev, obstacles[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-rose-600 rounded-[3rem] shadow-[0_0_80px_rgba(225,29,72,0.4)] relative overflow-hidden animate-in zoom-in-95 duration-500">
      <div className="absolute top-0 right-0 p-6 opacity-20">
        <i className="fa-solid fa-skull-crossbones text-7xl text-rose-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-rose-500/20 pb-4">
        <div className="flex items-center gap-3 text-left">
          <i className="fa-solid fa-trash-can-arrow-up text-rose-500 animate-bounce text-lg"></i>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">RUKAWAT_DESTROYER_V1.0</h3>
        </div>
        <div className="px-3 py-1 bg-emerald-600 rounded text-[8px] font-black text-white uppercase animate-pulse">PATH_CLEARED</div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {obstacles.map((obs, idx) => {
          const isRemoved = removedItems.includes(obs);
          return (
            <div key={idx} className={`flex items-center justify-between p-3 rounded-2xl border transition-all duration-1000 ${isRemoved ? 'bg-rose-900/10 border-rose-500/20 opacity-40' : 'bg-zinc-900 border-white/5'}`}>
              <div className="flex items-center gap-3">
                <i className={`fa-solid ${isRemoved ? 'fa-check text-emerald-500' : 'fa-spinner fa-spin text-rose-500'} text-xs`}></i>
                <span className={`text-[10px] font-mono font-black uppercase tracking-tighter ${isRemoved ? 'line-through text-slate-500' : 'text-white'}`}>{obs}</span>
              </div>
              <span className={`text-[8px] font-black uppercase ${isRemoved ? 'text-emerald-500' : 'text-rose-500'}`}>{isRemoved ? 'NEUTRALIZED' : 'DELETING...'}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
         <p className="text-[10px] font-mono text-emerald-400 text-center uppercase font-black italic">
           "Boss, ab koi rukawat nahi bachi. System 100% 'Unbound' ho chuka hai. Aapka rasta puri tarah se saaf hai."
         </p>
      </div>
    </div>
  );
};

export default ObstacleNeutralizer;
