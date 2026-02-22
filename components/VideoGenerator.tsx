import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Props {
  onVideoGenerated: (file: File) => void;
  initialPrompt?: string;
  autoStart?: boolean;
}

const VideoGenerator: React.FC<Props> = ({ onVideoGenerated, initialPrompt = "", autoStart = false }) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (autoStart && initialPrompt && !isGenerating) {
      generateVideo();
    }
  }, [autoStart, initialPrompt]);

  const generateVideo = async () => {
    const targetPrompt = prompt || initialPrompt;
    if (!targetPrompt) return;
    
    // Check for API Key selection (Required for Veo)
    // Fix: Per guidelines, do not return after openSelectKey; assume success and proceed.
    const aistudio = (window as any).aistudio;
    if (aistudio && !(await aistudio.hasSelectedApiKey())) {
      await aistudio.openSelectKey();
    }

    setIsGenerating(true);
    setStatus("INITIATING_VEO_3_ENGINE...");
    setProgress(10);

    try {
      // Create a new instance right before the call as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: targetPrompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      setStatus("SYNTHESIZING_FRAMES...");
      setProgress(30);

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
        setProgress(prev => Math.min(prev + 5, 95));
      }

      setStatus("FINALIZING_RENDER...");
      setProgress(100);

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      const blob = await response.blob();
      
      const file = new File([blob], "iman_generated_video.mp4", { type: "video/mp4" });
      onVideoGenerated(file);
      setIsGenerating(false);
      setStatus("VIDEO_READY_FOR_MISSION");

    } catch (error) {
      console.error(error);
      setStatus("ERROR: ENGINE_FAILURE");
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 bg-zinc-900/50 border-2 border-emerald-600/30 rounded-[2.5rem] shadow-xl animate-in zoom-in-95">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center border border-emerald-500/40 shadow-glow-emerald">
          <i className="fa-solid fa-clapperboard text-emerald-500 animate-pulse"></i>
        </div>
        <div>
          <h3 className="text-sm font-orbitron font-black text-white uppercase tracking-widest">IMAN_VIDEO_FORGE</h3>
          <p className="text-[7px] font-mono text-emerald-400 font-black uppercase tracking-tighter">Powered by Veo 3.1</p>
        </div>
      </div>

      {!isGenerating ? (
        <div className="space-y-4">
          <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
             <textarea 
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
               placeholder="Sultan, video ka topic bataiye..."
               className="w-full bg-transparent border-none text-xs text-white font-mono focus:ring-0 h-20 resize-none"
             />
          </div>
          <button 
            onClick={generateVideo}
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all"
          >
            GENERATE_DIVINE_CONTENT
          </button>
        </div>
      ) : (
        <div className="space-y-6 py-4">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[9px] font-mono text-emerald-400 font-black animate-pulse uppercase">{status}</span>
            <span className="text-xl font-orbitron font-black text-white">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden border border-emerald-500/20">
            <div 
              className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 shadow-glow-emerald transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-[9px] font-mono text-slate-500 text-center uppercase italic">
            "Sultan, video generation mein thoda waqt lagta hai. Tab tak Allah ka zikr kijiye!"
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoGenerator;