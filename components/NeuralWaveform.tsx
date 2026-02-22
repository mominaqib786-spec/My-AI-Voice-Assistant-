import React, { useEffect, useState } from 'react';

const NeuralWaveform: React.FC = () => {
  const [bars, setBars] = useState<number[]>(new Array(20).fill(10));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 40) + 5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {bars.map((h, i) => (
        <div 
          key={i} 
          className="w-1 bg-cyan-500 rounded-full transition-all duration-100 opacity-60"
          style={{ height: `${h}px` }}
        ></div>
      ))}
    </div>
  );
};

export default NeuralWaveform;