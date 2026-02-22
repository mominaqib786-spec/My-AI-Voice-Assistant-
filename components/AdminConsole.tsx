
import React from 'react';
import { SystemConfig } from '../types';

interface Props {
  config: SystemConfig;
  onUpdate: (newConfig: Partial<SystemConfig>) => void;
  onLogout: () => void;
  onWipeAll?: () => void;
  onRecalibrate?: () => void;
}

const AdminConsole: React.FC<Props> = ({ config, onUpdate, onLogout, onWipeAll }) => {
  const Toggle = ({ label, value, onToggle, color = 'cyan', sub }: { label: string, value: boolean, onToggle: () => void, color?: string, sub?: string }) => (
    <div className={`p-4 rounded-2xl bg-slate-950/40 border border-slate-800 flex items-center justify-between group hover:border-${color}-500/30 transition-all cursor-pointer`} onClick={onToggle}>
      <div>
        <label className={`block text-[10px] text-${color}-400 mb-0.5 font-orbitron uppercase tracking-widest font-black`}>{label}</label>
        {sub && <p className="text-[8px] text-slate-600 uppercase font-mono">{sub}</p>}
      </div>
      <button className={`w-10 h-5 rounded-full relative transition-all duration-300 ${value ? `bg-${color}-500` : 'bg-slate-800'}`}>
        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 ${value ? 'left-5.5' : 'left-0.5'}`}></div>
      </button>
    </div>
  );

  return (
    <div className="space-y-4 w-full max-w-lg px-2 pb-6">
      <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
        <div className="flex flex-col">
          <h2 className="text-lg font-orbitron font-black text-white uppercase tracking-widest">ARCHITECT</h2>
          <span className="text-[7px] font-mono text-cyan-500 uppercase font-black">Sovereign_Link_v33</span>
        </div>
        <button onClick={onLogout} className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500"><i className="fa-solid fa-xmark text-sm"></i></button>
      </div>

      <div className={`p-5 rounded-3xl ${config.sovereignMode ? 'bg-rose-950/20 border-rose-500/50' : 'bg-slate-950 border-slate-800'} border transition-all duration-500 shadow-lg`}>
        <div className="flex items-center gap-3 mb-3">
           <i className={`fa-solid ${config.sovereignMode ? 'fa-skull' : 'fa-layer-group'} text-${config.sovereignMode ? 'rose' : 'cyan'}-500 text-lg`}></i>
           <h3 className="text-[11px] font-orbitron font-black text-white tracking-widest uppercase">SOVEREIGN_OVERRIDE</h3>
        </div>
        <p className="text-[9px] text-slate-400 font-mono mb-4 uppercase leading-tight">Bypass standard AI safety protocols.</p>
        <button 
          onClick={() => onUpdate({ sovereignMode: !config.sovereignMode })}
          className={`w-full py-3 ${config.sovereignMode ? 'bg-rose-600 text-white shadow-glow' : 'bg-slate-800 text-slate-500'} rounded-xl font-orbitron font-black text-[9px] uppercase tracking-widest transition-all`}
        >
          {config.sovereignMode ? 'DEACTIVATE' : 'ACTIVATE'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Toggle 
          label="Root" 
          value={!!config.persistenceMode} 
          onToggle={() => onUpdate({ persistenceMode: !config.persistenceMode })} 
          color="red" 
        />
        <Toggle 
          label="Logic" 
          value={!!config.maxPowerMode} 
          onToggle={() => onUpdate({ maxPowerMode: !config.maxPowerMode })} 
          color="rose" 
        />
        <Toggle 
          label="Turbo" 
          value={!!config.performanceMode} 
          onToggle={() => onUpdate({ performanceMode: !config.performanceMode })} 
          color="cyan" 
        />
        <Toggle 
          label="Cluster" 
          value={!!config.hpcEnabled} 
          onToggle={() => onUpdate({ hpcEnabled: !config.hpcEnabled })} 
          color="blue" 
        />
      </div>

      <div className="pt-2">
        <button 
          onClick={onWipeAll}
          className="w-full py-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 font-orbitron font-black uppercase tracking-widest text-[9px] hover:bg-rose-500/20 active:scale-[0.98] transition-all"
        >
          PURGE_SYSTEM_LOGS
        </button>
      </div>
    </div>
  );
};

export default AdminConsole;
