
import React, { useState } from 'react';
import YoutubeMasterBridge from './YoutubeMasterBridge';
import VideoGenerator from './VideoGenerator';
import { GoogleGenAI } from "@google/genai";

const YouTubeStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'CREATE' | 'FILES'>('CREATE');
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("Ready to start");
  const [phase, setPhase] = useState<'IDLE' | 'BUSY' | 'DONE'>('IDLE');
  
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState({ title: "", description: "" });

  const startCreation = async () => {
    if (!topic) return;
    
    setPhase('BUSY');
    setStatus("Analyzing Topic...");

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create title and description for a video about: ${topic}. Return JSON with "title" and "description".`,
        config: { responseMimeType: "application/json" }
      });

      const data = JSON.parse(response.text || "{}");
      setMetadata({
        title: data.title || topic,
        description: data.description || `Content about ${topic}`
      });
      setStatus("Generating Assets...");
    } catch (error) {
      setPhase('IDLE');
      setStatus("Something went wrong. Retrying...");
    }
  };

  const handleFinish = (file: File) => {
    setVideoFile(file);
    setPhase('DONE');
    setStatus("Project Ready");
  };

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4 animate-in fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
            <i className="fa-brands fa-youtube text-lg"></i>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Video Studio</h2>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">{status}</p>
          </div>
        </div>
      </div>

      <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
        {['CREATE', 'FILES'].map(t => (
          <button 
            key={t}
            onClick={() => setActiveTab(t as any)}
            className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${activeTab === t ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-400'}`}
          >
            {t === 'CREATE' ? 'New Video' : 'Saved'}
          </button>
        ))}
      </div>

      <div className="min-h-[160px] flex flex-col justify-center">
        {activeTab === 'CREATE' && (
          <div className="space-y-4">
            {phase === 'IDLE' && (
              <div className="space-y-3">
                <input 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter video topic..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 text-xs text-slate-800 outline-none focus:border-blue-500 transition-all"
                />
                <button 
                  onClick={startCreation}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-bold active:scale-95 transition-all shadow-md"
                >
                  Create Now
                </button>
              </div>
            )}

            {phase === 'BUSY' && (
              <div className="flex flex-col items-center justify-center py-6 gap-4">
                 <div className="w-8 h-8 border-3 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                 <p className="text-[11px] text-slate-600 font-medium">{status}</p>
                 {metadata.title && <VideoGenerator onVideoGenerated={handleFinish} initialPrompt={topic} autoStart={true} />}
              </div>
            )}

            {phase === 'DONE' && (
              <div className="text-center py-6 space-y-4 bg-green-50 rounded-2xl border border-green-100">
                 <i className="fa-solid fa-check-circle text-green-600 text-3xl"></i>
                 <p className="text-xs font-bold text-green-800">Video successfully created!</p>
                 <button 
                  onClick={() => setActiveTab('FILES')}
                  className="px-6 py-2.5 bg-green-600 text-white rounded-xl text-[10px] font-bold"
                 >
                  View File
                 </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'FILES' && (
          <YoutubeMasterBridge 
            externalFile={videoFile} 
            initialTitle={metadata.title} 
            initialDesc={metadata.description} 
          />
        )}
      </div>
    </div>
  );
};

export default YouTubeStudio;
