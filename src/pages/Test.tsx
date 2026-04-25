import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Quote } from 'lucide-react';
import { playClickSound } from '../lib/utils';
import { questions } from '../data/questions';

const testOptions = [
  {
    weight: -1.5,
    sizeClass: "w-14 h-14 sm:w-[64px] sm:h-[64px]",
    colorClass: "bg-[#ff4b4b] border-[#ea4343] dark:bg-[#e03a3a] dark:border-[#c43232] text-white",
    shadowClass: "shadow-[0_4px_0_0_#ea4343] dark:shadow-[0_4px_0_0_#c43232]",
    activeClass: "active:shadow-[0_0px_0_0_#ea4343] dark:active:shadow-[0_0px_0_0_#c43232] active:translate-y-[4px]",
    borderClass: "border-2",
  },
  {
    weight: -0.8,
    sizeClass: "w-12 h-12 sm:w-[56px] sm:h-[56px]",
    colorClass: "bg-[#ff7676] border-[#ea6262] dark:bg-[#e05c5c] dark:border-[#c44b4b] text-white",
    shadowClass: "shadow-[0_4px_0_0_#ea6262] dark:shadow-[0_4px_0_0_#c44b4b]",
    activeClass: "active:shadow-[0_0px_0_0_#ea6262] dark:active:shadow-[0_0px_0_0_#c44b4b] active:translate-y-[4px]",
    borderClass: "border-2",
  },
  {
    weight: 0,
    sizeClass: "w-10 h-10 sm:w-[48px] sm:h-[48px]",
    colorClass: "bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-300",
    shadowClass: "shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#334155]",
    activeClass: "active:shadow-[0_0px_0_0_#cbd5e1] dark:active:shadow-[0_0px_0_0_#334155] active:translate-y-[4px]",
    borderClass: "border-2",
  },
  {
    weight: 0.8,
    sizeClass: "w-12 h-12 sm:w-[56px] sm:h-[56px]",
    colorClass: "bg-[#5cc5f8] border-[#4faadd] dark:bg-[#43a1cf] dark:border-[#3888b0] text-white",
    shadowClass: "shadow-[0_4px_0_0_#4faadd] dark:shadow-[0_4px_0_0_#3888b0]",
    activeClass: "active:shadow-[0_0px_0_0_#4faadd] dark:active:shadow-[0_0px_0_0_#3888b0] active:translate-y-[4px]",
    borderClass: "border-2",
  },
  {
    weight: 1.5,
    sizeClass: "w-14 h-14 sm:w-[64px] sm:h-[64px]",
    colorClass: "bg-[#1cb0f6] border-[#1899d6] dark:bg-[#128dc9] dark:border-[#0e74a6] text-white",
    shadowClass: "shadow-[0_4px_0_0_#1899d6] dark:shadow-[0_4px_0_0_#0e74a6]",
    activeClass: "active:shadow-[0_0px_0_0_#1899d6] dark:active:shadow-[0_0px_0_0_#0e74a6] active:translate-y-[4px]",
    borderClass: "border-2",
  },
];

export default function Test({ mode, onComplete, onCancel }: { mode: 'normal' | 'deep', onComplete: (id: string) => void, onCancel: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [scoresHistory, setScoresHistory] = useState<Record<string, number>[]>([{}]);
  
  const activeQuestions = useMemo(() => {
    return mode === 'normal' ? questions.slice(0, 15) : questions;
  }, [mode]);

  const currentQ = activeQuestions[currentIdx];
  const progress = ((currentIdx) / activeQuestions.length) * 100;

  const handleOptionClick = (weight: number) => {
    const newScores = { ...scores };
    Object.entries(currentQ.traitMap).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + (val * weight);
    });

    if (currentIdx < activeQuestions.length - 1) {
      setScores(newScores);
      setScoresHistory(prev => [...prev, newScores]);
      setCurrentIdx(prev => prev + 1);
    } else {
      let maxKey = 'WOLF'; 
      let maxVal = -999;
      Object.keys(newScores).forEach((key) => {
        const val = newScores[key] as number;
        if (val > maxVal) {
          maxVal = val;
          maxKey = key;
        }
      });
      onComplete(maxKey);
    }
  };

  const handleBack = () => {
    playClickSound();
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
      const newHistory = scoresHistory.slice(0, -1);
      setScoresHistory(newHistory);
      setScores(newHistory[newHistory.length - 1]);
    } else {
      onCancel();
    }
  };


  return (
    <div className="min-h-screen w-full flex flex-col font-sans transition-colors duration-300 relative">
      
      {/* Background Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] pointer-events-none" />

      {/* Chunky Progress Bar */}
      <div className="pt-6 sm:pt-8 px-6 sm:px-12 z-20 flex flex-col items-center gap-4">
        <div className="w-full flex items-center justify-between shrink-0">
          <button 
            onClick={handleBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors select-none caret-transparent [-webkit-tap-highlight-color:transparent]"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <div className="flex-1 px-4 max-w-2xl">
            <div className="w-full h-4 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#1cb0f6] rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <div className="absolute top-1 left-2 right-2 h-1 bg-white/30 rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col relative px-6 min-h-0 pb-12 pt-4 z-10 sm:px-12">
        <AnimatePresence mode="popLayout" custom={currentIdx}>
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.8 }}
            className="flex-1 flex flex-col min-h-0 max-w-3xl mx-auto w-full relative"
          >
            <div className="absolute top-10 left-0 text-slate-200 dark:text-slate-800 pointer-events-none -z-10">
              <Quote size={120} strokeWidth={1} className="opacity-50 rotate-12" />
            </div>
            
            <div className="flex-1 flex flex-col justify-center lg:pt-12 min-h-[240px] px-2 shrink-0">
              <div className="mb-4">
                <span className="text-[#1cb0f6] font-black text-xl italic tracking-wider">
                  #{currentIdx + 1}
                </span>
                <span className="text-slate-400 dark:text-slate-500 font-bold ml-1 text-sm">
                  / {activeQuestions.length}
                </span>
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-bold leading-[1.4] text-slate-900 dark:text-white mb-2" style={{ textWrap: 'balance' }}>
                {currentQ.text}
              </h2>
            </div>

            <div className="shrink-0 flex flex-col items-center justify-center gap-10 w-full pb-12 sm:pb-24 mt-8">
              <div className="flex items-center justify-between w-full max-w-[340px] sm:max-w-[420px] px-2">
                <span className="text-rose-500 font-bold text-[16px] sm:text-[18px] tracking-widest whitespace-nowrap">强烈反对</span>
                <span className="text-[#1cb0f6] font-bold text-[16px] sm:text-[18px] tracking-widest whitespace-nowrap">非常赞同</span>
              </div>
              <div className="flex items-center justify-between w-full max-w-[340px] sm:max-w-[420px] gap-2 sm:gap-4 px-2">
                {testOptions.map((opt, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 15, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                    onClick={() => {
                      playClickSound();
                      handleOptionClick(opt.weight);
                    }}
                    className={`relative rounded-full shrink-0 flex items-center justify-center outline-none transition-all duration-100 ease-out group select-none caret-transparent [-webkit-tap-highlight-color:transparent] ${opt.sizeClass} ${opt.colorClass} ${opt.borderClass} ${opt.shadowClass} ${opt.activeClass}`}
                  >
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
