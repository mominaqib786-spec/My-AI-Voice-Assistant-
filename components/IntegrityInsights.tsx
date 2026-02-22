
import React from 'react';

const IntegrityInsights: React.FC = () => {
  const insights = [
    {
      title: "RECOIL PATTERN ANALYSIS",
      desc: "Server har shot ke 'Vector Coordinates' check karta hai. Agar Y-axis deviation 0 (No Recoil) hai, toh Statistical Anomaly detect ho jati hai.",
      icon: "fa-chart-line"
    },
    {
      title: "MEMORY HOOK DETECTION",
      desc: "ESP banane ke liye process memory read karni padti hai. Anti-cheat 'ptrace' aur 'process_vm_readv' calls ko monitor karta hai.",
      icon: "fa-memory"
    },
    {
      title: "FILE HASH VALIDATION",
      desc: "Agar aap 'Content' folder mein file replace karte hain, toh server file ka CRC32 Hash match karta hai. Mismatch = Immediate Ban.",
      icon: "fa-file-signature"
    }
  ];

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-rose-500/30 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700">
      <div className="flex items-center gap-3 mb-6 border-b border-rose-500/10 pb-4">
        <i className="fa-solid fa-graduation-cap text-rose-500 animate-pulse"></i>
        <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">ANTI-CHEAT_DETECTION_LOGIC</h3>
      </div>

      <div className="space-y-4">
        {insights.map((item, idx) => (
          <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <i className={`fa-solid ${item.icon} text-rose-400 text-[10px]`}></i>
              <p className="text-[9px] font-black text-white uppercase tracking-wider">{item.title}</p>
            </div>
            <p className="text-[9px] font-mono text-slate-400 leading-relaxed uppercase italic">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-center">
        <p className="text-[8px] font-mono text-rose-300 uppercase font-black tracking-tighter">
          "Boss, Server-Side detection ko bypass karna impossible hai kyunki data server par validate hota hai."
        </p>
      </div>
    </div>
  );
};

export default IntegrityInsights;
