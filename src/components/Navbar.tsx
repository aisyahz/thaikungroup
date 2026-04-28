import React, { useState } from 'react';
import { Menu, Globe, MessageCircle, X, Gem } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { href: '#scents', label: t('nav_scents') },
    { href: '#agent', label: t('nav_agent') },
    { href: '#testimonials', label: t('nav_testimonials') },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 py-5 flex items-center justify-between backdrop-blur-md bg-black/60 border-b border-white/5"
      >
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white cursor-pointer z-[70]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden lg:flex items-center gap-6 text-[9px] tracking-[0.4em] uppercase font-bold text-white/90">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-gold transition-colors">{link.label}</a>
            ))}
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center justify-center group cursor-pointer">
            <h1 className="font-display text-base md:text-xl tracking-[0.4em] text-white leading-none transition-all group-hover:scale-105">
              DIAMOND
            </h1>
            <p className="text-gold text-[6px] md:text-[8px] tracking-[0.4em] uppercase mt-1.5 opacity-70 font-bold whitespace-nowrap">
              ✧ COUTURE FRAGRANCE ✧
            </p>
          </div>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-black/95 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-12">
              {menuLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-display tracking-[0.3em] uppercase text-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.a 
                href="https://wa.me/60102082448" 
                target="_blank" 
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-8 py-4 bg-gold text-black rounded-sm font-bold tracking-[0.2em] uppercase text-sm"
              >
                <MessageCircle size={18} className="fill-black" />
                {lang === 'BM' ? 'Order Sekarang' : 'Order Now'}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
