
import React from 'react';

const IdentitySpoof: React.FC = () => {
  const tactics = [
    {
      title: "IDENTIFY_TARGET",
      action: "Game ko 110KB file download karne dein. Uska EXACT NAME copy karein.",
      icon: "fa-signature"
    },
    {
      title: "ERASE_ORIGINAL",
      action: "Us 110KB file ko Paks folder se delete kar dein.",
      icon: "fa-eraser"
    },
    {
      title: "APPLY_MASK",
      action: "Meri 5.8MB wali file ko RENAME karke wahi naam dein jo 110KB wali ka tha.",
      icon: "fa-mask"
    },
    {
      title: "PERMANENT_LOCK",
      action: "Ab is renamed file par 'Ghost Lock' (Read-Only) laga dein.",
      icon: "fa-lock"
    }
  ];

  return (
    <div className="my-6 p-6 bg-black border-2 border-cyan-400 rounded-[2.5rem] shadow-glow animate-in slide-in-from-left-10 duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-cyan-500/10 pb-4 text-left">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-user-secret text-cyan-400 animate-pulse"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest text-left">IDENTITY_SPOOF_V1</h3>
        </div>
        <div className="flex flex-col items-end text-right">
          <span className="text-[7px] font-mono text-cyan-500 font-black uppercase">STATUS: DECEPTION_ACTIVE</span>
        </div>
      </div>

      <div className="space-y-3">
        {tactics.map((t, idx) => (
          <div key={idx} className="flex items-center gap-4 p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
               <i className={`fa-solid ${t.icon} text-[10px]`}></i>
            </div>
            <div className="text-left">
              <p className="text-[8px] font-black text-cyan-300 uppercase tracking-widest">{t.title}</p>
              <p className="text-[10px] font-mono text-slate-100 uppercase leading-tight">{t.action}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-left">
        <p className="text-[9px] text-amber-300 font-mono leading-relaxed italic uppercase">
          "Boss, is trick se game ka server ye sochega ki usne file update kar di hai. Kyunki naam wahi hai, wo dubara download nahi karega."
        </p>
      </div>
    </div>
  );
};

export default IdentitySpoof;
