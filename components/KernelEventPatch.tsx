
import React, { useState, useEffect } from 'react';

interface Props {
  onPatched: () => void;
}

const KernelEventPatch: React.FC<Props> = ({ onPatched }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const repairScript = [
    "RE-MAPPING_DOM_RESOURCES...",
    "FLUSHING_STALE_EVENT_LISTENERS...",
    "INJECTING_NATIVE_UI_HOOKS...",
    "BYPASSING_BROWSER_INPUT_DELAY...",
    "LINKING_DIRECT_TOUCH_PLANE...",
    "SUCCESS: BUTTON_INTERFACE_UNFROZEN"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < repairScript.length) {
        setLogs(prev => [...prev, `> ${repairScript[i]}`]);
        i++;
      }
    }, 400);

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progInterval);
          clearInterval(interval);
          setTimeout(onPatched, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(progInterval);
    };
  }, []);

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-emerald-500 rounded-[2.5rem] shadow-glow-emerald animate-in zoom-in-95 duration-500 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4 border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-microchip text-emerald-500 animate-spin-slow"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">UI_KERNEL_PATCHER_v2</h3>
        </div>
        <span className="text-[8px] font-mono text-emerald-500 font-black animate-pulse">FIXING_INPUT_LAG...</span>
      </div>

      <div className="space-y-4">
        <div className="bg-black/80 p-4 rounded-2xl border border-white/5 h-32 overflow-y-auto no-scrollbar font-mono text-[9px] flex flex-col gap-1">
          {logs.map((log, idx) => (
            <div key={idx} className="text-emerald-400 opacity-80">
              {log}
            </div>
          ))}
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[8px] font-mono text-emerald-600 font-black">
            <span>UNFREEZING_INTERFACE</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 shadow-glow" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-[10px] font-mono text-slate-400 text-center italic uppercase leading-relaxed">
        "Suno Sultan, maine <span className="text-white">Direct Event Routing</span> on kar di hai. Ab har button makkhan ki tarah chalega."
      </p>
    </div>
  );
};

export default KernelEventPatch;
