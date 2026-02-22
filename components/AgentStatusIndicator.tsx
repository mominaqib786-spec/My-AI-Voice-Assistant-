
import React from 'react';
import { AgentStatus } from '../types';

interface Props {
  status: AgentStatus;
}

const AgentStatusIndicator: React.FC<Props> = ({ status }) => {
  const isIdle = status === AgentStatus.IDLE;

  return (
    <div className={`flex items-center gap-3 font-medium text-[10px] uppercase tracking-wider bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700`}>
      <div className="relative flex items-center justify-center">
        <div className={`w-2 h-2 rounded-full ${isIdle ? 'bg-slate-600' : 'bg-blue-500 animate-pulse'}`}></div>
      </div>
      <span className="text-slate-300">{isIdle ? 'Standby' : 'Processing'}</span>
    </div>
  );
};

export default AgentStatusIndicator;
