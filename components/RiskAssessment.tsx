
import React from 'react';

const RiskAssessment: React.FC = () => {
  // High risk due to the nature of the request
  const safetyScore = 0; 
  
  return (
    <div className="my-6 p-6 bg-[#050505] border-2 border-rose-600 rounded-[2.5rem] shadow-[0_0_30px_rgba(225,29,72,0.3)] animate-in fade-in duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-rose-500/10 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-triangle-exclamation text-rose-500 animate-pulse"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">THREAT_LEVEL_ASSESSMENT</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[14px] font-black text-rose-500 font-orbitron">{safetyScore}%</span>
          <span className="text-[7px] font-mono text-slate-500 uppercase font-black">Safety_Index</span>
        </div>
      </div>

      <div className="space-y-4 text-left">
        <div className="flex items-center justify-between p-3 bg-rose-900/10 rounded-2xl border border-rose-500/20">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-crosshairs text-rose-500 text-[10px]"></i>
            <span className="text-[9px] font-mono text-slate-300 uppercase">Feature: AUTO_AIM / RECOIL</span>
          </div>
          <span className="text-[7px] text-rose-500 font-black uppercase">DETECTED</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-rose-900/10 rounded-2xl border border-rose-500/20">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-eye text-rose-500 text-[10px]"></i>
            <span className="text-[9px] font-mono text-slate-300 uppercase">Feature: ESP / ANTENNA</span>
          </div>
          <span className="text-[7px] text-rose-500 font-black uppercase">UNSAFE</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-left">
        <p className="text-[9px] text-slate-300 font-mono leading-relaxed italic uppercase">
          "Sultan, account safety ke liye ye modifications recommended nahi hain. Game ka AI behavior pattern recognize kar lega aur 10-year ban trigger ho sakta hai."
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2 text-rose-400 animate-pulse">
         <i className="fa-solid fa-ban text-[10px]"></i>
         <span className="text-[8px] font-black font-orbitron uppercase">System Verdict: High Ban Risk</span>
      </div>
    </div>
  );
};

export default RiskAssessment;
