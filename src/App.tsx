import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import FloatingLeaves from './components/FloatingLeaves';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-obsidian">
      <FloatingLeaves />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductSection />
        
        {/* Banner Section */}
        <section className="py-32 bg-forest/20 relative overflow-hidden border-y border-white/5">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="font-display text-2xl md:text-3xl tracking-[0.5em] uppercase mb-4">6 Scents. 1 Experience.</h3>
              <p className="text-gold text-[12px] tracking-[0.4em] uppercase font-bold mb-12">Refresh Your Ride.</p>
              <div className="w-24 h-[1px] bg-gold/40 mx-auto" />
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
