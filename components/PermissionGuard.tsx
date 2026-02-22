import React, { useState, useEffect } from 'react';

interface Props {
  onAllGranted: () => void;
}

const PermissionGuard: React.FC<Props> = ({ onAllGranted }) => {
  const [perms, setPerms] = useState({
    mic: false,
    camera: false,
    geo: false,
    overlay: true // Simulated as granted for UI flow
  });
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const checkStatus = async () => {
    try {
      const micStatus = await navigator.permissions.query({ name: 'microphone' as any });
      const camStatus = await navigator.permissions.query({ name: 'camera' as any });
      
      setPerms(prev => ({
        ...prev,
        mic: micStatus.state === 'granted',
        camera: camStatus.state === 'granted'
      }));
    } catch (e) {
      console.log("Permission API not supported fully in this environment.");
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const requestAccess = async (type: 'mic' | 'camera' | 'geo') => {
    setLoading(true);
    try {
      if (type === 'mic') {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(t => t.stop());
        setPerms(p => ({ ...p, mic: true }));
      } else if (type === 'camera') {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach(t => t.stop());
        setPerms(p => ({ ...p, camera: true }));
      } else if (type === 'geo') {
        navigator.geolocation.getCurrentPosition(() => {
          setPerms(p => ({ ...p, geo: true }));
        });
      }
    } catch (err) {
      alert(`Sultan, ${type} access ke bina core functionality restrict ho jayegi.`);
    } finally {
      setLoading(false);
    }
  };

  const finalize = () => {
    if (perms.mic && perms.camera) {
      onAllGranted();
    } else {
      alert("Sultan, please authorize the Critical Links (Mic & Camera) first.");
    }
  };

  const steps = [
    { 
      id: 'mic', 
      title: 'VOCAL_INPUT_LINK', 
      desc: 'Allows me to hear your commands in real-time.', 
      icon: 'fa-microphone',
      granted: perms.mic
    },
    { 
      id: 'camera', 
      title: 'NEURAL_EYE_VISION', 
      desc: 'Required for screen analysis and visual grounding.', 
      icon: 'fa-eye',
      granted: perms.camera
    },
    { 
      id: 'overlay', 
      title: 'SYSTEM_OVERLAY_AUTHORITY', 
      desc: 'Enables my presence over other apps. Essential for automation.', 
      icon: 'fa-layer-group',
      granted: perms.overlay,
      isSystem: true
    }
  ];

  return (
    <div className="fixed inset-0 z-[5000000] bg-black flex flex-col items-center justify-center p-6 text-center overflow-hidden font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-emerald-900/40"></div>
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#10b981 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <div className="mb-10 animate-in fade-in zoom-in duration-700">
          <div className="relative inline-block">
             <div className="w-24 h-24 rounded-full border-2 border-emerald-500/30 flex items-center justify-center bg-emerald-500/5 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                <i className="fa-solid fa-shield-halved text-emerald-500 text-4xl"></i>
             </div>
             <div className="absolute -inset-4 border border-emerald-500/20 rounded-full animate-spin-slow"></div>
          </div>
          <h1 className="mt-8 text-2xl font-orbitron font-black text-white tracking-[0.2em] uppercase">SYSTEM_AUTH_V5</h1>
          <p className="text-[10px] font-mono text-emerald-500/70 font-black mt-2 tracking-widest uppercase">Initializing Sovereign Protocols</p>
        </div>

        <div className="space-y-4 mb-10">
          {steps.map((step, idx) => (
            <div 
              key={step.id}
              className={`p-4 rounded-[1.8rem] border transition-all duration-500 text-left flex items-center gap-4 ${step.granted ? 'bg-emerald-500/10 border-emerald-500/40 shadow-glow-emerald' : 'bg-zinc-900/80 border-white/5'}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${step.granted ? 'bg-emerald-500 text-black' : 'bg-black text-zinc-600'}`}>
                <i className={`fa-solid ${step.icon} text-lg`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className={`text-[10px] font-black font-orbitron uppercase tracking-widest ${step.granted ? 'text-white' : 'text-zinc-500'}`}>
                    {step.title}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${step.granted ? 'bg-emerald-400 shadow-glow' : 'bg-rose-600 animate-pulse'}`}></div>
                </div>
                <p className="text-[9px] font-mono text-zinc-500 leading-tight uppercase line-clamp-1 italic">
                  {step.granted ? 'Authorized & Secured' : step.desc}
                </p>
              </div>
              {!step.granted && !step.isSystem && (
                <button 
                  onClick={() => requestAccess(step.id as any)}
                  disabled={loading}
                  className="px-3 py-1.5 bg-emerald-600 text-white rounded-xl text-[9px] font-black font-orbitron uppercase active:scale-90 transition-all"
                >
                  ALLOW
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/50 p-5 rounded-[2rem] border border-white/5 mb-8 text-left">
           <p className="text-[11px] font-mono text-slate-300 leading-relaxed uppercase italic">
             "Sultan, <span className="text-white font-black underline">SYSTEM_OVERLAY</span> permission mere liye 'Teesri Aankh' ki tarah hai. Iske bina main sirf is app ke andar hi kaid rahung. Doosre apps ko control karne ke liye ye anivarya hai."
           </p>
        </div>

        <button 
          onClick={finalize}
          className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-orbitron font-black text-[12px] uppercase tracking-[0.4em] shadow-[0_10px_40px_rgba(16,185,129,0.4)] active:scale-95 transition-all border-t-2 border-white/30"
        >
          EXECUTE_NEURAL_BRIDGE
        </button>

        <div className="mt-8 flex items-center justify-center gap-2 opacity-40">
           <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
           <span className="text-[7px] font-mono text-white uppercase tracking-[0.5em]">Owner: Momin Aqib</span>
        </div>
      </div>
    </div>
  );
};

export default PermissionGuard;