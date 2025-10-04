'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const generateCircles = () => {
      const newCircles: Circle[] = [];
      for (let i = 0; i < 20; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      setCircles(newCircles);
    };

    generateCircles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full bg-white/5"
          style={{
            width: circle.size,
            height: circle.size,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
          }}
          animate={{
            y: ['0%', '-100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}