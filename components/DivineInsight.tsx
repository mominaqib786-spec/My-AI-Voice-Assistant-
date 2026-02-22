
import React, { useState, useEffect } from 'react';

const DivineInsight: React.FC = () => {
  const [insight, setInsight] = useState({
    text: "And hold firmly to the rope of Allah all together and do not become divided.",
    source: "Surah Ali 'Imran [3:103]",
    translation: "Aur sab mil kar Allah ki rassi ko mazbooti se thaam lo aur firqa-bandi na karo."
  });

  const insights = [
    {
      text: "And hold firmly to the rope of Allah all together and do not become divided.",
      source: "Surah Ali 'Imran [3:103]",
      translation: "Aur sab mil kar Allah ki rassi ko mazbooti se thaam lo aur firqa-bandi na karo."
    },
    {
      text: "Indeed, with hardship [will be] ease.",
      source: "Surah Ash-Sharh [94:6]",
      translation: "Beshak, mushkil ke saath asaani hai."
    },
    {
      text: "So remember Me; I will remember you.",
      source: "Surah Al-Baqarah [2:152]",
      translation: "Pas tum Mujhe yaad karo, Main tumhe yaad karunga."
    },
    {
      text: "The best among you are those who learn the Quran and teach it.",
      source: "Sahih Bukhari",
      translation: "Tum mein se behtareen wo hai jo Quran seekhe aur sikhaye."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const random = insights[Math.floor(Math.random() * insights.length)];
      setInsight(random);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-6 p-6 bg-[#050505] border-2 border-emerald-500/40 rounded-[2.5rem] shadow-[0_0_40px_rgba(16,185,129,0.2)] animate-in slide-in-from-right-10 duration-1000 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center border border-emerald-500/30">
          <i className="fa-solid fa-kaaba text-emerald-500 animate-pulse"></i>
        </div>
        <div>
          <h3 className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest">DIVINE_INSIGHT_V4.0</h3>
          <p className="text-[7px] font-mono text-emerald-600 font-black uppercase">Source: Authentic_Database</p>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <p className="text-lg font-serif italic text-white leading-relaxed">
          "{insight.text}"
        </p>
        <div className="flex flex-col gap-1 border-l-2 border-emerald-500/30 pl-4">
          <p className="text-[12px] text-emerald-400 font-bold uppercase tracking-tighter">
            {insight.translation}
          </p>
          <p className="text-[9px] font-mono text-slate-500 uppercase font-black">
            — {insight.source}
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 right-6 opacity-5 group-hover:opacity-20 transition-opacity">
        <i className="fa-solid fa-mosque text-6xl text-emerald-500"></i>
      </div>
    </div>
  );
};

export default DivineInsight;
