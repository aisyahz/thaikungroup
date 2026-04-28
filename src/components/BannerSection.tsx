import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function BannerSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative w-full h-[78vh] md:h-[60vh] lg:h-[80vh] overflow-hidden group">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/banner1.png" 
          alt="Premium Collection" 
          className="w-full h-full object-cover bg-center transition-transform duration-700 group-hover:scale-105 hidden md:block"
        />
        <img 
          src="/banner-mobile (2).png" 
          alt="Premium Collection Mobile" 
          className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105 md:hidden"
        />
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/20 md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent z-[2]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex items-start md:items-center pt-24 md:pt-0">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-6 leading-tight"
          >
            6 Scents. <span className="text-gold italic">1 Experience.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-base md:text-lg font-light tracking-wide mb-10 leading-relaxed"
          >
            {lang === 'BM' 
              ? 'Wangian kereta premium yang dicipta khas untuk setiap perjalanan yang bermakna.' 
              : 'Premium car fragrance crafted for every meaningful journey.'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:block"
          >
            <button 
              onClick={() => document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-7 md:px-10 py-4 md:py-5 bg-gold text-black font-bold tracking-[0.18em] md:tracking-[0.2em] uppercase text-[11px] md:text-[12px] overflow-hidden transition-all hover:bg-gold-bright hover:pr-14 mx-auto md:mx-0 flex items-center justify-center shadow-2xl"
            >
              <span className="relative z-10">
                {lang === 'BM' ? 'Lihat Koleksi' : 'Shop Collection'}
              </span>
              <ArrowRight className="absolute right-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={20} />
            </button>
          </motion.div>

          {/* Mobile Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="md:hidden absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-gold text-[10px] tracking-[0.3em] font-bold uppercase opacity-80">
              {lang === 'BM' ? 'Ke Bawah' : 'Scroll Down'}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="text-gold opacity-80" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
