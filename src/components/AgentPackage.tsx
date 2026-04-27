import React from 'react';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Handshake, Gem } from 'lucide-react';

export default function AgentPackage() {
  return (
    <section className="py-32 relative overflow-hidden bg-black/60">
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Package Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-1 items-center justify-center flex aspect-square rounded-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               
               {/* 3D-ish Box Representation */}
               <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                  <div className="w-full h-full border border-gold/30 rounded-lg flex flex-col items-center justify-center bg-obsidian relative overflow-hidden">
                     <div className="absolute top-0 w-full h-[30%] bg-gold/10 flex items-center justify-center">
                        <Gem className="text-gold animate-pulse" size={48} strokeWidth={1} />
                     </div>
                     <div className="p-8 text-center">
                        <h4 className="font-display text-3xl tracking-[0.3em] mb-4">THE AGENT BUNDLE</h4>
                        <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-8">Executive Collection</p>
                        <div className="flex justify-center gap-2 mb-8">
                           {Array.from({length: 6}).map((_, i) => (
                              <div key={i} className="w-4 h-8 bg-gold/20 border border-gold/40 rounded-sm" />
                           ))}
                        </div>
                        <span className="text-3xl font-serif text-white tracking-widest">$299.00</span>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 glass-card p-6 rounded-full border-gold/40 shadow-2xl animate-bounce duration-[3000ms]">
              <div className="text-center">
                <p className="text-[10px] tracking-widest text-gold font-bold">BEST VALUE</p>
                <p className="text-lg font-serif">40% OFF</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Agent Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[12px] tracking-[0.6em] uppercase font-bold mb-6 block">Business Opportunity</span>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8 leading-tight">
              Become a <span className="text-reveal">Diamond Agent.</span>
            </h2>
            <p className="text-white/60 text-lg font-light tracking-wide mb-12 leading-relaxed">
              Join our exclusive network of elite distributors. Bring the luxury of Diamond Car Fragrance to your region with premium wholesale packages and dedicated support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <Shield size={20} />
                </div>
                <div>
                  <h5 className="text-[12px] font-bold tracking-widest uppercase mb-1">Exclusive Rights</h5>
                  <p className="text-white/40 text-[10px] tracking-wider uppercase">Regional exclusivity available</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h5 className="text-[12px] font-bold tracking-widest uppercase mb-1">High Margins</h5>
                  <p className="text-white/40 text-[10px] tracking-wider uppercase">Maximize your ROI today</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[12px] gold-border-glow hover:bg-gold-bright transition-all">
                Order Agent Package
              </button>
              <button className="px-10 py-5 border border-white/20 text-white font-bold tracking-[0.2em] uppercase text-[12px] hover:bg-white/5 transition-all">
                Contact Sales
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
