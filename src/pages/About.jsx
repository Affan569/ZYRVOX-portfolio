import React from 'react'
import ScrollAnimate from '../components/ScrollAnimate'

export default function About() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '35+', label: 'Happy Clients' },
    { number: '4+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
  ]

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimate type="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-electric/10 border border-zyrvox-electric/30 mb-6">
              <span className="text-zyrvox-electric font-mono font-bold uppercase tracking-wider text-xs">
                ABOUT US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-4">
              Why Choose <span className="text-zyrvox-electric">Zyrvox Digital</span>?
            </h2>
            <p className="text-zyrvox-text-2 text-lg max-w-2xl mx-auto">
              We're a team of passionate designers and developers dedicated to bringing your vision to life.
            </p>
          </div>
        </ScrollAnimate>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <ScrollAnimate key={index} type="fade-up" delay={index * 0.1}>
              <div className="bg-zyrvox-card border border-zyrvox-electric/20 rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-zyrvox-text-2 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimate type="slide-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-zyrvox-gold/20 to-zyrvox-electric/20 rounded-3xl blur-2xl" />
              <div className="relative bg-zyrvox-card border border-zyrvox-electric/20 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zyrvox-gold to-zyrvox-electric flex items-center justify-center">
                    <span className="text-zyrvox-dark font-display font-bold text-2xl">Z</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-zyrvox-text">Meet the Founder</h3>
                    <p className="text-zyrvox-electric text-sm">Creative Director & Full-Stack Dev</p>
                  </div>
                </div>
                <p className="text-zyrvox-text-2 leading-relaxed mb-6">
                  With over 4 years of experience in digital design and development, I've helped 35+ businesses transform their online presence. From startups to established brands, I create digital experiences that drive results.
                </p>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-zyrvox-dark border border-zyrvox-electric/20 flex items-center justify-center cursor-pointer hover:border-zyrvox-electric transition-colors">
                    <span className="text-zyrvox-electric text-sm">IG</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zyrvox-dark border border-zyrvox-electric/20 flex items-center justify-center cursor-pointer hover:border-zyrvox-electric transition-colors">
                    <span className="text-zyrvox-electric text-sm">LI</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zyrvox-dark border border-zyrvox-electric/20 flex items-center justify-center cursor-pointer hover:border-zyrvox-electric transition-colors">
                    <span className="text-zyrvox-electric text-sm">FB</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate type="slide-right" delay={0.1}>
            <div className="space-y-6">
              {[
                { icon: '🎯', title: 'Goal-Oriented', desc: 'Every design and development decision is focused on achieving your business goals.' },
                { icon: '⚡', title: 'Fast & Efficient', desc: 'We deliver high-quality work on time without compromising on excellence.' },
                { icon: '🎨', title: 'Creative Excellence', desc: 'We bring fresh, innovative ideas to every project we work on.' },
                { icon: '💬', title: 'Clear Communication', desc: 'You\'ll always be in the loop with regular updates and open dialogue.' },
              ].map((item, index) => (
                <div key={index} className="bg-zyrvox-card border border-zyrvox-electric/10 rounded-2xl p-6 hover:border-zyrvox-electric/30 transition-colors">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-display font-bold text-zyrvox-text mb-2">{item.title}</h3>
                  <p className="text-zyrvox-text-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  )
}
