import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Share2, Heart, Briefcase, Star, Sparkles } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { personalities } from '../data/personalities';
import { playJokeAudio } from '../lib/utils';
import { useTheme } from '../components/ThemeToggle';

const getColorTheme = (id: string) => {
  const themes = [
    { shadowHex: '249,115,22', border: 'border-orange-400 dark:border-orange-500', badgeBorder: 'border-orange-400', bgBadge: 'bg-orange-500', gradient: 'from-orange-500/20 to-amber-500/20' },
    { shadowHex: '236,72,153', border: 'border-pink-400 dark:border-pink-500', badgeBorder: 'border-pink-400', bgBadge: 'bg-pink-500', gradient: 'from-pink-500/20 to-rose-500/20' },
    { shadowHex: '6,182,212', border: 'border-cyan-400 dark:border-cyan-500', badgeBorder: 'border-cyan-400', bgBadge: 'bg-cyan-500', gradient: 'from-cyan-500/20 to-blue-500/20' },
    { shadowHex: '99,102,241', border: 'border-indigo-400 dark:border-indigo-500', badgeBorder: 'border-indigo-400', bgBadge: 'bg-indigo-500', gradient: 'from-indigo-500/20 to-purple-500/20' },
    { shadowHex: '59,130,246', border: 'border-blue-400 dark:border-blue-500', badgeBorder: 'border-blue-400', bgBadge: 'bg-blue-500', gradient: 'from-blue-500/20 to-indigo-500/20' },
    { shadowHex: '244,63,94', border: 'border-rose-400 dark:border-rose-500', badgeBorder: 'border-rose-400', bgBadge: 'bg-rose-500', gradient: 'from-rose-500/20 to-red-500/20' },
    { shadowHex: '34,197,94', border: 'border-green-400 dark:border-green-500', badgeBorder: 'border-green-400', bgBadge: 'bg-green-500', gradient: 'from-green-500/20 to-emerald-500/20' },
    { shadowHex: '217,70,239', border: 'border-fuchsia-400 dark:border-fuchsia-500', badgeBorder: 'border-fuchsia-400', bgBadge: 'bg-fuchsia-500', gradient: 'from-fuchsia-500/20 to-purple-500/20' },
    { shadowHex: '16,185,129', border: 'border-emerald-400 dark:border-emerald-500', badgeBorder: 'border-emerald-400', bgBadge: 'bg-emerald-500', gradient: 'from-emerald-500/20 to-teal-500/20' },
    { shadowHex: '245,158,11', border: 'border-amber-400 dark:border-amber-500', badgeBorder: 'border-amber-400', bgBadge: 'bg-amber-500', gradient: 'from-amber-500/20 to-yellow-500/20' },
  ];
  
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % themes.length;
  const theme = themes[index];
  
  return {
    ...theme,
    outerGlow: `shadow-[0_0_30px_rgba(${theme.shadowHex},0.4)]`,
    innerGlow: `shadow-[0_0_15px_rgba(${theme.shadowHex},0.5)]`
  };
};

