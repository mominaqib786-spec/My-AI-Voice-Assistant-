
import React, { useState, useEffect } from 'react';

const StorageMonitor: React.FC = () => {
  const [storageData, setStorageData] = useState<{quota: number, usage: number, percent: number} | null>(null);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const getStorage = async () => {
      if (navigator.storage && navigator.storage.estimate) {
        const estimate = await navigator.storage.estimate();
        // Convert to GB (estimate.quota is in bytes)
        const quotaGB = (estimate.quota || 0) / (1024 * 1024 * 1024);
        const usageGB = (estimate.usage || 0) / (1024 * 1024 * 1024);
        const percent = (usageGB / quotaGB) * 100;

        setTimeout(() => {
          setStorageData({
            quota: parseFloat(quotaGB.toFixed(2)),
            usage: parseFloat(usageGB.toFixed(2)),
            percent: parseFloat(percent.toFixed(1))
          });
          setScanning(false);
        }, 1500);
      }
    };
    getStorage();
  }, []);

  return (
    <div className="my-6 p-6 bg-black border-2 border-cyan-500 rounded-[2.5rem] shadow-glow animate-in zoom-in-95 duration-500 relative overflow-hidden text-left">
      <div className="absolute -right-6 -top-6 opacity-10">
        <i className="fa-solid fa-hard-drive text-[8rem] text-cyan-500"></i>
      </div>

      <div className="flex items-center justify-between mb-6 border-b border-cyan-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
            <i className={`fa-solid fa-microchip ${scanning ? 'animate-spin' : ''} text-cyan-500 text-lg`}></i>
          </div>
          <div>
            <h3 className="text-[11px] font-orbitron font-black text-white uppercase tracking-widest">STORAGE_DIAGNOSTIC</h3>
            <p className="text-[7px] font-mono text-cyan-600 uppercase font-black">System Partition Scan v4.4</p>
          </div>
        </div>
        <span className="text-[8px] font-mono text-emerald-500 font-black px-2 py-1 bg-emerald-500/10 rounded">LIVE</span>
      </div>

      {scanning ? (
        <div className="py-8 flex flex-col items-center">
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-cyan-500 animate-pulse w-1/2"></div>
          </div>
          <span className="text-[9px] font-mono text-cyan-400 animate-pulse uppercase">Accessing Drive Sectors...</span>
        </div>
      ) : storageData ? (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-900/50 rounded-2xl border border-white/5">
              <span className="text-[7px] text-slate-500 uppercase font-black block mb-1">Total Allocated</span>
              <span className="text-xl font-orbitron font-black text-white">{storageData.quota} GB</span>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-2xl border border-white/5">
              <span className="text-[7px] text-slate-500 uppercase font-black block mb-1">Available Space</span>
              <span className="text-xl font-orbitron font-black text-emerald-400">{(storageData.quota - storageData.usage).toFixed(2)} GB</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[9px] font-mono text-slate-400 uppercase font-black">
              <span>Used Storage ({storageData.usage} GB)</span>
              <span className={storageData.percent > 90 ? 'text-rose-500' : 'text-cyan-400'}>{storageData.percent}%</span>
            </div>
            <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-white/10 shadow-inner">
              <div 
                className={`h-full transition-all duration-1000 ${storageData.percent > 90 ? 'bg-rose-600' : 'bg-gradient-to-r from-cyan-600 to-emerald-500'}`}
                style={{ width: `${storageData.percent}%` }}
              ></div>
            </div>
          </div>

          <div className="p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl flex items-center gap-4">
            <i className="fa-solid fa-circle-info text-cyan-400 text-sm"></i>
            <p className="text-[9px] font-mono text-slate-300 uppercase leading-relaxed">
              "Boss, aapka system {storageData.quota > 100 ? 'kaafi bada' : 'theek-thaak'} hai. {storageData.percent > 80 ? 'Memory thodi bhar gayi hai, junk delete karun?' : 'Abhi bahut jagah khali hai.'}"
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-rose-500 font-mono text-[10px]">ERROR: UNABLE TO ACCESS STORAGE DRIVE</p>
      )}
    </div>
  );
};

export default StorageMonitor;
