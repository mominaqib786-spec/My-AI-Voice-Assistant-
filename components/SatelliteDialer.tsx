
import React, { useState, useEffect, useRef } from 'react';

interface Props {
  onClose: () => void;
  initialNumber?: string;
}

const SatelliteDialer: React.FC<Props> = ({ onClose, initialNumber = "" }) => {
  const [number, setNumber] = useState(initialNumber);
  const [status, setStatus] = useState<'IDLE' | 'CONNECTING' | 'ACTIVE' | 'ENDED'>('IDLE');
  const [callTime, setCallTime] = useState(0);
  const [signalStrength, setSignalStrength] = useState(85);
  const [detectedCountry, setDetectedCountry] = useState<{name: string, icon: string} | null>(null);
  const [callMode, setCallMode] = useState<'VIRTUAL' | 'NATIVE' | 'CLOUD'>('CLOUD');
  const [connectionLog, setConnectionLog] = useState("Awaiting Command...");
  const audioContextRef = useRef<AudioContext | null>(null);

  const getCountry = (num: string) => {
    if (!num.startsWith('+')) return null;
    if (num.startsWith('+91')) return { name: "INDIA", icon: "🇮🇳" };
    if (num.startsWith('+1')) return { name: "USA / CANADA", icon: "🇺🇸" };
    if (num.startsWith('+44')) return { name: "UNITED KINGDOM", icon: "🇬🇧" };
    if (num.startsWith('+971')) return { name: "UAE", icon: "🇦🇪" };
    return { name: "INTERNATIONAL", icon: "🌐" };
  };

  useEffect(() => {
    setDetectedCountry(getCountry(number));
  }, [number]);

  useEffect(() => {
    let timer: any;
    if (status === 'ACTIVE') {
      timer = setInterval(() => {
        setCallTime(prev => prev + 1);
        setSignalStrength(prev => Math.min(100, Math.max(70, prev + (Math.random() * 10 - 5))));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCall = () => {
    if (!number && status === 'IDLE') return;

    if (number === "*001#") {
      runEchoTest();
      return;
    }

    setStatus('CONNECTING');
    const handshake = [
      "Establishing Secure Uplink...",
      "Bypassing Local ISP Restriction...",
      "Injecting SIP Packets...",
      "Routing via Encrypted Relay...",
      "Target Phone Ringing..."
    ];
    
    let i = 0;
    const logInterval = setInterval(() => {
      if (i < handshake.length) {
        setConnectionLog(handshake[i]);
        i++;
      } else {
        clearInterval(logInterval);
        setStatus('ACTIVE');
      }
    }, 800);
  };

  const runEchoTest = () => {
    setStatus('CONNECTING');
    setConnectionLog("INITIATING_ECHO_TEST_NODE_001...");
    setTimeout(() => {
      setStatus('ACTIVE');
      setNumber("JARVIS_ECHO_SERVER");
    }, 2000);
  };

  const handleEnd = () => {
    setStatus('ENDED');
    setTimeout(() => onClose(), 1000);
  };

  const addDigit = (d: string) => {
    if (status === 'IDLE') {
      if (number === "" && d !== "+" && d !== "*") setNumber("+" + d);
      else setNumber(prev => prev + d);
    }
  };

  return (
    <div className="fixed inset-0 z-[15000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 animate-in fade-in duration-500 text-left">
      <div className={`w-full max-w-md bg-zinc-950 border-2 ${status === 'ACTIVE' ? 'border-emerald-500 shadow-[0_0_100px_rgba(16,185,129,0.2)]' : 'border-cyan-400'} rounded-[3rem] overflow-hidden relative transition-all duration-500`}>
        
        {/* Signal & Tech Header */}
        <div className="p-6 bg-black flex justify-between items-center border-b border-white/5">
           <div className="flex items-center gap-2">
              <div className="flex gap-0.5 items-end h-3">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className={`w-1 rounded-t-sm ${i*20 <= signalStrength ? 'bg-emerald-500' : 'bg-zinc-800'}`} style={{height: `${i*20}%`}}></div>
                 ))}
              </div>
              <span className="text-[7px] font-black font-mono text-slate-500 uppercase tracking-widest">Signal: {Math.round(signalStrength)}%</span>
           </div>
           <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
              <span className="text-[8px] font-orbitron font-black text-cyan-400 uppercase tracking-[0.2em]">Uplink_v6.6</span>
           </div>
        </div>

        <div className={`p-8 text-center ${status === 'ACTIVE' ? 'bg-emerald-500/5' : 'bg-cyan-500/5'} relative`}>
          <div className="h-28 flex flex-col justify-center">
            {status === 'IDLE' ? (
              <div className="space-y-1">
                <input 
                  readOnly
                  value={number || "ENTER NUMBER"}
                  className="bg-transparent border-none text-center text-3xl font-orbitron font-black text-white focus:ring-0 placeholder:text-slate-800 w-full uppercase"
                />
                {detectedCountry ? (
                  <div className="flex items-center justify-center gap-2 animate-in slide-in-from-bottom-2">
                    <span className="text-lg">{detectedCountry.icon}</span>
                    <span className="text-[10px] font-black font-mono text-cyan-400 tracking-[0.2em]">{detectedCountry.name}</span>
                  </div>
                ) : (
                  <p className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Global Routing: Ready</p>
                )}
              </div>
            ) : (
              <div className="animate-in zoom-in-95">
                <p className={`${status === 'ACTIVE' ? 'text-emerald-400' : 'text-cyan-400'} font-mono text-[10px] uppercase tracking-[0.3em] mb-2`}>
                  {status === 'CONNECTING' ? connectionLog : 'Bi-Directional Link Active'}
                </p>
                <div className="flex items-center justify-center gap-3">
                  {detectedCountry && <span className="text-2xl">{detectedCountry.icon}</span>}
                  <p className="text-3xl font-orbitron font-black text-white">{number}</p>
                </div>
                {status === 'ACTIVE' && (
                  <div className="mt-3 flex flex-col items-center gap-1">
                    <p className="text-emerald-500 font-mono text-lg animate-pulse font-bold">{formatTime(callTime)}</p>
                    <div className="flex gap-1">
                       {Array.from({length: 12}).map((_, i) => (
                         <div key={i} className="w-1 h-3 bg-emerald-500/20 rounded-full overflow-hidden">
                            <div className="w-full bg-emerald-400 animate-bounce" style={{animationDelay: `${i*0.1}s`, height: `${Math.random()*100}%`}}></div>
                         </div>
                       ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Dialer Pad */}
        {status === 'IDLE' ? (
          <div className="p-8">
            <div className="grid grid-cols-3 gap-5 mb-8">
              {['1','2','3','4','5','6','7','8','9','*','0','#'].map(key => (
                <button 
                  key={key}
                  onClick={() => addDigit(key)}
                  className="w-full aspect-square rounded-full bg-slate-900/50 border border-white/5 flex items-center justify-center text-xl font-orbitron font-bold text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/40 active:scale-90 transition-all shadow-lg"
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="flex justify-center items-center gap-8">
              <button 
                onClick={() => setNumber(prev => prev.slice(0, -1))}
                className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-rose-500 text-xl active:scale-90 transition-all shadow-xl"
              >
                <i className="fa-solid fa-delete-left"></i>
              </button>
              <button 
                onClick={handleCall}
                className="w-20 h-20 rounded-full bg-cyan-600 shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center text-white text-3xl active:scale-95 transition-all"
              >
                <i className="fa-solid fa-phone-flip"></i>
              </button>
              <button 
                onClick={() => setNumber("*001#")}
                className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex flex-col items-center justify-center text-amber-500 text-xs active:scale-90 transition-all"
              >
                <i className="fa-solid fa-vial mb-1"></i>
                <span className="text-[6px] font-black font-orbitron">TEST</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-10 flex flex-col items-center space-y-10">
            <div className="relative">
              <div className={`w-36 h-36 border-4 ${status === 'ACTIVE' ? 'border-emerald-500/30' : 'border-cyan-500/30'} rounded-full flex items-center justify-center`}>
                <div className={`absolute inset-0 border-4 ${status === 'ACTIVE' ? 'border-emerald-400' : 'border-cyan-400'} rounded-full border-t-transparent animate-spin`}></div>
                <i className={`fa-solid ${status === 'CONNECTING' ? 'fa-satellite' : 'fa-headset'} text-5xl ${status === 'ACTIVE' ? 'text-emerald-500' : 'text-cyan-500'}`}></i>
              </div>
            </div>

            <div className="w-full space-y-6">
               <div className="flex justify-around">
                  <div className="flex flex-col items-center gap-2">
                    <button className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400"><i className="fa-solid fa-microphone-slash"></i></button>
                    <span className="text-[7px] font-black font-mono text-slate-500">MUTE</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400"><i className="fa-solid fa-volume-high"></i></button>
                    <span className="text-[7px] font-black font-mono text-slate-500">SPEAKER</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button className="w-14 h-14 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400"><i className="fa-solid fa-shield-halved"></i></button>
                    <span className="text-[7px] font-black font-mono text-emerald-500">SECURE</span>
                  </div>
               </div>

               <button 
                onClick={handleEnd}
                className="w-full py-5 bg-rose-600 text-white rounded-[2rem] font-orbitron font-black text-sm tracking-widest shadow-glow-red active:scale-95 transition-all mt-4"
              >
                TERMINATE_UPLINK
              </button>
            </div>
          </div>
        )}

        <div className="p-4 bg-black text-center border-t border-white/5">
          <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
            {status === 'ACTIVE' ? 'ENCRYPTED DATA STREAM: 4.8MBPS' : 'ENCRYPTION: 2048-BIT AES | RSA KEY: VERIFIED'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SatelliteDialer;
