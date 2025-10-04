'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-discord-blurple transition-colors">
            Σ Sigma Bot
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/commands" className="text-white hover:text-discord-blurple transition-colors">
              Commands
            </Link>
            <Link href="/features" className="text-white hover:text-discord-blurple transition-colors">
              Features
            </Link>
            <a href="#" className="bg-discord-blurple text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-opacity">
              Add to Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/commands"
                className="text-white hover:text-discord-blurple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Commands
              </Link>
              <Link
                href="/features"
                className="text-white hover:text-discord-blurple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/support"
                className="text-white hover:text-discord-blurple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}