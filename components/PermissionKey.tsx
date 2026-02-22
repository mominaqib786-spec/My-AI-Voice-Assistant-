
import React, { useState } from 'react';

const PermissionKey: React.FC = () => {
  const [keyState, setKeyState] = useState<'IDLE' | 'GENERATING' | 'READY'>('IDLE');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  const generateKey = () => {
    setKeyState('GENERATING');
    let logs = [
      "Accessing Kernel Shell...",
      "Targeting: game_patch_...20774.pak",
      "Encoding RR-Mask...",
      "Success: Command ready for terminal."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setTerminalOutput(prev => [...prev, `> ${logs[i]}`]);
        i++;
      } else {
        clearInterval(interval);
        setKeyState('READY');
      }
    }, 400);
  };

  const copyCommand = () => {
    const cmd = "chmod 444 /sdcard/Android/data/com.pubg.imobile/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/Paks/game_patch_4.2.0.20774.pak";
    navigator.clipboard.writeText(cmd);
    alert("Boss, Command copy ho gaya! \n\nMT Manager -> Terminal -> Paste -> Enter.");
  };

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-fuchsia-600 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between mb-6 border-b border-fuchsia-500/10 pb-4">
        <div className="flex items-center gap-3 text-left">
          <i className="fa-solid fa-code text-fuchsia-500 animate-pulse text-lg"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">TERMINAL_RR_COMMAND</h3>
        </div>
        <div className="text-[8px] font-mono text-fuchsia-400 font-black uppercase">v9.5_SHIELD</div>
      </div>

      {keyState === 'IDLE' ? (
        <div className="space-y-4 text-left">
          <p className="text-[10px] text-slate-400 font-mono uppercase leading-relaxed">
             "Boss, ye command file ko **READ-ONLY (RR)** kar dega taaki game usey delete na kar sake."
          </p>
          <button 
            onClick={generateKey}
            className="w-full py-4 bg-fuchsia-600 text-white rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-glow active:scale-95 transition-all"
          >
            GENERATE_LOCK_COMMAND
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-black/90 p-4 rounded-2xl border border-fuchsia-500/30 font-mono text-[10px] text-fuchsia-400 h-32 overflow-y-auto no-scrollbar text-left">
            {terminalOutput.map((log, i) => (
              <div key={i} className="mb-1">{log}</div>
            ))}
          </div>

          {keyState === 'READY' && (
            <button 
              onClick={copyCommand}
              className="w-full py-5 bg-slate-900 border-2 border-fuchsia-500 text-fuchsia-400 rounded-2xl font-orbitron font-black text-[11px] uppercase tracking-widest hover:bg-fuchsia-500/10 transition-all flex items-center justify-center gap-3 shadow-glow"
            >
              <i className="fa-solid fa-copy"></i>
              COPY_TERMINAL_COMMAND
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PermissionKey;
