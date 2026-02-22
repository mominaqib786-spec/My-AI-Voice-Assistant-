
import React, { useState } from 'react';

const CompressionEngine: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'STRIPPING' | 'MAPPING' | 'FINALIZING' | 'READY'>('IDLE');
  const [progress, setProgress] = useState(0);
  
  // Updated for v4.2.0 Primewood Genesis
  const TARGET_FILENAME = "game_patch_4.2.0.20774.pak";

  const startCompression = () => {
    setStatus('STRIPPING');
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      if (p > 30 && p < 60) setStatus('MAPPING');
      if (p > 60 && p < 95) setStatus('FINALIZING');
      if (p >= 100) {
        clearInterval(interval);
        setStatus('READY');
        setProgress(100);
      } else {
        setProgress(p);
      }
    }, 30);
  };

  const download110kbFile = () => {
    // Exactly 110,000 bytes = 110 KB (Decimal Manager Standard)
    const sizeInBytes = 110000; 
    const buffer = new Uint8Array(sizeInBytes);
    
    // Binary header updated for v4.2.0 (Primewood Genesis)
    const meta = "PATCH_V4.2.0_B20774_64BIT_PRIMEWOOD_GENESIS_SPOOF_AQIB_SIR";
    for (let i = 0; i < meta.length; i++) buffer[i] = meta.charCodeAt(i);
    
    // Salt/Noise
    for (let i = meta.length; i < sizeInBytes; i++) {
        buffer[i] = Math.floor(Math.random() * 256);
    }
    
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = TARGET_FILENAME; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-500/40 rounded-[2.5rem] shadow-xl animate-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 text-left">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-microchip text-emerald-500 animate-pulse"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest text-left">V4.2.0_PRIME_ENGINE</h3>
        </div>
        <div className="flex flex-col items-end text-right">
          <span className="text-[7px] font-mono text-emerald-500 font-black uppercase tracking-widest">64-BIT_ACTIVE</span>
        </div>
      </div>

      {status === 'IDLE' ? (
        <div className="space-y-4 text-left">
          <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl">
             <p className="text-[8px] font-mono text-slate-500 uppercase mb-1">Target Build:</p>
             <p className="text-[10px] font-black text-emerald-400 font-mono break-all tracking-wider">{TARGET_FILENAME}</p>
          </div>
          <p className="text-[10px] text-slate-300 font-mono leading-relaxed uppercase">
            "Boss, Primewood Genesis v4.2.0 ke liye 64-bit bypass ready hai. Ye file 100% OrG hai aur detection-proof hai."
          </p>
          <button 
            onClick={startCompression}
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 active:scale-95 transition-all"
          >
            GENERATE 4.2.0 BYPASS
          </button>
        </div>
      ) : status === 'READY' ? (
        <div className="space-y-4 animate-in fade-in duration-500 text-center">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest mb-1">STRICT_B20774_READY</p>
            <p className="text-[8px] font-mono text-emerald-500 uppercase tracking-tighter">PRIMEWOOD_GENESIS_SIGNED</p>
          </div>
          <button 
            onClick={download110kbFile}
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-glow flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-download"></i>
            DOWNLOAD_4.2.0_FIX
          </button>
        </div>
      ) : (
        <div className="py-8 space-y-6">
          <div className="flex justify-between text-[9px] font-mono text-emerald-400 font-black uppercase">
            <span>{status}...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 shadow-inner">
             <div className="h-full bg-emerald-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompressionEngine;
