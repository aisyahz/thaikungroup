import React from 'react';
import { ShoppingCart, Search, User, Menu, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <div className="flex items-center gap-8">
        <Menu className="lg:hidden text-white cursor-pointer" size={24} />
        <div className="hidden lg:flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase font-bold text-white/70">
          <a href="#scents" className="hover:text-gold transition-colors">{t('nav_scents')}</a>
          <a href="#about" className="hover:text-gold transition-colors">{t('nav_collections')}</a>
          <a href="#agent" className="hover:text-gold transition-colors">{t('nav_agent')}</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="font-display text-xl md:text-2xl tracking-[0.4em] text-white flex items-center gap-2">
          DIAMOND
        </h1>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 border border-white/10 rounded-full px-3 py-1">
          <Globe size={14} className="text-gold" />
          <button 
            onClick={() => setLang(lang === 'BM' ? 'EN' : 'BM')}
            className="text-[10px] font-bold tracking-widest text-white hover:text-gold transition-colors"
          >
            {lang}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4 text-white/70">
          <Search size={18} className="cursor-pointer hover:text-gold transition-colors" />
          <User size={18} className="cursor-pointer hover:text-gold transition-colors" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer group">
          <ShoppingCart size={18} className="text-white group-hover:text-gold transition-colors" />
          <span className="text-[10px] bg-gold text-black px-1.5 py-0.5 rounded-full font-bold">0</span>
        </div>
      </div>
    </motion.nav>
  );
}
