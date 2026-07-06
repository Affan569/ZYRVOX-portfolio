import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Palette, Code2, Zap, ArrowRight, Star } from 'lucide-react'
import ScrollAnimate from './ScrollAnimate'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex items-center">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="order-2 lg:order-1">

            <ScrollAnimate type="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-gold/10 border border-zyrvox-gold/30 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-zyrvox-gold" />
                <span className="text-zyrvox-gold font-mono font-bold uppercase tracking-[0.2em] text-xs">
                  Design &amp; Development Studio
                </span>
              </div>
            </ScrollAnimate>

            <ScrollAnimate type="fade-up" delay={0.15}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-zyrvox-text mb-6 leading-[1.05] tracking-tight">
                We Design &amp; Build <br />
                <span className="bg-gradient-to-r from-zyrvox-gold via-zyrvox-electric to-zyrvox-gold bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmerText_6s_linear_infinite]">
                  Digital Experiences
                </span> That Convert
              </h1>
            </ScrollAnimate>

            <ScrollAnimate type="fade-up" delay={0.3}>
              <p className="text-lg md:text-xl text-zyrvox-text-2 mb-10 leading-relaxed max-w-xl font-light">
                Transform your brand with stunning graphic design and powerful web development. From logos to complete websites, we create digital magic.
              </p>
            </ScrollAnimate>

            <ScrollAnimate type="fade-up" delay={0.45}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-bold flex items-center gap-2 transition-all duration-300 hover:scale-[1.03] hover:shadow-zyrvox-glow active:scale-[0.98]"
                >
                  GET A FREE QUOTE
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-xl border-2 border-zyrvox-electric/50 text-zyrvox-electric font-bold transition-all duration-300 hover:border-zyrvox-electric hover:bg-zyrvox-electric/10 hover:shadow-zyrvox-glow"
                >
                  VIEW OUR WORK
                </Link>
              </div>
            </ScrollAnimate>

            {/* Trust indicators */}
            <ScrollAnimate type="fade-up" delay={0.55}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-zyrvox-gold text-zyrvox-gold" />
                    ))}
                  </div>
                  <span className="text-zyrvox-text-2 text-sm">5.0 Rated</span>
                </div>
                <div className="w-px h-5 bg-zyrvox-electric/20" />
                <span className="text-zyrvox-text-2 text-sm">
                  <span className="text-zyrvox-text font-bold">50+</span> Projects Delivered
                </span>
                <div className="w-px h-5 bg-zyrvox-electric/20 hidden sm:block" />
                <span className="text-zyrvox-text-2 text-sm">
                  <span className="text-zyrvox-text font-bold">35+</span> Happy Clients
                </span>
              </div>
            </ScrollAnimate>
          </div>

          {/* Right Side: Visual */}
          <ScrollAnimate type="slide-right" delay={0.3} className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">

              {/* Ambient glow behind the card */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-6 bg-gradient-to-br from-zyrvox-gold/25 to-zyrvox-electric/25 blur-3xl rounded-full"
              />

              {/* Main glass card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-zyrvox-card/80 backdrop-blur-xl border border-zyrvox-electric/20 rounded-2xl p-8 shadow-zyrvox-glow"
              >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-zyrvox-dark/60 rounded-xl p-5 border border-zyrvox-gold/10">
                    <div className="text-3xl font-display font-bold bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-zyrvox-text-2 text-sm mt-1">Projects Done</div>
                  </div>
                  <div className="bg-zyrvox-dark/60 rounded-xl p-5 border border-zyrvox-electric/10">
                    <div className="text-3xl font-display font-bold bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent">
                      35+
                    </div>
                    <div className="text-zyrvox-text-2 text-sm mt-1">Happy Clients</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Palette, text: 'Custom Graphic Design', color: 'gold' },
                    { icon: Code2, text: 'Modern Web Development', color: 'electric' },
                    { icon: Zap, text: 'Fast Delivery & Support', color: 'gold' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        item.color === 'gold' ? 'bg-zyrvox-gold/15' : 'bg-zyrvox-electric/15'
                      }`}>
                        <item.icon className={`w-5 h-5 ${item.color === 'gold' ? 'text-zyrvox-gold' : 'text-zyrvox-electric'}`} />
                      </div>
                      <span className="text-zyrvox-text font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-6 -right-4 bg-zyrvox-card/90 backdrop-blur-xl border border-zyrvox-gold/30 rounded-xl px-4 py-3 shadow-zyrvox-glow hidden md:flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-zyrvox-gold animate-pulse" />
                <span className="text-zyrvox-text text-xs font-semibold whitespace-nowrap">Currently Available</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-zyrvox-card/90 backdrop-blur-xl border border-zyrvox-electric/30 rounded-xl px-4 py-3 shadow-zyrvox-glow hidden md:block"
              >
                <div className="text-lg font-display font-bold bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-zyrvox-text-2 text-xs">Support</div>
              </motion.div>
            </div>
          </ScrollAnimate>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zyrvox-text-2"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zyrvox-electric to-transparent" />
      </motion.div>
    </section>
  )
}