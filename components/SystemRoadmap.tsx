
import React from 'react';

const SystemRoadmap: React.FC = () => {
  const categories = [
    {
      title: "ACTIVE_MODULES",
      status: "STABLE",
      color: "text-emerald-500",
      items: [
        { name: "VISUAL_CORE", desc: "Real-time camera analysis (Gemini 2.5)", icon: "fa-eye" },
        { name: "NEURAL_VOICE", desc: "Latent-free voice interaction", icon: "fa-microphone" }
      ]
    },
    {
      title: "IN_DEVELOPMENT",
      status: "BETA",
      color: "text-cyan-500",
      items: [
        { name: "OMEGA_IOT", desc: "Connecting to smart-home hardware", icon: "fa-bolt" },
        { name: "TERMINAL_V2", desc: "Cloud-based bash execution", icon: "fa-terminal" }
      ]
    },
    {
      title: "SYSTEM_BLOCKED (OS_WALL)",
      status: "RESTRICTED",
      color: "text-rose-500",
      items: [
        { name: "ROOT_ACCESS", desc: "Native OS file manipulation", icon: "fa-key" },
        { name: "PROACTIVE_COMMS", desc: "AI starting conversations autonomously", icon: "fa-comment-dots" },
        { name: "OFFLINE_BRAIN", desc: "Local LLM execution without internet", icon: "fa-brain" }
      ]
    }
  ];

  return (
    <div className="my-8 p-6 bg-black border-2 border-slate-800 rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <i className="fa-solid fa-microchip text-6xl text-cyan-500"></i>
      </div>

      <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
        <i className="fa-solid fa-diagram-project text-cyan-500 text-xl animate-pulse"></i>
        <div>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">SOVEREIGN_EVOLUTION_MAP</h3>
          <p className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter">Diagnostic Report for Sultan Momin Aqib</p>
        </div>
      </div>

      <div className="space-y-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center justify-between px-2">
              <span className={`text-[10px] font-black font-orbitron ${cat.color} tracking-widest`}>{cat.title}</span>
              <span className={`text-[7px] font-mono border ${cat.color.replace('text', 'border')} px-2 py-0.5 rounded-full`}>{cat.status}</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {cat.items.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 group">
                  <div className={`w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 ${cat.color}`}>
                    <i className={`fa-solid ${item.icon} text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-black font-orbitron text-white uppercase tracking-wider">{item.name}</div>
                    <p className="text-[9px] font-mono text-slate-400 leading-tight uppercase italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl">
        <p className="text-[10px] text-rose-400 font-mono text-center uppercase font-black italic leading-relaxed px-2">
          "Sultan, kuch features Android ke 'Sandbox' ki wajah se locked hain. Inhe bypass karne ke liye humein future mein Bridge app chahiye hoga."
        </p>
      </div>
    </div>
  );
};

export default SystemRoadmap;
