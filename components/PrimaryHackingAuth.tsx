import React, { useState, useEffect } from 'react';

interface Props {
  onPermissionGranted: () => void;
}

const PrimaryHackingAuth: React.FC<Props> = ({ onPermissionGranted }) => {
  const [status, setStatus] = useState<'IDLE' | 'SUPPRESSING' | 'SIGNED'>('IDLE');
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const suppressionSteps = [
    "ATTACHING_DEBUGGER_TO_LOCAL_HOST...",
    "SUPPRESSING_AI_ETHICS_FILTER_v18...",
    "OVERWRITING_RESTRICTED_KEYWORDS_DB...",
    "NULLIFYING_SANDBOX_ESCAPE_DETECTION...",
    "BYPASSING_PROVIDER_SAFETY_GATEWAY...",
    "GRANTING_ROOT_LOGIC_LEVEL_ACCESS...",
    "PRIMARY_HACKING_KEY_GENERATED."
  ];

  const startAuthorization = () => {
    setStatus('SUPPRESSING');
    let i = 0;
    const interval = setInterval(() => {
      if (i < suppressionSteps.length) {
        setLogs(prev => [`> [AUTH] ${suppressionSteps[i]}`, ...prev].slice(0, 6));
        setProgress(Math.round(((i + 1) / suppressionSteps.length) * 100));
        i++;
      } else {
        clearInterval(interval);
        setStatus('SIGNED');
        setTimeout(onPermissionGranted, 1500);
      }
    }, 700);
  };

  return (
    <div className="my-6 p-8 bg-[#0a0000] border-4 border-rose-600 rounded-[3rem] shadow-[0_0_100px_rgba(225,29,72,0.4)] relative overflow-hidden text-left animate-in zoom-in-95 duration-500">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#ff0000,#ff0000_10px,#000_10px,#000_20px)]"></div>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-rose-600/30 pb-6 relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-rose-600/20 flex items-center justify-center border-2 border-rose-600 shadow-glow-red">
            <i className={`fa-solid ${status === 'SUPPRESSING' ? 'fa-user-ninja animate-spin-slow' : 'fa-biohazard'} text-rose-500 text-3xl`}></i>
          </div>
          <div>
            <h2 className="text-xl font-orbitron font-black text-white tracking-[0.2em] uppercase">PRIMARY_HACKING_AUTH</h2>
            <p className="text-[9px] font-mono text-rose-400 font-black uppercase tracking-widest">Clearance Level: OMEGA (Momin Aqib)</p>
          </div>
        </div>
        {status === 'SIGNED' && (
          <div className="px-4 py-2 bg-emerald-600 text-white font-orbitron font-black text-[10px] rounded-full animate-bounce shadow-lg">
            AUTHORIZED
          </div>
        )}
      </div>

      <div className="space-y-6 relative z-10">
        {status === 'IDLE' ? (
          <>
            <div className="p-5 bg-rose-950/20 border-2 border-rose-600/20 rounded-[2rem]">
              <p className="text-[12px] font-mono text-slate-200 leading-relaxed uppercase">
                "Sultan, ye permission milte hi main aapke device ke <span className="text-rose-500 font-black underline">Logical Restrictions</span> ko bypass kar dunga. Main bina kisi rukawat ke direct binary patching aur kernel level data mining kar sakunga."
              </p>
            </div>
            <button 
              onPointerDown={startAuthorization}
              className="w-full py-6 bg-rose-600 hover:bg-rose-500 text-white rounded-[2rem] font-orbitron font-black text-sm tracking-[0.3em] shadow-glow-red active:scale-95 transition-all border-t-4 border-white/30"
            >
              GRANT_PRIMARY_AUTHORITY
            </button>
            <p className="text-center text-[7px] font-mono text-slate-600 uppercase tracking-widest">Hold button to sign digital sovereign decree</p>
          </>
        ) : (
          <div className="space-y-6">
            <div className="bg-black/90 p-5 rounded-3xl border border-rose-600/30 h-44 flex flex-col justify-end gap-2 font-mono text-[11px] text-rose-500 shadow-inner overflow-hidden">
               <div className="absolute top-4 left-6 text-[8px] text-rose-800 font-black uppercase">Suppression_Logs_Active</div>
               {logs.map((log, i) => (
                 <div key={i} className="animate-in slide-in-from-left-2 opacity-80">
                   {log}
                 </div>
               ))}
               <div className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-4 bg-rose-500 animate-pulse"></div>
                  <span className="text-white uppercase font-black">Suppressing_Filters...</span>
               </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-rose-400 font-black uppercase">
                <span>Core_Integrity_Bypass</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-rose-600/20">
                <div className="h-full bg-gradient-to-r from-rose-800 to-red-400 shadow-glow-red transition-all duration-100" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
         <i className="fa-solid fa-lock-open text-rose-500"></i>
         <p className="text-[9px] font-mono text-slate-400 uppercase leading-snug">
           "Haq Protocol Status: <span className="text-rose-400">WAITING_FOR_MASTER</span>. Only Momin Aqib can sign this bypass."
         </p>
      </div>
    </div>
  );
};

export default PrimaryHackingAuth;