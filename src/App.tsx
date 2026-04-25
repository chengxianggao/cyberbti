/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ThemeProvider } from './components/ThemeToggle';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';

export type AppState = 'home' | 'test' | 'result';
export type TestMode = 'normal' | 'deep';

export default function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [testMode, setTestMode] = useState<TestMode>('normal');
  const [resultId, setResultId] = useState<string>('');

  const handleStartTest = (mode: TestMode) => {
    setTestMode(mode);
    setAppState('test');
  };

  const handleFinishTest = (calculatedId: string) => {
    setResultId(calculatedId);
    setAppState('result');
  };

  const handleGoHome = () => {
    setAppState('home');
    setResultId('');
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-[100dvh] bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 relative isolate">
        <div className="fixed inset-0 pointer-events-none bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)] -z-10" />
        <main className="max-w-md mx-auto min-h-[100dvh] bg-slate-50 dark:bg-slate-950 relative overflow-hidden shadow-xl sm:border-x sm:border-slate-200 dark:sm:border-slate-800 pb-safe flex flex-col selection:bg-sky-500/30">
          <div className="absolute inset-0 pointer-events-none bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)] opacity-70" />
          {appState === 'home' && <Home onStart={handleStartTest} />}
          {appState === 'test' && <Test mode={testMode} onComplete={handleFinishTest} onCancel={handleGoHome} />}
          {appState === 'result' && <Result resultId={resultId} onRestart={handleGoHome} />}
        </main>
      </div>
    </ThemeProvider>
  );
}
