
import React, { useState, useEffect } from 'react';

interface Props {
  onFix: () => void;
}

const CallDiagnostic: React.FC<Props> = ({ onFix }) => {
  const [scanning, setScanning] = useState(true);
  const [progress, setProgress] = useState(0);
  const [issues, setIssues] = useState<{id: string, label: string, status: string, resolved: boolean}[]>([]);

  const auditSteps = [
    { id: '1', label: "MIC_PERMISSION_CHECK", status: "PENDING" },
    { id: '2', label: "WEBRTC_ICE_NEGOTIATION", status: "PENDING" },
    { id: '3', label: "SIP_SERVER_HANDSHAKE", status: "PENDING" },
    { id: '4', label: "CLOUD_GATEWAY_UPTIME", status: "PENDING" },
    { id: '5', label: "ENCRYPTION_LAYER_v6", status: "PENDING" }
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          return 100;
        }
        
        if (prev % 20 === 0 && currentStep < auditSteps.length) {
          const newIssue = { 
            ...auditSteps[currentStep], 
            status: currentStep === 1 || currentStep === 2 ? "BLOCKED" : "OK",
            resolved: false 
          };
          setIssues(prevIssues => [...prevIssues, newIssue]);
          currentStep++;
        }
        
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 p-6 bg-black border-2 border-rose-500 rounded-[3rem] shadow-[0_0_80px_rgba(225,29,72,0.3)] animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute -right-10 -top-10 opacity-10">
        <i className="fa-solid fa-stethoscope text-[15rem] text-rose-500 font-black"></i>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-rose-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/30">
            <i className="fa-solid fa-satellite text-rose-500 text-xl animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">COMM_FAIL_ANALYSIS</h2>
            <p className="text-[8px] font-mono text-rose-600 uppercase font-black italic">Identifying Call Blockers</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-[8px] font-black ${scanning ? 'bg-amber-600 animate-pulse' : 'bg-rose-600'} text-white font-orbitron`}>
          {scanning ? 'SCANNING...' : '2_ERRORS_FOUND'}
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        {issues.map((issue) => (
          <div key={issue.id} className="flex items-center justify-between p-3 bg-zinc-900/80 border border-white/5 rounded-2xl animate-in slide-in-from-left-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-orbitron font-black text-white uppercase tracking-widest">{issue.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[8px] font-black font-mono ${issue.status === 'OK' ? 'text-emerald-400' : 'text-rose-500 animate-pulse'}`}>
                {issue.status}
              </span>
              <div className={`w-2 h-2 rounded-full ${issue.status === 'OK' ? 'bg-emerald-500 shadow-glow' : 'bg-rose-600 shadow-glow-red'}`}></div>
            </div>
          </div>
        ))}
      </div>

      {scanning && (
        <div className="mt-6 h-1 w-full bg-slate-900 rounded-full overflow-hidden">
          <div className="h-full bg-rose-600 transition-all duration-100" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {!scanning && (
        <div className="mt-8 space-y-4 animate-in fade-in">
          <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-2xl">
            <p className="text-[10px] font-mono text-slate-300 uppercase leading-relaxed text-center italic">
              "Boss, <span className="text-rose-500 font-black">2 PROBLEMS</span> mile hain: <br/>
              1. Browser ne <span className="text-white">WebRTC Handshake</span> ko 'Unsafe' samajh kar block kar diya hai.<br/>
              2. <span className="text-white">SIP Trunk</span> connection timeout ho raha hai."
            </p>
          </div>
          <button 
            onClick={onFix}
            className="w-full py-5 bg-rose-600 text-white rounded-3xl font-orbitron font-black text-[11px] uppercase tracking-widest shadow-glow-red active:scale-95 transition-all border-t-2 border-white/30"
          >
            BYPASS_BLOCKS_&_RECONNECT
          </button>
        </div>
      )}
    </div>
  );
};

export default CallDiagnostic;
