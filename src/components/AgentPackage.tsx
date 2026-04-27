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
    <section className="py-32 relative overflow-hidden bg-black/60" id="agent">
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
               <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-12">
                  <div className="w-full h-full border border-gold/30 rounded-lg flex flex-col items-center justify-center bg-obsidian relative overflow-hidden">
                     <div className="absolute top-0 w-full h-[25%] bg-gold/10 flex items-center justify-center">
                        <Gem className="text-gold animate-pulse" size={32} strokeWidth={1} />
                     </div>
                     <div className="p-6 md:p-8 text-center pt-16 md:pt-20">
                        <h4 className="font-display text-xl md:text-2xl tracking-[0.3em] mb-4 uppercase">{t('agent_pkg_title')}</h4>
                        <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-6">{t('agent_pkg_desc')}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                           <div className="bg-white/5 p-3 rounded border border-white/5 flex flex-col items-center">
                              <Package className="text-gold mb-2" size={20} />
                              <span className="text-[10px] tracking-widest uppercase font-bold">90 PCS</span>
                           </div>
                           <div className="bg-white/5 p-3 rounded border border-white/5 flex flex-col items-center">
                              <TrendingUp className="text-gold mb-2" size={20} />
                              <span className="text-[10px] tracking-widest uppercase font-bold">ROI SPEED</span>
                           </div>
                        </div>

                        <div className="flex justify-center gap-1 mb-8 flex-wrap">
                           {[
                             'vanilla', 'honeydew', 'redberry', 'billionaire', 'somebody', 'mango'
                           ].map((item) => (
                              <img 
                                key={item}
                                src={`https://raw.githubusercontent.com/aisyahz/thaikungroup/dev/perfume%20car/${item}.png`}
                                alt={item}
                                className="w-6 h-10 object-contain drop-shadow-md"
                                referrerPolicy="no-referrer"
                              />
                           ))}
                        </div>
                        <span className="text-3xl md:text-5xl font-serif text-white tracking-widest">{t('agent_price_total')}</span>
                        <p className="text-[10px] text-white/40 mt-2 tracking-[0.2em] uppercase">One-time registration</p>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 md:p-6 rounded-full border-gold/40 shadow-2xl animate-bounce duration-[3000ms]">
              <div className="text-center">
                <p className="text-[8px] md:text-[10px] tracking-widest text-gold font-bold uppercase">{lang === 'BM' ? 'MULA SEKARANG' : 'START NOW'}</p>
                <p className="text-base md:text-lg font-serif">HOT SELLER</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Agent Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[12px] tracking-[0.6em] uppercase font-bold mb-6 block">{t('agent_badge')}</span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-8 leading-tight text-white">
              {lang === 'BM' ? 'Jana Pendapatan Dengan' : 'Earn Income With'} <span className="text-reveal">Diamond Agent.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light tracking-wide mb-10 leading-relaxed">
              {t('agent_desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <Shield size={20} />
                </div>
                <div>
                  <h5 className="text-[12px] font-bold tracking-widest uppercase mb-1 text-white">{t('agent_feat_1')}</h5>
                  <p className="text-white/40 text-[10px] tracking-wider uppercase">{t('agent_feat_1_sub')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h5 className="text-[12px] font-bold tracking-widest uppercase mb-1 text-white">{t('agent_feat_2')}</h5>
                  <p className="text-white/40 text-[10px] tracking-wider uppercase">{t('agent_feat_2_sub')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h5 className="text-[12px] font-bold tracking-widest uppercase mb-1 text-white">Consignment Price</h5>
                  <p className="text-white/40 text-[10px] tracking-wider uppercase">RM8 / piece / outlet</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-gold/30 rounded flex items-center justify-center text-gold">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h5 className="text-[12px] font-bold tracking-widest uppercase mb-1 text-white">Minimum Order</h5>
                  <p className="text-white/40 text-[10px] tracking-wider uppercase">1 tray minimum order</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleRegister}
                className="px-10 py-5 bg-gold text-black font-bold tracking-[0.2em] uppercase text-[12px] gold-border-glow hover:bg-gold-bright transition-all w-full sm:w-auto"
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
