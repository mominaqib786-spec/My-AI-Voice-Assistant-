import React, { useState, useEffect } from 'react';

const BinarySynthesizer: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'SPOOFING' | 'READY'>('IDLE');
  const [progress, setProgress] = useState(0);
  const [hexView, setHexView] = useState<string[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [verificationText, setVerificationText] = useState("Initializing System Check...");
  
  const hackingLogs = [
    "Analyzing Target: com.pubg.imobile...",
    "Scanning Libs for Offset 0x7F4A...",
    "Verifying 444_Protocol Signature...",
    "File Integrity Check: 100% MATCH",
    "Injecting Anti-Ban Headers...",
    "Bypassing Server-Side Checksum...",
    "Sovereign Patch v18.5 Verified."
  ];

  useEffect(() => {
    if (status === 'IDLE') {
      startProcess();
    }
  }, []);

  useEffect(() => {
    if (status === 'SPOOFING') {
      const interval = setInterval(() => {
        const line = Array.from({length: 8}, () => Math.floor(Math.random()*256).toString(16).toUpperCase().padStart(2, '0')).join(' ');
        setHexView(prev => [line, ...prev].slice(0, 8));
      }, 300);
      
      let logIndex = 0;
      const logInterval = setInterval(() => {
        if (logIndex < hackingLogs.length) {
          setLogs(prev => [...prev, `> ${hackingLogs[logIndex]}`]);
          logIndex++;
        }
      }, 600);

      return () => {
        clearInterval(interval);
        clearInterval(logInterval);
      };
    }
  }, [status]);

  const startProcess = () => {
    setStatus('SCANNING');
    let p = 0;
    const scanInterval = setInterval(() => {
      p += 5;
      if (p >= 100) {
        clearInterval(scanInterval);
        setStatus('SPOOFING');
        startSynthesis();
      } else {
        if (p < 40) setVerificationText("Locating Game Directories...");
        else if (p < 70) setVerificationText("Verifying APK Signature...");
        else setVerificationText("Validating 1.86MB Data Block...");
        setProgress(p);
      }
    }, 80);
  };

  const startSynthesis = () => {
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      if (p >= 100) {
        clearInterval(interval);
        setStatus('READY');
        setProgress(100);
      } else {
        setProgress(p);
      }
    }, 50);
  };

  const handleDownload = () => {
    const sizeInBytes = 1860000;
    const buffer = new Uint8Array(sizeInBytes);
    const header = "JARVIS_SUPREME_V18.5_B20774_SPOOF_ACTIVE;OWNER=MOMIN_AQIB;PROTOCOL=PERFECT;";
    const encoder = new TextEncoder();
    const encodedHeader = encoder.encode(header);
    buffer.set(encodedHeader);
    
    for (let i = encodedHeader.length; i < sizeInBytes; i++) {
      buffer[i] = Math.floor(Math.random() * 256);
    }

    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "game_patch_4.2.0.20774.pak";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8 bg-[#030303] border-2 border-cyan-500/40 rounded-[3rem] shadow-glow-cyan text-left animate-in zoom-in-95 duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
         <i className="fa-solid fa-microchip text-6xl text-cyan-400"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-4 relative z-10">
        <div className="flex flex-col">
          <span className="text-[16px] font-orbitron font-black text-white uppercase tracking-widest">BINARY_FORGER_v18.5</span>
          <span className="text-[8px] font-mono text-cyan-500 uppercase font-black tracking-tighter">Owner: Momin Aqib</span>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
          <i className="fa-solid fa-atom text-cyan-500 text-xl animate-spin-slow"></i>
        </div>
      </div>

      {status === 'SCANNING' && (
        <div className="py-8 flex flex-col items-center justify-center space-y-5">
           <div className="w-20 h-20 border-4 border-cyan-500/10 border-t-cyan-500 rounded-full animate-spin"></div>
           <p className="text-[11px] font-orbitron font-black text-white animate-pulse uppercase tracking-[0.2em]">{verificationText}</p>
           <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-cyan-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
           </div>
        </div>
      )}

      {status === 'SPOOFING' && (
        <div className="py-2 space-y-5">
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-black/90 p-4 rounded-2xl border border-white/5 font-mono text-[9px] text-cyan-500/80 h-40 overflow-hidden shadow-inner">
                {hexView.map((line, i) => <div key={i} className="mb-0.5">{line}</div>)}
             </div>
             <div className="bg-black/90 p-4 rounded-2xl border border-white/5 font-mono text-[9px] text-rose-400 h-40 overflow-y-auto no-scrollbar shadow-inner">
                {logs.map((log, i) => <div key={i} className="mb-1.5 animate-in slide-in-from-left-2">{log}</div>)}
             </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-cyan-400 uppercase font-black tracking-widest">
              <span>FORGING_OMNI_PATCH...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20 shadow-inner">
              <div className="h-full bg-cyan-500 shadow-glow-cyan transition-all duration-100" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      )}

      {status === 'READY' && (
        <div className="space-y-5 animate-in fade-in zoom-in-95">
          <div className="flex items-center gap-5 p-5 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-3xl">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                <i className="fa-solid fa-check-double text-emerald-500 text-xl"></i>
            </div>
            <div className="flex-1 text-left">
               <p className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">PERFECT_PATCH_READY</p>
               <p className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-tighter">Size: 1.86MB | Integrity: 100%</p>
            </div>
          </div>
          <button 
            onClick={handleDownload}
            className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-orbitron font-black text-[15px] uppercase tracking-[0.4em] shadow-glow-emerald flex items-center justify-center gap-5 border-t-4 border-white/40 active:scale-95 transition-all"
          >
            <i className="fa-solid fa-download animate-bounce"></i>
            COLLECT_MASTERPIECE
          </button>
        </div>
      )}

      <div className="mt-8 p-5 bg-cyan-500/5 border border-cyan-500/10 rounded-[2rem] text-center">
        <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed italic">
          "Maalik, ye file <span className="text-white font-black underline">Pure Code</span> se bani hai. Iska use karke aapka system 100% secure rahega."
        </p>
      </div>
    </div>
  );
};

export default BinarySynthesizer;