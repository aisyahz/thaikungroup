import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Gem } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-28 pb-16 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-obsidian pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-40 grayscale-[0.5]" />
        <div className="absolute inset-0 bg-black/70 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">

        {/* 🔥 BIGGER LOGO */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/logo-ai-2.png"
          alt="Thaikun Logo"
          className="mx-auto mb-8 h-44 md:h-64 lg:h-80 object-contain drop-shadow-2xl"
        />

        {/* OPTIONAL BADGE (make smaller) */}
        <span className="text-gold text-[9px] tracking-[0.4em] uppercase mb-6 block opacity-80">
          Thaikun Group Sdn Bhd
        </span>

        {/* TITLE */}
        <h1 className="font-display uppercase tracking-[0.1em] md:tracking-[0.15em] mb-6">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-gold">
            {t('hero_title_1')}
          </span>
          <span className="block text-lg md:text-2xl italic text-white/70 mt-2">
            {t('hero_title_2')}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-sm md:text-lg max-w-xl mx-auto mb-10">
          {t('hero_sub')}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('scents')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[11px] hover:bg-gold-bright transition"
          >
            {t('hero_cta_buy')}
          </button>

          <button
            onClick={() => document.getElementById('agent')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white/20 text-white uppercase text-[11px] hover:bg-white hover:text-black transition"
          >
            {t('hero_cta_agent')}
          </button>
        </div>

      </div>
    </section>
  );
}
