import React from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      <div className="flex items-center gap-8">
        <Menu className="lg:hidden text-white cursor-pointer" size={24} />
        <div className="hidden lg:flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase font-medium text-white/70">
          <a href="#" className="hover:text-gold transition-colors">Scents</a>
          <a href="#" className="hover:text-gold transition-colors">Collections</a>
          <a href="#" className="hover:text-gold transition-colors">About</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="font-display text-2xl tracking-[0.4em] text-white flex items-center gap-2">
          DIAMOND
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 text-white/70">
          <Search size={20} className="cursor-pointer hover:text-gold transition-colors" />
          <User size={20} className="cursor-pointer hover:text-gold transition-colors" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer group">
          <ShoppingCart size={20} className="text-white group-hover:text-gold transition-colors" />
          <span className="text-[10px] bg-gold text-black px-1.5 py-0.5 rounded-full font-bold">0</span>
        </div>
      </div>
    </motion.nav>
  );
}
