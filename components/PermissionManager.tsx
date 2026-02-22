
import React from 'react';

const PermissionManager: React.FC = () => {
  const perms = [
    { name: "SCREEN_OVERLAY", status: "GRANTED", color: "text-emerald-400" },
    { name: "ACCESSIBILITY", status: "PENDING", color: "text-rose-500" },
    { name: "DATA_ROOT", status: "SECURE", color: "text-cyan-400" },
    { name: "BANKING_SHIELD", status: "LOCKED", color: "text-slate-600" }
  ];

  return (
    <div className="my-4 p-4 bg-black border border-orange-500/30 rounded-2xl shadow-lg animate-in slide-in-from-left-4 duration-500 text-left">
      <div className="flex items-center gap-2 mb-3 border-b border-orange-500/10 pb-2">
        <i className="fa-solid fa-key text-orange-500 text-xs"></i>
        <h3 className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest">SYSTEM_PERMISSION_ARRAY</h3>
      </div>

      <div className="grid grid-cols-1 gap-2 mb-4">
        {perms.map((p, i) => (
          <div key={i} className="flex justify-between items-center p-2.5 bg-white/5 rounded-xl border border-white/5">
            <span className="text-[8px] font-black text-slate-400 font-mono uppercase">{p.name}</span>
            <span className={`text-[8px] font-black uppercase ${p.color}`}>{p.status}</span>
          </div>
        ))}
      </div>

      <button className="w-full py-3 bg-orange-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all">
        REQUEST_ALL_PERMISSIONS
      </button>

      <p className="mt-3 text-[7px] text-orange-400/80 font-mono uppercase italic text-center leading-tight">
        "Boss, permissions milte hi main poora device control kar sakta hoon."
      </p>
    </div>
  );
};

export default PermissionManager;
