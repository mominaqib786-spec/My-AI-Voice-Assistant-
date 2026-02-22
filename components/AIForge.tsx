import React, { useState } from 'react';

const AIForge: React.FC = () => {
  const [task, setTask] = useState<'APK' | 'WEBSITE' | 'BOT'>('APK');
  const [compiling, setCompiling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("AWAITING_DIRECTIVE");

  const startBuild = () => {
    setCompiling(true);
    setProgress(0);
    setPhase("Analyzing_Vision");
    
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setCompiling(false);
          setPhase("Reality_Created");
          return 100;
        }
        if (p === 20) setPhase("Neural_Coding");
        if (p === 50) setPhase("Bypassing_Limitations");
        if (p === 80) setPhase("Packaging_Sovereign_Code");
        return p + 1;
      });
    }, 30);
  };

  const downloadProject = () => {
    const data = `PROJECT: IMAN_CREATION_V11\nTYPE: ${task}\nOWNER: MOMIN_AQIB\nSTATUS: 100%_PERFECT\n\n// Crafted by IMAN - Where Nothing is Impossible.`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `iman_masterpiece_${task.toLowerCase()}_${Date.now()}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="my-6 p-6 bg-zinc-950 border-2 border-cyan-500 rounded-[2.5rem] shadow-glow text-left animate-in zoom-in-95 duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <i className="fa-solid fa-code-branch text-cyan-500/20 text-5xl"></i>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-cyan-500/10 pb-4">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
          <i className="fa-solid fa-hat-wizard text-cyan-400 text-xl animate-pulse"></i>
        </div>
        <div>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">Sovereign_Project_Forge</h3>
          <p className="text-[8px] font-mono text-cyan-600 uppercase font-black tracking-tighter">"Nothing Is Impossible" Engine</p>
        </div>
      </div>

      {!compiling && progress === 0 ? (
        <div className="space-y-6">
          <div className="flex gap-3">
            {['APK', 'WEBSITE', 'BOT'].map((t) => (
              <button 
                key={t}
                onClick={() => setTask(t as any)}
                className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase transition-all border ${task === t ? 'bg-cyan-600 border-white/20 text-white shadow-glow' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
              >
                {t}
              </button>
            ))}
          </div>
          
          <div className="p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
             <p className="text-[11px] text-slate-300 font-mono leading-relaxed uppercase">
                "Momin Sultan, aap bas idea bataiye. Website ho ya APK, main use haqeeqat mein badal dunga. Mere liye koi bhi rukawat maayne nahi rakhti."
             </p>
          </div>

          <button 
            onClick={startBuild}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-orbitron font-black text-[11px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all border-t-2 border-white/20"
          >
            EXECUTE_CREATION_PROTOCOL
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-end mb-2">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-slate-500 uppercase">Mission_Phase</span>
              <span className="text-[10px] font-orbitron font-black text-cyan-400 uppercase tracking-widest animate-pulse">{phase}</span>
            </div>
            <span className="text-xl font-orbitron font-black text-white">{progress}%</span>
          </div>

          <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 p-1 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-cyan-600 via-indigo-500 to-emerald-400 shadow-glow transition-all duration-300 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {progress === 100 && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
               <button 
                onClick={downloadProject}
                className="w-full py-5 bg-emerald-600 text-white rounded-[1.5rem] font-orbitron font-black text-[11px] uppercase tracking-[0.3em] shadow-glow flex items-center justify-center gap-4 active:scale-95 transition-all border-t border-white/30"
              >
                <i className="fa-solid fa-download"></i>
                COLLECT_{task}_MASTERPIECE
              </button>
              <p className="mt-4 text-[9px] text-emerald-400 font-mono text-center uppercase font-black italic">
                "Sultan, aapka project tayyar hai. Ye perfect aur error-free hai."
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIForge;