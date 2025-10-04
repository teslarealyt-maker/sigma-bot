'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Advanced Moderation',
    description: 'Keep your server safe with powerful moderation tools',
    icon: '🛡️',
  },
  {
    title: 'Custom Welcome Messages',
    description: 'Greet new members with style using customizable welcome messages',
    icon: '👋',
  },
  {
    title: 'Music Player',
    description: 'High-quality music playback with support for multiple platforms',
    icon: '🎵',
  },
  {
    title: 'Server Statistics',
    description: 'Track your server\'s growth with detailed analytics',
    icon: '📊',
  },
  {
    title: 'Auto Roles',
    description: 'Automatically assign roles to new members',
    icon: '⚡',
  },
  {
    title: 'Custom Commands',
    description: 'Create your own custom commands',
    icon: '🎮',
  },
];

export default function Features() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-gray-300">
          Discover what makes Sigma Bot exceptional
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/50 backdrop-blur-lg rounded-lg p-6 hover:bg-black/60 transition-colors"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}