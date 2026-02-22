
import React, { useState } from 'react';

const MediaLab: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  return (
    <div className="my-4 p-4 bg-slate-900 border border-fuchsia-500/30 rounded-2xl shadow-xl animate-in zoom-in-95 duration-500 text-left">
      <div className="flex items-center gap-3 mb-4">
        <i className="fa-solid fa-film text-fuchsia-400 text-sm"></i>
        <div>
          <h3 className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest">NEURAL_VIDEO_SYNTH</h3>
          <p className="text-[7px] text-fuchsia-600 font-mono uppercase">VEO-3 Engine Integrated</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-black/50 p-3 rounded-xl border border-fuchsia-500/10">
          <p className="text-[9px] text-slate-400 font-mono uppercase mb-2">Target Vision:</p>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the video, Boss..."
            className="w-full bg-transparent border-none text-[11px] text-white font-mono focus:ring-0 resize-none h-16 placeholder:text-slate-700"
          />
        </div>

        <button 
          onClick={() => setGenerating(true)}
          className="w-full py-3 bg-fuchsia-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
        >
          {generating ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-magic"></i>}
          {generating ? 'RENDER_IN_PROGRESS' : 'GENERATE_HIGH_RES_VIDEO'}
        </button>
      </div>

      {generating && (
        <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-fuchsia-500 animate-pulse w-2/3"></div>
        </div>
      )}
    </div>
  );
};

export default MediaLab;
