import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import ScrollAnimate from '../components/ScrollAnimate'
import CinematicBackground from '../components/CinematicBackground'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // isPakistan: null = still detecting, true = Pakistan visitor, false = international visitor
  const [isPakistan, setIsPakistan] = useState(null)

  // Auto-rotating testimonials
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Detect visitor's country using IP geolocation.
    // Falls back to international (USD) pricing if the request fails.
    const detectCountry = async () => {
      try {
        const res = await fetch('https://ipwho.is/')
        const data = await res.json()
        setIsPakistan(data.country_code === 'PK')
      } catch (err) {
        console.error('Could not detect location, defaulting to USD pricing:', err)
        setIsPakistan(false)
      }
    }
    detectCountry()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create a mailto link to send the details
    const subject = `New Project Inquiry - ${selectedPlan.name} Plan`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Selected Plan: ${selectedPlan.name} (${getDisplayPrice(selectedPlan)})
Message: ${formData.message}
    `.trim()
    window.location.href = `mailto:zyrvoxdigital@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSelectedPlan(null)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const testimonials = [
    { name: 'Ahmed Khan', role: 'CEO, TechStart', text: 'Zyrvox Digital transformed our online presence. The design is stunning and the website performs perfectly!', rating: 5 },
    { name: 'Sarah Ahmed', role: 'Founder, CreativeHub', text: 'Professional, timely, and creative. They brought our brand vision to life in ways we never imagined.', rating: 5 },
    { name: 'Ali Hassan', role: 'Owner, LocalBites', text: 'Our sales increased by 40% after launching our new website. Highly recommend their services!', rating: 5 },
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      priceLocal: 'Rs. 10,000',
      priceIntl: '$150',
      period: 'per project',
      features: [
        'Simple Landing Page',
        'Basic Logo Design',
        'Social Media Kit',
        '3 Revisions',
      ]
    },
    {
      name: 'Standard',
      priceLocal: 'Rs. 15,000',
      priceIntl: '$250',
      period: 'per project',
      featured: true,
      features: [
        'Complete Business Website',
        'Full Brand Identity',
        '5 Social Media Posts',
        'Unlimited Revisions',
        '30 Days Support',
      ]
    },
    {
      name: 'Premium',
      priceLocal: 'Rs. 25,000',
      priceIntl: '$500',
      period: 'per project',
      features: [
        'E-Commerce Website',
        'Complete Branding Package',
        'Social Media Management',
        'Unlimited Revisions',
        '90 Days Support',
        'SEO Optimization',
      ]
    }
  ]

  // Picks the right price string based on detected location.
  // While detection is in progress (isPakistan === null), shows the local (PKR) price by default.
  const getDisplayPrice = (plan) => (isPakistan === false ? plan.priceIntl : plan.priceLocal)

  return (
    <>
      <CinematicBackground />
      <div className="bg-transparent min-h-screen">
        <Hero />

        {/* Services Preview */}
        <section className="py-28 px-6 bg-zyrvox-dark/40 backdrop-blur-sm relative overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">
            <ScrollAnimate type="fade-up">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-electric/10 border border-zyrvox-electric/30 mb-6">
                  <span className="text-zyrvox-electric font-mono font-bold uppercase tracking-[0.2em] text-xs">
                    What We Offer
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-5 tracking-tight">
                  Our <span className="bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-zyrvox-text-2 max-w-2xl mx-auto text-lg font-light">
                  Premium digital solutions tailored to your business needs.
                </p>
              </div>
            </ScrollAnimate>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: '🎨', title: 'Graphic Design', desc: 'From logos to complete brand identities' },
                { icon: '💻', title: 'Web Development', desc: 'Modern, responsive, and fast websites' },
              ].map((item, idx) => (
                <ScrollAnimate key={idx} type="fade-up" delay={idx * 0.1}>
                  <div className="group relative bg-zyrvox-card border border-zyrvox-electric/20 p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-zyrvox-glow overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zyrvox-gold/0 via-transparent to-zyrvox-electric/0 group-hover:from-zyrvox-gold/5 group-hover:to-zyrvox-electric/5 transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="text-5xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 inline-block">{item.icon}</div>
                      <h3 className="text-2xl font-display font-bold text-zyrvox-text mb-3">{item.title}</h3>
                      <p className="text-zyrvox-text-2 mb-7 leading-relaxed">{item.desc}</p>
                      <button className="text-zyrvox-electric font-semibold flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
                        Learn More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-28 px-6">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimate type="fade-up">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-gold/10 border border-zyrvox-gold/30 mb-6">
                  <span className="text-zyrvox-gold font-mono font-bold uppercase tracking-[0.2em] text-xs">
                    Testimonials
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-5 tracking-tight">
                  What Our <span className="bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent">Clients Say</span>
                </h2>
              </div>
            </ScrollAnimate>

            <div className="relative max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="relative bg-zyrvox-card border border-zyrvox-gold/30 rounded-2xl p-10 md:p-14 shadow-zyrvox-glow"
                >
                  {/* Decorative quote mark */}
                  <div className="text-zyrvox-gold/30 font-display text-7xl leading-none mb-2 select-none">"</div>

                  {/* Star rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-zyrvox-gold text-lg">★</span>
                    ))}
                  </div>

                  <p className="text-zyrvox-text text-lg md:text-xl leading-relaxed mb-8 font-light">
                    {testimonials[activeTestimonial].text}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zyrvox-gold to-zyrvox-electric flex items-center justify-center text-zyrvox-dark font-display font-bold text-lg flex-shrink-0">
                      {testimonials[activeTestimonial].name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-zyrvox-text font-display font-bold text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-zyrvox-electric text-sm">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex items-center justify-center gap-3 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Show testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeTestimonial
                        ? 'w-8 bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric'
                        : 'w-2 bg-zyrvox-electric/20 hover:bg-zyrvox-electric/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-28 px-6 bg-zyrvox-dark/40 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl">
            <ScrollAnimate type="fade-up">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-gold/10 border border-zyrvox-gold/30 mb-6">
                  <span className="text-zyrvox-gold font-mono font-bold uppercase tracking-[0.2em] text-xs">
                    Pricing Plans
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-5 tracking-tight">
                  Simple, Transparent <span className="bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent">Pricing</span>
                </h2>
                <p className="text-zyrvox-text-2 max-w-2xl mx-auto text-lg font-light">
                  Choose the perfect plan for your business needs.
                </p>
              </div>
            </ScrollAnimate>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                <ScrollAnimate key={idx} type="fade-up" delay={idx * 0.1}>
                  <div className={`group relative bg-zyrvox-card border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 ${
                    plan.featured
                      ? 'border-zyrvox-electric shadow-zyrvox-glow md:scale-105'
                      : 'border-zyrvox-electric/20 hover:border-zyrvox-electric/60 hover:shadow-zyrvox-glow'
                  }`}>
                    {plan.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-bold px-4 py-1 rounded-full text-sm">
                        MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-2xl font-display font-bold text-zyrvox-text mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-display font-bold text-zyrvox-electric">{getDisplayPrice(plan)}</span>
                      <span className="text-zyrvox-text-2 ml-2">{plan.period}</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-zyrvox-text">
                          <span className="text-zyrvox-gold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => setSelectedPlan(plan)} className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                      plan.featured
                        ? 'bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark hover:shadow-zyrvox-glow'
                        : 'border-2 border-zyrvox-electric text-zyrvox-electric hover:bg-zyrvox-electric/10 hover:shadow-zyrvox-glow'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Pricing Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedPlan(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-zyrvox-card border border-zyrvox-electric/20 rounded-2xl p-8 shadow-zyrvox-glow"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-zyrvox-text">{selectedPlan.name} Plan</h2>
                  <p className="bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent text-3xl font-display font-bold">{getDisplayPrice(selectedPlan)}</p>
                </div>
                <button onClick={() => setSelectedPlan(null)} className="text-zyrvox-text-2 hover:text-zyrvox-text text-2xl transition-all duration-300 hover:rotate-90 hover:scale-110">
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-zyrvox-text font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text rounded-lg transition-all duration-300 focus:border-zyrvox-electric focus:shadow-zyrvox-glow focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-zyrvox-text font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text rounded-lg transition-all duration-300 focus:border-zyrvox-electric focus:shadow-zyrvox-glow focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-zyrvox-text font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text rounded-lg transition-all duration-300 focus:border-zyrvox-electric focus:shadow-zyrvox-glow focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-zyrvox-text font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text rounded-lg transition-all duration-300 focus:border-zyrvox-electric focus:shadow-zyrvox-glow focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-zyrvox-glow active:scale-[0.98]"
                >
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}