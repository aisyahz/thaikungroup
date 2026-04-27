import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 bg-obsidian">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-40 grayscale-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-gold text-[12px] md:text-[14px] tracking-[0.6em] uppercase font-semibold mb-6 block gold-text-glow">
            Limited Edition
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] mb-8 leading-tight">
            DRIVE FRESH.<br/>
            <span className="font-serif italic font-normal tracking-normal text-white/90">Arrive Impressed.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12">
            Premium car fragrance curated for the sophisticated driver. Elevate your journey with long-lasting, natural scents.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-10 py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[12px] overflow-hidden transition-all hover:pr-14">
              <span className="relative z-10 text-black">Shop Now</span>
              <ArrowRight className="absolute right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={20} />
            </button>
            <button className="px-10 py-5 border border-white/20 text-white font-medium tracking-[0.2em] uppercase text-[12px] hover:bg-white hover:text-black transition-all">
              Explore Scents
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Bottle (Hero) */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 lg:right-24 hidden md:block opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <div className="glass-card p-6 rounded-sm border-gold/20">
          <div className="w-16 h-20 bg-forest/40 rounded shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[60%] bg-gold/10" />
             <div className="absolute bottom-0 left-0 w-full h-[40%] border-t border-white/10" />
          </div>
          <div className="mt-4 text-[8px] tracking-widest text-center uppercase text-gold">Diamond Signature</div>
        </div>
      </motion.div>
    </section>
  );
}
