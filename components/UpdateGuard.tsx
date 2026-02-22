
import React, { useState, useEffect } from 'react';

const UpdateGuard: React.FC = () => {
  const [active, setActive] = useState(false);
  const [blockedCount, setBlockedCount] = useState(0);
  const [firewallLogs, setFirewallLogs] = useState<string[]>([]);
  
  const domains = [
    "cs.ingamecj.com",
    "version.pobg.com",
    "cloud.gsdk.com",
    "file-download.pubgmobile.com",
    "update.igamecj.com",
    "notice.pobg.com",
    "down.anticheat.com"
  ];

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setBlockedCount(prev => {
          if (prev < domains.length) {
            const next = prev + 1;
            setFirewallLogs(old => [`INTERCEPTED: ${domains[prev]} -> [REFUSED]`, ...old].slice(0, 5));
            return next;
          }
          return prev;
        });
      }, 800);
      return () => clearInterval(interval);
    }
  }, [active]);

  const copyHosts = () => {
    const hostText = domains.map(d => `127.0.0.1 ${d}`).join('\n');
    navigator.clipboard.writeText(hostText);
    alert("Boss, Update Block Config Copy Ho Gayi! \n\nAap ise MT Manager se /system/etc/hosts mein paste kar dein. Ab game update nahi mangega.");
  };

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-orange-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700 text-left relative overflow-hidden">
      {/* Background Pulse */}
      {active && (
        <div className="absolute inset-0 bg-orange-500/5 animate-pulse pointer-events-none"></div>
      )}

      <div className="flex items-center justify-between mb-4 border-b border-orange-500/10 pb-4">
        <div className="flex items-center gap-3">
          <i className={`fa-solid fa-user-shield ${active ? 'text-orange-500 animate-spin-slow' : 'text-slate-600'} text-lg transition-colors`}></i>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">UPDATE_FIREWALL_v4.4</h3>
            <p className="text-[7px] font-mono text-slate-500 uppercase">DNS Interception Protocol</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-[8px] font-black ${active ? 'bg-orange-600 text-white shadow-glow' : 'bg-slate-800 text-slate-500'} transition-all`}>
          {active ? 'FIREWALL_LOCKED' : 'OFFLINE'}
        </div>
      </div>

      {!active ? (
        <div className="space-y-4 relative z-10">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl">
            <p className="text-[10px] text-orange-400 font-mono leading-relaxed uppercase font-black">
              System Detection: Update Check Pending...
            </p>
          </div>
          <p className="text-[10px] text-slate-400 font-mono leading-relaxed uppercase">
            Boss, ye system game ke update request ko server tak pahunchne se bilkul rok dega. File lagane ke baad isey zaroor chalayein.
          </p>
          <button 
            onClick={() => setActive(true)}
            className="w-full py-4 bg-orange-600 text-white rounded-2xl font-orbitron font-black text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border-t border-white/20"
          >
            ACTIVATE_NEURAL_FIREWALL
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in duration-500 relative z-10">
          <div className="bg-black p-4 rounded-2xl border border-orange-500/20 font-mono text-[9px] min-h-[120px]">
            {firewallLogs.map((log, i) => (
              <div key={i} className="flex justify-between text-orange-400 mb-1 animate-in slide-in-from-left-2">
                <span>{`> ${log}`}</span>
              </div>
            ))}
            {blockedCount < domains.length ? (
              <div className="text-slate-700 animate-pulse mt-2">Scrambling Update Packets...</div>
            ) : (
              <div className="text-emerald-500 font-black mt-2 text-center border-t border-emerald-500/20 pt-2">
                [SYSTEM_STATUS: UPDATE_BLOCKED_PERMANENTLY]
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-3">
             <button 
                onClick={copyHosts}
                className="py-3 bg-slate-900 border border-orange-500/30 text-orange-400 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-copy"></i>
                COPY_CONFIG
              </button>
              <button 
                onClick={() => alert("Boss, Firewall Active hai. Ab game open karein, wo update nahi mangega.")}
                className="py-3 bg-orange-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-bolt"></i>
                TEST_SHIELD
              </button>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
        <p className="text-[9px] text-slate-400 font-mono leading-relaxed italic text-center uppercase">
          "Boss, isse game ko lagega ki server down hai, isliye wo <span className="text-white font-black">STABLE VERSION</span> par hi chalta rahega."
        </p>
      </div>
    </div>
  );
};

export default UpdateGuard;
