import React from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export default function FloatingLeaves() {
  const leaves = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: -100, 
            opacity: 0,
            rotate: 0 
          }}
          animate={{ 
            y: "110vh", 
            x: (Math.random() - 0.5) * 500 + "px",
            opacity: [0, 0.4, 0.4, 0],
            rotate: 360 
          }}
          transition={{ 
            duration: Math.random() * 10 + 15, 
            repeat: Infinity, 
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute text-forest/30"
        >
          <Leaf size={Math.random() * 20 + 20} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
}
