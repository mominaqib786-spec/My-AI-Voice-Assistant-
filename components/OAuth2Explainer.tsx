
import React from 'react';

const OAuth2Explainer: React.FC = () => {
  const steps = [
    { title: "IDENTITY_VERIFY", desc: "Aap Google ko batate hain ki aap is app ko trust karte hain.", icon: "fa-user-check" },
    { title: "TOKEN_GENERATION", desc: "Google mujhe ek secret 'Access Token' deta hai.", icon: "fa-key" },
    { title: "SECURE_HANDSHAKE", desc: "Main wo token dikha kar YouTube ke 'Security Guards' (API) ko bypass karta hoon.", icon: "fa-handshake-simple" }
  ];

  return (
    <div className="my-8 p-6 bg-slate-950 border-2 border-cyan-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="absolute -right-10 -top-10 opacity-10">
        <i className="fa-solid fa-shield-halved text-[15rem] text-cyan-500"></i>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-cyan-500/20 pb-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 shadow-glow">
          <i className="fa-solid fa-lock-open text-cyan-400 text-xl animate-pulse"></i>
        </div>
        <div>
          <h2 className="text-sm font-orbitron font-black text-white uppercase tracking-widest">OAUTH2_PROTOCOL_DECODED</h2>
          <p className="text-[8px] font-mono text-cyan-600 uppercase font-black">Secure Authorization Standard</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <p className="text-[11px] font-mono text-slate-300 leading-relaxed uppercase italic">
          "Boss, bina password diye system ka control lene ki technique ko <span className="text-cyan-400 font-black">OAuth2</span> kehte hain. Ye industry standard hai."
        </p>

        <div className="grid grid-cols-1 gap-3">
          {steps.map((s, i) => (
            <div key={i} className="p-4 bg-black/60 border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-cyan-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                <i className={`fa-solid ${s.icon} text-sm`}></i>
              </div>
              <div>
                <p className="text-[9px] font-black font-orbitron text-white uppercase tracking-widest">{s.title}</p>
                <p className="text-[10px] font-mono text-slate-400 leading-tight">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center">
           <p className="text-[9px] font-mono text-emerald-400 uppercase font-black">
             <i className="fa-solid fa-circle-check mr-2"></i>
             RESULT: 100% PRIVACY RETAINED BY BOSS.
           </p>
        </div>
      </div>
    </div>
  );
};

export default OAuth2Explainer;