export default function Result({ resultId, onRestart, scores }: { resultId: string; onRestart: () => void; scores?: Record<string, number> }) {
  const { theme } = useTheme();
  const result = personalities.find(p => p.id === resultId) || personalities[0];
  const [showToast, setShowToast] = useState(false);
  const colorTheme = getColorTheme(result.id);
  
  const [memeQuote, setMemeQuote] = useState(result.quote);
  const [funnyAnalysis, setFunnyAnalysis] = useState(result.description);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    playJokeAudio(result.audioUrl, result.audioText);
    
    // Fetch AI personalized humor analysis
    const fetchAiAnalysis = async () => {
      setIsAiLoading(true);
      try {
        const prompt = `你是一个非常懂中文互联网抽象文化、喜欢玩梗的性格测试解说员。
测试出来的结果是【${result.chineseName} / ${result.englishId}】。
请用非常幽默、犀利、带梗的语言，生成一段大约200字的详细分析。不要太正经，可以阴阳怪气或者狂吹彩虹屁。
然后再给我一句符合这个人格的“在中文互联网上的热评或神仙注脚”（梗）。
请返回严格的 JSON 格式，包含如下两个字段：
{"quote": "一句网易云热评风格或者贴吧老哥风格的梗", "analysis": "详细且梗密集的分析"}
不要返回 markdown 代码块标示，只返回 JSON。`;

        const res = await fetch('/api/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt })
        });
        const data = await res.json();
        if (data.text) {
          const parsed = JSON.parse(data.text);
          if (parsed.quote) setMemeQuote(parsed.quote);
          if (parsed.analysis) setFunnyAnalysis(parsed.analysis);
        }
      } catch (err) {
        console.error("AI Analysis skipped or failed", err);
      } finally {
        setIsAiLoading(false);
      }
    };
    
    fetchAiAnalysis();
  }, [result]);

  const handleShare = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const chartColor = theme === 'dark' ? '#60A5FA' : '#3B82F6';

  return (
    <div className="min-h-screen w-full font-sans transition-colors duration-300 relative selection:bg-blue-500/30">
      
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] pointer-events-none" />
      
      <div className="h-10 w-full shrink-0 hidden sm:block"></div>

      <div className="pt-12 sm:pt-10 pb-2 shrink-0 z-20 px-6 mt-4">
        <div className="w-full max-w-sm mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }} 
            animate={{ scale: 1, opacity: 1, rotate: 0 }} 
            transition={{ type: "spring", damping: 24, stiffness: 220, delay: 0.1 }} 
            className="w-48 h-48 sm:w-52 sm:h-52 shrink-0 flex items-center justify-center mb-4 relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-tr ${colorTheme.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity`} />
            <img 
              src={result.image} 
              alt={result.id} 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://api.dicebear.com/7.x/notionists/svg?seed=${result.englishId}Sv`;
              }}
              className={`w-full h-full object-contain object-bottom relative z-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] ${result.imageClassName || ''}`} 
            />
          </motion.div>
          
          <div className="text-center mt-2 flex flex-col items-center">
            <motion.h1 
              initial={{ y: 15, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-[40px] sm:text-[48px] font-black leading-none tracking-widest text-slate-900 dark:text-white uppercase mb-1"
            >
              {result.englishId}
            </motion.h1>
            <motion.div 
              initial={{ y: 15, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              className="mb-4"
            >
              <span className="text-[20px] font-black tracking-widest text-slate-700 dark:text-slate-300">{result.chineseName}</span>
            </motion.div>
            <motion.p 
              initial={{ y: 15, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-[16px] text-slate-500 dark:text-slate-400 font-medium mb-2 px-4 text-center text-balance max-w-[280px]"
            >
              " {memeQuote} "
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content Space */}
      <div className="flex-1 w-full relative z-10 p-6 flex flex-col gap-4 h-full min-h-0 overflow-y-auto no-scrollbar pb-32 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-4 h-full min-h-0">
          
          <motion.div 
            initial={{ y: 30, opacity: 0, scale: 0.98 }} 
            animate={{ y: 0, opacity: 1, scale: 1 }} 
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.75rem] p-6 shrink-0 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-[0_6px_0_0_#CBD5E1] dark:shadow-[0_6px_0_0_#0f172a] relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${colorTheme.bgBadge} blur-3xl opacity-10 rounded-full`} />
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Sparkles className="w-4 h-4 text-[#1cb0f6]" strokeWidth={2} />
              <h3 className="font-semibold text-[14px] uppercase tracking-widest text-[#1cb0f6]">深度解剖 (AI驱动)</h3>
            </div>
            
            <div className="relative z-10 min-h-[100px]">
              {isAiLoading ? (
                <div className="flex flex-col gap-3 animate-pulse">
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-full"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-5/6"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-4/6"></div>
                </div>
              ) : (
                <p className="text-[16px] sm:text-[17px] leading-relaxed font-medium mb-6 text-slate-700 dark:text-slate-300">
                  {funnyAnalysis}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-2 w-full relative z-10">
              {result.traits.map((trait, i) => (
                <motion.span 
                  key={i} 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.45 + i * 0.05, type: "spring", damping: 18, stiffness: 200 }}
                  className="px-4 py-1.5 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-300 rounded-full font-medium text-[13px] uppercase tracking-wider border border-blue-200 dark:border-slate-700"
                >
                  #{trait}
                </motion.span>
              ))}
            </div>

            {/* Hobbies Section */}
            {result.hobbies && result.hobbies.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" strokeWidth={2} />
                  <h3 className="font-semibold text-[14px] uppercase tracking-widest text-slate-500 dark:text-slate-400">Interests & Hobbies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.hobbies.map((hobby, i) => (
                    <motion.span 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 + i * 0.05 }}
                      className="text-[14px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg"
                    >
                      {hobby}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <motion.div 
              initial={{ y: 30, opacity: 0, scale: 0.98 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-[1.5] min-h-[260px] rounded-[1.75rem] p-6 relative flex flex-col items-center justify-center bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-[0_6px_0_0_#CBD5E1] dark:shadow-[0_6px_0_0_#0f172a] overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl rounded-full" />
              <h3 className="font-semibold text-[14px] text-slate-500 dark:text-slate-400 uppercase tracking-widest absolute top-6 left-6 z-10 w-full">Parameters</h3>
              <div className="w-full h-[220px] sm:h-[260px] relative mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={result.radar}>
                    <PolarGrid stroke={theme === 'dark' ? '#334155' : '#e2e8f0'} strokeOpacity={0.8} radialLines={false} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: 11, fontWeight: 500 }} />
                    <Radar name="Score" dataKey="A" stroke={chartColor} strokeWidth={2} fill={chartColor} fillOpacity={0.15} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <div className="flex-1 grid gap-4 grid-cols-2 lg:grid-cols-1">
              {[
                { 
                  icon: Briefcase, 
                  title: "发展指南", 
                  text: result.career, 
                  textColor: "text-sky-600 dark:text-sky-300",
                  bgClass: "bg-sky-50 dark:bg-sky-500/10",
                  borderClass: "border-sky-200 dark:border-sky-800/50",
                  shadowClass: "shadow-[0_4px_0_0_#bae6fd] dark:shadow-[0_4px_0_0_#0c4a6e]",
                  iconBg: "bg-sky-100 dark:bg-sky-500/20",
                  iconColor: "text-sky-500 dark:text-sky-400"
                },
                { 
                  icon: Heart, 
                  title: "情感分析", 
                  text: result.romance, 
                  textColor: "text-rose-600 dark:text-rose-300",
                  bgClass: "bg-rose-50 dark:bg-rose-500/10",
                  borderClass: "border-rose-200 dark:border-rose-800/50",
                  shadowClass: "shadow-[0_4px_0_0_#fecdd3] dark:shadow-[0_4px_0_0_#881337]",
                  iconBg: "bg-rose-100 dark:bg-rose-500/20",
                  iconColor: "text-rose-500 dark:text-rose-400"
                },
                { 
                  icon: Star, 
                  title: "幸运玄学", 
                  text: result.lucky, 
                  textColor: "text-amber-600 dark:text-amber-300",
                  bgClass: "bg-amber-50 dark:bg-amber-500/10",
                  borderClass: "border-amber-200 dark:border-amber-800/50",
                  shadowClass: "shadow-[0_4px_0_0_#fde68a] dark:shadow-[0_4px_0_0_#78350f]",
                  iconBg: "bg-amber-100 dark:bg-amber-500/20",
                  iconColor: "text-amber-500 dark:text-amber-400"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ y: 30, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-[1.5rem] p-5 flex flex-col relative overflow-hidden group border-2 transition-all duration-300 hover:-translate-y-1 ${item.bgClass} ${item.borderClass} ${item.shadowClass} ${i === 2 ? 'col-span-2 lg:col-span-1' : ''}`}
                >
                  <item.icon className={`absolute -right-4 -bottom-4 w-24 h-24 ${item.iconColor} opacity-[0.04] dark:opacity-[0.08] group-hover:scale-110 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.12] transition-all duration-500 pointer-events-none`} />
                  
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <div className={`w-9 h-9 shrink-0 rounded-[0.85rem] flex items-center justify-center ${item.iconBg}`}>
                      <item.icon className={`w-[18px] h-[18px] ${item.iconColor}`} strokeWidth={2.5} />
                    </div>
                    <h4 className={`font-bold text-[14px] ${item.textColor} uppercase tracking-widest`}>{item.title}</h4>
                  </div>
                  <p className="text-[16px] font-medium leading-[1.6] text-slate-700 dark:text-slate-300 relative z-10">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        
          <motion.div 
            initial={{ y: 30, opacity: 0, scale: 0.98 }} 
            animate={{ y: 0, opacity: 1, scale: 1 }} 
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.5rem] p-5 shrink-0 relative overflow-hidden group border-2 transition-all duration-300 hover:-translate-y-1 bg-fuchsia-50 dark:bg-fuchsia-500/10 border-fuchsia-200 dark:border-fuchsia-800/50 shadow-[0_4px_0_0_#fc73b9] dark:shadow-[0_4px_0_0_#831843]"
          >
            <Sparkles className="absolute -right-2 -bottom-2 w-20 h-20 text-fuchsia-500 dark:text-fuchsia-400 opacity-[0.04] dark:opacity-[0.08] group-hover:scale-110 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.12] transition-all duration-500 pointer-events-none" />
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="w-9 h-9 shrink-0 rounded-[0.85rem] flex items-center justify-center bg-fuchsia-100 dark:bg-fuchsia-500/20">
                <Sparkles className="w-[18px] h-[18px] text-fuchsia-500 dark:text-fuchsia-400" strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-[14px] uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-300">冷知识 / 梗百科</h3>
            </div>
            <p className="text-[16px] leading-[1.6] font-medium text-slate-700 dark:text-slate-300 relative z-10">
              {result.funFact || "The origins of this persona are legendary!"}
            </p>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-6 py-6 pb-8 bg-gradient-to-t from-[#F0F6F9] dark:from-[#080B12] via-[#F0F6F9]/90 dark:via-[#080B12]/90 to-transparent z-40 flex justify-center backdrop-blur-sm">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, type: "spring", damping: 24, stiffness: 220 }}
          className="max-w-3xl w-full flex gap-3 h-[60px] sm:h-[68px]"
        >
          <button 
            onClick={onRestart}
            className="aspect-square h-full shrink-0 flex items-center justify-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300 rounded-2xl shadow-[0_6px_0_0_#94a3b8] dark:shadow-[0_6px_0_0_#334155] active:shadow-[0_0px_0_0_#94a3b8] dark:active:shadow-[0_0px_0_0_#334155] active:translate-y-[6px] transition-all border-2 border-transparent select-none caret-transparent [-webkit-tap-highlight-color:transparent]"
          >
            <RotateCcw className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <button 
            className="flex-1 h-full bg-[#1cb0f6] hover:bg-[#1899d6] text-white rounded-[1.25rem] flex items-center justify-center gap-2 transition-all font-black text-[20px] sm:text-[22px] tracking-widest shadow-[0_6px_0_0_#1899d6] active:shadow-[0_0px_0_0_#1899d6] active:translate-y-[6px] border-2 border-transparent uppercase select-none caret-transparent [-webkit-tap-highlight-color:transparent]"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} /> 分享人格档案
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
           <motion.div
           initial={{ opacity: 0, y: 30, scale: 0.9, x: '-50%' }}
           animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
           exit={{ opacity: 0, y: 30, scale: 0.9, x: '-50%' }}
           transition={{ type: "spring", damping: 20, stiffness: 250 }}
           className="absolute bottom-28 left-1/2 bg-[#58cc02] text-white px-6 py-3 rounded-[1rem] font-black text-[15px] z-50 whitespace-nowrap shadow-[0_4px_0_0_#46a302] border-2 border-transparent uppercase tracking-wider"
         >
           链接已复制！
         </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
