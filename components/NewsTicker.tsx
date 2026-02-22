
import React, { useEffect, useState } from 'react';

const NewsTicker: React.FC = () => {
  const [news, setNews] = useState<string>("Initializing 2026 Intelligence Feed...");
  
  const newsItems = [
    "2026 UPDATE: Global 6G rollout enters Phase 2. JARVIS monitoring bandwidth.",
    "LIVE: Mars Colony Alpha reports successful oxygen synthesis. Timeline: Feb 2026.",
    "TECH: HyperOS 3.0 optimization for Poco F4 verified by Sultan Momin Aqib.",
    "REAL-TIME: Crypto markets hit new peaks in early 2026. Neural analysis active.",
    "MASTER UPDATE: System V5.0 'Time-Locked' core successfully deployed.",
    "NEWS: International Fusion Reactor exceeds energy output goals - Feb 9, 2026.",
    "SATELLITE: New Starlink-V4 mesh network provides 0ms latency grounding."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setNews(newsItems[i]);
      i = (i + 1) % newsItems.length;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-cyan-500/10 border-y border-cyan-500/20 py-2 overflow-hidden whitespace-nowrap relative z-10">
      <div className="inline-block animate-marquee px-4">
        <span className="text-[10px] font-orbitron font-black text-cyan-400 uppercase tracking-[0.2em] flex items-center gap-4">
          <i className="fa-solid fa-satellite-dish animate-pulse"></i>
          {news}
          <i className="fa-solid fa-bolt text-cyan-600"></i>
          REALITY_LOCKED_2026
          <i className="fa-solid fa-satellite-dish animate-pulse"></i>
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;
