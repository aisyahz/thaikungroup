import React from 'react';
import { motion } from 'motion/react';

const ScentTypes = [
  { name: 'Vanilla', color: '#FFFFFF', liquid: 'rgba(255, 255, 255, 0.4)', label: 'Pure Indulgence' },
  { name: 'Diamond', color: '#142319', liquid: 'rgba(20, 35, 25, 0.8)', label: 'Signature Excellence' },
  { name: 'Redberry', color: '#8B0000', liquid: 'rgba(139, 0, 0, 0.6)', label: 'Bold Vitality' },
  { name: 'Billionaire', color: '#00008B', liquid: 'rgba(0, 0, 139, 0.6)', label: 'Royal Presence' },
  { name: 'Somebody', color: '#008080', liquid: 'rgba(0, 128, 128, 0.6)', label: 'Mystic Ocean' },
  { name: 'MNG', color: '#FFA500', liquid: 'rgba(255, 165, 0, 0.6)', label: 'Golden Ember' },
];

export default function ProductSection() {
  return (
    <section className="py-24 px-6 bg-obsidian text-center" id="scents">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-semibold mb-4 block">The Collection</span>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-16">Find Your Signature Scent</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ScentTypes.map((scent, index) => (
            <motion.div
              key={scent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0A0A0A] border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-500 overflow-hidden"
            >
              {/* Bottle Visualization (Abstract/SVG based for premium look) */}
              <div className="relative h-64 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Hanging Rope */}
                <div className="absolute top-0 w-[1px] h-20 bg-gray-600 left-1/2 -translate-x-1/2 z-0" />
                
                {/* Glass Bottle */}
                <div className="relative w-24 h-32 z-10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-2">
                   <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden shadow-2xl">
                      {/* Liquid Content */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 transition-all duration-700 group-hover:h-[80%]" 
                        style={{ backgroundColor: scent.liquid, height: '70%' }}
                      >
                         <div className="absolute top-0 left-0 right-0 h-2 bg-white/20 blur-[1px]" />
                      </div>
                      {/* Glass Sheen */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/5" />
                   </div>
                   {/* Cap */}
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#1A1A1A] rounded-sm transform border-b border-white/10" />
                </div>

                {/* Scent Glow */}
                <div 
                  className="absolute bottom-10 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700"
                  style={{ backgroundColor: scent.color }}
                />
              </div>

              <h3 className="text-xl font-display tracking-[0.2em] uppercase mb-1">{scent.name}</h3>
              <p className="text-white/40 text-xs tracking-widest italic mb-6">{scent.label}</p>
              
              <button className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold border border-gold/40 px-6 py-2.5 rounded-sm hover:bg-gold hover:text-black transition-all duration-300">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
