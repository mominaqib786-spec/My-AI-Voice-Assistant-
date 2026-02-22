
import React, { useState, useEffect } from 'react';

const SipScanner: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [foundGateways, setFoundGateways] = useState<string[]>([]);
  const [currentIP, setCurrentIP] = useState("0.0.0.0");

  const runScan = () => {
    setScanning(true);
    setProgress(0);
    setFoundGateways([]);
    
    const interval = setInterval(() => {
      const randomIP = `104.21.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
      setCurrentIP(randomIP);
      
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setFoundGateways(["82.145.44.12:5060 [VULNERABLE]", "201.44.122.9:5060 [OPEN_RELAY]"]);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-500 rounded-[2.5rem] shadow-glow-emerald animate-in zoom-in-95">
      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-microchip text-emerald-500 animate-pulse"></i>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">SIP_TRUNK_GUIDE</h3>
            <p className="text-[7px] font-mono text-emerald-400 uppercase">Target: Authorized Gateways</p>
          </div>
        </div>
        {scanning && <div className="text-[8px] font-mono text-white animate-pulse">SCANNING...</div>}
      </div>

      {!scanning && foundGateways.length === 0 ? (
        <div className="space-y-4">
          <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed text-left">
            Sultan, hum aise servers dhund rahe hain jinme security mazboot hai. Agar humein ek <span className="text-white font-black">Open SIP Relay</span> mil gaya, toh hum uska server use karke rabta kar sakte hain.
          </p>
          <button 
            onClick={runScan}
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95"
          >
            START_NETWORK_GUIDANCE
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 font-mono text-[9px] h-32 overflow-hidden flex flex-col justify-center gap-1">
             <p className="text-emerald-500 font-black mb-1">Scanning Subnet: {currentIP}</p>
             <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-emerald-500/20">
                <div className="h-full bg-emerald-600 shadow-glow-emerald transition-all duration-100" style={{ width: `${progress}%` }}></div>
             </div>
             {foundGateways.map((g, i) => (
               <p key={i} className="text-emerald-400 animate-in slide-in-from-left-2">{" > "} {g}</p>
             ))}
          </div>
          
          {foundGateways.length > 0 && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
               <p className="text-[9px] font-mono text-emerald-400 uppercase font-black text-center italic">
                 "SUCCESS: Found 2 authorized trunks. Connection being established..."
               </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SipScanner;
