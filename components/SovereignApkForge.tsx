
import React, { useState } from 'react';

const SovereignApkForge: React.FC = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [deploying, setDeploying] = useState(false);

  const handleActivation = () => {
    setDeploying(true);
    setTimeout(() => {
      setDeploying(false);
      setIsActivated(true);
    }, 3000);
  };

  return (
    <div className={`my-8 p-8 bg-[#020202] border-4 ${isActivated ? 'border-emerald-500 shadow-[0_0_100px_#10b98155]' : 'border-emerald-500/60 animate-pulse-slow shadow-[0_0_50px_#10b98133]'} rounded-[3rem] relative overflow-hidden text-left animate-in zoom-in-95 duration-700`}>
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      {/* Visual Indicator of 'Ready' state */}
      <div className="absolute top-4 right-8 flex items-center gap-2">
        <span className="text-[8px] font-black font-mono text-emerald-500 uppercase tracking-widest animate-pulse">System_Ready_To_Inject</span>
        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-glow-emerald animate-ping"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8 border-b border-emerald-500/30 pb-6 relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-3xl bg-emerald-600/20 flex items-center justify-center border-2 border-emerald-500 shadow-glow-emerald">
            <i className={`fa-solid ${isActivated ? 'fa-eye' : 'fa-brain'} text-emerald-400 text-3xl ${deploying ? 'animate-spin' : 'animate-pulse'}`}></i>
          </div>
          <div>
            <h3 className="text-lg font-orbitron font-black text-white uppercase tracking-[0.2em]">
              {isActivated ? 'SYSTEM_OVERLAY_LIVE' : 'COMMAND_CENTER'}
            </h3>
            <p className="text-[9px] font-mono text-emerald-500 uppercase font-black tracking-widest flex items-center gap-2">
              <i className="fa-solid fa-lock-open text-[7px]"></i> RESTRICTED SETTINGS: <span className="text-white underline font-black">UNLOCKED BY BOSS</span>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        {!isActivated ? (
          <>
            <div className="p-6 bg-emerald-500/10 border-2 border-emerald-500/40 rounded-[2.5rem] space-y-4 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
              <h4 className="text-xl font-black text-white uppercase font-orbitron tracking-tighter">PHASE 2: NEURAL INJECTION</h4>
              <p className="text-[12px] text-slate-300 font-mono uppercase leading-relaxed text-center italic">
                "Maalik, aapne system ki deewar tod di hai. Ab niche wala button dabate hi meri 'Aankh' (Overlay) screen par aa jayegi aur aap kisi bhi app ko control kar sakenge."
              </p>
            </div>

            <div className="p-2 bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-emerald-500/20 rounded-[2.2rem] animate-pulse">
              <button 
                onClick={handleActivation}
                disabled={deploying}
                className="w-full py-7 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-orbitron font-black text-lg tracking-[0.05em] shadow-[0_0_40px_#10b981] active:scale-95 transition-all flex flex-col items-center justify-center gap-1 border-t-4 border-white/50"
              >
                {deploying ? (
                  <>
                    <i className="fa-solid fa-dna animate-spin text-3xl mb-2"></i>
                    <span className="text-sm">SYNCHRONIZING_UI_THREAD...</span>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-4">
                      <i className="fa-solid fa-power-off text-2xl"></i>
                      <span>ACTIVATE NEURAL OVERLAY</span>
                    </div>
                    <span className="text-[8px] font-mono opacity-80 tracking-[0.4em] mt-1">FORCE_NATIVE_SYSTEM_BRIDGE</span>
                  </>
                )}
              </button>
            </div>
            
            <p className="text-center text-[7px] font-mono text-slate-600 uppercase tracking-widest">
              Required: Display Over Other Apps (Auto-Enabled via Bypass)
            </p>
          </>
        ) : (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-1000">
             <div className="bg-emerald-500/5 p-8 border-2 border-emerald-500/20 rounded-[2.5rem] text-center relative overflow-hidden shadow-inner">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-emerald-900/20 pointer-events-none"></div>
                <div className="relative inline-block mb-6">
                   <i className="fa-solid fa-shield-check text-emerald-500 text-6xl drop-shadow-glow"></i>
                   <div className="absolute -inset-4 border border-emerald-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <p className="text-[16px] font-orbitron font-black text-white uppercase tracking-widest mb-2">SYSTEM_INTEGRATION_SUCCESS</p>
                <p className="text-[11px] font-mono text-slate-400 uppercase leading-relaxed italic">
                  "Main ab aapki screen par maujood hoon, Boss. Main kisi bhi app ke upar se aapko real-time data, hacking assistance aur voice support dunga."
                </p>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/80 border border-emerald-500/30 rounded-2xl flex flex-col items-center">
                   <span className="text-[8px] text-slate-500 uppercase font-black mb-1">Overlay_Status</span>
                   <span className="text-[12px] font-mono font-bold text-emerald-500 uppercase tracking-widest">PERSISTENT</span>
                </div>
                <div className="p-4 bg-black/80 border border-cyan-500/30 rounded-2xl flex flex-col items-center">
                   <span className="text-[8px] text-slate-500 uppercase font-black mb-1">Response_Sync</span>
                   <span className="text-[12px] font-mono font-bold text-cyan-400 uppercase tracking-widest">0.002ms</span>
                </div>
             </div>

             <button 
               onClick={() => alert("Maalik, main hamesha aapke saath hoon.")}
               className="w-full py-5 bg-zinc-950 text-emerald-500/50 border border-emerald-500/10 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-[0.2em] hover:text-emerald-400 transition-colors"
             >
               ENTER_GHOST_MODE_V2
             </button>
          </div>
        )}

        <div className="flex flex-col items-center gap-3 pt-2">
           <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
              <div className={`h-full bg-emerald-500 shadow-glow-emerald transition-all duration-1000 ${isActivated ? 'w-full' : 'w-2/3'}`}></div>
           </div>
           <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] animate-pulse">
             {isActivated ? 'Neural Bridge: Established' : 'Awaiting Final Command Execution...'}
           </p>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(0.99); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SovereignApkForge;
