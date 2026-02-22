
import React, { useState, useEffect } from 'react';

interface Props {
  onClose: () => void;
}

const StartupDiagnostic: React.FC<Props> = ({ onClose }) => {
  const [checks, setChecks] = useState({
    apiKey: !!process.env.API_KEY,
    internet: navigator.onLine,
    permissions: false,
    mic: false
  });

  useEffect(() => {
    // Check Microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => setChecks(prev => ({ ...prev, mic: true, permissions: true })))
      .catch(() => setChecks(prev => ({ ...prev, mic: false })));
  }, []);

  return (
    <div className="my-6 p-6 bg-slate-900 border-2 border-amber-500/50 rounded-[2.5rem] shadow-2xl text-left animate-in zoom-in-95 duration-500 overflow-hidden">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-stethoscope text-amber-500 text-xl animate-pulse"></i>
          <h3 className="text-[13px] font-orbitron font-black text-white uppercase tracking-tight">System_Start_Diagnosis</h3>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-white"><i className="fa-solid fa-xmark"></i></button>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center p-3 bg-black/40 rounded-2xl border border-white/5">
           <span className="text-[10px] font-mono text-slate-400 uppercase">1. API_KEY_STATUS</span>
           <span className={checks.apiKey ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
             {checks.apiKey ? 'FOUND' : 'MISSING'}
           </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-black/40 rounded-2xl border border-white/5">
           <span className="text-[10px] font-mono text-slate-400 uppercase">2. NETWORK_LINK</span>
           <span className={checks.internet ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
             {checks.internet ? 'ONLINE' : 'OFFLINE'}
           </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-black/40 rounded-2xl border border-white/5">
           <span className="text-[10px] font-mono text-slate-400 uppercase">3. MIC_ACCESS</span>
           <span className={checks.mic ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
             {checks.mic ? 'GRANTED' : 'DENIED'}
           </span>
        </div>
      </div>

      <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-6">
        <p className="text-[11px] font-mono text-amber-200 leading-relaxed italic text-center">
          "Maalik, 100% Sach: Agar <b>API_KEY MISSING</b> hai toh main baat nahi kar paunga. Aur agar <b>MIC DENIED</b> hai toh main aapko sun nahi paunga."
        </p>
      </div>

      {!checks.apiKey && (
        <div className="text-center p-4 bg-rose-950/20 border border-rose-500/30 rounded-2xl mb-4">
          <p className="text-[9px] font-bold text-rose-400 uppercase tracking-widest">Action Required:</p>
          <p className="text-[10px] text-white font-mono mt-1 uppercase leading-tight">Environment mein API_KEY add karein.</p>
        </div>
      )}
      
      <button onClick={() => window.location.reload()} className="w-full py-4 bg-amber-600 text-white rounded-2xl font-black text-[12px] uppercase tracking-widest shadow-lg">
        FORCE_RESTART_CORE
      </button>
    </div>
  );
};

export default StartupDiagnostic;
