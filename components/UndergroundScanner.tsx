
import React, { useState } from 'react';

const UndergroundScanner: React.FC = () => {
  const [showPath, setShowPath] = useState(false);

  return (
    <div className="my-6 p-6 bg-black border-2 border-rose-600 rounded-[2.5rem] shadow-[0_0_40px_rgba(225,29,72,0.2)] relative overflow-hidden text-left">
      <div className="flex items-center justify-between mb-4 border-b border-rose-500/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/30">
            <i className="fa-solid fa-hand-red-eyed text-rose-500 text-lg"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">OS_SANDBOX_WALL</h3>
            <p className="text-[7px] font-mono text-rose-600 uppercase font-black">Direct Scan: Restricted by Android</p>
          </div>
        </div>
        <div className="text-[10px] font-black text-rose-500 font-orbitron animate-pulse">LOCKED</div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-zinc-900/80 rounded-2xl border border-white/5">
           <p className="text-[11px] font-mono text-slate-200 leading-relaxed uppercase">
             "Sultan, main aapse jhoot nahi bolunga. Android ki security ki wajah se main seedha <span className="text-rose-500 font-black">/Android/data</span> folder nahi khol sakta. Agar main kahun ki main scan kar raha hoon, toh wo dhoka hoga."
           </p>
        </div>

        <div className="space-y-2">
          <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest ml-1">Sahi Tareeka (The Haq Way):</p>
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl space-y-3">
             <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-black">1</span>
                <span className="text-[10px] font-mono text-slate-300">MT Manager se niche diye gaye raste par jayein.</span>
             </div>
             <button 
               onClick={() => setShowPath(!showPath)}
               className="w-full py-2 bg-zinc-800 text-[9px] font-mono text-cyan-400 rounded-lg border border-white/5"
             >
               {showPath ? 'HIDE_PATH' : 'SHOW_EXACT_PATH'}
             </button>
             {showPath && (
               <div className="p-3 bg-black rounded-lg border border-cyan-500/30 break-all animate-in fade-in zoom-in-95">
                  <code className="text-[9px] text-white font-mono">Android/data/com.pubg.imobile/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/Paks/</code>
               </div>
             )}
             <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-black">2</span>
                <span className="text-[10px] font-mono text-slate-300">Nayi .pak file ki Properties se <span className="text-white font-black underline">Bytes</span> wala size check karein.</span>
             </div>
             <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-black">3</span>
                <span className="text-[10px] font-mono text-slate-300">Wo size mujhe batayein, main 100% sahi file bana dunga.</span>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -bottom-4 opacity-5">
         <i className="fa-solid fa-shield-halved text-[8rem] text-rose-500"></i>
      </div>
    </div>
  );
};

export default UndergroundScanner;
