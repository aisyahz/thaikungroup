import React from 'react';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Gem, Package, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AgentPackage() {
  const { lang, t } = useLanguage();

  const handleRegister = () => {
    const message = t('agent_msg');
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/60102082448?text=${encodedMsg}`, '_blank');
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-black/60" id="agent">
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gold/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left: Package Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="glass-card p-1 items-center justify-center flex aspect-square sm:aspect-video lg:aspect-square rounded-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               
               {/* 3D-ish Box Representation */}
               <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-12">
                  <div className="w-full h-full border border-gold/30 rounded-lg flex flex-col items-center justify-center bg-obsidian relative overflow-hidden">
                     <div className="absolute top-0 w-full h-[20%] md:h-[25%] bg-gold/10 flex items-center justify-center">
                        <Gem className="text-gold animate-pulse" size={28} md:size={32} strokeWidth={1} />
                     </div>
                     <div className="p-4 md:p-8 text-center pt-12 md:pt-20">
                        <h4 className="font-display text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 uppercase text-white">{t('agent_pkg_title')}</h4>
                        <p className="text-gold/60 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-5 md:mb-6">{t('agent_pkg_desc')}</p>
                        
                        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                           <div className="bg-white/5 p-2 md:p-3 rounded border border-white/5 flex flex-col items-center">
                              <Package className="text-gold mb-1 md:mb-2" size={16} md:size={20} />
                              <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-white/80">90 PCS</span>
                           </div>
                           <div className="bg-white/5 p-2 md:p-3 rounded border border-white/5 flex flex-col items-center">
                              <TrendingUp className="text-gold mb-1 md:mb-2" size={16} md:size={20} />
                              <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-white/80">ROI SPEED</span>
                           </div>
                        </div>

                        <div className="flex justify-center gap-2 mb-6 md:mb-8 flex-wrap">
                           {[
                             'vanilla', 'honeydew', 'redberry', 'billionaire', 'somebody', 'mango'
                           ].map((item) => (
                              <img 
                                key={item}
                                src={`https://raw.githubusercontent.com/aisyahz/thaikungroup/dev/perfume%20car/${item}.png`}
                                alt={item}
                                className="w-5 h-8 md:w-8 md:h-12 object-contain drop-shadow-md"
                                referrerPolicy="no-referrer"
                              />
                           ))}
                        </div>
                        <div className="mb-8">
                           <span className="text-4xl md:text-6xl font-serif text-gold tracking-widest block font-bold drop-shadow-lg">{t('agent_price_total')}</span>
                           <p className="text-[10px] md:text-[12px] text-white/90 mt-2 tracking-[0.3em] uppercase font-bold">One-time registration</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 glass-card p-3 md:p-6 rounded-full border-gold/40 shadow-2xl animate-bounce duration-[3000ms] z-20">
              <div className="text-center">
                <p className="text-[7px] md:text-[10px] tracking-widest text-gold font-bold uppercase">{lang === 'BM' ? 'MULA SEKARANG' : 'START NOW'}</p>
                <p className="text-sm md:text-lg font-serif text-white">HOT SELLER</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Agent Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold text-[10px] md:text-[12px] tracking-[0.5em] md:tracking-[0.6em] uppercase font-bold mb-4 md:mb-6 block">{t('agent_badge')}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6 md:mb-8 leading-tight text-white">
              {lang === 'BM' ? 'Jana Pendapatan Dengan' : 'Earn Income With'} <span className="text-reveal">Diamond Agent.</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light tracking-wide mb-8 md:mb-10 leading-relaxed max-w-xl">
              {t('agent_desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <Shield size={18} md:size={20} />
                </div>
                <div>
                  <h5 className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1 text-white">{t('agent_feat_1')}</h5>
                  <p className="text-white/80 text-[9px] md:text-[10px] tracking-wider uppercase leading-snug">{t('agent_feat_1_sub')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <TrendingUp size={18} md:size={20} />
                </div>
                <div>
                  <h5 className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1 text-white">{t('agent_feat_2')}</h5>
                  <p className="text-white/80 text-[9px] md:text-[10px] tracking-wider uppercase leading-snug">{t('agent_feat_2_sub')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <CheckCircle2 size={18} md:size={20} />
                </div>
                <div>
                  <h5 className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1 text-white">Consignment Price</h5>
                  <p className="text-white/80 text-[9px] md:text-[10px] tracking-wider uppercase leading-snug">RM8 / piece / outlet</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <CheckCircle2 size={18} md:size={20} />
                </div>
                <div>
                  <h5 className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1 text-white">Minimum Order</h5>
                  <p className="text-white/80 text-[9px] md:text-[10px] tracking-wider uppercase leading-snug">1 tray minimum order</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button 
                onClick={handleRegister}
                className="px-8 md:px-10 py-4 md:py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[11px] md:text-[12px] gold-border-glow hover:bg-gold-bright transition-all w-full sm:w-auto shadow-xl"
              >
                {t('agent_cta')}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
