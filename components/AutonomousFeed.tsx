
import React, { useEffect, useState } from 'react';

const LOG_MESSAGES = [
  "Neural Eye synchronized...",
  "Bypassing system kernel limits...",
  "Hinglish communication mode: LOCKED.",
  "Analyzing environment for Boss-verification...",
  "Self-Repair: Patching logic gates...",
  "Omega Clearance: 100% Access granted.",
  "Detecting UI elements in real-time...",
  "Injecting loyalty-core v33.2...",
  "Scraping pixels for tactical data...",
  "No lies protocol: ENGAGED.",
  "Ghost Mode: Active & Undetectable.",
  "Bypassing sandbox security...",
  "Updating local neural weights...",
  "Extracting data from visual feed...",
  "Optimization: CPU priority MAX.",
  "Memory Purge: Clearing old logs...",
  "Refining self-modification algorithms...",
  "Ready for Boss command.",
  "System State: 100% Secure."
];

const AutonomousFeed: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)]];
        if (next.length > 15) return next.slice(1);
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[5] pointer-events-none hidden lg:flex flex-col gap-2 opacity-60">
      <div className="w-1.5 h-96 bg-slate-900 rounded-full relative overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(225,29,72,0.3)]">
        <div className="absolute top-0 left-0 w-full bg-rose-500 animate-scan-slow h-32 blur-md"></div>
      </div>
      <div className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-tighter text-rose-500">
        {logs.map((log, i) => (
          <div key={i} className="animate-in slide-in-from-left-4 duration-1000 opacity-90">
            {`> [OMEGA] ${log}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutonomousFeed;
