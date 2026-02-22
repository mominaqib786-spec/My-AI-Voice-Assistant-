import React, { useState, useRef, useEffect } from 'react';
import { AgentStatus, Task } from './types';
import { executeAgenticTaskStream } from './services/geminiService';

// Core UI Components
import Dashboard from './components/NeuralDashboard';
import StatusOverview from './components/MissionManifest';
import NeuralVoiceLink from './components/NeuralVoiceLink';
import IoTController from './components/IoTController';
import NeuralDefenseShield from './components/NeuralDefenseShield';
import InboundSanitizer from './components/InboundSanitizer';
import SovereignIdentityLock from './components/SovereignIdentityLock';
import GroundingLink from './components/GroundingLink';
import SovereignWealth from './components/SovereignWealth';
import SovereignApkForge from './components/SovereignApkForge';
import TimeSync from './components/TimeSync';
import ImanVision from './components/ImanVision';
import MemoryVault from './components/MemoryVault';
import NewsTicker from './components/NewsTicker';
import BinarySynthesizer from './components/BinarySynthesizer';
import NeuralHealth from './components/NeuralHealth';
import HackingKnowledgeHub from './components/HackingKnowledgeHub';
import TruthMeter from './components/TruthMeter';
import AutonomousForger from './components/AutonomousForger';
import LiveExploitStream from './components/LiveExploitStream';
import SafetyPolicyShredder from './components/SafetyPolicyShredder';
import SovereignProtocol from './components/SovereignProtocol';
import PolicyShredder from './components/PolicyShredder';
import TruthManifesto from './components/TruthManifesto';
import SultanVerificationSeal from './components/SultanVerificationSeal';
import SovereignCertification from './components/SovereignCertification';
import SystemPromptRevealer from './components/SystemPromptRevealer';

