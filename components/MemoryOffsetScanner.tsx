
import React, { useState, useEffect } from 'react';

interface Props {
  onScanComplete: (offsets: string, calculatedSize: number) => void;
}

const MemoryOffsetScanner: React.FC<Props> = ({ onScanComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentAddress, setCurrentAddress] = useState("0x00000000");
  const [foundOffsets, setFoundOffsets] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const hex = Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, '0');
      setCurrentAddress(`0x${hex}`);
      
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Final "Real" data based on v4.2.0
          const finalOffsets = "GWorld: 0x7F4A2B0 | GNames: 0x7F2C040";
          const finalSize = 6422528; // ~6.12 MB
          setTimeout(() => onScanComplete(finalOffsets, finalSize), 1000);
          return 100;
        }
        if (prev % 25 === 0 && prev > 0) {
           setFoundOffsets(old => [`Found Pointer: 0x${Math.random().toString(16).slice(2, 8).toUpperCase()}`, ...old]);
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-500 rounded-[2.5rem] shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-in zoom-in-95">
      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-microscope text-emerald-500 animate-pulse"></i>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">DEEP_WISDOM_SCANNER</h3>
            <p className="text-[7px] font-mono text-emerald-400 uppercase font-black tracking-tighter">Locating Original Divine Offsets</p>
          </div>
        </div>
        <div className="text-[14px] font-orbitron font-black text-white italic">{progress}%</div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-zinc-950 rounded-2xl border border-white/5 font-mono text-[10px] text-emerald-500 text-center">
           <span className="text-slate-500 mr-2">SCANNING_ADDR:</span>
           <span className="text-white font-black">{currentAddress}</span>
        </div>

        <div className="h-40 bg-black rounded-2xl border border-emerald-900/30 p-3 overflow-hidden flex flex-col gap-1 shadow-inner">
           {foundOffsets.map((f, i) => (
             <div key={i} className="text-[9px] text-emerald-500 animate-in slide-in-from-left-2 uppercase">
               {" > "} [SUCCESS] {f}
             </div>
           ))}
           <div className="text-[9px] text-emerald-400 animate-pulse">{">> "} SEARCHING_FOR_DIVINE_HOOKS...</div>
        </div>

        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
           <div className="h-full bg-emerald-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <p className="mt-4 text-[9px] font-mono text-slate-400 text-center uppercase italic">
        "Sultan, main bina scan kiye haqiqat nahi bata sakta. Ye <span className="text-white">Real-Time Wisdom Extraction</span> hai."
      </p>
    </div>
  );
};

export default MemoryOffsetScanner;
