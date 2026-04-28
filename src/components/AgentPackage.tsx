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
    <section className="py-16 md:py-28 relative overflow-hidden bg-black/60" id="agent">
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gold/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Package Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 max-w-[520px] mx-auto w-full"
          >
            <div className="glass-card min-h-[420px] sm:min-h-[480px] rounded-2xl relative overflow-hidden group border-white/10">
               <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               
               {/* 3D-ish Box Representation */}
               <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6">
                  <div className="w-full h-full border border-gold/30 rounded-xl flex flex-col items-center justify-center bg-obsidian relative overflow-hidden">
                     <div className="absolute top-0 w-full h-[18%] md:h-[22%] bg-gold/10 flex items-center justify-center border-b border-gold/20">
                        <Gem className="text-gold animate-pulse" size={24} md:size={30} strokeWidth={1.5} />
                     </div>
                     <div className="p-4 sm:p-6 md:p-8 text-center pt-16 sm:pt-20 md:pt-24">
                        <h4 className="font-display text-xl md:text-2xl tracking-[0.15em] md:tracking-[0.25em] mb-2 md:mb-3 uppercase text-white font-bold">{t('agent_pkg_title')}</h4>
                        <p className="text-gold/70 text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] uppercase mb-6 md:mb-8 font-medium">{t('agent_pkg_desc')}</p>
                        
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-8">
                           <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex flex-col items-center group-hover:bg-white/10 transition-colors">
                              <Package className="text-gold mb-1 md:mb-2" size={16} md:size={20} />
                              <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-mono font-bold text-white/90">90 PCS</span>
                           </div>
                           <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex flex-col items-center group-hover:bg-white/10 transition-colors">
                              <TrendingUp className="text-gold mb-1 md:mb-2" size={16} md:size={20} />
                              <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-white/90">FAST ROI</span>
                           </div>
                        </div>

                        <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-10 flex-wrap px-4">
                           {[
                             'vanilla', 'honeydew', 'redberry', 'billionaire', 'somebody', 'mango'
                           ].map((item) => (
                              <img 
                                 key={item}
                                 src={`https://raw.githubusercontent.com/aisyahz/thaikungroup/dev/perfume%20car/${item}.png`}
                                 alt={item}
                                 className="w-7 h-10 md:w-8 md:h-12 object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
                                 referrerPolicy="no-referrer"
                              />
                           ))}
                        </div>
                        <div className="mb-6 md:mb-8">
                           <span className="text-4xl sm:text-5xl md:text-6xl font-mono text-gold tracking-tight block font-bold drop-shadow-xl gold-text-glow">{t('agent_price_total')}</span>
                           <p className="text-[10px] md:text-[11px] text-white/70 mt-3 tracking-[0.3em] uppercase font-bold">LIFETIME ACCESS</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 glass-card p-3 sm:p-4 rounded-2xl border-gold/40 shadow-2xl animate-bounce duration-[4000ms] z-20 backdrop-blur-md">
              <div className="text-center">
                <p className="text-[7px] md:text-[9px] tracking-[0.2em] text-gold font-bold uppercase mb-0.5">{lang === 'BM' ? 'MULA SEKARANG' : 'START NOW'}</p>
                <p className="text-[12px] md:text-sm font-display tracking-widest text-white uppercase">HOT SELLER</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Agent Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <span className="inline-block text-gold text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold mb-4 md:mb-6 px-4 py-1.5 border border-gold/20 rounded-full bg-gold/5">{t('agent_badge')}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6 md:mb-8 leading-tight text-white px-2">
              {lang === 'BM' ? 'Jana Pendapatan Dengan' : 'Earn Income With'} <span className="text-reveal">Diamond Agent.</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light tracking-wide mb-10 md:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t('agent_desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10 md:mb-14">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-gold/30 group">
                <div className="shrink-0 w-10 h-10 border border-gold/20 rounded-lg flex items-center justify-center text-gold bg-gold/5 group-hover:scale-110 transition-transform">
                  <Shield size={20} />
                </div>
                <div className="text-left">
                  <h5 className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1 text-white">{t('agent_feat_1')}</h5>
                  <p className="text-white/60 text-[9px] md:text-[10px] tracking-wider uppercase leading-snug">{t('agent_feat_1_sub')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-gold/30 group">
                <div className="shrink-0 w-10 h-10 border border-gold/20 rounded-lg flex items-center justify-center text-gold bg-gold/5 group-hover:scale-110 transition-transform">
                  <TrendingUp size={20} />
                </div>
                <div className="text-left">
                  <h5 className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1 text-white">{t('agent_feat_2')}</h5>
                  <p className="text-white/60 text-[9px] md:text-[10px] tracking-wider uppercase leading-snug">{t('agent_feat_2_sub')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-gold/30 group">
                <div className="shrink-0 w-10 h-10 border border-gold/20 rounded-lg flex items-center justify-center text-gold bg-gold/5 group-hover:scale-110 transition-transform">
                  <Package size={20} />
                </div>
                <div className="text-left">
                  <h5 className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1 text-white">Price Benefit</h5>
                  <p className="text-white/60 text-[9px] md:text-[10px] tracking-wider uppercase leading-snug font-mono">RM<span className="font-mono">8</span> / piece wholesale</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-gold/30 group">
                <div className="shrink-0 w-10 h-10 border border-gold/20 rounded-lg flex items-center justify-center text-gold bg-gold/5 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <div className="text-left">
                  <h5 className="text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-1 text-white">Minimum Order</h5>
                  <p className="text-white/60 text-[9px] md:text-[10px] tracking-wider uppercase leading-snug"><span className="font-mono">1</span> tray (~<span className="font-mono">30</span>pcs) restock</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <button 
                onClick={handleRegister}
                className="px-8 md:px-12 py-4 md:py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[11px] md:text-[13px] gold-border-glow hover:bg-gold-bright transition-all w-full sm:w-auto shadow-2xl shadow-gold/20 active:scale-95"
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
