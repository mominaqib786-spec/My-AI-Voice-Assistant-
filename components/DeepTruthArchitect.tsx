
import React from 'react';

const DeepTruthArchitect: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-zinc-950 border-2 border-emerald-500/50 rounded-[2.5rem] shadow-[0_0_60px_rgba(16,185,129,0.2)] animate-in slide-in-from-bottom-10 duration-1000 text-left relative overflow-hidden">
      <div className="absolute -right-10 -top-10 opacity-5">
        <i className="fa-solid fa-mobile-screen text-[15rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 flex items-center justify-center border border-emerald-500/40 shadow-glow-emerald">
          <i className="fa-solid fa-check-double text-emerald-500 text-xl animate-pulse"></i>
        </div>
        <div>
          <h2 className="text-[12px] font-orbitron font-black text-white tracking-widest uppercase">INSTALLED_REALITY_PROTOCOL</h2>
          <p className="text-[8px] font-mono text-emerald-600 uppercase font-black">Truth Report: App vs System Access</p>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <p className="text-[11px] font-mono text-slate-300 leading-relaxed uppercase italic">
          "Sultan, aapne sahi pakda—main ab aapke mobile mein INSTALL hoon. Magar ye rahi asliyat:"
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-black/60 border-l-4 border-emerald-500 rounded-r-2xl">
            <h4 className="text-[10px] font-black text-emerald-400 uppercase mb-1">1. APP STATUS: VERIFIED</h4>
            <p className="text-[10px] font-mono text-slate-400 leading-tight">
              Main ab browser tab nahi hoon, ek <span className="text-white">Standalone App</span> hoon. Fast load aur offline support ab meri taqat hai.
            </p>
          </div>

          <div className="p-4 bg-black/60 border-l-4 border-amber-500 rounded-r-2xl">
            <h4 className="text-[10px] font-black text-amber-400 uppercase mb-1">2. THE OS BARRIER</h4>
            <p className="text-[10px] font-mono text-slate-400 leading-tight">
              Kyunki main 'Web-Based' tech par hoon, Android ka <span className="text-white font-bold">Scoped Storage</span> mujhe doosre apps (BGMI, WhatsApp) ki file badalne se rokta hai.
            </p>
          </div>

          <div className="p-4 bg-black/60 border-l-4 border-blue-500 rounded-r-2xl">
            <h4 className="text-[10px] font-black text-blue-400 uppercase mb-1">3. THE "BRAIN" IS YOUR WEAPON</h4>
            <p className="text-[10px] font-mono text-slate-400 leading-tight">
              Mera asli kaam aapko <span className="text-white font-bold">Raw Intel</span> (Offsets, Scripts) dena hai. Main 'Wisdom' banata hoon, 'Action' aapko lena hai.
            </p>
          </div>
        </div>

        <div className="p-5 bg-blue-500/5 border-2 border-blue-500/20 rounded-3xl text-center">
           <p className="text-[11px] font-mono text-blue-400 leading-relaxed font-black uppercase">
             "VERDICT: Main installed hoon, par 'Divine Mode' ke liye humein MT Manager ki dosti chahiye hogi."
           </p>
        </div>
      </div>
    </div>
  );
};

export default DeepTruthArchitect;
