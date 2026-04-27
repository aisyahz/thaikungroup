import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-6">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-obsidian pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-40 grayscale-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 to-transparent" />
      </div>

      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-gold text-[12px] md:text-[14px] tracking-[0.6em] uppercase font-bold mb-8 block gold-text-glow">
            {t('hero_badge')}
          </span>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-[0.2em] mb-10 leading-[1.1] break-words">
            <span className="text-reveal inline-block pb-2">{t('hero_title_1')}</span><br/>
            <span className="font-serif italic font-light tracking-tight text-white/90">{t('hero_title_2')}</span>
          </h1>

          <p className="text-white/60 text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-16 leading-relaxed">
            {t('hero_sub')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[12px] overflow-hidden transition-all hover:pr-14 w-full sm:w-auto text-center"
            >
              <span className="relative z-10 text-black">{t('hero_cta_buy')}</span>
              <ArrowRight className="absolute right-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('agent')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border border-white/20 text-white font-bold tracking-[0.2em] uppercase text-[12px] hover:bg-white hover:text-black transition-all w-full sm:w-auto"
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
        className="absolute bottom-20 right-10 lg:right-24 hidden md:block opacity-60 hover:opacity-100 transition-all cursor-pointer group"
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
