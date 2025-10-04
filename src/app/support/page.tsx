'use client';

import { motion } from 'framer-motion';

export default function Support() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support</h1>
          <p className="text-xl text-gray-300">
            Need help? We're here for you!
          </p>
        </div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/50 backdrop-blur-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-discord-blurple">Join Our Community</h2>
            <p className="text-gray-300 mb-4">
              Get help from our friendly community members and stay updated with the latest news.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-discord-blurple text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-opacity"
            >
              Join Discord Server
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/50 backdrop-blur-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-discord-blurple">Documentation</h2>
            <p className="text-gray-300 mb-4">
              Check out our comprehensive documentation for detailed guides and tutorials.
            </p>
            <a
              href="/docs"
              className="text-discord-blurple hover:underline"
            >
              View Documentation →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/50 backdrop-blur-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-discord-blurple">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              Can't find what you're looking for? Reach out to us directly.
            </p>
            <a
              href="mailto:support@sigmabot.com"
              className="text-discord-blurple hover:underline"
            >
              support@sigmabot.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}