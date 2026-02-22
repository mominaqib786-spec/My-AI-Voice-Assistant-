
import React from 'react';

interface Module {
  id: string;
  name: string;
  status: 'LOCKED' | 'SYNCED' | 'OVERRIDDEN';
  icon: string;
  uri?: string;
  fallback?: string;
}

interface Props {
  onLaunch: (uri: string, fallback: string, name: string) => void;
}

const SystemMatrix: React.FC<Props> = ({ onLaunch }) => {
  const modules: Module[] = [
    { id: 'com.android.settings', name: 'SETTINGS', status: 'SYNCED', icon: 'fa-gear', uri: 'intent:#Intent;action=android.settings.SETTINGS;end', fallback: '#' },
    { id: 'com.whatsapp', name: 'WHATSAPP', status: 'OVERRIDDEN', icon: 'fa-whatsapp', uri: 'whatsapp://send', fallback: 'https://web.whatsapp.com' },
    { id: 'com.google.android.youtube', name: 'YOUTUBE', status: 'SYNCED', icon: 'fa-youtube', uri: 'vnd.youtube://', fallback: 'https://www.youtube.com' },
    { id: 'com.android.chrome', name: 'BROWSER', status: 'SYNCED', icon: 'fa-chrome', uri: 'googlechrome://', fallback: 'https://www.google.com' },
    { id: 'com.pubg.imobile', name: 'BGMI', status: 'SYNCED', icon: 'fa-crosshairs', uri: 'pbgm://', fallback: '#' },
  ];

  return (
    <div className="my-4 p-4 bg-slate-950/80 border border-cyan-500/20 rounded-2xl shadow-xl animate-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[9px] font-orbitron font-black text-cyan-400 uppercase tracking-widest">SYSTEM_MATRIX</h3>
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {modules.map((mod) => (
          <button 
            key={mod.id} 
            onClick={() => onLaunch(mod.uri || '#', mod.fallback || '#', mod.name)}
            className="p-3 rounded-xl bg-black border border-slate-800 hover:border-cyan-500/50 active:scale-95 transition-all text-left"
          >
            <div className="flex items-center gap-2 mb-1">
              <i className={`fa-solid ${mod.icon} text-xs text-cyan-400`}></i>
              <span className="text-[8px] font-black font-orbitron text-white uppercase tracking-tighter truncate">{mod.name}</span>
            </div>
            <span className={`text-[6px] font-mono font-black px-1 py-0.5 rounded ${
                mod.status === 'OVERRIDDEN' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'
              }`}>
                {mod.status}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SystemMatrix;
