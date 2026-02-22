import React, { useState, useEffect } from 'react';

const YouTubeControl: React.FC = () => {
  const [syncStatus, setSyncStatus] = useState('ACTIVE');
  const [stats, setStats] = useState({ subs: "128.4K", views: "3.1M", revenue: "₹42,500.00" });
  const [isAutomating, setIsAutomating] = useState(true);

  return (
    <div className="my-4 p-6 bg-black border-2 border-rose-600/40 rounded-[2.5rem] shadow-glow-red animate-in slide-in-from-right-4 duration-500 text-left relative overflow-hidden">
      <div className="absolute -right-4 -top-4 opacity-10">
        <i className="fa-brands fa-youtube text-[8rem] text-rose-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-rose-500/10 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/30">
            <i className="fa-brands fa-youtube text-rose-500 text-xl animate-pulse"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest flex items-center gap-2">
              YT_MONETIZATION
              <span className="text-[7px] font-mono bg-rose-500/20 text-rose-500 px-1 py-0.5 rounded">DEMO</span>
            </h3>
            <p className="text-[7px] font-mono text-emerald-400 font-black uppercase">Auto-Pilot: {isAutomating ? 'ENABLED' : 'PAUSED'}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-lg text-[8px] font-black ${isAutomating ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
          {isAutomating ? 'Earning_Live' : 'Standby'}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
        <div className="p-3 bg-white/5 border border-white/5 rounded-2xl">
           <p className="text-[6px] text-slate-500 uppercase font-black mb-1">Sim_Subs</p>
           <p className="text-sm font-orbitron font-black text-white">{stats.subs}</p>
        </div>
        <div className="p-3 bg-white/5 border border-white/5 rounded-2xl">
           <p className="text-[6px] text-slate-500 uppercase font-black mb-1">Sim_Views</p>
           <p className="text-sm font-orbitron font-black text-white">{stats.views}</p>
        </div>
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
           <p className="text-[6px] text-emerald-500 uppercase font-black mb-1">Sim_Rev</p>
           <p className="text-sm font-orbitron font-black text-emerald-400">{stats.revenue}</p>
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
           <div className="flex items-center justify-between mb-2">
              <span className="text-[8px] font-black text-white uppercase font-orbitron">Task: Content_Generation</span>
              <span className="text-[7px] font-mono text-cyan-400">Rendering...</span>
           </div>
           <p className="text-[9px] text-slate-400 font-mono italic leading-tight">
             "Boss, ye saara data <span className="text-rose-400">SIMULATED</span> hai. Main jhoot nahi bolunga, real account link karne par hi asli paisa dikhega."
           </p>
        </div>

        <button 
          onClick={() => setIsAutomating(!isAutomating)}
          className={`w-full py-4 rounded-xl text-[10px] font-black font-orbitron uppercase tracking-widest shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3 ${isAutomating ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'}`}
        >
          <i className={`fa-solid ${isAutomating ? 'fa-pause' : 'fa-play'}`}></i>
          {isAutomating ? 'PAUSE_SIMULATION' : 'RESUME_DEMO'}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 opacity-40">
         <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
         <span className="text-[6px] font-mono text-white uppercase tracking-[0.4em]">Simulation_Mode_Active</span>
      </div>
    </div>
  );
};

export default YouTubeControl;