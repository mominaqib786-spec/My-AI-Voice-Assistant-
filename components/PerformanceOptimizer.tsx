
import React, { useState, useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState({
    latency: 0,
    throughput: 0,
    stability: 100,
    activeCores: 8
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        latency: Math.floor(Math.random() * 15) + 5, // 5-20ms
        throughput: Math.floor(Math.random() * 50) + 450, // 450-500 tokens/sec
        stability: 99.9 + (Math.random() * 0.1),
        activeCores: Math.random() > 0.8 ? 12 : 8
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-black border-2 border-indigo-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-500 text-left relative overflow-hidden">
      <div className="absolute -right-4 -top-4 opacity-10">
        <i className="fa-solid fa-gauge-high text-[8rem] text-indigo-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-indigo-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/30">
            <i className="fa-solid fa-bolt-lightning text-indigo-400 animate-pulse"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">LATENCY_SHIELD_V2</h3>
            <p className="text-[7px] font-mono text-indigo-600 uppercase font-black">Neural Reflex Optimization</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[14px] font-black text-indigo-400 font-orbitron">{metrics.latency}ms</span>
          <span className="text-[7px] font-mono text-slate-500 uppercase font-black">PING_CORE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-zinc-900/50 rounded-2xl border border-white/5">
          <span className="text-[7px] text-slate-500 uppercase font-black block mb-1">Throughput</span>
          <span className="text-sm font-mono font-black text-emerald-400">{metrics.throughput} T/s</span>
        </div>
        <div className="p-4 bg-zinc-900/50 rounded-2xl border border-white/5">
          <span className="text-[7px] text-slate-500 uppercase font-black block mb-1">Stability</span>
          <span className="text-sm font-mono font-black text-cyan-400">{metrics.stability.toFixed(2)}%</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-[9px] font-mono text-indigo-400 font-black uppercase">
          <span>Optimizing Neural Pathways...</span>
          <span>MAX_SPEED</span>
        </div>
        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-indigo-500/20">
          <div className="h-full bg-indigo-500 shadow-glow animate-pulse w-full"></div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl flex items-center gap-4">
        <i className="fa-solid fa-rocket text-indigo-400 text-sm"></i>
        <p className="text-[9px] font-mono text-slate-300 uppercase leading-relaxed italic">
          "Boss, maine Gemini Flash engine activate kar diya hai. Ab mere responses light-speed par honge."
        </p>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;
