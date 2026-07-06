import React from 'react'
import ScrollAnimate from '../components/ScrollAnimate'

export default function Services() {
  const services = [
    {
      category: 'Graphic Design',
      icon: '🎨',
      items: [
        { title: 'Logo Design', desc: 'Create a memorable brand identity with custom logos' },
        { title: 'Brand Identity', desc: 'Complete branding packages for your business' },
        { title: 'Social Media', desc: 'Stunning graphics for all social platforms' },
        { title: 'Print Design', desc: 'Business cards, flyers, brochures, and more' },
      ]
    },
    {
      category: 'Web Development',
      icon: '💻',
      items: [
        { title: 'Business Websites', desc: 'Professional websites that represent your brand' },
        { title: 'E-Commerce', desc: 'Complete online stores with payment integration' },
        { title: 'Landing Pages', desc: 'High-converting landing page design & development' },
        { title: 'Website Redesign', desc: 'Refresh and modernize your existing website' },
      ]
    }
  ]

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimate type="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-electric/10 border border-zyrvox-electric/30 mb-6">
              <span className="text-zyrvox-electric font-mono font-bold uppercase tracking-wider text-xs">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-4">
              What We <span className="text-zyrvox-electric">Offer</span>
            </h2>
            <p className="text-zyrvox-text-2 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed online.
            </p>
          </div>
        </ScrollAnimate>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((serviceGroup, groupIndex) => (
            <ScrollAnimate key={groupIndex} type={groupIndex === 0 ? 'slide-left' : 'slide-right'} delay={groupIndex * 0.2}>
              <div className="bg-zyrvox-card border border-zyrvox-electric/20 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zyrvox-gold to-zyrvox-electric flex items-center justify-center text-2xl">
                    {serviceGroup.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-zyrvox-text">
                    {serviceGroup.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {serviceGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-zyrvox-dark rounded-2xl p-6 border border-zyrvox-electric/10 hover:border-zyrvox-electric/30 transition-colors">
                      <h4 className="text-xl font-display font-bold text-zyrvox-text mb-2">
                        {item.title}
                      </h4>
                      <p className="text-zyrvox-text-2 mb-4">
                        {item.desc}
                      </p>
                      <button className="text-zyrvox-electric font-semibold text-sm flex items-center gap-2">
                        Learn More →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <ScrollAnimate type="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-electric/10 border border-zyrvox-electric/30 mb-6">
                <span className="text-zyrvox-electric font-mono font-bold uppercase tracking-wider text-xs">
                  OUR PROCESS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-4">
                How We <span className="text-zyrvox-gold">Work</span>
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Discovery', icon: '🔍', desc: 'We learn about your goals and requirements' },
              { step: '02', title: 'Design', icon: '🎨', desc: 'Creating stunning visuals and concepts' },
              { step: '03', title: 'Development', icon: '⚡', desc: 'Building with the latest technologies' },
              { step: '04', title: 'Delivery', icon: '🚀', desc: 'Launching your project to the world' },
              { step: '05', title: 'Support', icon: '💬', desc: 'Ongoing support and maintenance' },
            ].map((item, index) => (
              <ScrollAnimate key={index} type="fade-up" delay={index * 0.1}>
                <div className="bg-zyrvox-card border border-zyrvox-electric/20 rounded-2xl p-6 text-center hover:border-zyrvox-electric/50 transition-colors">
                  <div className="text-zyrvox-electric font-mono text-sm mb-3">{item.step}</div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-display font-bold text-zyrvox-text mb-2">{item.title}</h3>
                  <p className="text-zyrvox-text-2 text-sm">{item.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
