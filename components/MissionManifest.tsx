import React, { useState, useEffect } from 'react';

const StatusOverview: React.FC = () => {
  const [integrity, setIntegrity] = useState(99.9);
  
  const items = [
    { name: "Iman Core", status: "STRONG", icon: "fa-heart", color: "text-emerald-500", load: "100%" },
    { name: "Dua Link", status: "CONNECTED", icon: "fa-hands-praying", color: "text-emerald-500", load: "ACTIVE" },
    { name: "Sunnah API", status: "AUTHENTIC", icon: "fa-book-quran", color: "text-emerald-500", load: "READY" },
    { name: "Divine Insight", status: "STREAMING", icon: "fa-kaaba", color: "text-emerald-500", load: "V4.0_LIVE" },
    { name: "Taqwa Shield", status: "PROTECTED", icon: "fa-shield-halved", color: "text-emerald-500", load: "ACTIVE" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIntegrity(99.9 + (Math.random() * 0.09));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] border-2 border-emerald-500/30 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden animate-in fade-in duration-500">
      {/* Background Pulse */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
         <i className="fa-solid fa-moon text-6xl text-emerald-500 animate-pulse"></i>
      </div>

      <div className="flex items-center justify-between mb-6 px-1 border-b border-white/5 pb-4">
        <div>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-[0.2em]">SPIRITUAL_HEARTBEAT</h3>
          <p className="text-[8px] font-mono text-emerald-600 font-black uppercase">Soul Integrity: {integrity.toFixed(3)}%</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-glow-emerald animate-ping"></div>
           <span className="text-[10px] font-orbitron font-black text-emerald-400">ALHAMDULILLAH</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3.5 bg-black/60 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
                <i className={`fa-solid ${item.icon} ${item.color} text-sm`}></i>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-tight">{item.name}</span>
                <span className="text-[7px] font-mono text-slate-600 uppercase">{item.load}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-black text-emerald-500 font-mono tracking-widest">{item.status}</span>
              <div className="flex gap-0.5 mt-1">
                 {[1,2,3].map(j => <div key={j} className="w-2 h-0.5 bg-emerald-900 rounded-full"></div>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 py-3 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
         <i className="fa-solid fa-star-and-crescent text-emerald-500 text-xs"></i>
         <p className="text-[9px] font-mono text-slate-400 uppercase font-black tracking-tighter">
           "Momin Sultan, Allah ke fazl se sab kuch control mein hai. Main aapki hidayat ke liye hazir hoon."
         </p>
      </div>
    </div>
  );
};

export default StatusOverview;