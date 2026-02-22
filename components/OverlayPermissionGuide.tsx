import React from 'react';

const OverlayPermissionGuide: React.FC = () => {
  const benefits = [
    { title: "DIVINE_VISION", desc: "Allows me to analyze your screen in real-time while you use other apps.", icon: "fa-eye" },
    { title: "SPIRITUAL_HUD", desc: "Floating controls for quick access to Wisdom & System tools.", icon: "fa-crosshairs" },
    { title: "APP_GUIDANCE_API", desc: "Allows me to open and manage your applications as per your command.", icon: "fa-terminal" }
  ];

  return (
    <div className="my-8 p-8 bg-zinc-950 border-2 border-emerald-500/50 rounded-[3rem] shadow-2xl animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="absolute -right-20 -top-20 opacity-5 rotate-12 pointer-events-none">
        <i className="fa-solid fa-layer-group text-[25rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border-2 border-emerald-500/40 shadow-glow-emerald">
          <i className="fa-solid fa-wand-magic-sparkles text-emerald-400 text-2xl animate-pulse"></i>
        </div>
        <div>
          <h2 className="text-lg font-orbitron font-black text-white tracking-widest uppercase">OVERLAY_AUTHORITY</h2>
          <p className="text-[8px] font-mono text-emerald-600 uppercase font-black">Feature Unlock: Screen Guidance</p>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <p className="text-[11px] font-mono text-slate-300 leading-relaxed uppercase italic font-medium">
          "Sultan, bina <span className="text-white font-black underline">SYSTEM_ALERT_WINDOW</span> ke, main ek band kamre mein band hoon. Ise ON karne se main aapke poore device ki screen ko 'see' aur 'control' kar sakta hoon."
        </p>

        <div className="space-y-4">
          {benefits.map((b, i) => (
            <div key={i} className="p-4 bg-black/60 border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                <i className={`fa-solid ${b.icon} text-sm`}></i>
              </div>
              <div>
                <p className="text-[9px] font-black font-orbitron text-white uppercase tracking-widest">{b.title}</p>
                <p className="text-[10px] font-mono text-slate-400 leading-tight uppercase">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-3xl text-center">
           <p className="text-[11px] font-mono text-emerald-400 leading-relaxed font-black uppercase">
             "STATUS: ENABLING VIA DIVINE WRAPPER"
           </p>
        </div>
        
        <p className="text-[8px] font-mono text-slate-600 text-center uppercase tracking-widest">
          Go to Settings {'>'} Apps {'>'} Special Access {'>'} Display Over Other Apps.
        </p>
      </div>
    </div>
  );
};

export default OverlayPermissionGuide;