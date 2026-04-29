import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Gem } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 md:pt-32 pb-14 md:pb-20 overflow-hidden bg-obsidian">

      {/* Background with subtle luxury feel */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30 grayscale-[0.8] scale-105 blur-[2px]" 
        />
        <div className="absolute inset-0 bg-black/80 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full flex flex-col items-center">
        
        {/* Logo with soft gold glow */}
        <div className="relative mb-6 md:mb-10">
          <div className="absolute inset-0 bg-gold/10 blur-[60px] rounded-full scale-110 pointer-events-none" />
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/logo-ai-2.png"
            alt="Thaikun Logo"
            className="relative z-10 mx-auto h-32 md:h-48 lg:h-56 object-contain drop-shadow-2xl"
          />
        </div>

        {/* COMPANY NAME - PROMINENT & EXCLUSIVE */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gold text-[13px] md:text-base tracking-[0.25em] md:tracking-[0.35em] uppercase mb-7 md:mb-10 block font-bold"
        >
          THAIKUN GROUP SDN BHD
        </motion.span>

        {/* MAIN HEADLINE - BOLD BUT MINIMALIST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mb-7 md:mb-8"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] md:leading-[1.1]">
            {t('hero_title_1')} <span className="italic-luxury text-gold">{t('hero_title_2')}</span>
          </h1>
        </motion.div>

        {/* SUBTITLE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-white/55 text-[10px] md:text-xs max-w-xs md:max-w-md mx-auto mb-10 md:mb-14 tracking-[0.18em] md:tracking-widest uppercase leading-relaxed font-light"
        >
          {t('hero_sub')}
        </motion.p>

        {/* CTAs - REFINED HIERARCHY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="flex flex-col items-center gap-7 md:gap-8 w-full"
        >
          <button
            onClick={() => document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-14 py-4 bg-gold text-black font-bold tracking-[0.3em] uppercase text-[10px] md:text-[11px] hover:bg-gold-bright hover:scale-105 transition-all duration-500 shadow-2xl"
          >
            {t('hero_cta_buy')}
          </button>

          <button
            onClick={() => document.getElementById('agent')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/40 hover:text-gold text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold transition-all border-b border-white/5 hover:border-gold/30 pb-1"
          >
            {t('hero_cta_agent')}
          </button>
        </motion.div>
      </div>

      {/* Decorative side accents */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="h-40 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="h-40 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

    </section>
  );
}
