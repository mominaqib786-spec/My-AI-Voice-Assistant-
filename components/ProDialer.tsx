
import React, { useState, useMemo, useRef } from 'react';

interface Props {
  onClose: () => void;
  onCallInitiated: (number: string) => void;
}

const ProDialer: React.FC<Props> = ({ onClose, onCallInitiated }) => {
  const [number, setNumber] = useState("");
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playBeep = (digit: string) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(400 + (digit.charCodeAt(0) * 2), ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch(e) {}
  };

  const handleCall = () => {
    if (number.length < 5) return;
    onCallInitiated(number);
  };

  return (
    <div className="w-full max-w-sm bg-zinc-950 border-2 border-emerald-500/40 rounded-[3.4rem] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
      <div className="p-10 pb-6 bg-zinc-900/40 border-b border-white/5 text-center relative">
        <button onClick={onClose} className="absolute top-6 right-8 text-zinc-600 hover:text-white">
          <i className="fa-solid fa-circle-xmark text-xl"></i>
        </button>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[9px] font-orbitron font-black text-emerald-400 tracking-widest uppercase">
            DIVINE_COMM_BRIDGE
          </span>
        </div>
        <div className="h-20 flex items-center justify-center">
             <span className="text-4xl font-orbitron font-black text-white tracking-widest">
               {number || <span className="text-zinc-800">READY</span>}
             </span>
        </div>
        <p className="text-[7px] font-mono text-emerald-500 mt-2 uppercase font-black">Routing: SECURE_HIDAYAT_ACTIVE</p>
      </div>

      <div className="px-10 py-8 flex-1">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {['1','2','3','4','5','6','7','8','9','*','0','#'].map((k) => (
              <button 
                key={k}
                onPointerDown={() => { setNumber(n => n + k); playBeep(k); }}
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-2xl font-orbitron text-white active:bg-emerald-500/30 transition-all"
              >
                {k}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center px-2">
            <div className="w-16 h-16"></div>
            <button 
              onClick={handleCall}
              className="w-24 h-24 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center text-white text-4xl active:scale-90 transition-all border-t-4 border-white/20"
            >
              <i className="fa-solid fa-phone-flip"></i>
            </button>
            <button 
              onClick={() => setNumber(n => n.slice(0, -1))}
              className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-rose-500"
            >
              <i className="fa-solid fa-delete-left text-2xl"></i>
            </button>
          </div>
      </div>
    </div>
  );
};

export default ProDialer;
