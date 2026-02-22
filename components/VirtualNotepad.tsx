
import React, { useEffect, useState } from 'react';

interface Props {
  content: string;
  title?: string;
  onClose: () => void;
}

const VirtualNotepad: React.FC<Props> = ({ content, title, onClose }) => {
  const [typedContent, setTypedContent] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < content.length) {
        setTypedContent(prev => prev + content[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [content]);

  return (
    <div className="fixed inset-x-4 bottom-32 z-[150] bg-black/90 backdrop-blur-3xl border-2 border-rose-500/30 rounded-[2.5rem] shadow-glow overflow-hidden animate-in slide-in-from-bottom-8 duration-500 max-h-[50vh] flex flex-col">
      <div className="flex items-center justify-between px-8 py-4 border-b border-rose-500/10 bg-rose-500/5">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-note-sticky text-rose-500 animate-pulse"></i>
          <span className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest">{title || "SYSTEM_NOTE_BUFFER"}</span>
        </div>
        <button onClick={onClose} className="text-white/20 hover:text-white transition-colors">
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div className="flex-1 p-8 overflow-y-auto no-scrollbar font-mono text-[14px] leading-relaxed text-rose-100/90 selection:bg-rose-500/30">
        <div className="whitespace-pre-wrap">
          {typedContent}
          <span className="inline-block w-2 h-4 bg-rose-500 animate-pulse ml-1 align-middle"></span>
        </div>
      </div>
      <div className="px-8 py-3 bg-black/40 border-t border-rose-500/10 flex items-center justify-between">
        <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest">Owner: Momin Aqib | JARVIS Core V33</span>
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
           <span className="text-[7px] font-black font-orbitron text-emerald-500 uppercase">SYNC_LOCKED</span>
        </div>
      </div>
    </div>
  );
};

export default VirtualNotepad;
