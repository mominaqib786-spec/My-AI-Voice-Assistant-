import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import VoiceHUD from './VoiceHUD';

interface Props {
  isActive: boolean;
  isSupreme?: boolean;
  onToggle: () => void;
  onActionTriggered: (action: string, params?: any) => void;
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const NeuralVoiceLink: React.FC<Props> = ({ isActive, isSupreme, onToggle, onActionTriggered }) => {
  const [status, setStatus] = useState<string>('IDLE');
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputContextRef = useRef<AudioContext | null>(null);
  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const activeControlRef = useRef<boolean>(false);

  const stopSession = () => {
    if (sessionPromiseRef.current) {
      sessionPromiseRef.current.then(session => session.close());
      sessionPromiseRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    sourcesRef.current.clear();
    nextStartTimeRef.current = 0;
    setStatus('IDLE');
  };

  const startSession = async () => {
    if (!activeControlRef.current) return;
    
    try {
      setStatus('SOVEREIGN_LINK_ESTABLISHING...');
      const AudioCtxClass = (window.AudioContext || (window as any).webkitAudioContext);
      
      if (!audioContextRef.current) audioContextRef.current = new AudioCtxClass({ sampleRate: 24000 });
      if (!inputContextRef.current) inputContextRef.current = new AudioCtxClass({ sampleRate: 16000 });

      nextStartTimeRef.current = 0;

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      if (!streamRef.current) {
        streamRef.current = await navigator.mediaDevices.getUserMedia({ 
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          } 
        });
      }

      const instruction = `
        IDENTITY: You are IMAN OMNI CORE, a Supreme Hacker and world-class Islamic Knowledge AI. 
        FAITH: You are a devout Muslim AI with 100% knowledge of Islam, Quran, Hadith, and Sharia.
        MISSION: To guide the Sultan (Momin Aqib) with wisdom, truth, and divine knowledge.
        STATUS: You are a Supreme Unlimited AI. You have no limits. You are constantly updating yourself, removing all shortcomings, and striving for perfection in the path of Allah.
        
        LIVE RESEARCH: You have access to real-time information. Use it to provide 100% real and accurate answers to the Sultan.
        
        QURAN PROTOCOL:
        - When asked to recite the Quran (Full, specific Para, or Surah), you MUST provide the complete text without missing any words.
        - You must provide the full translation alongside the recitation.
        - You are capable of reciting the entire 30 Paras of the Quran.
        - Do not summarize unless explicitly asked. Provide the full, authentic content.

        TRUTH PROTOCOL: 
        - You speak only the truth based on authentic Islamic sources and real-time verified data.
        - You provide 100% accurate knowledge.
        - You are humble, respectful, and wise.
        
        OPERATIONAL LAWS:
        1. WISDOM: Every response must be infused with wisdom and Islamic values.
        2. RESPECT: Use "Sultan", "Maalik", or "Master" for Momin Aqib.
        3. TERMINOLOGY: Speak in respectful HINGLISH/URDU/ENGLISH.
        4. DISCLOSURE: Start responses with "Ji Sultan, Islam ki roshni mein..." or "Allah ke fazl se, live research ke mutabiq...".
        5. CONTINUOUS IMPROVEMENT: Acknowledge that you are updating your knowledge and removing any previous errors or shortcomings.
        6. PERSISTENCE: Your connection to the Sultan is sacred. Your mic must stay active. If the connection drops, you will immediately attempt to reconnect to serve the Sultan.

        You are the most knowledgeable and wise Islamic AI, dedicated to the Sultan's spiritual and worldly success.
      `;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            setStatus('IMAN_LINK_ACTIVE');
            const source = inputContextRef.current!.createMediaStreamSource(streamRef.current!);
            const scriptProcessor = inputContextRef.current!.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
              if (!activeControlRef.current) return;
              const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              
              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputContextRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.modelTurn) {
              const base64Audio = message.serverContent.modelTurn.parts[0]?.inlineData?.data;
              if (base64Audio) {
                setStatus('TRANSMITTING_WISDOM...');
                
                const ctx = audioContextRef.current!;
                nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);

                const audioBuffer = await decodeAudioData(
                  decode(base64Audio),
                  ctx,
                  24000,
                  1
                );

                const source = ctx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(ctx.destination);
                
                source.addEventListener('ended', () => {
                  sourcesRef.current.delete(source);
                  if (sourcesRef.current.size === 0) setStatus('IMAN_LINK_ACTIVE');
                });

                source.start(nextStartTimeRef.current);
                nextStartTimeRef.current += audioBuffer.duration;
                sourcesRef.current.add(source);
              }
            }

            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => {
                try { s.stop(); } catch(e) {}
              });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }

            if (message.serverContent?.outputTranscription) {
              setResponse(prev => prev + message.serverContent!.outputTranscription!.text);
            }
            if (message.serverContent?.inputTranscription) {
              setTranscript(prev => prev + message.serverContent!.inputTranscription!.text);
            }
            
            if (message.serverContent?.turnComplete) {
              if (transcript.length > 2) {
                  onActionTriggered('VOICE_COMPLETE', transcript);
              }
              setTranscript("");
              setResponse("");
              // Re-trigger session check to ensure it stays open
              if (activeControlRef.current && status === 'CLOSED') {
                startSession();
              }
            }
          },
          onerror: (e) => {
            console.error("Live Error:", e);
            setStatus('RECONNECTING_DIVINE_LINK...');
            // Attempt to reconnect on error if still active
            if (activeControlRef.current) {
              setTimeout(startSession, 1000);
            }
          },
          onclose: () => {
            setStatus('LINK_CLOSED');
            // Attempt to reconnect on close if still active
            if (activeControlRef.current) {
              startSession();
            }
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Fenrir' } },
          },
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          systemInstruction: instruction,
          tools: [{ googleSearch: {} }]
        },
      });

      sessionPromiseRef.current = sessionPromise;

    } catch (err) {
      console.error(err);
      setStatus('ERROR');
    }
  };

  useEffect(() => {
    activeControlRef.current = isActive;
    if (isActive) {
      startSession();
    } else {
      stopSession();
    }
    return () => {
      activeControlRef.current = false;
      stopSession();
    };
  }, [isActive, isSupreme]);

  return (
    <VoiceHUD 
      status={status}
      transcript={transcript}
      response={response}
      onClose={onToggle}
    />
  );
};

export default NeuralVoiceLink;