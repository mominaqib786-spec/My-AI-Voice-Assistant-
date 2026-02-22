import React, { useState, useEffect } from 'react';

interface Props {
  onVerified: () => void;
}

const BioScanner: React.FC<Props> = ({ onVerified }) => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("AWAITING_BIOMETRIC_INPUT");

  const startScan = () => {
    if (window.navigator.vibrate) window.navigator.vibrate([30, 50, 30]);
    setScanning(true);
    setStatus("ANALYZING_THERMAL_SIGNATURE");
    
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      setProgress(p);
      if (p === 30) setStatus("VERIFYING_GENETIC_MARKERS");
      if (p === 60) setStatus("MATCHING_MOMIN_AQIB_ENCRYPTION");
      if (p === 90) setStatus("DECRYPTING_SOVEREIGN_KEY");
      
      if (p >= 100) {
        clearInterval(interval);
        setStatus("ACCESS_GRANTED");
        if (window.navigator.vibrate) window.navigator.vibrate(100);
        setTimeout(onVerified, 800);
      }
    }, 40);
  };

  return (
    <div className="fixed inset-0 z-[4000000] bg-[#050505] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-emerald-900/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-xs">
        <div className="mb-12">
          <h1 className="text-xl font-orbitron font-black text-white tracking-[0.3em] uppercase mb-2">IMAN Sovereign</h1>
          <p className="text-[8px] font-mono text-emerald-500 uppercase tracking-widest">Ownership: Momin Aqib</p>
        </div>

        <div 
          onPointerDown={startScan}
          className={`relative w-48 h-64 mx-auto mb-12 rounded-3xl border-2 transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-6 ${scanning ? 'border-emerald-500 shadow-[0_0_50px_#10b98144]' : 'border-emerald-600 shadow-[0_0_30px_#10b98122]'}`}
        >
          {/* Scanning Line */}
          {scanning && (
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 shadow-[0_0_15px_#10b981] animate-scan-slow z-20"></div>
          )}
          
          <i className={`fa-solid ${scanning ? 'fa-fingerprint' : 'fa-hand-pointer'} text-6xl ${scanning ? 'text-emerald-500 animate-pulse' : 'text-emerald-600'}`}></i>
          
          <p className={`text-[10px] font-orbitron font-black uppercase tracking-widest ${scanning ? 'text-emerald-400' : 'text-slate-500'}`}>
            {scanning ? `${progress}%` : "Hold to Scan"}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-3">
             <div className={`w-1.5 h-1.5 rounded-full ${scanning ? 'bg-emerald-500' : 'bg-emerald-600'} animate-ping`}></div>
             <span className="text-[9px] font-mono text-white uppercase tracking-widest">{status}</span>
          </div>
          <p className="text-[7px] font-mono text-slate-700 uppercase">System v4.4.0-Final-Release</p>
        </div>
      </div>
    </div>
  );
};

export default BioScanner;