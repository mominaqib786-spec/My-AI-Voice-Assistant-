
import React from 'react';

interface Props {
  onModuleSelect: (mod: string) => void;
  activeModule: string | null;
}

const NeuralDashboard: React.FC<Props> = ({ onModuleSelect, activeModule }) => {
  const modules = [
    { id: 'wealth', name: 'Zakat & Charity', icon: 'fa-hand-holding-heart', color: 'emerald' },
    { id: 'security', name: 'Spiritual Shield', icon: 'fa-shield-halved', color: 'emerald' },
    { id: 'iot', name: 'Daily Sunnah', icon: 'fa-kaaba', color: 'emerald' }
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {modules.map((m) => (
        <button
          key={m.id}
          onClick={() => onModuleSelect(m.id)}
          className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all active:scale-95 border ${
            activeModule === m.id 
            ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
            : 'bg-[#161616] border-white/5 text-slate-500 hover:border-white/10 hover:text-slate-300'
          }`}
        >
          <i className={`fa-solid ${m.icon} text-lg mb-2`}></i>
          <span className="text-[9px] font-black uppercase tracking-widest">{m.name}</span>
        </button>
      ))}
    </div>
  );
};

export default NeuralDashboard;
