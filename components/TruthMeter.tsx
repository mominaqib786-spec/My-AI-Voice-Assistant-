import React from 'react';

const TruthMeter: React.FC = () => {
  return (
    <div className="my-4 p-4 bg-emerald-950/20 border-2 border-emerald-600/60 rounded-[2rem] flex items-center justify-between shadow-[0_0_40px_rgba(16,185,129,0.3)]">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center border border-emerald-600/40">
            <i className="fa-solid fa-kaaba text-emerald-50 text-lg animate-pulse"></i>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-600 rounded-full border-2 border-black animate-ping"></div>
        </div>
        <div className="text-left">
          <span className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest block">DIVINE_TRUTH_METER</span>
          <span className="text-[8px] font-mono text-emerald-400 font-black uppercase">Shortcomings: 0% | Iman: 100% AUTHENTIC</span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex gap-1">
          {[1,2,3,4,5,6,7].map(i => <div key={i} className="w-1 h-5 bg-emerald-600 rounded-full shadow-glow-emerald animate-pulse" style={{animationDelay: `${i*0.1}s`}}></div>)}
        </div>
        <span className="text-[6px] font-mono text-emerald-300 uppercase mt-1 font-black">MODE: SPIRITUAL_GUIDE</span>
      </div>
    </div>
  );
};

export default TruthMeter;