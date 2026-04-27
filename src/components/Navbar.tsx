import React from 'react';
import { Menu, Globe, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[60] px-6 py-5 flex items-center justify-between backdrop-blur-md bg-black/60 border-b border-white/5"
    >
      <div className="flex items-center gap-6">
        <Menu className="lg:hidden text-white cursor-pointer" size={24} />
        <div className="hidden lg:flex items-center gap-6 text-[9px] tracking-[0.4em] uppercase font-bold text-white/60">
          <a href="#scents" className="hover:text-gold transition-colors">{t('nav_scents')}</a>
          <a href="#about" className="hover:text-gold transition-colors">{t('nav_collections')}</a>
          <a href="#agent" className="hover:text-gold transition-colors">{t('nav_agent')}</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
        <img 
          src="/logo-ai.png" 
          alt="Thaikun" 
          className="h-9 md:h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
        <h1 className="font-display text-base md:text-xl tracking-[0.5em] text-white">
          DIAMOND
        </h1>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 bg-white/5">
          <Globe size={14} className="text-gold" />
          <button 
            onClick={() => setLang(lang === 'BM' ? 'EN' : 'BM')}
            className="text-[10px] font-bold tracking-widest text-white hover:text-gold transition-colors"
          >
            {lang}
          </button>
        </div>
        
        <a 
          href="https://wa.me/60102082448" 
          target="_blank" 
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-sm group hover:bg-gold-bright transition-all"
        >
          <MessageCircle size={14} className="fill-black" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            {lang === 'BM' ? 'Order Sekarang' : 'Order Now'}
          </span>
        </a>
      </div>
    </motion.nav>
  );
}
