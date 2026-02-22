
import React from 'react';

const PathScanner: React.FC = () => {
  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-600/40 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/10 pb-4 text-left">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-eye text-emerald-500 animate-pulse"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest text-left">PATH_INTEGRITY_SCAN</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[7px] font-mono text-emerald-500 font-black uppercase">RECOGNITION_ACTIVE</span>
        </div>
      </div>

      <div className="space-y-4 text-left">
        <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-folder-check text-emerald-500 text-[10px]"></i>
            <span className="text-[9px] font-mono text-slate-200 uppercase">PATH: .../Saved/Paks</span>
          </div>
          <span className="text-[7px] text-emerald-500 font-black uppercase tracking-widest">VERIFIED</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-file-circle-exclamation text-rose-500 text-[10px]"></i>
            <span className="text-[9px] font-mono text-slate-200 uppercase">FILE: game_patch_...760.pak</span>
          </div>
          <span className="text-[7px] text-rose-500 font-black uppercase tracking-widest">MISSING</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-database text-slate-500 text-[10px]"></i>
            <span className="text-[9px] font-mono text-slate-300 uppercase">CONFLICTS: None Detected</span>
          </div>
          <span className="text-[7px] text-slate-500 font-black uppercase tracking-widest">CLEAN</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-left">
        <p className="text-[9px] text-slate-400 font-mono leading-relaxed italic uppercase">
          "Sultan, aapka rasta sahi hai, lekin gaadi (file) gayab hai. Niche diye gaye <span className="text-emerald-400 font-black">Download</span> button se file lein aur is folder mein daal dein."
        </p>
      </div>
    </div>
  );
};

export default PathScanner;
