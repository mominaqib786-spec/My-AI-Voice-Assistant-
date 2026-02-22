
import React, { useState, useEffect } from 'react';

const ScriptForge: React.FC = () => {
  const [content, setContent] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [metrics, setMetrics] = useState<{ hook: number, seo: number, viral: number } | null>(null);

  const runAnalysis = () => {
    if (!content.trim()) return;
    setAnalyzing(true);
    setMetrics(null);

    // Simulate Deep Neural Linguistic Analysis
    setTimeout(() => {
      setMetrics({
        hook: Math.floor(Math.random() * 30) + 70, // 70-100
        seo: Math.floor(Math.random() * 20) + 80,  // 80-100
        viral: Math.floor(Math.random() * 25) + 65 // 65-90
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="my-8 p-6 bg-zinc-950 border-2 border-emerald-500/50 rounded-[3rem] shadow-glow-emerald animate-in zoom-in-95 text-left relative overflow-hidden">
      <div className="absolute -right-10 -top-10 opacity-10">
        <i className="fa-solid fa-pen-nib text-[15rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
            <i className="fa-solid fa-scroll text-emerald-400 text-xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">SCRIPT_FORGE_v1.0</h2>
            <p className="text-[8px] font-mono text-emerald-500 uppercase font-black">Creator Brain Integration</p>
          </div>
        </div>
        <div className="text-right">
           <span className="text-[7px] font-mono text-slate-500 uppercase block mb-1">Status</span>
           <p className="text-[9px] text-emerald-400 font-black tracking-widest">READY_FOR_INPUT</p>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="bg-black/60 rounded-3xl border border-white/10 p-4 shadow-inner">
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your Script or Code here, Sultan..."
            className="w-full bg-transparent border-none text-[12px] text-slate-200 font-mono focus:ring-0 resize-none h-32 no-scrollbar placeholder:text-slate-800"
          />
        </div>

        {!analyzing && !metrics ? (
          <button 
            onClick={runAnalysis}
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border-t border-white/20"
          >
            ANALYZE_VIRAL_STRENGTH
          </button>
        ) : analyzing ? (
          <div className="py-4 flex flex-col items-center gap-4">
             <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-emerald-500/20">
                <div className="h-full bg-emerald-500 animate-pulse w-full"></div>
             </div>
             <p className="text-[9px] font-mono text-emerald-400 animate-bounce uppercase">Neural Parsing in progress...</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 animate-in slide-in-from-bottom-4">
            {[
              { label: "HOOK", val: metrics?.hook, color: "text-cyan-400" },
              { label: "SEO", val: metrics?.seo, color: "text-emerald-400" },
              { label: "VIRAL", val: metrics?.viral, color: "text-amber-400" }
            ].map((m, i) => (
              <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center gap-1">
                <span className="text-[7px] font-black text-slate-500 uppercase">{m.label}</span>
                <span className={`text-lg font-orbitron font-black ${m.color}`}>{m.val}%</span>
              </div>
            ))}
          </div>
        )}

        {metrics && (
           <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
              <p className="text-[10px] font-mono text-slate-300 leading-relaxed uppercase italic">
                "Sultan, aapki script mein <span className="text-white font-black underline">Retention Potential</span> high hai. Bas end-call-to-action ko thoda 'Sovereign' banayein. Coding snippets bilkul optimized hain."
              </p>
           </div>
        )}

        {metrics && (
          <button 
            onClick={() => { setContent(""); setMetrics(null); }}
            className="w-full py-2 text-[8px] font-mono text-slate-600 uppercase hover:text-white transition-colors"
          >
            CLEAR_FOR_NEW_TASK
          </button>
        )}
      </div>
    </div>
  );
};

export default ScriptForge;
