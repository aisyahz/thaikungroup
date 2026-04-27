import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import AgentPackage from './components/AgentPackage';
import Footer from './components/Footer';
import FloatingLeaves from './components/FloatingLeaves';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function MainLayout() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen selection:bg-gold selection:text-obsidian bg-obsidian text-white overflow-x-hidden">
      <FloatingLeaves />
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <ProductSection />
        <AgentPackage />
        
        {/* Company Background Section */}
        <section className="py-24 bg-forest/10 relative overflow-hidden border-y border-white/5">
           <div className="max-w-4xl mx-auto px-6 text-center">
              <h3 className="font-display text-2xl tracking-[0.4em] uppercase mb-8 text-gold">Thaikun Group Sdn Bhd</h3>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
                "{t('footer_background')}"
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-[10px] tracking-[0.2em] font-bold uppercase opacity-60">
                 <span className="border border-gold/40 px-3 py-1 rounded">Local Malaysian Brand</span>
                 <span className="border border-gold/40 px-3 py-1 rounded">WhatsApp Order</span>
                 <span className="border border-gold/40 px-3 py-1 rounded">Agent Friendly</span>
                 <span className="border border-gold/40 px-3 py-1 rounded">Suitable for Gifts</span>
              </div>
           </div>
        </section>
      </main>
      
      <Footer />

      {/* Sticky WhatsApp */}
      <a 
        href="https://wa.me/60102082448?text=Hi%20Thaikun%20Group%2C%20saya%20berminat%20dengan%20Diamond%20Car%20Fragrance." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-[100] bg-[#25D366] p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden md:group-hover:max-w-xs transition-with-padding duration-500 whitespace-nowrap text-white text-[12px] md:text-sm font-bold tracking-wider px-0 md:group-hover:px-2">WhatsApp Us</span>
        <MessageCircle size={22} className="md:w-7 md:h-7 text-white fill-white" />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
