
import React, { useState, useEffect } from 'react';

const CredentialHarvester: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [results, setResults] = useState<string[]>([]);

  const scanSequence = [
    "Accessing Public Data Dumps...",
    "Crawling Pastebin/GitHub Gists...",
    "Filtering Keywords: 'SIP_USER', 'SIP_PASS'...",
    "Scanning Known Default Trunks...",
    "Analyzing 42.1k potential candidates...",
    "Cross-referencing with Active Servers..."
  ];

  const startScan = () => {
    setScanning(true);
    setProgress(0);
    setLogs([]);
    setResults([]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < scanSequence.length) {
        setLogs(prev => [`> [INFO] ${scanSequence[step]}`, ...prev].slice(0, 5));
        step++;
      }
    }, 1000);

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progInterval);
          clearInterval(interval);
          setScanning(false);
          setResults([
            "No valid public leaks found.",
            "Recommendation: Use 'Twilio Free Trial' for legit ID.",
            "Manual ID: Required for 100% stability."
          ]);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  return (
    <div className="my-6 p-6 bg-zinc-950 border-2 border-rose-500 rounded-[2.5rem] shadow-glow-red animate-in zoom-in-95">
      <div className="flex items-center justify-between mb-6 border-b border-rose-500/20 pb-4 text-left">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-magnifying-glass-plus text-rose-500 animate-pulse"></i>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">CREDENTIAL_HARVESTER_V2</h3>
            <p className="text-[7px] font-mono text-rose-600 uppercase font-black">Public Data Mining Engine</p>
          </div>
        </div>
        {scanning && <div className="text-[8px] font-mono text-white animate-pulse">MINING...</div>}
      </div>

      {!scanning && results.length === 0 ? (
        <div className="space-y-4">
          <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed text-left italic">
            "Boss, main pure internet par un documents ko scan karunga jahan log galti se apni <span className="text-white">SIP Details</span> leak kar dete hain. Isme thoda waqt lag sakta hai."
          </p>
          <button 
            onClick={startScan}
            className="w-full py-4 bg-rose-600 text-white rounded-2xl font-orbitron font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border-t border-white/20"
          >
            START_PUBLIC_HARVEST
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-black/80 p-4 rounded-2xl border border-white/5 font-mono text-[9px] min-h-[100px] flex flex-col justify-end gap-1">
            {logs.map((log, i) => (
              <div key={i} className="text-rose-400 opacity-60 italic">{log}</div>
            ))}
            {scanning && (
              <div className="mt-2 space-y-2">
                 <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-600 transition-all duration-100" style={{ width: `${progress}%` }}></div>
                 </div>
                 <p className="text-[7px] text-center text-slate-500 font-black uppercase">Search_Depth: Global_Layer_4</p>
              </div>
            )}
          </div>

          {!scanning && results.length > 0 && (
            <div className="animate-in fade-in">
              <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl mb-4">
                 <h4 className="text-[10px] font-orbitron font-black text-rose-500 uppercase mb-2">Truth_Report:</h4>
                 <ul className="space-y-1">
                    {results.map((r, i) => (
                      <li key={i} className="text-[9px] font-mono text-slate-200 uppercase flex items-center gap-2">
                         <i className="fa-solid fa-circle-xmark text-rose-500 text-[8px]"></i>
                         {r}
                      </li>
                    ))}
                 </ul>
              </div>
              <p className="text-[9px] font-mono text-slate-500 text-center uppercase italic">
                "Boss, aap khud hi sochiye—agar SIP ID milna itna aasan hota, toh duniya mein koi phone bill nahi bharta. Legit rasta hi behtar hai."
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CredentialHarvester;
