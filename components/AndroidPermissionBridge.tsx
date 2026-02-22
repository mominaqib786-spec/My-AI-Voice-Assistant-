
import React, { useState } from 'react';

interface HeaderRow {
  key: string;
  value: string;
}

const AndroidPermissionBridge: React.FC = () => {
  // 100% Truth: These are the exact strings needed for the Android Manifest via Median/GoNative
  const [headers, setHeaders] = useState<HeaderRow[]>([
    { key: 'android.permission.SYSTEM_ALERT_WINDOW', value: 'true' },
    { key: 'android.permission.RECORD_AUDIO', value: 'true' },
    { key: 'android.permission.FOREGROUND_SERVICE', value: 'true' },
    { key: 'android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK', value: 'true' },
    { key: 'android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION', value: 'true' },
    { key: 'android.permission.PROJECT_MEDIA', value: 'true' },
    { key: 'android.permission.WAKE_LOCK', value: 'true' }
  ]);

  const addNewHeader = () => {
    setHeaders([...headers, { key: 'android.permission.', value: 'true' }]);
  };

  const removeHeader = (index: number) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const updateHeader = (index: number, field: keyof HeaderRow, val: string) => {
    const updated = [...headers];
    updated[index][field] = val;
    setHeaders(updated);
  };

  const copyFormatted = () => {
    const formatted = headers.map(h => `${h.key}: ${h.value}`).join('\n');
    navigator.clipboard.writeText(formatted);
    alert("Maalik, ye 100% sahi permissions hain. Inhe copy karke Median dashboard mein 'Custom Headers' mein paste kar dein.");
  };

  const copyServiceType = () => {
    const serviceType = 'android:foregroundServiceType="mediaProjection|mediaPlayback|microphone"';
    navigator.clipboard.writeText(serviceType);
    alert("Service Type copy ho gaya! Ise Android Manifest tags mein add karein.");
  };

  return (
    <div className="my-6 p-6 bg-slate-900 border-2 border-emerald-500/50 rounded-[2.5rem] shadow-2xl text-left animate-in zoom-in-95 duration-500 overflow-hidden">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <i className="fa-brands fa-android text-[#3DDC84] text-xl animate-pulse"></i>
          <h3 className="text-[13px] font-orbitron font-black text-white uppercase tracking-tight">Android System Bridge</h3>
        </div>
        <div className="px-3 py-1 bg-emerald-600/20 rounded-md border border-emerald-500/30">
          <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest font-mono">100%_REALITY</span>
        </div>
      </div>

      <div className="space-y-3 mb-6 max-h-60 overflow-y-auto no-scrollbar pr-2">
        {headers.map((h, i) => (
          <div key={i} className="flex items-center gap-2 group animate-in slide-in-from-left-2">
            <input 
              value={h.key}
              onChange={(e) => updateHeader(i, 'key', e.target.value)}
              className="flex-1 bg-black border border-white/10 rounded-xl px-3 py-2.5 text-[10px] font-mono text-emerald-300 outline-none focus:border-emerald-500"
            />
            <input 
              value={h.value}
              onChange={(e) => updateHeader(i, 'value', e.target.value)}
              className="w-16 bg-black border border-white/10 rounded-xl px-3 py-2.5 text-[10px] font-mono text-white font-bold text-center outline-none"
            />
            <button onClick={() => removeHeader(i)} className="text-slate-600 hover:text-rose-500 p-2">
              <i className="fa-solid fa-trash-can text-xs"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <button onClick={addNewHeader} className="w-full py-3 bg-zinc-800 text-slate-400 rounded-2xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase border border-white/5 hover:text-white transition-all">
          <i className="fa-solid fa-plus"></i> Add Manual Permission
        </button>

        <button onClick={copyFormatted} className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-orbitron font-black text-[12px] uppercase tracking-widest shadow-glow-emerald active:scale-95 flex items-center justify-center gap-3 border-t-2 border-white/30">
          <i className="fa-solid fa-copy"></i> COPY FOR MEDIAN PORTAL
        </button>
        
        <button onClick={copyServiceType} className="w-full py-3 bg-indigo-900/40 text-indigo-400 border border-indigo-500/30 rounded-2xl font-bold text-[10px] uppercase tracking-widest active:scale-95">
          <i className="fa-solid fa-gear mr-2"></i> COPY SERVICE_TYPE (FOR CRASH FIX)
        </button>
      </div>

      <div className="mt-6 p-4 bg-black/60 border border-emerald-500/20 rounded-2xl">
        <p className="text-[10px] font-mono text-slate-300 leading-relaxed italic text-center">
          "Boss, agar APK crash ho raha hai toh <b>SERVICE_TYPE</b> ko manifest mein zaroor check karein. Android 14 iske bina app nahi chalne dega."
        </p>
      </div>
    </div>
  );
};

export default AndroidPermissionBridge;
