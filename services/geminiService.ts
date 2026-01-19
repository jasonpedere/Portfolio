
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProjectConsultation = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Context: A local business owner (restaurant or store) asks: "${prompt}"
      
      You are a friendly Digital Business Advisor representing Json Pedere, a developer for local businesses.
      
      Guidelines:
      1. Use SIMPLE language. Avoid technical terms like "React", "Frontend", or "Database".
      2. Focus on BENEFITS: "Get found on Google", "Take orders while you sleep", "Save time on phone calls".
      3. Be encouraging and professional.
      4. Mention that Json Pedere can set this up for them easily and affordably.
      5. Keep it under 100 words.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm taking a quick break. Please send me a message through the contact form below!";
  }
};
