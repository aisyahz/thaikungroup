import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#020202] py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl tracking-[0.4em] text-white mb-6">DIAMOND</h2>
            <p className="text-white/70 text-[10px] tracking-widest leading-loose uppercase">
              {t('footer_desc')}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-gold mb-8">{lang === 'BM' ? 'Hubungi Kami' : 'Contact Us'}</h4>
            <div className="flex gap-8 text-white/80">
              <a href="https://wa.me/60102082448" target="_blank" rel="noreferrer" className="hover:text-gold cursor-pointer transition-colors">
                <MessageCircle size={24} />
              </a>
              <Facebook size={24} className="hover:text-gold cursor-pointer transition-colors" />
              <Instagram size={24} className="hover:text-gold cursor-pointer transition-colors" />
            </div>
            <p className="mt-4 text-[11px] text-white/40 tracking-widest">+60 10-208 2448</p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-white mb-6">Thaikun Group Sdn Bhd</h4>
            <div className="text-[10px] tracking-widest text-white/70 space-y-2 uppercase">
              <p>Established Since 2023</p>
              <p>Malaysia's Premium Choice</p>
              <div className="pt-4 flex justify-center md:justify-end gap-4 opacity-50">
                <img src="https://flagcdn.com/w20/my.png" alt="Malaysia" className="w-5 h-auto grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 opacity-50">
          <p className="text-[9px] tracking-widest uppercase mb-4 md:mb-0">© 2026 Thaikun Group Sdn Bhd. All Rights Reserved.</p>
          <div className="flex gap-8 text-[9px] tracking-widest uppercase">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
