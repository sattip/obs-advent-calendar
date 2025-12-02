'use client';

import React from 'react';
import { useCountdown } from '@/hooks/useCountdown';

export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown();

  const timeUnits = [
    { value: days, label: 'Ημέρες', color: 'from-red-600 to-red-700' },
    { value: hours, label: 'Ώρες', color: 'from-green-600 to-green-700' },
    { value: minutes, label: 'Λεπτά', color: 'from-blue-600 to-blue-700' },
    { value: seconds, label: 'Δευτερόλεπτα', color: 'from-purple-600 to-purple-700' },
  ];

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg">
          ⏱️ Αντίστροφη Μέτρηση για τα Χριστούγεννα
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeUnits.map((unit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${unit.color} rounded-xl shadow-lg p-6 transform transition-all hover:scale-105`}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-mono">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-white/80 text-sm">
          🎄 Ανοίξτε μια πόρτα κάθε μέρα μέχρι τα Χριστούγεννα! 🎁
        </div>
      </div>
    </div>
  );
}
