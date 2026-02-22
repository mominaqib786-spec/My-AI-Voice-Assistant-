
import React, { useState } from 'react';

const IoTController: React.FC = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Home_Lights', status: 'OFF', icon: 'fa-lightbulb', color: 'text-amber-400' },
    { id: 2, name: 'Main_Gate', status: 'LOCKED', icon: 'fa-door-closed', color: 'text-rose-500' },
    { id: 3, name: 'HVAC_System', status: 'IDLE', icon: 'fa-fan', color: 'text-cyan-400' },
    { id: 4, name: 'Server_Array', status: 'ACTIVE', icon: 'fa-server', color: 'text-emerald-500' }
  ]);

  const toggleDevice = (id: number) => {
    setDevices(prev => prev.map(d => {
      if (d.id === id) {
        const newStatus = d.status === 'ACTIVE' || d.status === 'ON' ? 'OFF' : (d.id === 2 ? 'UNLOCKED' : 'ACTIVE');
        return { ...d, status: newStatus };
      }
      return d;
    }));
  };

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-indigo-900/50 rounded-[2.5rem] shadow-glow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-house-signal text-indigo-500 text-lg"></i>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">OMEGA_IOT_HUB</h3>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-glow"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {devices.map(d => (
          <button 
            key={d.id} 
            onClick={() => toggleDevice(d.id)}
            className="p-4 rounded-2xl bg-black border border-white/5 hover:border-indigo-500/50 transition-all flex flex-col items-center gap-2"
          >
            <i className={`fa-solid ${d.icon} ${d.color} text-xl`}></i>
            <span className="text-[9px] font-black text-white uppercase font-orbitron">{d.name}</span>
            <span className="text-[7px] font-mono text-slate-500 uppercase">{d.status}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IoTController;
