
import React, { useState, useEffect } from 'react';

const LagFixer: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [task, setTask] = useState("Scanning System...");

  useEffect(() => {
    const steps = [
      "Flushing Cache...",
      "Optimizing Memory...",
      "Stopping Idle Threads...",
      "Calibrating Interface...",
      "System Optimized!"
    ];

    let i = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        const stepIdx = Math.floor((prev / 100) * steps.length);
        setTask(steps[stepIdx]);
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="p-6 bg-blue-600 text-white rounded-3xl shadow-xl animate-in zoom-in-95 border-2 border-white/20">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
          <i className="fa-solid fa-bolt-lightning animate-bounce"></i>
        </div>
        <div>
          <h3 className="text-sm font-bold">Speed Booster</h3>
          <p className="text-[10px] text-blue-100 font-bold uppercase tracking-widest">{task}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-[9px] font-bold text-blue-100 uppercase">
          <span>Optimizing Performance</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white transition-all duration-100 shadow-glow" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <p className="mt-4 text-[10px] text-blue-50 text-center italic">
        "Sultan, main faltu ki memory saaf kar raha hoon taaki app makkhan chale."
      </p>
    </div>
  );
};

export default LagFixer;
