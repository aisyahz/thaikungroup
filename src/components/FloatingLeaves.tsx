import React from 'react';
import { motion } from 'motion/react';

export default function FloatingLeaves() {
  const leaves = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: -100, 
            rotate: 0,
            opacity: 0.1 + Math.random() * 0.2
          }}
          animate={{ 
            y: window.innerHeight + 100,
            x: (Math.random() - 0.5) * 200 + (Math.random() * window.innerWidth),
            rotate: 360 * Math.random(),
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 20
          }}
          className="absolute text-gold/30"
          style={{ scale: 0.5 + Math.random() }}
        >
          {/* Subtle leaf/sparkle particle */}
          <div className="w-1 h-1 bg-gold/40 rounded-full blur-[1px]" />
        </motion.div>
      ))}
    </div>
  );
}
