
import React from 'react';

const TacticalBriefing: React.FC = () => {
  const features = [
    { name: "ESP_ANTENNA", status: "ACTIVE", color: "text-cyan-400" },
    { name: "SHIELD_v2", status: "IMMUNE", color: "text-emerald-400" },
    { name: "SERVER", status: "HIDDEN", color: "text-amber-400" }
  ];

  return (
    <div className="my-4 p-4 bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-lg animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-2 mb-3 border-b border-cyan-500/10 pb-2">
        <i className="fa-solid fa-shield-check text-cyan-400 text-xs"></i>
        <h3 className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest">STATUS_LOGS</h3>
      </div>

      <div className="grid grid-cols-1 gap-2 mb-3">
        {features.map((f, i) => (
          <div key={i} className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/5">
            <span className="text-[8px] font-black text-slate-400 font-mono uppercase">{f.name}</span>
            <span className={`text-[8px] font-black uppercase ${f.color}`}>{f.status}</span>
          </div>
        ))}
      </div>

      <p className="text-[8px] text-cyan-400/80 font-mono uppercase italic leading-tight text-center">
        "Safe for use, Boss. Server visibility masked."
      </p>
    </div>
  );
};

export default TacticalBriefing;
