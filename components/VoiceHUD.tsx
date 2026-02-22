import React, { useEffect, useState } from 'react';

interface Props {
  status: string;
  transcript: string;
  response: string;
  onClose: () => void;
  visionActive?: boolean;
}

const VoiceHUD: React.FC<Props> = ({ status, transcript, response, onClose, visionActive }) => {
  const [rotation, setRotation] = useState(0);
  const [isResearching, setIsResearching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Detect research context for visual feedback
  useEffect(() => {
    const researchKeywords = ['search', 'find', 'research', 'islam', 'quran', 'hadith', 'truth', 'real', 'update', 'system'];
    const isResearchMatch = researchKeywords.some(kw => 
      transcript.toLowerCase().includes(kw) || response.toLowerCase().includes(kw)
    );
    setIsResearching(isResearchMatch);
  }, [transcript, response]);

  return (
    <div className="fixed inset-x-0 top-0 z-[12000] pointer-events-none flex flex-col items-center p-4">
      {/* Al-Hidayah Neural Ribbon */}
      <div className={`w-full max-w-xl bg-black/80 backdrop-blur-3xl border-2 ${isResearching ? 'border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.4)]' : 'border-emerald-600/40 shadow-glow-emerald'} rounded-[2.5rem] p-5 flex items-center gap-6 pointer-events-auto animate-in slide-in-from-top-10 duration-700 transition-all`}>
        
        {/* Core Orb */}
        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
          <div className={`absolute inset-0 ${isResearching ? 'bg-emerald-600/20' : visionActive ? 'bg-emerald-600/20' : 'bg-emerald-600/20'} rounded-full animate-ping`}></div>
          <div 
            className={`absolute inset-0 border-2 ${isResearching ? 'border-emerald-500' : visionActive ? 'border-emerald-500/40' : 'border-emerald-500/40'} rounded-full border-dashed`}
            style={{ transform: `rotate(${rotation}deg)` }}
          ></div>
          <div className={`w-9 h-9 ${isResearching ? 'bg-emerald-950/60 border-emerald-500' : 'bg-emerald-950/60 border-emerald-500'} rounded-full flex items-center justify-center border shadow-glow-emerald relative z-10 transition-colors`}>
            <i className={`fa-solid ${isResearching ? 'fa-magnifying-glass' : visionActive ? 'fa-eye' : 'fa-moon'} text-emerald-500 text-lg ${response ? 'animate-spin-slow' : 'animate-pulse'}`}></i>
          </div>
        </div>

        {/* Text Area */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-3">
              <span className={`text-[8px] font-orbitron font-black text-emerald-500 tracking-[0.4em] uppercase drop-shadow-sm`}>
                {isResearching ? 'LIVE_RESEARCH_ACTIVE' : 'IMAN_SYSTEM_LINK'}
              </span>
              <div className="flex gap-1.5">
                 {[1,2,3,4].map(i => <div key={i} className={`w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse`} style={{animationDelay: `${i*0.15}s`}}></div>)}
              </div>
            </div>
            {isResearching && (
              <span className="text-[7px] font-mono text-emerald-400 font-black animate-pulse px-2 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20">RESEARCH_MODE</span>
            )}
          </div>
          <div className="h-6 flex items-center">
            <p className="text-[14px] font-bold text-white truncate italic tracking-tight">
              {transcript ? `Sultan: "${transcript}"` : "Awaiting Command..."}
            </p>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full bg-emerald-500 animate-pulse`}></div>
            <span className={`text-[7px] font-mono text-emerald-400 font-black uppercase tracking-widest`}>{status || "LINKED"}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
           <button 
             onClick={onClose}
             className={`w-12 h-12 rounded-2xl bg-emerald-900/40 border-emerald-500/30 text-emerald-500 border-2 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-lg active:scale-90`}
           >
             <i className="fa-solid fa-xmark text-lg"></i>
           </button>
        </div>
      </div>

      {/* Intelligence Response */}
      {response && (
        <div className={`mt-5 w-full max-w-md bg-black/90 border-2 border-emerald-600/50 backdrop-blur-3xl p-6 rounded-[2.5rem] shadow-glow-emerald animate-in zoom-in-95 duration-300 pointer-events-auto transition-all`}>
          <div className="flex items-center gap-3 mb-3 opacity-50">
             <i className={`fa-solid ${isResearching ? 'fa-book-open' : 'fa-bolt-lightning'} text-emerald-400 text-xs`}></i>
             <span className={`text-[7px] font-mono text-emerald-400 uppercase font-black tracking-widest`}>
               {isResearching ? 'Verified_Wisdom' : 'Real-time_Insight'}
             </span>
          </div>
          <p className={`text-[15px] font-bold text-white leading-relaxed font-sans italic`}>
            {response}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-[6px] font-mono text-emerald-900 uppercase font-black tracking-[0.2em]">Context_Parsed</span>
            <div className="flex gap-1">
               <div className={`w-3 h-0.5 bg-emerald-500/30`}></div>
               <div className={`w-3 h-0.5 bg-emerald-500/60`}></div>
               <div className={`w-3 h-0.5 bg-emerald-600`}></div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default VoiceHUD;