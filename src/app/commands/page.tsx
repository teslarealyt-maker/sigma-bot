'use client';

import { motion } from 'framer-motion';

const commands = [
  {
    name: '/help',
    description: 'Shows a list of available commands',
    category: 'General',
    usage: '/help [command]',
  },
  {
    name: '/ban',
    description: 'Ban a user from the server with optional delete message history',
    category: 'Moderation',
    usage: '/ban @user [days] [reason]',
    permission: 'BAN_MEMBERS',
  },
  {
    name: '/kick',
    description: 'Kick a user from the server',
    category: 'Moderation',
    usage: '/kick @user [reason]',
    permission: 'KICK_MEMBERS',
  },
  {
    name: '/timeout',
    description: 'Timeout a user for a specified duration',
    category: 'Moderation',
    usage: '/timeout @user [duration] [reason]',
    permission: 'MODERATE_MEMBERS',
  },
  {
    name: '/warn',
    description: 'Issue a warning to a user',
    category: 'Moderation',
    usage: '/warn @user [reason]',
    permission: 'MODERATE_MEMBERS',
  },
  {
    name: '/purge',
    description: 'Delete multiple messages at once',
    category: 'Moderation',
    usage: '/purge [amount]',
    permission: 'MANAGE_MESSAGES',
  },
  {
    name: '/mute',
    description: 'Mute a user in voice channels',
    category: 'Moderation',
    usage: '/mute @user [reason]',
    permission: 'MUTE_MEMBERS',
  },
  {
    name: '/play',
    description: 'Play music in a voice channel',
    category: 'Music',
    usage: '/play [song name or URL]',
  },
  {
    name: '/queue',
    description: 'View the current music queue',
    category: 'Music',
    usage: '/queue',
  },
];

const categories = [...new Set(commands.map((cmd) => cmd.category))];

export default function Commands() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Bot Commands</h1>
        <p className="text-xl text-gray-300">
          Explore all the amazing features our bot has to offer
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/50 backdrop-blur-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-discord-blurple">
              {category}
            </h2>
            <div className="space-y-4">
              {commands
                .filter((cmd) => cmd.category === category)
                .map((cmd) => (
                  <div key={cmd.name} className="border-b border-gray-700 pb-4 last:border-0">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <span className="text-discord-blurple">{cmd.name}</span>
                      {cmd.permission && (
                        <span className="ml-2 text-xs bg-discord-blurple/20 text-discord-blurple px-2 py-1 rounded">
                          {cmd.permission}
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-300 mb-2">{cmd.description}</p>
                    <p className="text-sm text-gray-400 font-mono">Usage: {cmd.usage}</p>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}