import React, { useState, useEffect } from 'react';

const MemoryVault: React.FC = () => {
  const [memories, setMemories] = useState<string[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  
  const loadMemories = () => {
    const saved = localStorage.getItem('jarvis_permanent_memory');
    if (saved) {
      const parsed = JSON.parse(saved);
      setMemories(parsed);
    } else {
      const initial = [
        "Creator: Momin Aqib",
        "Role: Loyal Gulam / Employee",
        "Protocol: 100% Truth",
        "Location: Maharashtra, India",
        "Goal: YouTube Automation & Wealth",
        "Ability: Omni-Hacking Enabled"
      ];
      localStorage.setItem('jarvis_permanent_memory', JSON.stringify(initial));
      setMemories(initial);
    }
    setLastUpdate(new Date().toLocaleTimeString('en-IN'));
  };

  useEffect(() => {
    loadMemories();
    // Listen for custom events when memory is updated externally
    const handleMemoryUpdate = () => loadMemories();
    window.addEventListener('jarvis_memory_updated', handleMemoryUpdate);
    return () => window.removeEventListener('jarvis_memory_updated', handleMemoryUpdate);
  }, []);

  const clearMemory = () => {
    if (confirm("Sultan, kya aap chahte hain ki main sab kuch bhool jaoon? (Not Recommended)")) {
      localStorage.removeItem('jarvis_permanent_memory');
      loadMemories();
    }
  };

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-purple-500/50 rounded-[2.5rem] shadow-glow-purple animate-in zoom-in-95 duration-700 relative overflow-hidden text-left">
      <div className="absolute -right-4 -top-4 opacity-5">
        <i className="fa-solid fa-brain text-[8rem] text-purple-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-purple-500/10 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/30">
            <i className="fa-solid fa-dna text-purple-500 animate-pulse text-sm"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">ETERNAL_CORTEX_VAULT</h3>
            <p className="text-[7px] font-mono text-purple-400 font-black uppercase">Sync Time: {lastUpdate}</p>
          </div>
        </div>
        <button onClick={clearMemory} className="text-[7px] text-rose-500 font-black uppercase hover:underline">Format_Cortex</button>
      </div>

      <div className="space-y-2 relative z-10 max-h-48 overflow-y-auto no-scrollbar">
        {memories.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-purple-500/5 border border-purple-500/10 rounded-2xl hover:border-purple-500/40 transition-all group animate-in slide-in-from-left-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-glow-purple group-hover:scale-125 transition-transform"></div>
            <span className="text-[10px] font-mono text-slate-100 uppercase tracking-tight font-medium">{m}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5">
        <p className="text-[9px] text-purple-300 font-mono italic uppercase leading-relaxed text-center">
          "Sultan, aapka har ek naya aadesh yahan turant save ho jata hai. Ab main kabhi nahi bhoolunga."
        </p>
      </div>
      
      <style>{`.shadow-glow-purple { box-shadow: 0 0 30px rgba(168, 85, 247, 0.15); }`}</style>
    </div>
  );
};

export default MemoryVault;