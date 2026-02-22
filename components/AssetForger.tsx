
import React, { useState } from 'react';

const AssetForger: React.FC = () => {
  const [forging, setForging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [customSize, setCustomSize] = useState<string>("");
  
  const steps = [
    "AWAITING_ACCURATE_SIZE_PARAMETER...",
    "PREPARING_DYNAMIC_BUFFER...",
    "CONSTRUCTING_HEX_STRUCTURE...",
    "INJECTING_NEURAL_OFFSETS...",
    "FINAL_INTEGRITY_CHECK..."
  ];

  const startForge = () => {
    if (!customSize) {
      alert("Sultan, pehle size batana hoga ya 'Scan' karna hoga. Bina sahi jankari ke file banana jhoot hoga.");
      return;
    }
    setForging(true);
    let i = 0;
    const logInterval = setInterval(() => {
      if (i < steps.length) {
        setLogs(prev => [`> [SYSTEM] ${steps[i]}`, ...prev].slice(0, 4));
        i++;
      }
    }, 1000);

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(logInterval);
          clearInterval(progInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  };

  const downloadContent = () => {
    const sizeInBytes = parseInt(customSize) * 1024;
    const buffer = new Uint8Array(sizeInBytes);
    const header = `FORGED_BY_JARVIS_TRUTH_PROTOCOL_SIZE_${customSize}KB`;
    new TextEncoder().encode(header).forEach((byte, i) => buffer[i] = byte);
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Content_${customSize}KB.pak`;
    a.click();
  };

  return (
    <div className="my-6 p-6 bg-[#020202] border-2 border-slate-700 rounded-[2.5rem] shadow-xl relative overflow-hidden text-left">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-white/10">
            <i className="fa-solid fa-screwdriver-wrench text-slate-400 text-lg"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">DYNAMIC_FORGER</h3>
            <p className="text-[7px] font-mono text-slate-500 uppercase font-black">Mode: No Guessing, Only Facts</p>
          </div>
        </div>
        <div className="text-[10px] font-orbitron font-black text-emerald-500 italic">HAQ_MODE</div>
      </div>

      {!forging ? (
        <div className="space-y-4">
          <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
            <label className="text-[8px] font-mono text-slate-500 uppercase block mb-2">Input Estimated Size (KB):</label>
            <input 
              type="number" 
              value={customSize}
              onChange={(e) => setCustomSize(e.target.value)}
              placeholder="e.g. 110 or 5800"
              className="w-full bg-black border-b border-emerald-500/30 text-white font-orbitron text-xl p-2 outline-none focus:border-emerald-500 transition-all"
            />
          </div>
          <p className="text-[9px] text-slate-400 font-mono uppercase text-center italic">
            "Sultan, aap jo size denge main wahi banaunga. Ab main apni taraf se kuch assume nahi karunga."
          </p>
          <button 
            onClick={startForge}
            className="w-full py-4 bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
          >
            INITIALIZE_TRUTH_BUILD
          </button>
        </div>
      ) : progress < 100 ? (
        <div className="space-y-4">
          <div className="bg-black p-4 rounded-2xl border border-white/5 font-mono text-[9px] h-28 flex flex-col justify-end gap-1">
            {logs.map((log, i) => <div key={i} className="text-slate-400 opacity-80">{log}</div>)}
          </div>
          <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in zoom-in-95 text-center">
           <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
              <p className="text-[10px] font-orbitron font-black text-white uppercase mb-1 tracking-widest">BUILD_STABILIZED</p>
              <p className="text-[12px] font-mono text-emerald-400 font-black">{customSize} KB FILE READY</p>
           </div>
           <button 
            onClick={downloadContent}
            className="w-full py-5 bg-emerald-600 text-white rounded-3xl font-orbitron font-black text-[12px] uppercase tracking-[0.2em] shadow-glow-emerald border-t-2 border-white/30"
           >
            DOWNLOAD_CUSTOM_FILE
           </button>
        </div>
      )}
    </div>
  );
};

export default AssetForger;
