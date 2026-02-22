
import React, { useState, useEffect } from 'react';

const HackingNeuralLink: React.FC = () => {
  const [stream, setStream] = useState<string[]>([]);
  
  useEffect(() => {
    const codes = [
      "BYPASSING_FIREWALL...",
      "SCANNING_OPEN_PORTS...",
      "EXTRACTING_SALT_HASH...",
      "INJECTING_PAYLOAD_V5...",
      "NULLIFYING_SSL_PINNING...",
      "SPOOFING_MAC_ADDRESS...",
      "ESTABLISHING_VPN_TUNNEL..."
    ];
    let i = 0;
    const interval = setInterval(() => {
      setStream(prev => [codes[i % codes.length], ...prev].slice(0, 5));
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-600 rounded-[2.5rem] shadow-[0_0_40px_rgba(16,185,129,0.2)] animate-in zoom-in-95 duration-700 relative overflow-hidden text-left">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center border border-emerald-500/30">
            <i className="fa-solid fa-headset text-emerald-500 animate-pulse"></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">VOICE_WISDOM_BRIDGE</h3>
            <p className="text-[7px] font-mono text-emerald-600 uppercase font-black">Link State: DIVINE_LATENCY</p>
          </div>
        </div>
        <div className="px-2 py-1 bg-emerald-600 rounded text-[7px] text-white font-black animate-bounce">REAL-TIME</div>
      </div>

      <div className="space-y-3 relative z-10">
        {stream.map((line, idx) => (
          <div key={idx} className="flex items-center gap-3 font-mono text-[9px] text-emerald-400 opacity-80 animate-in slide-in-from-left-2">
            <span className="text-emerald-700">{">>" }</span>
            <span>{line}</span>
            {idx === 0 && <div className="w-1 h-3 bg-emerald-500 animate-pulse"></div>}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
        <p className="text-[10px] font-mono text-slate-300 uppercase leading-relaxed italic text-center">
          "Sultan, <span className="text-white font-black underline">Voice AI wisdom-ready hai</span>. Aap sirf sawal karein ya hidayat puchein, main execute karunga."
        </p>
      </div>
    </div>
  );
};

export default HackingNeuralLink;
