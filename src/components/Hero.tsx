import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Gem } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center py-20 md:py-40 px-4 md:px-6">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-obsidian pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-40 grayscale-[0.5]" />
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-black/40 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 to-transparent z-[2]" />
      </div>

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-gold text-[10px] md:text-[13px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold mb-8 md:mb-10 flex items-center justify-center gap-2 gold-text-glow">
            <Gem size={14} className="animate-pulse" />
            {t('hero_badge')}
            <Gem size={14} className="animate-pulse" />
          </span>
          
          <h1 className="font-display tracking-[0.1em] md:tracking-[0.15em] mb-10 md:mb-12 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-reveal inline-block pb-2 md:pb-4 uppercase leading-tight font-bold">
              {t('hero_title_1')}
            </span>
            <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif italic text-white/80 font-light tracking-wide mt-1 md:mt-2">
              {t('hero_title_2')}
            </span>
          </h1>

          <p className="text-white/60 text-sm md:text-lg font-light tracking-wide max-w-sm md:max-w-xl mx-auto mb-12 md:mb-16 leading-relaxed px-4">
            {t('hero_sub')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 px-6 sm:px-0">
            <button 
              onClick={() => document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[10px] md:text-[11px] overflow-hidden transition-all hover:bg-gold-bright hover:pr-14 w-full sm:w-auto text-center shadow-2xl shadow-gold/20"
            >
              <span className="relative z-10">{t('hero_cta_buy')}</span>
              <ArrowRight className="absolute right-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={18} />
            </button>
            <button 
              onClick={() => document.getElementById('agent')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 md:px-10 py-4 md:py-5 border border-white/10 text-white/80 font-bold tracking-[0.2em] uppercase text-[10px] md:text-[11px] hover:bg-white hover:text-black hover:border-white transition-all w-full sm:w-auto backdrop-blur-sm"
            >
              {t('hero_cta_agent')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Bottle (Hero) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-10 lg:right-24 hidden xl:block opacity-40 hover:opacity-100 transition-all cursor-pointer group"
      >
        <div className="glass-card p-6 rounded-2xl border-gold/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-colors" />
          <img 
            src="https://raw.githubusercontent.com/aisyahz/thaikungroup/dev/perfume%20car/honeydew.png" 
            alt="Signature Scent" 
            className="w-24 h-32 object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="mt-4 text-[10px] tracking-[0.4em] text-center uppercase text-gold font-bold relative z-10">Signature</div>
        </div>
      </motion.div>
    </section>
  );
}
