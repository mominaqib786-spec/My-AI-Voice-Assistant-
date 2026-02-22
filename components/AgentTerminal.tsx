
import React, { useState, useEffect, useRef } from 'react';
import { TaskStep } from '../types';

interface Props {
  steps?: TaskStep[];
  goal: string;
}

const AgentTerminal: React.FC<Props> = ({ steps, goal }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const baseLogs = [
      `[INIT] Target: ${goal}`,
      `[CORE] Allocating neural threads...`,
      `[NET] Establishing secure socket to Global-DNS...`,
      `[SPOOF] Identity masked as 'Authorized_Root'...`,
      `[LOGIC] Running heuristic analysis...`
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < baseLogs.length) {
        setLogs(prev => [...prev, baseLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [goal]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [logs]);

  return (
    <div className="my-4 p-5 bg-black border-2 border-emerald-500/30 rounded-[2rem] shadow-glow-emerald overflow-hidden relative">
      <div className="flex items-center justify-between mb-4 border-b border-emerald-500/10 pb-3">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-terminal text-emerald-500 text-sm animate-pulse"></i>
          <span className="text-[10px] font-orbitron font-black text-white uppercase tracking-widest text-left">Agentic_Workspace_v9</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Step List */}
        <div className="space-y-2">
          {steps?.map((step) => (
            <div key={step.id} className="flex items-center justify-between p-2 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[8px] font-mono text-slate-400 uppercase">{step.label}</span>
              <span className={`text-[7px] font-black px-2 py-0.5 rounded ${
                step.status === 'DONE' ? 'bg-emerald-500/20 text-emerald-400' : 
                step.status === 'RUNNING' ? 'bg-cyan-500/20 text-cyan-400 animate-pulse' : 
                'bg-slate-800 text-slate-500'
              }`}>
                {step.status}
              </span>
            </div>
          )) || (
            <div className="p-4 text-center">
               <div className="w-10 h-10 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto mb-2"></div>
               <span className="text-[8px] font-mono text-emerald-500 animate-pulse">PLANNING_EXECUTION...</span>
            </div>
          )}
        </div>

        {/* Real-time Logs */}
        <div ref={scrollRef} className="bg-emerald-950/10 p-3 rounded-xl border border-emerald-500/10 h-32 overflow-y-auto no-scrollbar font-mono text-[9px] text-emerald-400/80">
          {logs.map((log, i) => (
            <div key={i} className="mb-1 leading-tight">{">"} {log}</div>
          ))}
          <div className="flex items-center gap-1">
             <span className="text-emerald-300">momin@iman:~#</span>
             <div className="w-1 h-3 bg-emerald-400 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[7px] font-mono text-slate-600 uppercase">
        <span>MODE: FULL_AGENTIC</span>
        <span className="text-emerald-700">CPU_PRIORITY: HIGH</span>
      </div>
    </div>
  );
};

export default AgentTerminal;
