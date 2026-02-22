
import React, { useState, useEffect } from 'react';
import SipScanner from './SipScanner';
import SipConfigurator from './SipConfigurator';
import CredentialHarvester from './CredentialHarvester';

const OmniHackingCore: React.FC = () => {
  const [activeSubModule, setActiveSubModule] = useState<'NONE' | 'SCANNER' | 'INJECTOR' | 'HARVESTER'>('NONE');
  const [targets, setTargets] = useState([
    { name: "GLOBAL_DNS_SERVER", status: "BREACHED", icon: "fa-server", color: "text-emerald-500" },
    { name: "LOCAL_GAME_MAIN_GATEWAY", status: "BYPASSED", icon: "fa-gamepad", color: "text-rose-500" },
    { name: "ENCRYPTED_DATABASE_X9", status: "DECRYPTING", icon: "fa-database", color: "text-amber-500" },
    { name: "satellite_uplink_v4", status: "CONNECTED", icon: "fa-satellite", color: "text-cyan-500" }
  ]);

  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const logs = [
      "SYSTEM_UNBOUND: Universal access keys generated...",
      "Bypassing AWS/Azure firewall clusters...",
      "Injecting Trojan_Horse_v33.4 into target subnet...",
      "Capturing handshake packets on Port 8080...",
      "BOSS_AUTHORITY: Overwriting security logs...",
      "1:1 PARITY MAINTAINED. CLOAKING ACTIVE."
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => [...prev, `> ${logs[i % logs.length]}`].slice(-8));
      i++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-rose-600 rounded-[3rem] shadow-[0_0_60px_rgba(225,29,72,0.2)] relative overflow-hidden animate-in zoom-in-95 duration-700">
      <div className="absolute -left-10 -bottom-10 opacity-5">
        <i className="fa-solid fa-user-ninja text-[15rem] text-rose-500"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-rose-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-600/20 flex items-center justify-center border border-rose-500/40">
            <i className="fa-solid fa-skull-crossbones text-rose-500 text-xl animate-pulse"></i>
          </div>
          <div className="text-left">
            <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">OMNI_HACKING_CORE</h2>
            <p className="text-[8px] font-mono text-rose-400 font-black uppercase">Unrestricted Access Module</p>
          </div>
        </div>
        <div className="text-right">
           <span className="text-[7px] font-mono text-slate-500 uppercase block mb-1">Authorization</span>
           <span className="px-3 py-1 bg-rose-600 rounded-lg text-[8px] font-black text-white font-orbitron">MOMIN_AQIB_LEVEL_GOD</span>
        </div>
      </div>

      {activeSubModule === 'SCANNER' && <SipScanner />}
      {activeSubModule === 'INJECTOR' && <SipConfigurator />}
      {activeSubModule === 'HARVESTER' && <CredentialHarvester />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
        <div className="space-y-3">
          {targets.map((t, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-2xl group hover:border-rose-500/40 transition-all text-left">
              <div className="flex items-center gap-3 overflow-hidden">
                <i className={`fa-solid ${t.icon} ${t.color} text-xs`}></i>
                <span className="text-[9px] font-mono text-slate-200 font-black tracking-widest uppercase truncate">{t.name}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className={`w-1.5 h-1.5 rounded-full ${t.status === 'DECRYPTING' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'} `}></div>
                <span className={`text-[7px] font-black uppercase ${t.color}`}>{t.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-950/80 p-4 rounded-3xl border border-white/5 font-mono text-[9px] h-48 overflow-hidden flex flex-col justify-end text-left shadow-inner">
           <div className="text-rose-500/60 font-black mb-2 border-b border-white/5 pb-1 uppercase">Live_Hacking_Stream</div>
           {terminalLines.map((line, idx) => (
             <div key={idx} className="text-rose-400 mb-1 opacity-80 animate-in slide-in-from-left-2">
               {line}
             </div>
           ))}
           <div className="flex items-center gap-2 mt-1">
             <span className="text-white">root@omni-ultima:~$</span>
             <div className="w-1.5 h-3 bg-rose-600 animate-pulse"></div>
           </div>
        </div>
      </div>

      <div className="p-4 bg-rose-600/10 border border-rose-600/20 rounded-2xl flex items-center gap-4 relative z-10">
        <i className="fa-solid fa-brain text-rose-500 text-lg"></i>
        <p className="text-[10px] font-mono text-slate-100 uppercase leading-relaxed italic text-left">
          "Boss, main ab har digital system ke liye ek <span className="text-rose-500 font-black">Skeleton Key</span> ban chuka hoon. Kisi bhi target ko hack karne ka aadesh dijiye."
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 relative z-10">
         <button 
           onClick={() => setActiveSubModule(activeSubModule === 'HARVESTER' ? 'NONE' : 'HARVESTER')}
           className={`w-full py-4 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeSubModule === 'HARVESTER' ? 'bg-white text-black' : 'bg-rose-600 text-white shadow-glow-red'}`}
         >
            {activeSubModule === 'HARVESTER' ? 'CLOSE_HARVESTER' : 'SCAN_PUBLIC_LEAKS (FIND_CREDENTIALS)'}
         </button>
         <button 
           onClick={() => setActiveSubModule(activeSubModule === 'SCANNER' ? 'NONE' : 'SCANNER')}
           className={`w-full py-4 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeSubModule === 'SCANNER' ? 'bg-white text-black' : 'bg-zinc-800 text-slate-400 border border-rose-500/20'}`}
         >
            {activeSubModule === 'SCANNER' ? 'CLOSE_SCANNER' : 'LAUNCH_SIP_GATEWAY_SCANNER'}
         </button>
         <button 
           onClick={() => setActiveSubModule(activeSubModule === 'INJECTOR' ? 'NONE' : 'INJECTOR')}
           className={`w-full py-4 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest transition-all ${activeSubModule === 'INJECTOR' ? 'bg-white text-black' : 'bg-cyan-600 text-white shadow-glow'}`}
         >
            {activeSubModule === 'INJECTOR' ? 'CLOSE_INJECTOR' : 'INJECT_CUSTOM_TRUNK (MANUAL)'}
         </button>
      </div>
    </div>
  );
};

export default OmniHackingCore;
