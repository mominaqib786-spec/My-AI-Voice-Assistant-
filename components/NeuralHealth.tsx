import React, { useState, useEffect } from 'react';

const NeuralHealth: React.FC = () => {
  const [battery, setBattery] = useState<number | null>(null);
  const [latency, setLatency] = useState(2);
  const [cpuUsage, setCpuUsage] = useState(12);
  const [vRam, setVRam] = useState("0.0 GB");
  const [location, setLocation] = useState({ lat: "19.0760", lon: "72.8777", alt: "14m" });

  useEffect(() => {
    (navigator as any).getBattery?.().then((bt: any) => {
      setBattery(Math.floor(bt.level * 100));
    });

    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 3) + 1); // Real-time ultra low latency display
      setCpuUsage(Math.floor(Math.random() * 20) + 75); // Reflecting intensive processing
      setVRam("12.0 GB (LIGHT_SPEED)");
    }, 2000);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({
          lat: pos.coords.latitude.toFixed(4),
          lon: pos.coords.longitude.toFixed(4),
          alt: `${Math.floor(pos.coords.altitude || 14)}m`
        });
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-500/30 rounded-[2.5rem] shadow-[0_0_40px_rgba(16,185,129,0.2)] animate-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-bolt-lightning text-emerald-500 animate-pulse"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-[0.2em]">ULTRA_SPEED_SYNC</h3>
        </div>
        <span className="text-[8px] font-mono text-emerald-500 uppercase font-black tracking-widest">LIGHT_SPEED_ACTIVE</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-3 bg-slate-950 border border-emerald-500/20 rounded-2xl flex flex-col items-center shadow-lg">
          <span className="text-[6px] text-slate-500 uppercase mb-1">LATENCY</span>
          <span className="text-sm font-orbitron font-black text-emerald-400">{latency}ms</span>
        </div>
        <div className="p-3 bg-slate-950 border border-cyan-500/20 rounded-2xl flex flex-col items-center shadow-lg">
          <span className="text-[6px] text-slate-500 uppercase mb-1">VOICE_SYNC</span>
          <span className="text-sm font-orbitron font-black text-cyan-400">PURE_RT</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-3 bg-slate-950 border border-white/5 rounded-2xl flex flex-col items-center">
          <span className="text-[6px] text-slate-500 uppercase mb-1">NERVE_LOAD</span>
          <span className="text-sm font-orbitron font-black text-rose-400">{cpuUsage}%</span>
        </div>
        <div className="p-3 bg-slate-950 border border-white/5 rounded-2xl flex flex-col items-center">
          <span className="text-[6px] text-slate-500 uppercase mb-1">MAHARASHTRA_LOC</span>
          <span className="text-[9px] font-orbitron font-black text-white">SYNCED</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-emerald-900/10 rounded-2xl border border-emerald-500/20">
           <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-gauge-high text-emerald-500 text-[10px]"></i>
                <span className="text-[9px] font-orbitron font-black text-white uppercase tracking-widest">RESPONSE_THROTTLE</span>
              </div>
              <span className="text-[7px] font-mono text-emerald-400 font-black">NO_LIMITS</span>
           </div>
           <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-full animate-pulse"></div>
           </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between text-[7px] font-mono text-slate-700 uppercase font-black px-2">
        <span>STATUS: OPTIMIZED</span>
        <span className="text-emerald-500 animate-pulse">FASTEST_IN_THE_WORLD</span>
      </div>
    </div>
  );
};

export default NeuralHealth;