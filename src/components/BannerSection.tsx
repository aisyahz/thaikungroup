import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function BannerSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative w-full h-[100svh] md:h-[60vh] lg:h-[80vh] overflow-hidden group">
      
      {/* Background */}
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        {/* Desktop Image */}
        <img
          src="/banner1.png"
          alt="Premium Collection"
          className="hidden md:block w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Mobile Image (FULL poster, no crop) */}
        <img
          src="/banner-mobile (2).png"
          alt="Premium Collection Mobile"
          className="md:hidden w-full h-full object-contain bg-black"
        />
      </motion.div>

      {/* Desktop Content ONLY */}
      <div className="hidden md:flex relative z-10 w-full h-full max-w-7xl mx-auto px-6 items-center">
        <div className="max-w-2xl text-left">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-serif text-white tracking-tight mb-6 leading-tight"
          >
            6 Scents. <span className="text-gold italic">1 Experience.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg font-light tracking-wide mb-10 leading-relaxed"
          >
            {lang === 'BM'
              ? 'Wangian kereta premium yang dicipta khas untuk setiap perjalanan yang bermakna.'
              : 'Premium car fragrance crafted for every meaningful journey.'}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() =>
              document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative px-10 py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[12px] overflow-hidden transition-all hover:bg-gold-bright hover:pr-14 flex items-center justify-center shadow-2xl"
          >
            <span className="relative z-10">
              {lang === 'BM' ? 'Lihat Koleksi' : 'Shop Collection'}
            </span>
            <ArrowRight
              className="absolute right-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              size={20}
            />
          </motion.button>

        </div>
      </div>

      {/* Mobile Scroll Indicator ONLY */}
      <button
        onClick={() =>
          document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-gold"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={30} />
        </motion.div>
      </button>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
