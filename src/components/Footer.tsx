import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020202] py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl tracking-[0.4em] text-white mb-6">DIAMOND</h2>
            <p className="text-white/40 text-[10px] tracking-widest leading-loose uppercase">
              REDEFINE YOUR DRIVING SPACE THROUGH THE ART OF SCENT. LUXURY IN EVERY BREATH.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-gold mb-8">Stay Connected</h4>
            <div className="flex gap-8 text-white/60">
              <Instagram size={20} className="hover:text-gold cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-gold cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-white mb-6">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-transparent border-b border-white/20 w-full py-2 px-0 text-[10px] tracking-[0.2em] focus:outline-none focus:border-gold transition-colors text-white placeholder:text-white/20 uppercase"
              />
              <button className="absolute right-0 bottom-2 text-[10px] tracking-[0.2em] font-bold text-gold hover:text-white transition-colors">JOIN</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 opacity-50">
          <p className="text-[9px] tracking-widest uppercase mb-4 md:mb-0">© 2026 Diamond Car Fragrance. Crafted for Excellence.</p>
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
