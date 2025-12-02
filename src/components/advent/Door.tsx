'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DoorProps } from '@/types/advent';

export default function Door({
  day,
  title,
  content,
  isUnlocked,
  isOpen,
  onOpen,
  type = 'ai-tip',
}: DoorProps) {
  const handleClick = () => {
    if (isUnlocked) {
      onOpen(day);
    }
  };

  const doorVariants = {
    closed: {
      rotateY: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const },
    },
    open: {
      rotateY: -160,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const },
    },
  };

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
  };

  const getTypeColor = () => {
    switch (type) {
      case 'offer':
        return 'from-red-600 to-red-800';
      case 'automation':
        return 'from-blue-600 to-blue-800';
      case 'guide':
        return 'from-green-600 to-green-800';
      default:
        return 'from-purple-600 to-purple-800'; // OBS purple
    }
  };

  return (
    <div
      className="relative w-full aspect-square cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleClick}
    >
      {/* Container with preserved 3D */}
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {/* Door */}
        <motion.div
          className={`absolute inset-0 rounded-lg shadow-lg overflow-hidden ${
            !isUnlocked ? 'grayscale opacity-70' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'left center',
            backfaceVisibility: 'hidden',
          }}
          variants={!isUnlocked ? shakeVariants : doorVariants}
          animate={isOpen ? 'open' : 'closed'}
          whileHover={
            isUnlocked && !isOpen
              ? { scale: 1.05, transition: { duration: 0.2 } }
              : {}
          }
          whileTap={!isUnlocked ? 'shake' : {}}
        >
          {/* Door Front */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${getTypeColor()} flex flex-col items-center justify-center p-4 border-2 border-white/20`}
          >
            {/* Day Number */}
            <div className="text-white text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">
              {day}
            </div>

            {/* Lock/Unlock Indicator */}
            <div className="text-white/80 text-sm">
              {isUnlocked ? (
                <span className="text-xs">Κλικ για άνοιγμα</span>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs">Κλειδωμένο</span>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-2 right-2 text-white/40 text-2xl">
              ❄
            </div>
            <div className="absolute bottom-2 left-2 text-white/40 text-2xl">
              ✨
            </div>
          </div>
        </motion.div>

        {/* Content Behind Door */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-inner flex items-center justify-center p-4 border-2 border-purple-200 hover:border-purple-400 transition-colors"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🎁</div>
              <div className="text-sm font-semibold text-purple-900 line-clamp-2">
                {title}
              </div>
              <div className="text-xs text-purple-600 mt-2 opacity-70">
                Κλικ για λεπτομέρειες
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
