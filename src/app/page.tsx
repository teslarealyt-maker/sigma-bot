'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full"
        >
          <h1 className="text-6xl font-bold text-discord-blurple mb-8">
            Your Amazing Discord Bot
          </h1>
          <p className="text-xl mb-8">
            Enhance your Discord server with powerful features and seamless integration
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-discord-blurple text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Add to Discord
          </motion.button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-white/10 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Feature 1</h2>
          <p>Description of your amazing feature goes here</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-white/10 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Feature 2</h2>
          <p>Description of your amazing feature goes here</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-white/10 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Feature 3</h2>
          <p>Description of your amazing feature goes here</p>
        </motion.div>
      </div>
    </main>
  );
}