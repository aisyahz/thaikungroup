import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function BannerSection() {
  return (
    <section className="relative w-full h-[78vh] md:h-[60vh] lg:h-[80vh] overflow-hidden group">
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/banner1.png"
          alt="Diamond Car Fragrance"
          className="hidden md:block w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        <img
          src="/banner-mobile (2).png"
          alt="Diamond Car Fragrance Mobile"
          className="md:hidden w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      {/* Mobile Scroll Indicator */}
      <button
        onClick={() => document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })}
        className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-gold"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={30} />
        </motion.div>
      </button>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
