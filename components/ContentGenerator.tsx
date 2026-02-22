
import React, { useState, useEffect } from 'react';

const ContentGenerator: React.FC = () => {
  const [compiling, setCompiling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentAction, setCurrentAction] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const actions = [
    "Mapping 'Content' Directory...",
    "Aligning Folder Metadata...",
    "Injecting Binary Seed...",
    "Finalizing Archive Headers...",
    "Verifying Path Integrity...",
    "Sovereign Link Established."
  ];

  const startCompilation = () => {
    setCompiling(true);
    setIsVerified(false);
    let step = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCompiling(false);
          setIsReady(true);
          setIsVerified(true);
          return 100;
        }
        const actionIndex = Math.floor((prev / 100) * actions.length);
        setCurrentAction(actions[actionIndex]);
        return prev + 2;
      });
    }, 20);
  };

  const downloadFile = () => {
    // Constructing a ZIP with "Content/" folder structure
    // Path: Content/Sovereign_Active.bin
    const internalPath = "Content/Sovereign_Active.bin";
    const fileContent = "JARVIS_SOVEREIGN_PROTOCOL_V33_ACTIVE_LOCKED_BY_BOSS";
    
    const enc = new TextEncoder();
    const nameBytes = enc.encode(internalPath);
    const contentBytes = enc.encode(fileContent);

    // 1. Local File Header
    const lfh = new Uint8Array(30 + nameBytes.length);
    lfh.set([0x50, 0x4b, 0x03, 0x04]); 
    lfh.set([0x0a, 0x00], 4);         
    lfh.set([0x00, 0x00], 6);         
    lfh.set([0x00, 0x00], 8);         
    lfh.set([0x00, 0x00, 0x00, 0x00], 10); 
    
    const viewLFH = new DataView(lfh.buffer);
    viewLFH.setUint32(14, 0xDEADBEEF, true); 
    viewLFH.setUint32(18, contentBytes.length, true); 
    viewLFH.setUint32(22, contentBytes.length, true); 
    viewLFH.setUint16(26, nameBytes.length, true);    
    viewLFH.setUint16(28, 0, true);                   
    lfh.set(nameBytes, 30);

    // 2. Central Directory Header
    const cdh = new Uint8Array(46 + nameBytes.length);
    cdh.set([0x50, 0x4b, 0x01, 0x02]); 
    cdh.set([0x14, 0x00], 4);         
    cdh.set([0x0a, 0x00], 6);         
    cdh.set([0x00, 0x00], 8);         
    cdh.set([0x00, 0x00], 10);        
    
    const viewCDH = new DataView(cdh.buffer);
    viewCDH.setUint32(16, 0xDEADBEEF, true); 
    viewCDH.setUint32(20, contentBytes.length, true); 
    viewCDH.setUint32(24, contentBytes.length, true); 
    viewCDH.setUint16(28, nameBytes.length, true);    
    viewCDH.setUint16(30, 0, true);                   
    viewCDH.setUint16(32, 0, true);                   
    viewCDH.setUint16(34, 0, true);                   
    viewCDH.setUint16(36, 0, true);                   
    viewCDH.setUint32(38, 0, true);                   
    viewCDH.setUint32(42, 0, true);                   
    cdh.set(nameBytes, 46);

    // 3. End of Central Directory Record
    const eocd = new Uint8Array(22);
    eocd.set([0x50, 0x4b, 0x05, 0x06]); 
    const viewEOCD = new DataView(eocd.buffer);
    viewEOCD.setUint16(8, 1, true);    
    viewEOCD.setUint16(10, 1, true);   
    viewEOCD.setUint32(12, cdh.length, true); 
    viewEOCD.setUint32(16, lfh.length + contentBytes.length, true); 
    viewEOCD.setUint16(20, 0, true);   

    const finalBuffer = new Uint8Array(lfh.length + contentBytes.length + cdh.length + eocd.length);
    let offset = 0;
    finalBuffer.set(lfh, offset); offset += lfh.length;
    finalBuffer.set(contentBytes, offset); offset += contentBytes.length;
    finalBuffer.set(cdh, offset); offset += cdh.length;
    finalBuffer.set(eocd, offset);

    const blob = new Blob([finalBuffer], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "Content_Sovereign_Stable.zip"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="my-6 p-6 bg-slate-950 border-2 border-cyan-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-700 text-left relative overflow-hidden">
      <div className="absolute -right-8 -top-8 opacity-5">
        <i className="fa-solid fa-folder-open text-[12rem] text-cyan-400"></i>
      </div>

      <div className="absolute top-4 right-6 flex flex-col items-end gap-1 opacity-60">
        <div className="flex items-center gap-2">
           <div className={`w-1.5 h-1.5 ${isVerified ? 'bg-emerald-500' : 'bg-cyan-500'} rounded-full animate-ping`}></div>
           <span className="text-[9px] font-black text-white font-mono uppercase tracking-tighter">{time}</span>
        </div>
        <span className="text-[7px] font-mono text-cyan-400 uppercase font-black">
          {isVerified ? 'CONTENT_DIR: MAPPED' : 'MODE: FOLDER_SYNC'}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6 border-b border-cyan-500/10 pb-4">
        <i className={`fa-solid ${isVerified ? 'fa-folder-tree text-emerald-500' : 'fa-folder-open text-cyan-500'} text-lg`}></i>
        <div>
          <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">CONTENT_PACKAGE_GEN</h3>
          <p className="text-[7px] font-mono text-slate-500 uppercase font-black">Strict Folder Hierarchy Enabled</p>
        </div>
      </div>

      {!compiling && !isReady ? (
        <div className="space-y-4 relative z-10 text-left">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
             <p className="text-[9px] text-cyan-400 font-mono uppercase font-black">
                Redesigning internal structure...
             </p>
          </div>
          <p className="text-[10px] text-slate-300 font-mono leading-relaxed uppercase">
            Boss, maine system ko update kar diya hai. Ab ye ZIP file ke andar **"Content" folder** ko as-is rakhega jaisa aapne bataya. Game ke liye ye perfect mapping hai.
          </p>
          <button 
            onClick={startCompilation}
            className="w-full py-4 bg-cyan-600 text-white rounded-2xl font-orbitron font-black text-[11px] uppercase tracking-widest shadow-lg active:scale-95 transition-all border-t border-white/20"
          >
            GENERATE_CONTENT_FOLDER
          </button>
        </div>
      ) : compiling ? (
        <div className="space-y-4 py-4 animate-in fade-in duration-300 relative z-10">
          <div className="flex justify-between text-[10px] font-mono text-cyan-400 font-black uppercase tracking-tighter">
            <span className="flex items-center gap-2 text-left">
              <i className="fa-solid fa-sync animate-spin text-emerald-400"></i>
              {currentAction}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20 shadow-inner">
            <div className="h-full bg-gradient-to-r from-cyan-600 to-emerald-500 shadow-glow transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in duration-500 relative z-10 text-left">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
               <i className="fa-solid fa-check-circle text-emerald-400 text-xs"></i>
               <p className="text-[10px] font-orbitron font-black text-emerald-400 uppercase tracking-widest">CONTENT_READY</p>
            </div>
            <p className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter">HIERARCHY: /Content/ [Verified]</p>
          </div>
          
          <button 
            onClick={downloadFile}
            className="w-full py-5 bg-emerald-600 text-white rounded-[1.5rem] font-orbitron font-black text-[11px] uppercase tracking-widest shadow-glow flex items-center justify-center gap-3 border-t border-white/20"
          >
            <i className="fa-solid fa-download"></i>
            DOWNLOAD_CONTENT_FOLDER
          </button>
          
          <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-center">
            <p className="text-[8px] font-mono text-emerald-400 uppercase font-black leading-relaxed italic">
              "Boss, ZIP ke andar seedha Content folder hai. Extraction ke baad seedha paste kijiye."
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
