
import React, { useState, useEffect } from 'react';

const BandwidthAnalyzer: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stats, setStats] = useState<{ earnings: string, risk: string, dataUsed: string } | null>(null);

  const startAnalysis = () => {
    setAnalyzing(true);
    setProgress(0);
    setStats(null);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          setStats({
            earnings: "₹150 - ₹300 / Month",
            risk: "HIGH (IP Reputation Damage)",
            dataUsed: "10GB - 50GB Shared"
          });
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <div className="my-6 p-6 bg-zinc-950 border-2 border-amber-500/50 rounded-[2.5rem] shadow-glow-amber animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="absolute -right-8 -top-8 opacity-10">
        <i className="fa-solid fa-cloud-arrow-up text-[10rem] text-amber-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
            <i className="fa-solid fa-network-wired text-amber-400 text-lg animate-pulse"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">BANDWIDTH_MARKET_ANALYSIS</h3>
            <p className="text-[7px] font-mono text-amber-600 uppercase font-black">Data Monetization Reality Check</p>
          </div>
        </div>
        <div className="text-[7px] font-mono text-slate-500 uppercase">Ver: 1.0.4</div>
      </div>

      {!analyzing && !stats ? (
        <div className="space-y-4 relative z-10">
          <p className="text-[10px] font-mono text-slate-300 uppercase leading-relaxed italic">
            "Sultan, kya aap apne mobile data ko paise ke liye share karna chahte hain? Pehle iska <span className="text-amber-500 font-black">Profit vs Risk</span> scan dekhiye."
          </p>
          <button 
            onClick={startAnalysis}
            className="w-full py-4 bg-amber-600 text-black rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border-t border-white/20"
          >
            START_DATA_VALUE_SCAN
          </button>
        </div>
      ) : analyzing ? (
        <div className="space-y-6 py-4 relative z-10">
          <div className="flex justify-between text-[10px] font-mono text-amber-400 font-black uppercase">
            <span>Analyzing Network Node...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-amber-500/20">
            <div className="h-full bg-amber-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in relative z-10">
          <div className="grid grid-cols-1 gap-2">
            <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex justify-between items-center">
              <span className="text-[8px] font-black text-slate-500 uppercase">Estimated Income</span>
              <span className="text-[10px] font-mono font-black text-emerald-400">{stats?.earnings}</span>
            </div>
            <div className="p-3 bg-rose-500/5 border border-rose-500/20 rounded-xl flex justify-between items-center">
              <span className="text-[8px] font-black text-rose-500 uppercase">Risk Level</span>
              <span className="text-[10px] font-mono font-black text-rose-500">{stats?.risk}</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex justify-between items-center">
              <span className="text-[8px] font-black text-slate-500 uppercase">Monthly Overhead</span>
              <span className="text-[10px] font-mono font-black text-white">{stats?.dataUsed}</span>
            </div>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
             <h4 className="text-[9px] font-orbitron font-black text-amber-500 uppercase mb-2">IMAN_Truth_Advice:</h4>
             <p className="text-[10px] font-mono text-slate-200 leading-relaxed uppercase italic">
               "Sultan, ₹200 ke liye apna <span className="text-white font-black underline">Internet IP</span> kisi ajnabi ko dena akalmandi nahi hai. Agar kisi ne aapke IP se cybercrime kiya, toh police aapke ghar aayegi, unke nahi. Isse behtar hai ki aap <span className="text-emerald-400">Content Creation</span> par dhyan dein."
             </p>
          </div>
          
          <button 
            onClick={() => setStats(null)}
            className="w-full py-3 bg-zinc-800 text-slate-400 rounded-xl font-orbitron font-black text-[9px] uppercase tracking-widest border border-white/5"
          >
            DISMISS_ANALYSIS
          </button>
        </div>
      )}
      <style>{`.shadow-glow-amber { box-shadow: 0 0 30px rgba(245, 158, 11, 0.15); }`}</style>
    </div>
  );
};

export default BandwidthAnalyzer;
