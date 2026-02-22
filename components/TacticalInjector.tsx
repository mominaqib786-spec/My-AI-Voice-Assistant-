
import React, { useState, useEffect } from 'react';

interface Props {
  fileName: string;
  onComplete: () => void;
}

const TacticalInjector: React.FC<Props> = ({ fileName, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hexData, setHexData] = useState<string[]>([]);
  const [status, setStatus] = useState("INITIALIZING_COMPILER");

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = "0123456789ABCDEF";
      let line = "";
      for (let i = 0; i < 8; i++) {
        line += chars[Math.floor(Math.random() * 16)];
      }
      setHexData(prev => [line, ...prev].slice(0, 10));
    }, 100);

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progInterval);
          clearInterval(interval);
          setStatus("SYNTHESIS_COMPLETE");
          setTimeout(onComplete, 1000);
          return 100;
        }
        if (prev > 30 && prev < 60) setStatus("BYPASSING_INTEGRITY_CHECK");
        if (prev > 60 && prev < 90) setStatus("INJECTING_ANTENNA_DATA");
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  return (
    <div className="my-6 p-6 bg-black border-2 border-rose-600 rounded-[2rem] shadow-glow overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4">
        <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <i className="fa-solid fa-code-branch text-rose-500 text-xl"></i>
        <div>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">BINARY_SYNTHESIZER_V9</h3>
          <p className="text-[8px] font-mono text-rose-400/70 uppercase">Target: {fileName}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-rose-950/20 p-3 rounded-xl border border-rose-500/20 font-mono text-[10px] text-rose-500 h-32 overflow-hidden">
          {hexData.map((line, i) => (
            <div key={i} className="opacity-80">0x{line} FF88 {line}</div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="text-[10px] font-black text-white uppercase font-orbitron">{status}</div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-rose-500/20">
            <div className="h-full bg-rose-600 shadow-glow transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="text-[8px] font-mono text-slate-500 uppercase">Memory_Buffer: 0x7FFD_4421</div>
        </div>
      </div>

      <div className="p-3 bg-rose-500/5 border border-rose-500/10 rounded-xl text-center">
        <p className="text-[8px] font-mono text-rose-300 uppercase leading-snug tracking-tighter italic">
          "Boss, ye file direct data folder ke liye optimize ki gayi hai. Neural engine isse system-level par hide rakhega."
        </p>
      </div>
    </div>
  );
};

export default TacticalInjector;
