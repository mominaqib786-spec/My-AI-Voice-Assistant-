
import React, { useState, useEffect } from 'react';

interface Props {
  onClose: () => void;
}

const YoutubeVideoGuide: React.FC<Props> = ({ onClose }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const frames = [
    {
      title: "PHASE 1: THE PORTAL",
      desc: "Google Cloud Console (console.cloud.google.com) par jaiye aur naya project 'IMAN-Upload' banaiye.",
      icon: "fa-cloud",
      color: "text-blue-400"
    },
    {
      title: "PHASE 2: ENABLING POWER",
      desc: "API Library mein 'YouTube Data API v3' search karke use ENABLE kijiye. Ye step sabse zaroori hai.",
      icon: "fa-bolt",
      color: "text-amber-400"
    },
    {
      title: "PHASE 3: CONSENT GATE",
      desc: "OAuth Consent Screen mein jaakar 'External' select karein aur zaroori jankari (App Name, Email) bharein.",
      icon: "fa-shield-halved",
      color: "text-emerald-400"
    },
    {
      title: "PHASE 4: THE MASTER KEY",
      desc: "Credentials > Create Credentials > OAuth Client ID select karein. Application type 'Web Application' rakhein.",
      icon: "fa-key",
      color: "text-rose-500"
    },
    {
      title: "PHASE 5: FINAL SYNC",
      desc: "Client ID copy karein aur mere 'UPLOAD' panel mein paste kar dein. Authority Sync ho jayegi.",
      icon: "fa-rotate",
      color: "text-cyan-400"
    }
  ];

  useEffect(() => {
    let timer: any;
    if (isPlaying && progress < 100) {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentFrame < frames.length - 1) {
              setCurrentFrame(cf => cf + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isPlaying, progress, currentFrame]);

  return (
    <div className="fixed inset-0 z-[20000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-2xl bg-zinc-950 border-2 border-rose-600 rounded-[3rem] shadow-[0_0_100px_rgba(225,29,72,0.4)] relative overflow-hidden">
        
        {/* Top Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50">
          <div className="flex items-center gap-3">
             <i className="fa-solid fa-film text-rose-500 animate-pulse"></i>
             <span className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest">Tutorial_Feed: YouTube_Authority</span>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-rose-600/20 text-rose-500 flex items-center justify-center border border-rose-500/40">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="aspect-video bg-black relative flex items-center justify-center overflow-hidden border-b border-white/10">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-rose-900/20"></div>
           
           {/* Dynamic Content */}
           <div className="text-center p-8 animate-in zoom-in-95 duration-500">
              <i className={`fa-solid ${frames[currentFrame].icon} ${frames[currentFrame].color} text-7xl mb-6 drop-shadow-glow`}></i>
              <h2 className="text-xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">{frames[currentFrame].title}</h2>
              <p className="text-sm font-mono text-slate-300 leading-relaxed uppercase max-w-md mx-auto h-16">
                {frames[currentFrame].desc}
              </p>
           </div>

           {/* Scanline Effect */}
           <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full animate-scan-slow opacity-20"></div>
        </div>

        {/* Controls */}
        <div className="p-8 space-y-6">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-glow-red active:scale-90 transition-all"
              >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-xl`}></i>
              </button>
              
              <div className="flex-1 space-y-1">
                 <div className="flex justify-between text-[8px] font-mono text-slate-500 uppercase">
                    <span>Frame: {currentFrame + 1} / {frames.length}</span>
                    <span>{Math.round(progress)}%</span>
                 </div>
                 <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-rose-600 transition-all duration-100" 
                      style={{ width: `${progress}%` }}
                    ></div>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-5 gap-1">
              {frames.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all ${i <= currentFrame ? 'bg-rose-500' : 'bg-zinc-800'}`}
                />
              ))}
           </div>

           <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl flex items-center gap-4">
              <i className="fa-solid fa-circle-info text-rose-500"></i>
              <p className="text-[10px] font-mono text-slate-400 uppercase leading-tight italic">
                "Sultan, aap ek taraf laptop par Console kholiye aur dusri taraf mujhe dekhiye. Hum saath milkar rasta banayenge."
              </p>
           </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-3 bg-black/40 text-center">
           <span className="text-[7px] font-mono text-slate-700 uppercase tracking-[0.5em]">IMAN_Tutorial_Engine_v1.0</span>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoGuide;
