'use client';

import React from 'react';

export default function SnowAnimation() {
  // Generate random snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.6 + 0.4,
    fontSize: `${Math.random() * 10 + 10}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10px) translateX(0);
          }
          50% {
            transform: translateY(50vh) translateX(50px);
          }
          100% {
            transform: translateY(100vh) translateX(0);
          }
        }

        .snowflake {
          position: absolute;
          top: -10px;
          color: white;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          animation: snowfall linear infinite;
        }
      `}</style>

      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            opacity: flake.opacity,
            fontSize: flake.fontSize,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
