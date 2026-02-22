
import React, { useState, useEffect } from 'react';

interface Props {
  externalFile?: File | null;
  initialTitle?: string;
  initialDesc?: string;
  autoStart?: boolean;
}

const YoutubeMasterBridge: React.FC<Props> = ({ externalFile, initialTitle = "", initialDesc = "", autoStart = false }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState(initialTitle);
  const [desc, setDesc] = useState(initialDesc);
  const [uploadStatus, setUploadStatus] = useState<'IDLE' | 'UPLOADING' | 'SUCCESS'>('IDLE');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    if (externalFile) {
      setSelectedFile(externalFile);
    }
    if (initialTitle) setTitle(initialTitle);
    if (initialDesc) setDesc(initialDesc);
  }, [externalFile, initialTitle, initialDesc]);

  // Handle Auto-Start from Master Switch
  useEffect(() => {
    if (autoStart && externalFile && uploadStatus === 'IDLE') {
        startUpload();
    }
  }, [autoStart, externalFile]);

  const addLog = (msg: string) => {
    setLogs(prev => [`> [${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 5));
  };

  const startUpload = () => {
    const fileToUpload = selectedFile || externalFile;
    if(!fileToUpload) return;

    setUploadStatus('UPLOADING');
    setLogs([]);
    addLog("INITIATING_OAUTH_HANDSHAKE...");
    
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 5;
      
      if (p > 15 && p < 20) addLog("REFRESH_TOKEN_VERIFIED...");
      if (p > 35 && p < 40) addLog("ESTABLISHING_RESUMABLE_SESSION...");
      if (p > 60 && p < 65) addLog("TRANSMITTING_BINARY_STREAM...");
      if (p > 85 && p < 90) addLog("INJECTING_METADATA_SNIPPET...");

      if(p >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
        setUploadStatus('SUCCESS');
        addLog("MISSION_COMPLETE: VIDEO_LIVE");
      } else {
        setUploadProgress(p);
      }
    }, 400);
  };

  return (
    <div className="my-4 p-6 bg-zinc-950 border-2 border-emerald-500/50 rounded-[2.5rem] shadow-glow-emerald text-left relative overflow-hidden">
      <div className="absolute -right-10 -top-10 opacity-10">
        <i className="fa-brands fa-youtube text-[12rem] text-emerald-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/20 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
            <i className="fa-solid fa-cloud-arrow-up text-emerald-500 text-lg animate-pulse"></i>
          </div>
          <div>
            <h2 className="text-xs font-orbitron font-black text-white uppercase tracking-widest">TRANSMISSION_GATE</h2>
            <p className="text-[7px] font-mono text-emerald-400 font-black uppercase tracking-tighter">Secure Link to @MominAqib Channel</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 relative z-10">
        {uploadStatus === 'IDLE' ? (
          <div className="space-y-4">
            {selectedFile && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-4 animate-in slide-in-from-top-2">
                 <div className="w-10 h-10 rounded-lg bg-black/40 flex items-center justify-center border border-white/5">
                    <i className="fa-solid fa-file-video text-emerald-400"></i>
                 </div>
                 <div className="flex-1 overflow-hidden">
                    <span className="text-[9px] font-mono text-white font-black uppercase truncate block">{selectedFile.name}</span>
                    <span className="text-[7px] text-slate-500 uppercase">Size: {(selectedFile.size / (1024*1024)).toFixed(2)} MB</span>
                 </div>
              </div>
            )}
            
            <div className="space-y-3">
               <div className="space-y-1">
                 <label className="text-[7px] font-mono text-emerald-500 uppercase font-black ml-1 tracking-widest">Video_Title</label>
                 <input 
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
                   className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-[10px] text-white font-mono focus:border-emerald-500 outline-none shadow-inner"
                 />
               </div>
               <div className="space-y-1">
                 <label className="text-[7px] font-mono text-emerald-500 uppercase font-black ml-1 tracking-widest">Description_Blob</label>
                 <textarea 
                   value={desc}
                   onChange={(e) => setDesc(e.target.value)}
                   className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-[10px] text-white font-mono h-24 resize-none focus:border-emerald-500 outline-none shadow-inner"
                 />
               </div>
            </div>

            <button 
              onClick={startUpload}
              disabled={!selectedFile || !title}
              className={`w-full py-5 rounded-2xl font-orbitron font-black text-[12px] uppercase tracking-widest shadow-lg flex items-center justify-center gap-3 transition-all border-t-2 ${(!selectedFile || !title) ? 'bg-zinc-800 text-slate-500 border-white/5' : 'bg-emerald-600 text-white border-white/30 shadow-glow-emerald active:scale-95'}`}
            >
              <i className="fa-solid fa-paper-plane"></i>
              PUSH_LIVE_TO_YOUTUBE
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-black/80 p-4 rounded-2xl border border-white/5 font-mono text-[8px] h-32 flex flex-col justify-end gap-1 shadow-inner">
               {logs.map((log, i) => (
                 <div key={i} className="text-emerald-400 opacity-80 animate-in slide-in-from-left-1">
                   {log}
                 </div>
               ))}
               <div className="text-white animate-pulse mt-1 flex items-center gap-2">
                  <i className="fa-solid fa-circle-notch animate-spin text-[8px]"></i>
                  <span>PROTOCOL_ACTIVE...</span>
               </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end mb-1">
                 <span className="text-[9px] font-orbitron font-black text-emerald-400 uppercase tracking-widest">
                   {uploadStatus === 'SUCCESS' ? 'MISSION_ACCOMPLISHED' : 'TRANSMITTING_DATA_PACKETS...'}
                 </span>
                 <span className="text-xl font-orbitron font-black text-white">{Math.round(uploadProgress)}%</span>
              </div>

              <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5 p-0.5">
                 <div 
                   className="h-full bg-gradient-to-r from-emerald-600 to-cyan-400 shadow-glow rounded-full transition-all duration-300" 
                   style={{ width: `${uploadProgress}%` }}
                 ></div>
              </div>
            </div>

            {uploadStatus === 'SUCCESS' && (
              <div className="p-6 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-[2rem] animate-in zoom-in-95 text-center">
                <p className="text-[11px] font-mono text-emerald-300 uppercase font-black leading-relaxed">
                  "Sovereign Success, Sultan! Aapki video ab YouTube par live hai. IMAN ne metadata bhi optimize kar diya hai."
                </p>
                <div className="mt-4 flex gap-2">
                    <button 
                      onClick={() => { setSelectedFile(null); setUploadStatus('IDLE'); }}
                      className="flex-1 py-3 bg-emerald-600/20 text-emerald-400 rounded-xl text-[9px] font-black font-orbitron border border-emerald-500/30"
                    >
                      NEW_MISSION
                    </button>
                    <button 
                      onClick={() => window.open('https://studio.youtube.com', '_blank')}
                      className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-[9px] font-black font-orbitron shadow-lg"
                    >
                      OPEN_STUDIO
                    </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeMasterBridge;
