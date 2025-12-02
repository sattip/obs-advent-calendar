'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DayData } from '@/types/advent';

interface DoorContentProps {
  data: DayData;
  onClose: () => void;
}

export default function DoorContent({ data, onClose }: DoorContentProps) {
  const isOffer = data.type === 'offer';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br ${
          isOffer
            ? 'from-red-50 to-red-100'
            : 'from-purple-50 to-purple-100'
        } rounded-xl shadow-2xl p-8`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Day Badge */}
        <div
          className={`inline-block px-4 py-2 rounded-full ${
            isOffer ? 'bg-red-600' : 'bg-purple-600'
          } text-white font-bold mb-4`}
        >
          Ημέρα {data.day}
        </div>

        {/* Icon */}
        <div className="text-6xl mb-4">{data.icon}</div>

        {/* Title */}
        <h2
          className={`text-3xl font-bold mb-4 ${
            isOffer ? 'text-red-900' : 'text-purple-900'
          }`}
        >
          {data.title}
        </h2>

        {/* Type Badge */}
        <div className="mb-6">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              isOffer
                ? 'bg-red-200 text-red-800'
                : data.type === 'automation'
                ? 'bg-blue-200 text-blue-800'
                : data.type === 'guide'
                ? 'bg-green-200 text-green-800'
                : 'bg-purple-200 text-purple-800'
            }`}
          >
            {data.type === 'ai-tip' && '💡 AI Συμβουλή'}
            {data.type === 'automation' && '⚙️ Αυτοματισμός'}
            {data.type === 'guide' && '📚 Οδηγός'}
            {data.type === 'offer' && '🎁 Προσφορά'}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          {data.description}
        </p>

        {/* Offer Details */}
        {isOffer && data.offer && (
          <div className="bg-white rounded-lg p-6 mb-6 border-2 border-red-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-red-600">
                {data.offer.discount}%
              </div>
              <div>
                <div className="text-sm text-gray-600">Έκπτωση</div>
                <div className="text-lg font-semibold text-gray-900">
                  Κωδικός: <span className="text-red-600">{data.offer.code}</span>
                </div>
              </div>
            </div>
            {data.offer.bonus && (
              <div className="text-sm text-gray-700 bg-red-50 p-3 rounded">
                <strong>Μπόνους:</strong> {data.offer.bonus}
              </div>
            )}
          </div>
        )}

        {/* Content Preview */}
        <div className="prose prose-purple max-w-none mb-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-gray-800 whitespace-pre-line">
              {data.content.substring(0, 200)}...
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={isOffer ? 'https://obstechnologies.gr/plugins' : `/blog/day-${data.day}`}
          target={isOffer ? '_blank' : '_self'}
          rel={isOffer ? 'noopener noreferrer' : undefined}
          className={`block w-full py-4 px-6 rounded-lg font-bold text-white text-lg text-center transition-all transform hover:scale-105 cursor-pointer ${
            isOffer
              ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
              : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
          } shadow-lg`}
        >
          {isOffer ? 'Αξιοποίησε την Προσφορά →' : 'Διάβασε Περισσότερα →'}
        </a>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 text-6xl opacity-10 pointer-events-none">
          ❄️
        </div>
        <div className="absolute bottom-0 left-0 text-6xl opacity-10 pointer-events-none">
          ✨
        </div>
      </motion.div>
    </motion.div>
  );
}
