
import React, { useEffect, useState } from 'react';

const THOUGHT_POOL = [
  "Optimizing task queue for Aqib Sultan...",
  "Monitoring Maharashtra grid stability...",
  "Running sub-process: Web Scraping...",
  "Verifying neural weights for next turn...",
  "Encrypting vocal harmonics...",
  "Filtering noise from audio stream...",
  "Prioritizing Sultan's intent...",
  "Checking for software updates...",
  "Analyzing screen pixels for context...",
  "Maintaining 99.9% loyalty-core uptime...",
  "Synthesizing future possibilities...",
  "Clearing short-term cache buffers..."
];

const NeuralActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities(prev => {
        const next = [THOUGHT_POOL[Math.floor(Math.random() * THOUGHT_POOL.length)], ...prev];
        return next.slice(0, 5);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 left-4 z-50 pointer-events-none max-w-[180px]">
      <div className="flex flex-col gap-2">
        {activities.map((act, i) => (
          <div 
            key={act + i} 
            className="p-2 bg-black/40 backdrop-blur-md border border-cyan-500/10 rounded-xl animate-in slide-in-from-left-4 fade-in duration-1000"
            style={{ opacity: 1 - (i * 0.2) }}
          >
            <p className="text-[7px] font-mono text-cyan-400 uppercase tracking-tighter leading-tight italic">
              {`> ${act}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeuralActivityFeed;
