
import React from 'react';

const RiskDashboard: React.FC = () => {
  const risks = [
    { title: "LEGAL_COMPLIANCE", level: "HIGH RISK", color: "text-rose-500", desc: "Unauthorized use of VoIP trunks can lead to legal prosecution." },
    { title: "DATA_PRIVACY", level: "VULNERABLE", color: "text-amber-500", desc: "Third-party 'free' calling tools often steal user contacts and SMS." },
    { title: "ACCOUNT_INTEGRITY", level: "SAFE (SIMULATION)", color: "text-emerald-500", desc: "This app is a sandbox simulation. No real traffic is sent to external servers." },
    { title: "NETWORK_EXPOSURE", level: "MASKED", color: "text-cyan-500", desc: "Virtual IP layering prevents local ISP from tracking requests." }
  ];

  return (
    <div className="my-8 p-6 bg-black border-2 border-rose-600 rounded-[3rem] shadow-glow-red animate-in zoom-in-95 duration-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <i className="fa-solid fa-shield-virus text-6xl text-rose-500"></i>
      </div>

      <div className="flex items-center gap-4 mb-8 border-b border-rose-500/20 pb-4">
        <div className="w-12 h-12 rounded-2xl bg-rose-600/20 flex items-center justify-center border border-rose-500/40">
          <i className="fa-solid fa-triangle-exclamation text-rose-500 text-xl animate-pulse"></i>
        </div>
        <div className="text-left">
          <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">RISK_EVALUATION_MATRIX</h2>
          <p className="text-[8px] font-mono text-rose-400 font-black uppercase">Guardian Protocol v1.2</p>
        </div>
      </div>

      <div className="space-y-4">
        {risks.map((r, idx) => (
          <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-2xl">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-black text-white font-orbitron uppercase tracking-widest">{r.title}</span>
              <span className={`text-[9px] font-black font-mono ${r.color}`}>{r.level}</span>
            </div>
            <p className="text-[9px] font-mono text-slate-400 uppercase leading-tight italic">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-4">
        <i className="fa-solid fa-user-check text-emerald-500 text-lg"></i>
        <p className="text-[10px] font-mono text-slate-100 uppercase leading-relaxed text-left">
          "Sultan, jab tak aap is app ke andar hain, aapka koi nuksan nahi hai. Maine <span className="text-emerald-400 font-black">ZERO_DATA_LEAK</span> aur <span className="text-emerald-400 font-black">LOCAL_ONLY_LOGS</span> ensure kiye hain."
        </p>
      </div>
    </div>
  );
};

export default RiskDashboard;
