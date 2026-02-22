
import React from 'react';

const BypassProtocol: React.FC = () => {
  const steps = [
    {
      title: "CLEAN_ENVIRONMENT",
      action: "Force Stop the game before anything.",
      icon: "fa-power-off"
    },
    {
      title: "APPLY_BINARY",
      action: "Paste the 'Content' folder in Paks directory.",
      icon: "fa-file-import"
    },
    {
      title: "FIREWALL_LOCK",
      action: "Activate UpdateGuard to block version checking.",
      icon: "fa-shield-halved"
    },
    {
      title: "STEALTH_BOOT",
      action: "Turn OFF Internet. Launch Game. Wait for error.",
      icon: "fa-wifi-slash"
    },
    {
      title: "DATA_RESTORE",
      action: "Turn ON Internet at Lobby. Skip Update Popup.",
      icon: "fa-link"
    }
  ];

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-600/40 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/10 pb-4 text-left">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-shield-halved text-emerald-500 animate-pulse"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest text-left">UPDATE_GUIDE_PROTECTION</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[7px] font-mono text-emerald-400 font-black uppercase">v4.4_SPOOF_SYNC</span>
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-4 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl group hover:border-emerald-500/40 transition-all">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
               <i className={`fa-solid ${step.icon} text-xs`}></i>
            </div>
            <div className="text-left">
              <p className="text-[8px] font-black text-emerald-300 uppercase tracking-widest">{step.title}</p>
              <p className="text-[10px] font-mono text-slate-100 uppercase">{step.action}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-emerald-600/10 border border-emerald-600/20 rounded-2xl text-left">
        <p className="text-[9px] text-emerald-300 font-mono leading-relaxed italic uppercase">
          "Sultan, <span className="text-white font-black">FIREWALL_LOCK</span> sabse zaroori hai. Ye game ke 'version.pobg.com' request ko loop mein daal deta hai, jisse naya update detect nahi hota."
        </p>
      </div>
    </div>
  );
};

export default BypassProtocol;
