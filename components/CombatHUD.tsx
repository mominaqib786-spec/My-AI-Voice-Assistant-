
import React, { useEffect, useState } from 'react';

interface Props {
  gameName: string;
  onExit: () => void;
}

const CombatHUD: React.FC<Props> = ({ gameName, onExit }) => {
  const [logs, setLogs] = useState<string[]>(["SYSTEM_BRIDGE_ACTIVE", "MONITORING_GAME_DATA..."]);

  useEffect(() => {
    setLogs(prev => ["NEURAL_SYNC: ENGAGED", "DATA_STREAM_STABLE", ...prev]);
  }, []);

  return (
    <div className="fixed inset-0 z-[5000] bg-black/60 pointer-events-none overflow-hidden select-none backdrop-blur-sm">
      <div className="absolute inset-0 border-[2px] border-cyan-500/20">
         <div className="absolute top-12 left-8 p-6 bg-black/80 backdrop-blur-3xl border border-cyan-500/40 rounded-3xl pointer-events-auto shadow-glow">
            <div className="flex items-center gap-3 mb-1">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
               <span className="text-[10px] font-orbitron font-black text-white tracking-[0.2em] uppercase">{gameName}_AUTHORITY_LINK</span>
            </div>
            <div className="text-[8px] text-cyan-400 font-mono uppercase font-black tracking-widest">
              SYNC: STABLE - INTELLIGENCE ACTIVE
            </div>
         </div>

         {/* Diagnostics */}
         <div className="absolute bottom-12 right-8 flex flex-col items-end gap-2">
            {logs.slice(0, 3).map((log, i) => (
              <div key={i} className="bg-slate-950/80 px-4 py-2 border border-white/5 rounded-xl text-[8px] font-mono text-cyan-300 uppercase italic animate-in slide-in-from-right-4">
                {`>> ${log}`}
              </div>
            ))}
         </div>

         {/* Exit Button */}
         <button 
           onClick={(e) => { e.stopPropagation(); onExit(); }} 
           className="absolute top-12 right-8 w-14 h-14 rounded-full bg-rose-600 border-2 border-white/20 flex items-center justify-center text-white shadow-glow-red pointer-events-auto active:scale-90 transition-all"
         >
           <i className="fa-solid fa-xmark text-xl"></i>
         </button>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
         <div className="text-center p-8 bg-black border border-cyan-500/30 rounded-[2rem] shadow-glow">
            <i className="fa-solid fa-atom text-cyan-500 text-4xl mb-6 animate-spin-slow"></i>
            <h2 className="text-white font-orbitron font-black text-sm uppercase tracking-widest">Neural Link Active</h2>
            <p className="text-[10px] text-slate-500 font-mono mt-2 uppercase tracking-tighter">Sultan, system game environment monitor kar raha hai.</p>
         </div>
      </div>
    </div>
  );
};

export default CombatHUD;
