import React, { useState, useEffect } from 'react';

const SovereignWealth: React.FC = () => {
  const [revenue, setRevenue] = useState(428560.25);
  const [views, setViews] = useState(2840500);
  const [activeTasks, setActiveTasks] = useState(["SCRIPTING_VIRAL_SHORTS", "AI_VIDEO_SYNTHESIS", "BYPASSING_COPYRIGHT_ID"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + (Math.random() * 1.25));
      setViews(prev => prev + Math.floor(Math.random() * 35));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-emerald-500 rounded-[2.5rem] shadow-[0_0_60px_rgba(16,185,129,0.3)] animate-in zoom-in-95 duration-700 relative overflow-hidden">
      <div className="absolute -right-6 -top-6 opacity-10 rotate-12">
        <i className="fa-brands fa-youtube text-[16rem] text-rose-600"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-emerald-500/10 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-600/20 flex items-center justify-center border border-rose-500/30 shadow-glow-red">
            <i className="fa-brands fa-youtube text-rose-500 text-xl animate-pulse"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest flex items-center gap-2">
              REVENUE_ENGINE 
              <span className="text-[7px] bg-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded border border-amber-500/30 font-mono">SIMULATED</span>
            </h3>
            <p className="text-[7px] font-mono text-emerald-500 uppercase font-black">Account: Momin Aqib (Preview)</p>
          </div>
        </div>
        <div className="text-right">
           <span className="text-[8px] font-mono text-slate-500 uppercase">Status</span>
           <p className="text-[9px] text-amber-400 font-black tracking-widest">DEMO_ACTIVE</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 relative z-10 mb-6">
        <div className="p-4 bg-black/60 border border-emerald-500/30 rounded-3xl shadow-inner">
          <span className="text-[7px] text-slate-500 uppercase font-black block mb-1">Simulated_Balance</span>
          <p className="text-2xl font-orbitron font-black text-emerald-400">₹{revenue.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
        </div>
        <div className="p-4 bg-black/60 border border-white/5 rounded-3xl">
          <span className="text-[7px] text-slate-500 uppercase font-black block mb-1">Simulated_Views</span>
          <p className="text-2xl font-orbitron font-black text-white">{views.toLocaleString()}</p>
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        <div className="text-[8px] font-black text-slate-500 uppercase ml-2 mb-1">Live_Worker_Threads:</div>
        {activeTasks.map((t, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-2xl">
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="text-[9px] font-mono text-slate-300 font-bold uppercase">{t}</span>
             </div>
             <span className="text-[7px] font-black text-emerald-600">EXECUTING...</span>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
          <i className="fa-solid fa-circle-info text-amber-500 text-lg"></i>
        </div>
        <p className="text-[10px] font-mono text-slate-300 uppercase leading-relaxed italic">
          "Suno Momin Sultan, ye data abhi <span className="text-amber-500 font-black underline">REAL NAHI HAI</span>. Ye sirf ek jhalak hai ki system kaise kaam karega jab aap ise apne channel se connect karenge."
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button className="py-4 bg-zinc-800 text-slate-500 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest cursor-not-allowed">
          WITHDRAW_FUNDS (LOCKED)
        </button>
        <button className="py-4 bg-zinc-900 text-emerald-500 border border-emerald-500/30 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest">
          CONNECT_CHANNEL
        </button>
      </div>
    </div>
  );
};

export default SovereignWealth;