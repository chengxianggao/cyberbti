import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { ArrowRight, Sparkles, Moon, Sun, Info, X, Volume2, VolumeX, Share } from 'lucide-react';
import { personalities, Personality } from '../data/personalities';
import { useTheme } from '../components/ThemeToggle';
import { playJokeAudio, playClickSound, playSwipeSound } from '../lib/utils';

export default function Home({ onStart }: { onStart: (mode: 'normal' | 'deep') => void }) {
  const { theme, setTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [selectedPersonality, setSelectedPersonality] = useState<Personality | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const lastTickRef = useRef(0);

  useEffect(() => {
    personalities.forEach(p => {
      if (p.image) {
        const img = new Image();
        img.src = p.image;
      }
    });
  }, []);

  const handlePan = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = -info.offset.x / 80;
    setDragOffset(offset);

    const currentTick = Math.round(offset);
    if (currentTick !== lastTickRef.current) {
      const maxIndex = personalities.length - 1;
      const targetIndex = currentIndex + currentTick;
      if (targetIndex >= 0 && targetIndex <= maxIndex) {
        playSwipeSound();
      }
      lastTickRef.current = currentTick;
    }
  };

  const handlePanEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const shiftCount = Math.round(-info.offset.x / 80);
    
    lastTickRef.current = 0;

    setCurrentIndex(prev => {
      const maxIndex = personalities.length - 1;
      let newIndex = prev + shiftCount;
      if (newIndex < 0) newIndex = 0;
      if (newIndex > maxIndex) newIndex = maxIndex;
      return newIndex;
    });
    setDragOffset(0);
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans relative selection:bg-blue-500/30">
      
      {/* Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-slate-300/30 dark:bg-slate-700/10 blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-slate-200/20 dark:bg-slate-800/20 blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-slate-200/30 dark:bg-slate-800/30 blur-[120px] pointer-events-none" 
      />

      {/* Header View */}
      <header className="px-6 py-4 flex justify-between items-center shrink-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playClickSound();
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors active:scale-95 select-none caret-transparent [-webkit-tap-highlight-color:transparent]"
          >
            {theme === 'dark' ? <Sun className="w-6 h-6" strokeWidth={2.5} /> : <Moon className="w-6 h-6" strokeWidth={2.5} />}
          </button>
          <button
            onClick={() => {
              const nextMuted = !isMuted;
              setIsMuted(nextMuted);
              (window as any).IS_GLOBAL_MUTED = nextMuted;
              if (nextMuted) {
                // If we just muted, play nothing
              } else {
                // Play un-mute feedback after taking effect
                setTimeout(() => playClickSound(), 10);
              }
            }}
            className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors active:scale-95 select-none caret-transparent [-webkit-tap-highlight-color:transparent]"
          >
            {isMuted ? <VolumeX className="w-6 h-6" strokeWidth={2.5} /> : <Volume2 className="w-6 h-6" strokeWidth={2.5} />}
          </button>
        </div>
        
        <button
          onClick={() => {
            playClickSound();
            if (navigator.share) {
              navigator.share({
                title: 'Persona Test',
                url: window.location.href
              }).catch(console.error);
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }
          }}
          className="w-11 h-11 flex items-center justify-center text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors active:scale-95 select-none caret-transparent [-webkit-tap-highlight-color:transparent]"
        >
          <Share className="w-6 h-6 pr-0.5" strokeWidth={2.5} />
        </button>
      </header>

      <div className="flex-1 flex flex-col justify-center relative z-10 pt-0 pb-4 min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.8, delay: 0.1 }}
          className="flex flex-col items-center text-center px-6 shrink-0 mt-0"
        >
          <h2 className="text-[36px] sm:text-[40px] font-black leading-[1.15] mb-2 tracking-widest text-slate-900 dark:text-white">
            赛博人格BTI
          </h2>
          <p className="text-[16px] text-slate-500 dark:text-slate-400 font-medium tracking-wider mb-0">
            点击开始，测算你的赛博精神体
          </p>
        </motion.div>

        {/* 3D Arc Carousel View */}
        <div className="flex-1 relative w-full mt-4 mb-2 flex items-center justify-center overflow-visible touch-none" style={{ perspective: 1000 }}>
          <motion.div
            onPan={handlePan}
            onPanEnd={handlePanEnd}
            className="relative w-full h-[340px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence initial={false}>
              {personalities.map((p, i) => {
                const activeIndex = currentIndex + dragOffset;
                const offset = i - activeIndex;
                const isCenter = i === currentIndex;
                
                const sign = Math.sign(offset);
                const absOffset = Math.abs(offset);
                
                // Continuous pushout for center card spacing to prevent jumping
                const pushOut = Math.min(absOffset, 1) * 30;
                
                const x = offset * 85 + sign * pushOut; 
                const y = absOffset * 15;
                const rotateY = offset * -25;
                const rotateZ = offset * 3; 
                const scale = isCenter ? 1.03 : 1 - absOffset * 0.12;
                const zIndex = Math.round(50 - absOffset * 10);
                const opacity = absOffset > 3.5 ? 0 : Math.max(0, 1 - absOffset * 0.35);

                const gradients = [
                  'from-blue-500/60 via-blue-500/10 to-indigo-500/10',
                  'from-teal-400/60 via-teal-400/10 to-emerald-500/10',
                  'from-amber-400/60 via-amber-400/10 to-orange-500/10',
                  'from-purple-500/60 via-purple-500/10 to-pink-500/10',
                ];
                const borderGrad = gradients[i % gradients.length];

                return (
                  <motion.div
                    key={p.id}
                    initial={false}
                    animate={{
                      x,
                      y,
                      rotateY,
                      rotateZ,
                      scale,
                      zIndex,
                      opacity,
                    }}
                    whileTap={{ scale: scale * 0.96 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 28,
                      mass: 0.9,
                      restDelta: 0.001
                    }}
                    onClick={() => {
                      if (isCenter) {
                        playClickSound();
                        playJokeAudio(p.audioUrl, p.audioText);
                      } else {
                        playClickSound();
                        setCurrentIndex(i);
                      }
                    }}
                    className={`absolute w-[240px] sm:w-[260px] h-[340px] sm:h-[360px] rounded-[1.75rem] p-5 cursor-pointer bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-[0_6px_0_0_#CBD5E1] dark:shadow-[0_6px_0_0_#0f172a] transition-colors group`}
                  >
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none overflow-hidden rounded-[1.75rem]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                    <div className="relative w-full h-full flex flex-col pointer-events-none">
                      {isCenter && (
                        <>
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.8, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-2 left-2 z-30 flex items-center justify-center w-8 h-8 rounded-full bg-slate-200/50 dark:bg-black/30 backdrop-blur-sm shadow-sm pointer-events-none border-2 border-white/50 dark:border-white/10"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                          </motion.div>
                        </>
                      )}
                      
                      <div className="flex-1 w-full relative z-10 flex min-h-0 items-end justify-center pb-2">
                        <img 
                          src={p.image} 
                          alt={p.chineseName} 
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://api.dicebear.com/7.x/notionists/svg?seed=${p.englishId}Sv`;
                          }}
                          className={`w-full h-full object-contain object-bottom drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-500 ease-out ${p.imageClassName || 'translate-y-2 -translate-x-[2px] scale-[1.05] group-hover:scale-[1.1]'}`} 
                        />
                      </div>
                      <div className="mt-auto flex justify-between items-end pb-1 relative z-20 pt-2">
                        <div className="flex-1 pr-2 flex flex-col justify-end">
                          <h4 className="text-[16px] sm:text-[18px] font-black text-slate-900 dark:text-white leading-tight break-words tracking-tight">
                            {p.englishId}
                          </h4>
                          <p className="text-[11px] sm:text-[12px] font-bold text-blue-500/80 dark:text-blue-400/80 uppercase tracking-widest mt-0.5 break-words">
                            {p.chineseName}人格
                          </p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            playClickSound();
                            setSelectedPersonality(p);
                          }}
                          className="w-10 h-10 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 pointer-events-auto transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-700 select-none caret-transparent [-webkit-tap-highlight-color:transparent]"
                        >
                          <Info className="w-5 h-5" strokeWidth={2.5} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="relative z-30 px-6 mt-2 shrink-0 w-full max-w-[400px] mx-auto pb-4 sm:pb-6 flex flex-row gap-3">
          <button 
            onClick={() => {
              playClickSound();
              onStart('normal');
            }}
            className="flex-1 py-3.5 sm:py-4 rounded-[1.25rem] flex flex-col items-center justify-center bg-[#1cb0f6] hover:bg-[#1899d6] text-white font-black text-[16px] sm:text-[18px] tracking-wider shadow-[0_5px_0_0_#1899d6] active:shadow-[0_0px_0_0_#1899d6] active:translate-y-[5px] transition-all border-2 border-transparent select-none uppercase caret-transparent [-webkit-tap-highlight-color:transparent]"
          >
            <span>普通测评</span>
            <span className="text-[11px] font-bold opacity-80 mt-[-2px]">15题</span>
          </button>
          
          <button 
            onClick={() => {
              playClickSound();
              onStart('deep');
            }}
            className="flex-1 py-3.5 sm:py-4 rounded-[1.25rem] flex flex-col items-center justify-center bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-900 text-white font-black text-[16px] sm:text-[18px] tracking-wider shadow-[0_5px_0_0_#334155] dark:shadow-[0_5px_0_0_#94a3b8] active:shadow-[0_0px_0_0_#334155] dark:active:shadow-[0_0px_0_0_#94a3b8] active:translate-y-[5px] transition-all border-2 border-transparent select-none uppercase caret-transparent [-webkit-tap-highlight-color:transparent]"
          >
            <span>深度测评</span>
            <span className="text-[11px] font-bold opacity-80 mt-[-2px]">40题</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPersonality && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPersonality(null)}
              className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
              transition={{ type: "spring", damping: 22, stiffness: 220, mass: 0.8 }}
              className="relative w-full max-w-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] border border-blue-200/50 dark:border-slate-700/50 z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/10 blur-3xl rounded-full" />

              <button 
                onClick={() => {
                  playClickSound();
                  setSelectedPersonality(null);
                }}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-20 select-none caret-transparent [-webkit-tap-highlight-color:transparent]"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[24px] rounded-full" />
                    <img 
                      src={selectedPersonality.image} 
                      alt={selectedPersonality.chineseName} 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://api.dicebear.com/7.x/notionists/svg?seed=${selectedPersonality.englishId}Sv`;
                      }}
                      className={`relative w-24 h-24 sm:w-28 sm:h-28 object-contain object-bottom p-2 dark:bg-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] ${selectedPersonality.imageClassName || ''}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1 uppercase">{selectedPersonality.englishId}</h3>
                    <p className="text-[14px] text-blue-500 dark:text-blue-400 font-bold uppercase tracking-widest">{selectedPersonality.chineseName}人格</p>
                  </div>
                </div>
                
                <p className="text-[16px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                  {selectedPersonality.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedPersonality.traits.map((trait, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-300 rounded-full text-[13px] font-bold uppercase tracking-wider border border-blue-200/50 dark:border-slate-700 shadow-sm">
                      #{trait}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

