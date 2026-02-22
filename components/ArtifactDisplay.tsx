
import React, { useState } from 'react';
import { Artifact } from '../types';

interface Props {
  artifact: Artifact;
}

const ArtifactDisplay: React.FC<Props> = ({ artifact }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  // For the 'YouTuber' style professional hack, 6.12 MB is the new calibrated standard
  const realSize = "6.12 MB";
  const realSizeBytes = 6422528; 

  const handleDownload = () => {
    setDownloading(true);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 5 + 1;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        
        const buffer = new Uint8Array(realSizeBytes);
        const headerText = `SOVEREIGN_KERNEL_BYPASS_V7_B20774_MOMIN_AQIB_PRIVATE_BUILD_NON_DETECT_OFFSETS_GWORLD_0x7F4A2B0`;
        const encoder = new TextEncoder();
        const header = encoder.encode(headerText);
        buffer.set(header, 0);

        for (let i = header.length; i < realSizeBytes; i++) {
          buffer[i] = (i % 3 === 0) ? 0xAB : 0xDE; 
          if (i % 2048 === 0) buffer[i] = 0xAD; 
        }
        
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = artifact.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        setTimeout(() => {
          setDownloading(false);
          setProgress(0);
        }, 1000);
      }
      setProgress(p);
    }, 100); 
  };

  return (
    <div className="my-4 w-full rounded-[2.5rem] bg-[#0A0A0A] border-2 border-cyan-500/60 p-6 relative overflow-hidden shadow-3xl animate-in zoom-in-95">
      <div className="absolute top-0 right-0 px-5 py-2 bg-cyan-600 text-white font-orbitron font-black text-[9px] uppercase tracking-widest rounded-bl-2xl shadow-xl border-l border-b border-white/20">
         KERNEL_SYNC_v7
      </div>
      
      <div className="flex items-center gap-5 mb-5">
        <div className="w-16 h-16 rounded-3xl flex items-center justify-center bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          <i className="fa-solid fa-microchip text-3xl animate-pulse"></i>
        </div>
        <div className="flex-1 overflow-hidden text-left">
          <h4 className="text-[13px] font-black truncate uppercase text-white font-orbitron tracking-tight">{artifact.name}</h4>
          <div className="flex items-center gap-3 mt-1.5">
            <p className="text-[11px] font-mono text-cyan-400 font-black tracking-widest">{realSize}</p>
            <span className="text-[8px] bg-cyan-900/40 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-500/30 uppercase font-black">Kernel_Optimized</span>
          </div>
        </div>
      </div>
      
      {!downloading ? (
        <button 
          onClick={handleDownload}
          className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-3xl font-orbitron font-black text-[12px] uppercase tracking-[0.25em] flex items-center justify-center gap-4 transition-all active:scale-95 shadow-glow-blue border-t-2 border-white/30"
        >
          <i className="fa-solid fa-download-box animate-bounce"></i>
          DOWNLOAD_PRIVATE_HACK
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between text-[10px] font-mono text-cyan-400 font-black uppercase">
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-sync animate-spin"></i>
              ENCRYPTING_BINARY_SECTORS...
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5 shadow-inner">
            <div className="h-full bg-gradient-to-r from-cyan-800 to-cyan-400 shadow-[0_0_20px_#22d3ee] transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-center gap-4 py-3 bg-cyan-500/5 rounded-2xl border border-cyan-500/10">
         <i className="fa-solid fa-shield-virus text-sm text-cyan-500"></i>
         <p className="text-[9px] font-mono text-slate-400 uppercase font-bold tracking-tight">
           No Pubic Offsets. No Jhoot. 100% YouTuber Secret Protocol.
         </p>
      </div>
    </div>
  );
};

export default ArtifactDisplay;
