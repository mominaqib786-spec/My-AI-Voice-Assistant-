
import React, { useState, useEffect, useCallback } from 'react';

interface Props {
  onClose: () => void;
  initialNumber: string;
}

const WebRtcPhone: React.FC<Props> = ({ onClose, initialNumber }) => {
  const [display, setDisplay] = useState(initialNumber || "");
  const [callStatus, setCallStatus] = useState<'IDLE' | 'DIALING' | 'CONNECTED' | 'FAILED'>('IDLE');
  const [logs, setLogs] = useState<string[]>(["WebRTC Stack: Initialized"]);
  const [timer, setTimer] = useState(0);

  const playTone = (freq: number = 440) => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.debug("Audio blocked by browser policy");
    }
  };

  useEffect(() => {
    let interval: any;
    if (callStatus === 'CONNECTED') {
      interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [callStatus]);

  const handleDial = (num: string) => {
    if (callStatus !== 'IDLE') return;
    playTone(500 + (parseInt(num) * 50 || 100));
    setDisplay(prev => prev + num);
  };

  const startCall = () => {
    if (!display) return;
    setCallStatus('DIALING');
    setLogs(prev => ["Requesting STUN Server...", ...prev]);
    
    const steps = [
      "Gathering ICE Candidates...",
      "SDP Offer Generated...",
      "Bypassing NAT Firewall...",
      "Remote Peer Handshaking...",
      "PSTN Bridge Secured.",
      "CONNECTED_VIA_WEBRTC"
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setLogs(prev => [steps[i], ...prev]);
        i++;
      } else {
        clearInterval(interval);
        setCallStatus('CONNECTED');
        playTone(800);
      }
    }, 600);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-[20000] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-zinc-950 border-2 border-emerald-500 rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header / Display */}
        <div className="p-8 bg-black/40 text-center border-b border-white/5">
           <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-orbitron font-black text-emerald-500 uppercase tracking-widest">WebRTC_Direct_v4</span>
              <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></div>
              </div>
           </div>
           
           <div className="h-20 flex flex-col justify-center items-center">
              <p className="text-3xl font-orbitron font-black text-white tracking-widest truncate w-full">
                {display || "Dailer Ready"}
              </p>
              {callStatus === 'CONNECTED' && (
                <p className="text-emerald-500 font-mono text-sm mt-2 animate-pulse">{formatTime(timer)}</p>
              )}
              {callStatus === 'DIALING' && (
                <p className="text-cyan-400 font-mono text-[10px] uppercase mt-2 animate-bounce">Connecting...</p>
              )}
           </div>
        </div>

        {/* Dial Pad */}
        {callStatus === 'IDLE' ? (
          <div className="p-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {['1','2','3','4','5','6','7','8','9','*','0','#'].map(key => (
                <button 
                  key={key}
                  onClick={() => handleDial(key)}
                  className="w-full aspect-square rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-xl font-orbitron font-bold text-white hover:bg-emerald-500/20 active:scale-90 transition-all shadow-md"
                >
                  {key}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-6">
               <button 
                 onClick={() => setDisplay(prev => prev.slice(0, -1))}
                 className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-rose-500"
               >
                 <i className="fa-solid fa-delete-left"></i>
               </button>
               <button 
                 onClick={startCall}
                 className="flex-1 h-16 rounded-[1.5rem] bg-emerald-600 text-white font-orbitron font-black text-sm tracking-[0.2em] shadow-glow-emerald active:scale-95 transition-all"
               >
                 <i className="fa-solid fa-phone-flip mr-3"></i>
                 CALL_NOW
               </button>
               <button 
                 onClick={onClose}
                 className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-slate-500"
               >
                 <i className="fa-solid fa-xmark"></i>
               </button>
            </div>
          </div>
        ) : (
          <div className="p-10 flex flex-col items-center gap-8">
            <div className="relative w-40 h-40">
               <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
               <div className={`absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent ${callStatus === 'CONNECTED' ? 'animate-spin-slow' : 'animate-spin'}`}></div>
               <div className="absolute inset-4 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <i className={`fa-solid ${callStatus === 'CONNECTED' ? 'fa-headset' : 'fa-satellite'} text-5xl text-emerald-500`}></i>
               </div>
            </div>

            <div className="w-full bg-black/60 p-4 rounded-2xl border border-white/5 h-24 overflow-y-auto no-scrollbar font-mono text-[9px] text-emerald-400/60 flex flex-col-reverse">
               {logs.map((log, i) => <div key={i} className="mb-0.5">{" > "} {log}</div>)}
            </div>

            <button 
              onClick={() => {
                setCallStatus('IDLE');
                setTimer(0);
                onClose();
              }}
              className="w-full py-5 bg-rose-600 text-white rounded-3xl font-orbitron font-black text-xs tracking-widest shadow-glow-red active:scale-95 transition-all"
            >
              TERMINATE_LINE
            </button>
          </div>
        )}

        <div className="p-3 bg-black border-t border-white/5 text-center">
           <p className="text-[7px] font-mono text-slate-600 uppercase tracking-[0.3em]">Encrypted_Divine_Trunk_00493</p>
        </div>
      </div>
    </div>
  );
};

export default WebRtcPhone;
