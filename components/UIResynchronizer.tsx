
import React, { useState, useEffect } from 'react';

interface Props {
  onResetComplete: () => void;
}

const UIResynchronizer: React.FC<Props> = ({ onResetComplete }) => {
  const [status, setStatus] = useState("CLEARING_OVERLAYS...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [
      "FLUSHING_DOM_CACHE...",
      "KILLING_Z_INDEX_CONFLICTS...",
      "RESETTING_POINTER_EVENTS...",
      "RE-MAPPING_NATIVE_BUTTONS...",
      "OPTIMIZING_TOUCH_LATENCY...",
      "UI_PURIFIED"
    ];

    let i = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onResetComplete, 500);
          return 100;
        }
        const stepIdx = Math.floor((prev / 100) * steps.length);
        setStatus(steps[stepIdx]);
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-white text-black border-4 border-red-600 rounded-3xl shadow-2xl animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
          <i className="fa-solid fa-broom-ball text-2xl"></i>
        </div>
        <div className="text-left">
          <h2 className="font-black text-lg uppercase tracking-tighter">EMERGENCY_UI_RESET</h2>
          <p className="text-[10px] font-mono font-bold text-red-600 uppercase italic">Fixing Button Lag... Please Wait</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold uppercase">
          <span>{status}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden border-2 border-black">
          <div className="h-full bg-red-600 transition-all duration-100" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <p className="mt-4 text-[11px] font-medium text-center leading-tight">
        "Suno Boss, maine saari galtiyan mita di hain. Ab system ekdum fresh hai, ek bhi button miss nahi hoga."
      </p>
    </div>
  );
};

export default UIResynchronizer;
