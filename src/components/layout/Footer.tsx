'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">OBS Technologies</h3>
            <p className="text-purple-200 text-sm leading-relaxed">
              Εξειδικευμένες λύσεις αυτοματισμού και τεχνητής νοημοσύνης για
              επιχειρήσεις που θέλουν να προηγηθούν.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3">Χρήσιμα Links</h3>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Αρχική
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Υπηρεσίες
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Επικοινωνία
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-3">Ακολουθήστε μας</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-purple-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="mt-4 text-purple-200 text-sm">
              <p>📧 info@obstechnologies.gr</p>
              <p>📞 +30 210 123 4567</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-200">
            <p>
              © {currentYear} OBS Technologies. Όλα τα δικαιώματα κατοχυρωμένα.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Πολιτική Απορρήτου
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Όροι Χρήσης
              </a>
            </div>
          </div>

          <div className="text-center mt-4 text-purple-300 text-xs">
            <p>🎄 Καλά Χριστούγεννα & Ευτυχισμένο το 2025! 🎁</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
