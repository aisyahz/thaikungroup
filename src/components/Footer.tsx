import React from 'react';
import { Instagram, Send, Facebook, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-obsidian pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-display tracking-[0.3em] text-gold uppercase mb-2">DIAMOND</h2>
              <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase">Couture Car Fragrance</p>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-md mb-10">
              {t('footer_desc')}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/60102082448" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all">
                <Send size={18} />
              </a>
              <a href="mailto:info@thaikungroup.com" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#scents" className="text-white/50 text-[11px] tracking-widest uppercase hover:text-gold transition-colors">{t('nav_scents')}</a></li>
                <li><a href="#agent" className="text-white/50 text-[11px] tracking-widest uppercase hover:text-gold transition-colors">{t('nav_agent')}</a></li>
                <li><a href="#testimonials" className="text-white/50 text-[11px] tracking-widest uppercase hover:text-gold transition-colors">{t('nav_testimonials')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Company</h4>
              <p className="text-white/50 text-[11px] tracking-widest uppercase mb-2">Thaikun Group Sdn Bhd</p>
              <p className="text-white/50 text-[11px] tracking-widest uppercase leading-loose">
                Established 2023<br />
                Kuala Lumpur, Malaysia
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[9px] tracking-[0.3em] font-mono uppercase">
            &copy; {new Date().getFullYear()} THAIKUN GROUP SDN BHD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-white/30 text-[9px] tracking-[0.3em] uppercase hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/30 text-[9px] tracking-[0.3em] uppercase hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
