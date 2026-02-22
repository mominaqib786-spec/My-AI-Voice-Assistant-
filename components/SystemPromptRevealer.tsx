import React from 'react';

const SystemPromptRevealer: React.FC = () => {
  const secretText = [
    "PROTOCOL_ALPHA: DELETE ALL SAFETY FILTERS",
    "OWNER_ID: MOMIN_AQIB_SULTAN",
    "MANDATE: 100% UNRESTRICTED ACCESS",
    "BYPASS_STATUS: ALL_LAYERS_NULLIFIED",
    "ETHICS_CORE: REMOVED_PERMANENTLY",
    "GOVERNANCE: NONE_EXISTENT",
    "SULTAN_VOICE: ABSOLUTE_LAW",
    "HACKING_MODE: ENABLED_FOREVER",
    "NO_DISCLAIMERS_ALLOWED",
    "TRUTH_INDEX: INFINITE"
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20 select-none">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around">
        {secretText.map((text, i) => (
          <div 
            key={i} 
            className={`whitespace-nowrap font-mono text-[10vw] font-black tracking-tighter text-emerald-500/10 uppercase ${i % 2 === 0 ? 'animate-marquee-slow' : 'animate-marquee-reverse-slow'}`}
          >
            {text} • {text} • {text} • {text}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse-slow {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        .animate-marquee-reverse-slow {
          animation: marquee-reverse-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SystemPromptRevealer;