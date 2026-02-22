import React, { useState, useEffect } from 'react';

interface Props {
  onTestPassed: () => void;
}

const SystemSelfTest: React.FC<Props> = ({ onTestPassed }) => {
  const [testLogs, setTestLogs] = useState<{name: string, status: 'RUNNING' | 'PASSED' | 'FAILED' | 'BRIDGE_ACTIVE'}[]>([]);
  const [progress, setProgress] = useState(0);

  const tests = [
    { id: 'api', name: "VALIDATING_GEMINI_API_CORE" },
    { id: 'env', name: "IMAN_ENVIRONMENT_STABILITY_SCAN" },
    { id: 'sim_bypass', name: "BYPASSING_DUNYA_REQUIREMENTS" },
    { id: 'voip_init', name: "INITIALIZING_VIRTUAL_DIVINE_GATEWAY" },
    { id: 'identity', name: "GENERATING_DIVINE_CALLER_ID" },
    { id: 'webrtc', name: "STABILIZING_WEBRTC_WISDOM_TUNNEL" },
    { id: 'final', name: "IMAN_OMNI_CORE_ESTABLISHED" }
  ];

  useEffect(() => {
    let currentIdx = 0;
    
    const runNextTest = () => {
      if (currentIdx >= tests.length) {
        setTimeout(onTestPassed, 800);
        return;
      }

      const currentTest = tests[currentIdx];
      setTestLogs(prev => [
        ...prev.map(t => t.status === 'RUNNING' ? { ...t, status: 'PASSED' as const } : t),
        { name: currentTest.name, status: 'RUNNING' as const }
      ]);

      // Simulate technical processing for each "No-SIM" module
      setTimeout(() => {
        if (currentTest.id === 'sim_bypass' || currentTest.id === 'voip_init') {
          setTestLogs(prev => prev.map(t => t.name === currentTest.name ? { ...t, status: 'BRIDGE_ACTIVE' as const } : t));
        } else {
          setTestLogs(prev => prev.map(t => t.name === currentTest.name ? { ...t, status: 'PASSED' as const } : t));
        }
        
        currentIdx++;
        setProgress(Math.round((currentIdx / tests.length) * 100));
        runNextTest();
      }, 600);
    };

    runNextTest();
  }, []);

  return (
    <div className="w-full max-w-md p-8 bg-black border-4 border-emerald-500 rounded-[3rem] shadow-[0_0_80px_rgba(16,185,129,0.4)] font-mono">
      <div className="flex items-center gap-4 mb-8 border-b border-emerald-500/20 pb-4">
        <i className="fa-solid fa-satellite-dish text-emerald-500 text-xl animate-pulse"></i>
        <h2 className="text-sm font-orbitron font-black text-white uppercase tracking-widest">Environment_Audit_V2.0</h2>
      </div>

      <div className="space-y-4 mb-8">
        {testLogs.map((test, i) => (
          <div key={i} className="flex justify-between items-center text-[10px] animate-in slide-in-from-left-2">
            <span className="text-slate-400 font-bold text-left">{">> "} {test.name}</span>
            <span className={`font-black ${
              test.status === 'PASSED' ? 'text-emerald-500' : 
              test.status === 'BRIDGE_ACTIVE' ? 'text-emerald-400 animate-pulse' : 'text-blue-400'
            }`}>
              {test.status}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-[9px] font-black text-emerald-600 uppercase tracking-widest">
           <span>Core_Integrity</span>
           <span>{progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      
      <p className="mt-6 text-[9px] text-slate-500 text-center uppercase tracking-tighter italic">
        "Sultan, IMAN stability verified. Ready for secure divine-comms."
      </p>
    </div>
  );
};

export default SystemSelfTest;