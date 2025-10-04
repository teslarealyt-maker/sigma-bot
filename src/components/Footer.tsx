'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Σ Sigma Bot</h3>
            <p className="text-gray-300">
              The ultimate Discord bot for those who aim to be exceptional.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/commands" className="text-gray-300 hover:text-discord-blurple transition-colors">
                  Commands
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-discord-blurple transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-discord-blurple transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-discord-blurple transition-colors"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-discord-blurple transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-discord-blurple transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} YourBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}