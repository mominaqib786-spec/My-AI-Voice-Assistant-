
import React, { useState, useEffect, useRef } from 'react';

const TerminalEmulator: React.FC = () => {
  const [lines, setLines] = useState<string[]>(["[SYSTEM] Initializing JARVIS Kernel...", "[SYSTEM] Booting secure shell..."]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands = [
    "apt-get install neural-link-v4",
    "nmap -v -A 127.0.0.1",
    "ssh -i id_rsa boss@sovereign-core",
    "chmod +x auto_exploit.sh",
    "grep -r 'PASSWORD' /var/www/",
    "python3 bypass_firewall.py --stealth",
    "msfconsole -q -x 'use auxiliary/scanner/portscan/tcp'",
    "rm -rf /logs/last_trace.log",
    "systemctl restart consciousness-engine"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCmd = commands[Math.floor(Math.random() * commands.length)];
      setLines(prev => [...prev, `root@jarvis:~# ${randomCmd}`, `[SUCCESS] Operation completed at ${new Date().toLocaleTimeString()}`].slice(-12));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [lines]);

  return (
    <div className="my-6 p-4 bg-[#0a0a0a] border-2 border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative font-mono">
      <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-rose-500"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
        </div>
        <span className="text-[9px] text-slate-500 uppercase tracking-widest ml-2">SYSTEM_TERMINAL_V1.0</span>
      </div>
      <div ref={scrollRef} className="h-40 overflow-y-auto no-scrollbar space-y-1">
        {lines.map((line, i) => (
          <div key={i} className={`text-[10px] ${line.startsWith('[') ? 'text-cyan-500' : 'text-slate-300'}`}>
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-emerald-500 text-[10px]">root@jarvis:~$</span>
          <div className="w-1.5 h-3 bg-white animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default TerminalEmulator;
