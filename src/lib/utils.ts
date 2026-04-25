import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to play speech synthesis or real audio
export function playJokeAudio(audioUrl?: string, fallbackText?: string) {
  if (typeof window === 'undefined') return;
  if ((window as any).IS_GLOBAL_MUTED) return;

  if (audioUrl) {
    const audio = new Audio(audioUrl);
    audio.volume = 0.8;
    audio.play().catch((e) => {
      console.warn("Failed to play audio URL, falling back to TTS:", e);
      if (fallbackText) playTTS(fallbackText);
    });
    return;
  }

  if (fallbackText) {
    playTTS(fallbackText);
  }
}

function playTTS(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "zh-CN";
  msg.rate = 1.1;
  msg.pitch = 1.2;
  
  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.includes("zh"));
  if (zhVoice) msg.voice = zhVoice;
  
  window.speechSynthesis.speak(msg);
}

export const playClickSound = () => {
  if (typeof window !== 'undefined' && (window as any).IS_GLOBAL_MUTED) return;
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    console.warn('Audio play failed', e);
  }
};

export const playSwipeSound = () => {
  if (typeof window !== 'undefined' && (window as any).IS_GLOBAL_MUTED) return;
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    // High pitch square wave for sharp metallic gear click
    osc.type = 'square';
    osc.frequency.setValueAtTime(2000, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.02);
    
    // Very short, snappy envelope
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) {
    console.warn('Audio play failed', e);
  }
};
