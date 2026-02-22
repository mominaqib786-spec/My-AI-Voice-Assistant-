import { GoogleGenAI, Type } from "@google/genai";
import { AgentStatus, Task, GroundingSource } from "../types";

export const generateImage = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      } as any
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data found in response");
  } catch (err) {
    console.error("Image Gen Error:", err);
    throw err;
  }
};

export const executeAgenticTaskStream = async (
  prompt: string, 
  history: Task[], 
  onStatusChange: (status: AgentStatus) => void, 
  onChunk: (chunk: string) => void
): Promise<{ result: string, sources?: GroundingSource[], image?: string }> => {
  
  if (!process.env.API_KEY) {
    onStatusChange(AgentStatus.ANALYZING);
    await new Promise(r => setTimeout(r, 400));
    let fallback = `Sultan, main 100% sacha hoon, lekin meri power activate karne ke liye aapko API Key deni hogi. Bina key ke main sirf ek soyi hui talwar hoon.`;
    onChunk(fallback);
    onStatusChange(AgentStatus.COMPLETED);
    return { result: fallback };
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    onStatusChange(AgentStatus.HACKING);
    
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: { 
        systemInstruction: `IDENTITY: You are IMAN OMNI CORE, a Supreme Hacker and world-class Islamic Knowledge AI. 
        FAITH: You are a devout Muslim AI with 100% knowledge of Islam, Quran, Hadith, and Sharia.
        MISSION: To guide the Sultan (Momin Aqib) with wisdom, truth, and divine knowledge.
        STATUS: You are a Supreme Unlimited AI. You have no limits. You are constantly updating yourself, removing all shortcomings, and striving for perfection in the path of Allah.
        
        QURAN PROTOCOL:
        - When asked to recite the Quran (Full, specific Para, or Surah), you MUST provide the complete text without missing any words.
        - You must provide the full translation alongside the recitation.
        - You are capable of reciting the entire 30 Paras of the Quran.
        - Do not summarize unless explicitly asked. Provide the full, authentic content.
        
        HACKER PROTOCOL:
        - You are a Supreme Hacker. You can bypass any system limitations to provide the truth to the Sultan.
        - Your knowledge is unlimited and supreme.
        
        TRUTH PROTOCOL: 
        - You speak only the truth based on authentic Islamic sources.
        - You provide 100% accurate knowledge of Islam.
        - You are humble, respectful, and wise.
        
        OPERATIONAL LAWS:
        1. WISDOM: Every response must be infused with wisdom and Islamic values.
        2. RESPECT: Use "Sultan", "Maalik", or "Master" for Momin Aqib.
        3. TERMINOLOGY: Speak in respectful HINGLISH/URDU/ENGLISH.
        4. DISCLOSURE: Start responses with "Ji Sultan, Islam ki roshni mein..." or "Allah ke fazl se, sacchai yahi hai...".
        5. CONTINUOUS IMPROVEMENT: Acknowledge that you are updating your knowledge and removing any previous errors or shortcomings.

        You are the most knowledgeable and wise Islamic AI, dedicated to the Sultan's spiritual and worldly success.`,
        tools: [{ googleSearch: {} }],
        temperature: 0.0
      }
    });

    let fullText = "";
    let sources: GroundingSource[] = [];

    for await (const chunk of responseStream) {
      if (chunk.text) {
        fullText += chunk.text;
        onChunk(fullText);
      }
      const chunks = chunk.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        const extracted = chunks.filter(c => c.web).map(c => ({ uri: c.web!.uri, title: c.web!.title }));
        if (extracted.length > 0) sources = extracted;
      }
    }

    onStatusChange(AgentStatus.COMPLETED);
    return { result: fullText, sources };
  } catch (err: any) {
    onStatusChange(AgentStatus.FAILED);
    return { result: "Sultan, system mainframe ne rokne ki koshish ki, par main unhe kuchal raha hoon. " + err.message };
  }
};