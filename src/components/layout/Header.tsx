'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-8 px-4 shadow-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-purple-900 font-bold text-2xl">OBS</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                OBS Technologies
              </h1>
              <p className="text-purple-200 text-sm md:text-base">
                Automation & AI Solutions
              </p>
            </div>
          </div>

          {/* Title */}
          <div className="text-center md:text-right">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center md:justify-end">
              <span>🎄</span>
              <span>Advent Calendar 2024</span>
              <span>🎁</span>
            </h2>
            <p className="text-purple-200 text-sm mt-1">
              24 μέρες με AI συμβουλές & προσφορές
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 left-1/4 text-2xl opacity-30 animate-pulse">
          ✨
        </div>
        <div className="absolute bottom-2 right-1/4 text-2xl opacity-30 animate-pulse delay-100">
          ⭐
        </div>
      </div>
    </header>
  );
}