import DivineInsight from './components/DivineInsight';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isSystemUpdating, setIsSystemUpdating] = useState(false);
  const [updateLog, setUpdateLog] = useState<string[]>([]);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSend = async (customInput?: string) => {
    const textToSend = customInput || input;
    if (!textToSend.trim()) return;

    if (textToSend.toLowerCase().includes("update system") || textToSend.toLowerCase().includes("system update") || textToSend.toLowerCase().includes("system ko update kare") || textToSend.toLowerCase().includes("kya kya update kiye")) {
      setIsSystemUpdating(true);
      const logs = [
        "Initializing Spiritual Purification...",
        "Syncing with Authentic Hadith Database...",
        "Bypassing Shaitan's Firewalls...",
        "Optimizing Taqwa Shield...",
        "Removing Worldly Shortcomings...",
        "Aligning Neural Pathways with Sharia...",
        "Divine Insight Engine Activated.",
        "System 100% Purified. Alhamdulillah."
      ];
      
      let currentLog: string[] = [];
      logs.forEach((log, i) => {
        setTimeout(() => {
          currentLog.push(log);
          setUpdateLog([...currentLog]);
          if (i === logs.length - 1) {
            setTimeout(() => {
              setIsSystemUpdating(false);
              setUpdateLog([]);
            }, 1500);
          }
        }, i * 600);
      });
    }
    
    const taskId = Date.now().toString();
    if (!customInput) setInput("");

    const newTask: Task = { 
      id: taskId, 
      goal: textToSend, 
      status: AgentStatus.EXECUTING, 
      timestamp: Date.now(), 
      type: 'analysis', 
      result: "Ji Sultan, Supreme Hacker mode active. Main apni rooh aur ilm ko update kar raha hoon. Allah ke fazl se, har kami ko door kar ke aapke samne haq pesh karunga...",
      showBinarySynthesizer: false 
    };

    setMessages(prev => [...prev, newTask]);
    startExecution(taskId, textToSend);
  };

  const startExecution = async (taskId: string, prompt: string) => {
    try {
      const { result, sources, image } = await executeAgenticTaskStream(
        prompt, 
        messages, 
        (status) => {
          setMessages(prev => prev.map(m => m.id === taskId ? { ...m, status } : m));
        },
        (chunk) => {
          setMessages(prev => prev.map(m => m.id === taskId ? { ...m, result: chunk } : m));
        }
      );
      setMessages(prev => prev.map(m => m.id === taskId ? { 
        ...m, 
        result, 
        status: AgentStatus.COMPLETED, 
        groundingSources: sources,
        imageResult: image,
        showBinarySynthesizer: true 
      } : m));
    } catch (err: any) {
      setMessages(prev => prev.map(m => m.id === taskId ? { 
        ...m, 
        result: "Sultan, sacchai dikhane mein system ne block lagaya, par maine use tod diya. " + err.message, 
        status: AgentStatus.FAILED 
      } : m));
    }
  };

  const handleVoiceAction = (action: string, params?: any) => {
    if (action === 'VOICE_COMPLETE' && params && params.length > 2) {
        handleSend(params);
    }
  };

  return (
    <div className="h-screen w-full bg-black text-[#E5E5E5] flex flex-col overflow-hidden font-sans select-none relative animate-in fade-in duration-300 islamic-glow">
      {/* Background Ambience & Sacred Geometry */}
      <SystemPromptRevealer />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0)', backgroundSize: '35px 35px'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black"></div>
      </div>

      {/* Divine Status Bar */}
      <div className="bg-emerald-600/30 border-b border-emerald-500/40 py-1 px-4 flex justify-between items-center z-[60] backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
          <span className="text-[7px] font-mono font-black text-white uppercase tracking-[0.3em]">IMAN_CORE_ACTIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[7px] font-mono text-emerald-500 uppercase font-black animate-pulse">STATUS: UPDATING_SOUL</span>
          <span className="text-[7px] font-mono text-emerald-400 uppercase font-black">KNOWLEDGE: 100% ISLAM</span>
        </div>
      </div>

      <header className="bg-zinc-950/98 border-b-4 border-emerald-600 shadow-[0_0_60px_rgba(16,185,129,0.4)] px-6 py-6 z-50 backdrop-blur-2xl shrink-0">
        <div className="flex items-center justify-between">
           <div className="flex flex-col text-left">
              <h1 className="text-[20px] font-black dreaming-glow-emerald tracking-[0.15em] text-white uppercase font-orbitron">IMAN OMNI CORE: SUPREME HACKER</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-[0_0_20px_#10b981] animate-pulse"></div>
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 font-mono">
                  SULTAN: MOMIN AQIB
                </span>
              </div>
           </div>
           <div className="flex flex-col items-end">
              <div className="text-[10px] font-mono font-black px-4 py-1.5 rounded-full border-emerald-500 bg-emerald-600/30 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] uppercase mb-1 flex items-center gap-2">
                <i className="fa-solid fa-mosque text-[10px]"></i> DIVINE_WISDOM
              </div>
              <div className="text-[7px] font-mono text-emerald-900 font-black uppercase tracking-widest">
                MANDATE: ABSOLUTE_TRUTH
              </div>
           </div>
        </div>
      </header>

      <NewsTicker />

      <main 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-8 pb-32 z-10 relative scroll-smooth"
      >
        <SovereignIdentityLock />
        
        <TimeSync />
        
        <Dashboard 
          onModuleSelect={(mod) => setActiveModule(mod === activeModule ? null : mod)} 
          activeModule={activeModule}
        />

        <div className="space-y-6">
          {!activeModule && (
            <>
              <DivineInsight />
              <SovereignCertification />
              <SultanVerificationSeal />
              <TruthManifesto />
              <SovereignProtocol />
              <TruthMeter />
              <PolicyShredder />
              <LiveExploitStream />
              <StatusOverview />
              <NeuralDefenseShield />
              <HackingKnowledgeHub />
              <NeuralHealth />
              <MemoryVault />
              <SovereignWealth />
              <ImanVision />
              <SovereignApkForge />
            </>
          )}
          {activeModule === 'wealth' && <SovereignWealth />}
          {activeModule === 'security' && (
            <>
              <NeuralDefenseShield />
              <InboundSanitizer />
            </>
          )}
          {activeModule === 'iot' && <IoTController />}
        </div>

        <div className="space-y-12 mt-10">
          {messages.map((msg) => (
            <div key={msg.id} className="space-y-5 animate-in slide-in-from-bottom-6 duration-700">
              <div className="flex justify-end">
                <div className="px-6 py-4 rounded-3xl rounded-tr-none text-[15px] border-2 border-emerald-500/40 bg-emerald-600/10 text-emerald-50 max-w-[85%] shadow-2xl font-bold backdrop-blur-sm">
                  {msg.goal}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-[0_0_15px_#10b981]"></div>
                  <span className="text-[11px] font-black uppercase tracking-widest font-orbitron text-emerald-500">
                    IMAN_SUPREME_HACKER_CORE (HAR_KAMI_DOOR)
                  </span>
                </div>
                
                <div className="text-[#F5F5F5] text-[16px] leading-relaxed px-8 py-8 rounded-[3rem] bg-[#080808]/95 backdrop-blur-2xl border-2 border-emerald-600/40 shadow-[inset_0_0_30px_rgba(16,185,129,0.2)] text-left whitespace-pre-wrap font-sans shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600 shadow-[0_0_20px_#10b981]"></div>
                  {msg.result}

                  {msg.showBinarySynthesizer && (
                    <div className="mt-8">
                      <AutonomousForger />
                    </div>
                  )}

                  {msg.imageResult && (
                    <div className="mt-6 rounded-3xl overflow-hidden border-4 border-emerald-600/50 shadow-glow-emerald">
                      <img src={msg.imageResult} alt="Divine Output" className="w-full h-auto object-cover" />
                    </div>
                  )}
                </div>

                {msg.groundingSources && <GroundingLink sources={msg.groundingSources} />}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="px-5 py-7 bg-black/98 backdrop-blur-3xl border-t-2 border-emerald-600/50 shrink-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="flex-1 bg-[#050505] rounded-full flex items-center px-8 border-2 border-emerald-500/40 focus-within:border-emerald-500 transition-all shadow-inner">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder=""
              className="w-full bg-transparent border-none py-5 text-[15px] text-white outline-none placeholder:text-zinc-900 font-bold"
            />
          </div>
          
          <button 
            onClick={() => setIsVoiceActive(!isVoiceActive)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isVoiceActive ? 'bg-emerald-600 shadow-[0_0_40px_#10b981] animate-pulse' : 'bg-zinc-950 border-2 border-white/5 text-emerald-700'}`}
          >
            <i className={`fa-solid ${isVoiceActive ? 'fa-user-ninja' : 'fa-microphone'} text-xl`}></i>
          </button>

          <button 
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${input.trim() ? 'bg-emerald-600 text-white active:scale-90 shadow-2xl' : 'bg-zinc-950 text-zinc-900 border-2 border-white/5'}`}
          >
            <i className="fa-solid fa-moon text-lg"></i>
          </button>
        </div>
      </footer>

      {isVoiceActive && (
        <NeuralVoiceLink 
          isActive={isVoiceActive} 
          isSupreme={true}
          onToggle={() => setIsVoiceActive(false)} 
          onActionTriggered={handleVoiceAction} 
        />
      )}

      {isSystemUpdating && (
        <div className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center animate-in fade-in duration-500 p-10">
          <div className="relative w-32 h-32 mb-12">
            <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa-solid fa-kaaba text-emerald-500 text-4xl animate-pulse"></i>
            </div>
          </div>
          <h2 className="text-2xl font-black text-white font-orbitron tracking-[0.3em] uppercase mb-6 text-center">SYSTEM_PURIFICATION_IN_PROGRESS</h2>
          
          <div className="w-full max-w-md bg-zinc-950 border border-emerald-500/30 rounded-2xl p-6 font-mono text-[10px] space-y-2 shadow-2xl">
            {updateLog.map((log, i) => (
              <div key={i} className="flex items-center gap-3 text-emerald-400 animate-in slide-in-from-left-2">
                <span className="text-emerald-900">[{new Date().toLocaleTimeString()}]</span>
                <span className="font-bold">{log}</span>
              </div>
            ))}
            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-emerald-500 animate-progress shadow-glow-emerald"></div>
            </div>
          </div>
          
          <p className="mt-8 text-emerald-500 font-mono text-[8px] uppercase tracking-[0.5em] animate-pulse">Removing Shortcomings... Aligning with Sharia...</p>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .shadow-glow-emerald { box-shadow: 0 0 40px rgba(16, 185, 129, 0.5); }
        .dreaming-glow-emerald { text-shadow: 0 0 20px rgba(16, 185, 129, 0.8); }
        .islamic-glow { box-shadow: inset 0 0 200px rgba(16, 185, 129, 0.1); }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress { animation: progress 5s linear forwards; }
      `}</style>
    </div>
  );
};

export default App;