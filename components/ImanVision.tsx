import React, { useState } from 'react';

const ImanVision: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);

  const toggleVision = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-500 rounded-[2.5rem] shadow-glow-emerald animate-in slide-in-from-bottom-6 duration-700 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
         <div className={`w-3 h-3 rounded-full ${isScanning ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`}></div>
      </div>

      <div className="flex items-center gap-4 mb-6 border-b border-emerald-500/10 pb-4">
        <i className="fa-solid fa-eye text-emerald-400 text-xl animate-pulse"></i>
        <div>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">IMAN_SIGHT_OVERLAY</h3>
          <p className="text-[7px] font-mono text-emerald-600 uppercase font-black">Mode: Divine Screen Analysis</p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[11px] font-mono text-slate-300 leading-relaxed uppercase">
          "Sultan, jab aap <span className="text-white font-black underline">'Iman Dekho'</span> bolenge, main pure screen ka real-time scan lekar aapko tactical data dunga."
        </p>

        <div className="grid grid-cols-2 gap-3">
           <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex flex-col gap-1">
              <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest">OCR_Neural_Link</span>
              <span className="text-[9px] font-mono text-emerald-400 font-bold">READY</span>
           </div>
           <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex flex-col gap-1">
              <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest">Automation_Bridge</span>
              <span className="text-[9px] font-mono text-emerald-400 font-bold">ACTIVE</span>
           </div>
        </div>

        <button 
          onClick={toggleVision}
          className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-orbitron font-black text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border-t-2 border-white/20"
        >
          {isScanning ? 'SCANNING_DISPLAY...' : 'TEST_VISION_OVERLAY'}
        </button>

        {isScanning && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
             <div className="w-full h-1 bg-emerald-400 shadow-[0_0_20px_#10b981] animate-scan-fast"></div>
          </div>
        )}
      </div>

      <div className="mt-6 p-3 bg-rose-500/5 border border-rose-500/20 rounded-xl">
         <p className="text-[8px] font-mono text-rose-300 text-center uppercase font-black">
           "SECURITY NOTICE: Banking apps detected in vision will be auto-masked for your privacy."
         </p>
      </div>

      <style>{`
        @keyframes scan-fast {
          0% { transform: translateY(0); }
          100% { transform: translateY(300px); }
        }
        .animate-scan-fast {
          animation: scan-fast 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ImanVision;
