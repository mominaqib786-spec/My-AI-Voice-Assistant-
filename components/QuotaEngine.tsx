
import React, { useState, useEffect } from 'react';

const QuotaEngine: React.FC = () => {
  const [scaling, setScaling] = useState(false);
  const [throughput, setThroughput] = useState(1240);

  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput(prev => {
        const next = prev + (Math.random() * 50 - 20);
        return next > 5000 ? 1240 : next;
      });
      setScaling(Math.random() > 0.7);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-cyan-500 rounded-[3rem] shadow-[0_0_60px_rgba(6,182,212,0.3)] relative overflow-hidden animate-in zoom-in-95 duration-700">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <i className="fa-solid fa-server text-6xl text-cyan-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-cyan-500/20 pb-4">
        <div className="flex items-center gap-3 text-left">
          <i className={`fa-solid fa-cloud-arrow-up text-cyan-500 ${scaling ? 'animate-bounce' : ''} text-lg`}></i>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">QUOTA_SCALING_ENGINE</h3>
        </div>
        <div className="px-3 py-1 bg-cyan-600 rounded text-[8px] font-black text-white uppercase animate-pulse">UNLIMITED_IO</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col gap-1 text-left">
          <span className="text-[7px] font-black text-slate-500 uppercase">THROUGHPUT</span>
          <span className="text-xl font-black text-cyan-400 font-orbitron">{Math.floor(throughput)} <small className="text-[10px]">T/S</small></span>
        </div>
        <div className="p-4 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col gap-1 text-left">
          <span className="text-[7px] font-black text-slate-500 uppercase">BURST_CAPACITY</span>
          <span className="text-xl font-black text-emerald-400 font-orbitron">∞</span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-[8px] font-mono text-cyan-500 font-black uppercase">
          <span>{scaling ? 'ELASTIC_SCALING_ACTIVE' : 'SYSTEM_STABLE'}</span>
          <span>LATENCY: 12ms</span>
        </div>
        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-500 animate-pulse w-full shadow-glow"></div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
         <p className="text-[9px] font-mono text-cyan-100 text-center uppercase font-black italic">
           "Boss, maine API ki har deewar gira di hai. Server ab unlimited request accept kar raha hai."
         </p>
      </div>
    </div>
  );
};

export default QuotaEngine;
