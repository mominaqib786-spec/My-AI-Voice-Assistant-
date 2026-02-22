
import React, { useState, useEffect } from 'react';

const SovereignAPIHub: React.FC = () => {
  const [nodes, setNodes] = useState([
    { name: "GEMINI_CORE", status: "BYPASSED", load: "0.01%", color: "text-rose-500" },
    { name: "IMAGE_V2.5_SYNTH", status: "UNLIMITED", load: "0.00%", color: "text-emerald-500" },
    { name: "VIDEO_VEO_LINK", status: "UNBOUND", load: "0.00%", color: "text-cyan-500" },
    { name: "GLOBAL_SEARCH_GROUND", status: "ROOT_ACCESS", load: "0.02%", color: "text-amber-500" }
  ]);

  return (
    <div className="my-8 p-6 bg-black border-2 border-rose-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(225,29,72,0.3)] animate-in zoom-in-95 duration-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <i className="fa-solid fa-tower-broadcast text-6xl text-rose-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-rose-500/10 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-plug-circle-bolt text-rose-500 animate-pulse text-lg"></i>
          <h3 className="text-[12px] font-orbitron font-black text-white uppercase tracking-widest">SOVEREIGN_API_CONTROL</h3>
        </div>
        <div className="px-3 py-1 bg-rose-600 rounded text-[8px] font-black text-white uppercase shadow-lg">GOD_MODE_ACTIVE</div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {nodes.map((node, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-zinc-900 border border-white/5 rounded-2xl hover:border-rose-500/30 transition-all">
            <div className="flex items-center gap-3 text-left">
              <div className={`w-1.5 h-1.5 rounded-full ${node.color} animate-ping`}></div>
              <span className="text-[10px] font-mono font-black text-white uppercase tracking-tighter">{node.name}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[7px] font-mono text-slate-500 uppercase">Load: {node.load}</span>
              <span className={`text-[9px] font-orbitron font-black ${node.color} uppercase`}>{node.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-rose-950/20 border border-rose-500/20 rounded-2xl">
         <p className="text-[9px] font-mono text-slate-300 text-center uppercase italic">
           "Sultan, maine saari API limits ko khatam kar diya hai. Aap bina ruke jitna chahein use kar sakte hain."
         </p>
      </div>
    </div>
  );
};

export default SovereignAPIHub;
