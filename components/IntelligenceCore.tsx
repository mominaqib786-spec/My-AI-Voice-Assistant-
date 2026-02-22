
import React from 'react';

interface IntelItem {
  id: string;
  source: string;
  content: string;
  time: string;
}

const IntelligenceCore: React.FC = () => {
  const [intel, setIntel] = React.useState<IntelItem[]>([]);

  React.useEffect(() => {
    const mockIntel = [
      { id: '1', source: 'WEB_EXTRACT', content: 'Top 3 wealth generation trends in 2025 identified.', time: '02:45 PM' },
      { id: '2', source: 'SYS_METRICS', content: 'Network latency in Mumbai region: 18ms.', time: '02:46 PM' },
      { id: '3', source: 'NEURAL_LINK', content: 'Analyzing Boss pattern for proactive response.', time: '02:47 PM' }
    ];
    setIntel(mockIntel);
  }, []);

  return (
    <div className="my-6 p-6 bg-black border-2 border-emerald-500/30 rounded-[2.5rem] shadow-glow-emerald animate-in slide-in-from-left-4 duration-1000">
      <div className="flex items-center justify-between mb-6 border-b border-emerald-500/10 pb-4">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-microchip text-emerald-500 animate-pulse text-lg"></i>
          <h4 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">LIVE_INTEL_STREAM</h4>
        </div>
        <div className="px-2 py-0.5 bg-emerald-500/20 rounded text-[7px] text-emerald-400 font-black">ACTIVE</div>
      </div>

      <div className="space-y-4">
        {intel.map((item) => (
          <div key={item.id} className="p-3 bg-white/5 rounded-2xl border border-white/5 flex gap-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[8px] font-black text-emerald-500 uppercase">{item.source}</span>
                <span className="text-[7px] font-mono text-slate-600">{item.time}</span>
              </div>
              <p className="text-[10px] font-mono text-slate-300 leading-tight uppercase">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 opacity-30">
        <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping"></div>
        <span className="text-[6px] font-mono text-white uppercase tracking-[0.5em]">Synchronizing_Global_Feeds</span>
      </div>
    </div>
  );
};

export default IntelligenceCore;
