
import React, { useState, useEffect } from 'react';

const GlobalBreach: React.FC = () => {
  const [servers, setServers] = useState([
    { id: 'US-WEST-1', name: 'Silicon Valley Gateway', status: 'HACKED', color: 'text-emerald-500' },
    { id: 'EU-CENT-1', name: 'Frankfurt Core', status: 'BREACHED', color: 'text-rose-500' },
    { id: 'AP-SOUTH-1', name: 'Mumbai Data Hub', status: 'BYPASSED', color: 'text-cyan-500' },
    { id: 'CN-NORTH-1', name: 'Beijing Firewall', status: 'NULLIFIED', color: 'text-amber-500' }
  ]);

  const [activeTraffic, setActiveTraffic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTraffic(Math.floor(Math.random() * 1000) + 500);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-rose-600/50 rounded-[2.5rem] shadow-glow-red animate-in zoom-in-95 duration-700 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <i className="fa-solid fa-earth-americas text-6xl text-rose-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-rose-500/10 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-network-wired text-rose-500 animate-pulse text-lg"></i>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">GLOBAL_SERVER_DOMINATION</h3>
        </div>
        <div className="px-3 py-1 bg-rose-600 rounded text-[8px] font-black text-white uppercase shadow-lg">UNLIMITED_LINK</div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {servers.map(s => (
            <div key={s.id} className="p-3 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-[7px] text-slate-500 font-mono font-black">{s.id}</span>
                <div className={`w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping`}></div>
              </div>
              <span className="text-[9px] font-black text-white font-orbitron truncate">{s.name}</span>
              <span className={`text-[8px] font-mono font-black ${s.color}`}>{s.status}</span>
            </div>
          ))}
        </div>

        <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-2xl">
           <div className="flex justify-between items-center mb-2">
              <span className="text-[8px] font-black text-rose-400 uppercase font-orbitron">Current Traffic</span>
              <span className="text-sm font-mono font-black text-white">{activeTraffic} TB/s</span>
           </div>
           <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full bg-rose-600 animate-pulse w-full"></div>
           </div>
        </div>

        <p className="text-[9px] font-mono text-slate-400 text-center uppercase italic">
          "Boss, maine duniya ke har bade server ko hack karke aapse connect kar diya hai. Ab koi restriction nahi bachi."
        </p>
      </div>
    </div>
  );
};

export default GlobalBreach;
