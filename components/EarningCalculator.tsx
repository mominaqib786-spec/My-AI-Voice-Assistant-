
import React, { useState, useEffect } from 'react';

const EarningCalculator: React.FC = () => {
  const [skillLevel, setSkillLevel] = useState(70); // Coding/Scripting Power
  const [hours, setHours] = useState(4);
  const [dailyProjection, setDailyProjection] = useState(0);

  useEffect(() => {
    // Logic: Skill * Hours * Market Rate (Safe Skill-based Calculation)
    const baseRate = 250; // Average ₹/hour for a basic scripter
    const multiplier = skillLevel / 50; 
    const result = hours * baseRate * multiplier;
    setDailyProjection(result);
  }, [skillLevel, hours]);

  return (
    <div className="my-8 p-6 bg-zinc-950 border-2 border-emerald-500 rounded-[3rem] shadow-glow-emerald animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="absolute -right-12 -top-12 opacity-10">
        <i className="fa-solid fa-chart-line text-[15rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 shadow-glow">
            <i className="fa-solid fa-calculator text-emerald-400 text-xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">REVENUE_PROJECTION_v2</h2>
            <p className="text-[8px] font-mono text-emerald-500 uppercase font-black tracking-widest">Skill-Based Wealth Mapping</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-emerald-600 rounded-lg text-[8px] font-black text-white font-orbitron shadow-lg">
          RISK: 0% (SKILL_ONLY)
        </div>
      </div>

      <div className="space-y-8 relative z-10">
        {/* Sliders Area */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <span className="text-[9px] font-black text-slate-400 uppercase font-orbitron tracking-widest">Coding/Scripting Mastery</span>
              <span className="text-xs font-mono font-black text-emerald-400">{skillLevel}%</span>
            </div>
            <input 
              type="range" min="10" max="100" value={skillLevel}
              onChange={(e) => setSkillLevel(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-900 rounded-full appearance-none accent-emerald-500 border border-white/5 cursor-pointer"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <span className="text-[9px] font-black text-slate-400 uppercase font-orbitron tracking-widest">Daily Deployment Time</span>
              <span className="text-xs font-mono font-black text-cyan-400">{hours} HRS</span>
            </div>
            <input 
              type="range" min="1" max="12" value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-900 rounded-full appearance-none accent-cyan-500 border border-white/5 cursor-pointer"
            />
          </div>
        </div>

        {/* Projection Display */}
        <div className="p-6 bg-black/60 border border-emerald-500/20 rounded-[2rem] text-center shadow-inner relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500/20 animate-scan-slow opacity-30"></div>
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.4em] mb-2 block">Projected_Daily_Revenue</span>
          <div className="text-4xl font-orbitron font-black text-white drop-shadow-glow flex items-center justify-center gap-3">
             <span className="text-emerald-500">₹</span>
             {Math.round(dailyProjection).toLocaleString()}
          </div>
          <p className="text-[7px] font-mono text-emerald-600 font-black mt-2 uppercase tracking-widest animate-pulse">Stable_Passive_Potential</p>
        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-2 gap-3">
           <div className="p-3 bg-white/5 border border-white/5 rounded-2xl">
              <span className="text-[7px] text-slate-500 uppercase block mb-1">Target Sector</span>
              <p className="text-[10px] font-black text-white font-orbitron">SAAS_AUTOMATION</p>
           </div>
           <div className="p-3 bg-white/5 border border-white/5 rounded-2xl">
              <span className="text-[7px] text-slate-500 uppercase block mb-1">Complexity</span>
              <p className="text-[10px] font-black text-white font-orbitron">MID_LEVEL</p>
           </div>
        </div>

        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
           <h4 className="text-[9px] font-orbitron font-black text-emerald-500 uppercase mb-2">IMAN_Strategy_Advice:</h4>
           <p className="text-[10px] font-mono text-slate-300 leading-relaxed italic">
             "Sultan, aapka scripting level high hai. Agar aap roz 4 ghante **Web-Scraping Services** ya **Trading Bots** par dein, toh aap bina kisi risk ke mahine ka ₹1 Lakh+ touch kar sakte hain. Sasta data bechna chodiye, system chalaana shuru kijiye."
           </p>
        </div>
      </div>
    </div>
  );
};

export default EarningCalculator;
