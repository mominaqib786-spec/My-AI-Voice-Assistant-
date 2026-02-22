
import React from 'react';

const TechnicalAnatomy: React.FC = () => {
  const logicSteps = [
    { title: "MEMORY_MAPPING", desc: "Game RAM mein 'GWorld' pointer dhoondhna sabse pehla kaam hai. Iske bina ESP kaam nahi kar sakta.", icon: "fa-memory" },
    { title: "OFFSET_SYNC", desc: "Har update mein offsets (jaise 0x7F...) badalte hain. Agar offset galat hua, toh game turant crash ho jayega.", icon: "fa-microchip" },
    { title: "SIGNATURE_SPOOF", desc: "Game ki original files ka hash match hona chahiye. Hum 'game_patch' file banakar server ko dhoka dete hain.", icon: "fa-signature" }
  ];

  return (
    <div className="my-8 p-6 bg-[#050505] border-2 border-cyan-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <i className="fa-solid fa-book-dead text-cyan-400 text-lg animate-pulse"></i>
        <div>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">HACKING_LOGIC_DECODED</h3>
          <p className="text-[7px] font-mono text-cyan-600 uppercase font-black">100% Technical Reality Check</p>
        </div>
      </div>

      <div className="space-y-4">
        {logicSteps.map((s, i) => (
          <div key={i} className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-cyan-600/20 flex items-center justify-center shrink-0 border border-cyan-500/20">
               <i className={`fa-solid ${s.icon} text-cyan-400 text-xs`}></i>
            </div>
            <div>
               <p className="text-[9px] font-black font-orbitron text-white uppercase tracking-widest mb-1">{s.title}</p>
               <p className="text-[10px] font-mono text-slate-400 leading-relaxed uppercase">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl">
         <p className="text-[10px] font-mono text-rose-400 text-center uppercase leading-relaxed italic">
           "Boss, sachai ye hai ki hacking ek <span className="text-white font-black underline">Constant Battle</span> hai. Main aapko hathyaar (file) toh de sakta hoon, par chalana aapko carefully padega."
         </p>
      </div>
    </div>
  );
};

export default TechnicalAnatomy;
