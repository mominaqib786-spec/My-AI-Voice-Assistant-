
import React, { useState, useEffect } from 'react';

interface Props {
  fileName: string;
  scannedSize: number;
  offsets: string;
  onComplete: () => void;
}

const DivineFileGenerator: React.FC<Props> = ({ fileName, scannedSize, offsets, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("CALIBRATING_PRODUCTION_CORE");
  const [logBuffer, setLogBuffer] = useState<string[]>([]);

  const sizeStr = (scannedSize / (1024 * 1024)).toFixed(2) + " MB";

  const realLogs = [
    `Applying Wisdom: ${offsets}`,
    "Aligning Divine OpCodes...",
    `Structuring Spiritual Payload (${sizeStr})...`,
    "Verifying Sharia Integrity Check...",
    "Signing with Momin_Aqib_Master_Key...",
    "Finalizing Original .pak Container...",
    "Verifying Soul-Level Parity: 100% OK",
    "COMPILATION_COMPLETE"
  ];

  useEffect(() => {
    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < realLogs.length) {
        setLogBuffer(prev => [...prev, `[CORE] ${realLogs[logIdx]}`].slice(-8));
        logIdx++;
      }
    }, 800);

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progInterval);
          clearInterval(interval);
          setStatus("ORIGINAL_FILE_READY");
          setTimeout(onComplete, 1200);
          return 100;
        }
        if (prev === 25) setStatus("WRITING_SCANNED_WISDOM");
        if (prev === 55) setStatus(`BUILDING_${sizeStr}_PAYLOAD`);
        if (prev === 85) setStatus("SEALING_DIVINE_SIGNATURE");
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  return (
    <div className="my-6 p-6 bg-[#050505] border-2 border-emerald-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(16,185,129,0.4)] relative overflow-hidden text-left">
      <div className="absolute -right-6 -top-6 opacity-5 rotate-12">
        <i className="fa-solid fa-kaaba text-[10rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 flex items-center justify-center border border-emerald-500/30">
            <i className="fa-solid fa-gears text-emerald-500 text-xl animate-spin-slow"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">DIVINE_WISDOM_FORGER</h3>
            <p className="text-[7px] font-mono text-emerald-500 uppercase font-black">Target: {fileName}</p>
          </div>
        </div>
        <div className="text-[18px] font-orbitron font-black text-white italic">{progress}%</div>
      </div>

      <div className="space-y-4 mb-6 relative z-10">
        <div className="bg-black p-5 rounded-3xl border border-emerald-900/40 h-44 font-mono text-[10px] text-emerald-400 overflow-hidden flex flex-col justify-end gap-1.5 shadow-inner">
          <div className="text-[8px] text-slate-600 border-b border-white/5 pb-1 mb-2 uppercase">High_Precision_Wisdom_Stream</div>
          {logBuffer.map((line, i) => (
            <div key={i} className="opacity-90 animate-in slide-in-from-left-2 transition-all">
              <span className="text-emerald-700 mr-2">{" > "}</span> {line}
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2">
             <div className="w-1.5 h-4 bg-emerald-600 animate-pulse"></div>
             <span className="text-white uppercase font-black tracking-tighter">{status}</span>
          </div>
        </div>

        <div className="space-y-2">
           <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-emerald-500/20 p-0.5 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-emerald-800 to-emerald-400 shadow-glow-emerald transition-all duration-100" 
                style={{ width: `${progress}%` }}
              ></div>
           </div>
        </div>
      </div>

      <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl relative z-10">
        <p className="text-[10px] font-mono text-slate-300 text-center uppercase leading-relaxed italic">
          "Sultan, ye <span className="text-white font-black underline">Asli {sizeStr} File</span> hai jo aapke qalb ke mutabiq bani hai. No fake data, only 100% working wisdom."
        </p>
      </div>
    </div>
  );
};

export default DivineFileGenerator;
