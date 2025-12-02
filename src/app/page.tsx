'use client';

import { useState } from 'react';
import AdventCalendar from '@/components/advent/AdventCalendar';
import CountdownTimer from '@/components/advent/CountdownTimer';
import SnowAnimation from '@/components/advent/SnowAnimation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { adventDays, getCurrentDay } from '@/lib/advent-data';

export default function Home() {
  const currentDay = getCurrentDay();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Snow Animation Background */}
      <SnowAnimation />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="inline-block animate-pulse">🎄</span>
              {' '}OBS Advent Calendar 2024{' '}
              <span className="inline-block animate-pulse">🎄</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-4xl font-semibold text-yellow-300 mb-6 drop-shadow-lg">
              24 Ημέρες AI Tips & Χριστουγεννιάτικες Προσφορές
            </h2>

            {/* Description */}
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 mb-8">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
                Καλώς ήρθατε στο ψηφιακό ημερολόγιο αντίστροφης μέτρησης της OBS Technologies!
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Ανακαλύψτε κάθε μέρα μέχρι τα Χριστούγεννα νέα AI tips, automation workflows,
                και αποκλειστικές προσφορές για να μεταμορφώσετε το eCommerce σας.
                Ανοίξτε μια πόρτα κάθε μέρα και ξεκλειδώστε νέες δυνατότητες! 🎁
              </p>
            </div>

            {/* Stats/Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 backdrop-blur-md rounded-xl p-6 border border-red-300/30 shadow-lg">
                <div className="text-4xl font-bold text-white mb-2">24</div>
                <div className="text-red-200 text-sm uppercase tracking-wider">Ημέρες Εκπλήξεων</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 backdrop-blur-md rounded-xl p-6 border border-green-300/30 shadow-lg">
                <div className="text-4xl font-bold text-white mb-2">{currentDay}</div>
                <div className="text-green-200 text-sm uppercase tracking-wider">Τρέχουσα Ημέρα</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-md rounded-xl p-6 border border-blue-300/30 shadow-lg">
                <div className="text-4xl font-bold text-white mb-2">AI</div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">Powered Tips</div>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Timer */}
        <section className="pb-8">
          <CountdownTimer />
        </section>

        {/* Advent Calendar Grid */}
        <section className="pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                Ανοίξτε τις Πόρτες του Χριστουγεννιάτικου Ημερολογίου
              </h2>
              <p className="text-white/80 text-lg">
                Κάθε πόρτα κρύβει μια νέα έκπληξη - AI συμβουλές, automation tips, και προσφορές! 🎅
              </p>
            </div>

            {/* Calendar Component */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-2xl border border-white/10">
              <AdventCalendar days={adventDays} />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="pb-12 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-purple-300/30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Μην Χάσετε Καμία Έκπληξη! 🎁
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Επιστρέφετε κάθε μέρα για να ανακαλύψετε νέα AI tips, automation workflows,
              και αποκλειστικές Χριστουγεννιάτικες προσφορές που θα σας βοηθήσουν να αναπτύξετε
              το eCommerce σας!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#calendar"
                className="bg-white hover:bg-gray-100 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
              >
                Δείτε το Ημερολόγιο
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
              >
                Μάθετε Περισσότερα
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
