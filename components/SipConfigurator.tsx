
import React, { useState } from 'react';

const SipConfigurator: React.FC = () => {
  const [server, setServer] = useState("");
  const [isLinking, setIsLinking] = useState(false);
  const [status, setStatus] = useState("AWAITING_INJECTION");

  const handleInject = () => {
    if (!server) return;
    setIsLinking(true);
    setStatus("TESTING_HANDSHAKE...");
    
    setTimeout(() => {
      setStatus("ERROR: AUTHENTICATION_FAILED (Invalid Credentials)");
      setIsLinking(false);
    }, 2500);
  };

  return (
    <div className="my-6 p-6 bg-black border-2 border-cyan-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95">
      <div className="flex items-center justify-between mb-6 border-b border-cyan-500/20 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-plug-circle-bolt text-cyan-500 animate-pulse"></i>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">SIP_TRUNK_INJECTOR</h3>
            <p className="text-[7px] font-mono text-cyan-400 uppercase">Manual Reality Link v1.0</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed text-left">
          Boss, agar aapke paas koi <span className="text-white font-black">Cracked SIP Server</span> hai, toh uska endpoint yahan inject karein. Isse humari call <span className="text-emerald-400 font-black">REAL GSM</span> lines par jayegi.
        </p>

        <div className="space-y-2">
          <input 
            type="text"
            value={server}
            onChange={(e) => setServer(e.target.value)}
            placeholder="sip.server.com:5060"
            className="w-full bg-zinc-900 border border-cyan-500/30 rounded-xl px-4 py-3 text-xs font-mono text-cyan-400 focus:outline-none focus:border-cyan-500"
          />
          <div className="grid grid-cols-2 gap-2">
             <input type="text" placeholder="Username" className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-mono text-white outline-none" />
             <input type="password" placeholder="Password" className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-mono text-white outline-none" />
          </div>
        </div>

        <button 
          onClick={handleInject}
          disabled={isLinking}
          className={`w-full py-4 rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all ${isLinking ? 'bg-zinc-800 text-slate-500' : 'bg-cyan-600 text-white shadow-glow'}`}
        >
          {isLinking ? 'INJECTING_PAYLOAD...' : 'ESTABLISH_REAL_UPLINK'}
        </button>

        <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl flex items-center justify-between">
           <span className="text-[8px] font-mono text-slate-500 uppercase font-black tracking-widest">System_Status:</span>
           <span className={`text-[8px] font-black font-mono uppercase ${status.includes('ERROR') ? 'text-rose-500' : 'text-cyan-500'}`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default SipConfigurator;
