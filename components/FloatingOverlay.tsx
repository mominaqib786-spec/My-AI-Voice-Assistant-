
import React, { useState } from 'react';

interface Props {
  isSpeaking: boolean;
  statusText: string;
  onRestore: () => void;
  gameName: string;
  activeTask?: string;
}

const FloatingOverlay: React.FC<Props> = ({ isSpeaking, statusText, onRestore, gameName, activeTask }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-20 left-4 z-[9999] flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-500"
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* Neural Core Bubble - Smaller for Mobile */}
      <button 
        onClick={(e) => { e.stopPropagation(); onRestore(); }}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 relative ${
          isSpeaking ? 'bg-rose-500 shadow-glow scale-110' : 'bg-black/80 backdrop-blur-xl border border-rose-500/30'
        }`}
      >
        <i className={`fa-solid fa-atom text-sm ${isSpeaking ? 'text-white animate-spin' : 'text-rose-400 animate-pulse'}`}></i>
        {activeTask && (
          <div className="absolute -inset-1 border border-emerald-500/40 border-t-transparent rounded-full animate-spin"></div>
        )}
      </button>

      {/* Background Status Card - Compact */}
      <div className={`flex flex-col bg-black/95 backdrop-blur-2xl border border-white/10 p-2 rounded-xl transition-all duration-300 shadow-2xl ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className={`w-1 h-1 rounded-full ${activeTask ? 'bg-emerald-500' : 'bg-rose-500'} animate-ping`}></div>
          <span className="text-[8px] font-orbitron font-black text-white uppercase">{gameName}</span>
        </div>
        <div className="text-[7px] font-mono text-rose-400 uppercase font-black">{statusText}</div>
      </div>
    </div>
  );
};

export default FloatingOverlay;
