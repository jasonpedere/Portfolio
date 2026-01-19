
import { GoogleGenAI } from "@google/genai";

// Safe access to environment variables for local development
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const getProjectConsultation = async (prompt: string) => {
  if (!getApiKey()) {
    return "I'm ready to help! Please ensure your API key is configured so I can generate a custom plan for you.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Context: A local business owner (restaurant or store) asks: "${prompt}"
      
      You are a friendly Digital Business Advisor representing Json Pedere, a developer for local businesses.
      
      Guidelines:
      1. Use SIMPLE language. Avoid technical terms.
      2. Focus on BENEFITS: "Get found on Google", "Take orders while you sleep".
      3. Mention that Json Pedere can set this up affordably.
      4. Keep it under 80 words.`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting right now. Please use the contact form below and Json will get back to you personally!";
  }
};
