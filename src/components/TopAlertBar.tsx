import React, { useState, useEffect } from 'react';

export const TopAlertBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 26 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 9, seconds: 59 }; // loop for urgency
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 bg-[#E52E2E] text-white py-2 px-3 text-xs sm:text-sm font-bold shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 tracking-wide text-center">
        <span>🔥 OFERTA ESPECIAL E VAGAS DA SEMANA EXPIRAM EM:</span>
        <div className="flex items-center gap-1 font-mono bg-white text-[#E52E2E] px-2 py-0.5 rounded font-black text-xs sm:text-sm shadow-2xs">
          <span>{formatNum(timeLeft.minutes)}</span>
          <span>:</span>
          <span>{formatNum(timeLeft.seconds)}</span>
        </div>
      </div>
    </div>
  );
};
