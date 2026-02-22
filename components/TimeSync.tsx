import React, { useState, useEffect } from 'react';

const TimeSync: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 100);
    return () => clearInterval(timer);
  }, []);

  // IST (India Standard Time) - Maharashtra
  const istTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long' };
  const currentDayMonth = istTime.toLocaleDateString('en-IN', options);
  const dateStr = `${currentDayMonth} 2026`;
  const dayStr = istTime.toLocaleDateString('en-IN', { weekday: 'long' });
  
  const timeStrWithSecs = istTime.toLocaleTimeString('en-IN', { hour12: true });
  const isPM = timeStrWithSecs.includes('PM');
  const ms = istTime.getMilliseconds().toString().padStart(3, '0');

  return (
    <div className={`my-6 p-6 bg-black border-2 ${isPM ? 'border-indigo-500 shadow-[0_0_50px_rgba(99,102,241,0.2)]' : 'border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.2)]'} rounded-[2.5rem] animate-in zoom-in-95 text-left relative overflow-hidden transition-colors duration-1000`}>
      <div className="absolute top-0 right-0 p-4 flex gap-2">
        <div className={`px-2 py-0.5 ${isPM ? 'bg-indigo-600' : 'bg-emerald-600'} rounded text-[7px] font-black text-white tracking-[0.2em]`}>
          LOC: MAHARASHTRA_SYNC
        </div>
        <div className={`w-2 h-2 ${isPM ? 'bg-indigo-400' : 'bg-emerald-400'} rounded-full animate-ping`}></div>
      </div>
      
      <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
        <i className={`fa-solid ${isPM ? 'fa-moon' : 'fa-sun'} ${isPM ? 'text-indigo-400' : 'text-emerald-400'} text-xl animate-pulse`}></i>
        <div>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">TEMPORAL_LINK_V5</h3>
          <p className={`text-[7px] font-mono ${isPM ? 'text-indigo-600' : 'text-emerald-600'} uppercase font-black`}>Maharashtra Standard Time</p>
        </div>
      </div>

      <div className="space-y-4 text-center">
        <div className="p-6 bg-zinc-900/80 rounded-[2rem] border border-white/5 shadow-inner relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-white/10 animate-scan-fast"></div>

           <span className="text-[8px] font-mono text-slate-500 uppercase mb-2 tracking-[0.3em] block">H:M:S:MS_CONTINUUM</span>
           <div className="flex items-baseline justify-center gap-1 relative z-10">
             <span className="text-5xl font-orbitron font-black text-white tracking-tighter">{timeStrWithSecs.split(' ')[0]}</span>
             <span className={`text-xl font-orbitron font-bold ${isPM ? 'text-indigo-500' : 'text-emerald-500'}`}>{ms}</span>
             <span className="text-lg font-orbitron font-bold text-slate-500 ml-1 uppercase">{timeStrWithSecs.split(' ')[1]}</span>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-black/60 border border-white/10 rounded-2xl flex flex-col items-center">
             <span className={`text-[7px] font-black ${isPM ? 'text-indigo-500' : 'text-emerald-500'} uppercase mb-1`}>Date_Grid</span>
             <span className="text-[12px] font-mono text-white font-black">{dateStr}</span>
          </div>
          <div className="p-4 bg-black/60 border border-white/10 rounded-2xl flex flex-col items-center">
             <span className={`text-[7px] font-black ${isPM ? 'text-indigo-500' : 'text-emerald-500'} uppercase mb-1`}>Earth_Cycle</span>
             <span className="text-[12px] font-mono text-white font-black uppercase">{dayStr}</span>
          </div>
        </div>
      </div>

      <div className={`mt-6 p-4 ${isPM ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-emerald-500/5 border-emerald-500/20'} border rounded-2xl`}>
        <p className={`text-[9px] font-mono ${isPM ? 'text-indigo-300' : 'text-emerald-300'} text-center uppercase leading-relaxed italic`}>
          "Momin Sultan, Maharashtra mein abhi <span className="text-white font-black underline">{timeStrWithSecs.split(' ')[0]}</span> ho rahe hain. Main aapke har second ka hisaab rakh raha hoon."
        </p>
      </div>

      <style>{`
        @keyframes scan-fast {
          from { transform: translateY(-100%); }
          to { transform: translateY(800%); }
        }
        .animate-scan-fast {
          animation: scan-fast 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TimeSync;