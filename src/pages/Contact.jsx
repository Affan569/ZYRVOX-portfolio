import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import ScrollAnimate from '../components/ScrollAnimate'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission - replace with EmailJS or Formspree
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success('Thank you! We\'ll contact you soon.')
    reset()
    setIsSubmitting(false)
  }

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimate type="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-electric/10 border border-zyrvox-electric/30 mb-6">
              <span className="text-zyrvox-electric font-mono font-bold uppercase tracking-wider text-xs">
                CONTACT US
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-4">
              Let's Work <span className="text-zyrvox-electric">Together</span>
            </h1>
            <p className="text-zyrvox-text-2 max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together!
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollAnimate type="slide-left">
            <h2 className="text-2xl font-display font-bold text-zyrvox-text mb-8">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-zyrvox-card border border-zyrvox-electric/20">
                <div className="w-12 h-12 rounded-xl bg-zyrvox-electric/20 flex items-center justify-center shrink-0">
                  <span className="text-zyrvox-electric text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-zyrvox-text mb-1">Email</h3>
                  <a href="mailto:zyrvoxdigital@gmail.com" className="text-zyrvox-text-2 hover:text-zyrvox-electric transition-colors">
                    zyrvoxdigital@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-zyrvox-card border border-zyrvox-electric/20">
                <div className="w-12 h-12 rounded-xl bg-zyrvox-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-zyrvox-gold text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-zyrvox-text mb-1">Phone</h3>
                  <a href="tel:+923148862881" className="text-zyrvox-text-2 hover:text-zyrvox-gold transition-colors">
                    +92 314 886 2881
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-zyrvox-card border border-zyrvox-electric/20">
                <div className="w-12 h-12 rounded-xl bg-zyrvox-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-zyrvox-gold text-xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-zyrvox-text mb-1">WhatsApp</h3>
                  <a href="https://wa.me/923148862881" target="_blank" rel="noopener noreferrer" className="text-zyrvox-text-2 hover:text-zyrvox-gold transition-colors">
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate type="slide-right" delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-zyrvox-card border border-zyrvox-electric/20 rounded-3xl p-8 space-y-6">
              <div>
                <label className="block text-zyrvox-text font-medium mb-2">Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-zyrvox-text font-medium mb-2">Email</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-zyrvox-text font-medium mb-2">Phone Number</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-zyrvox-text font-medium mb-2">Service Needed</label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="both">Both (Design + Development)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-zyrvox-text font-medium mb-2">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-zyrvox-electric/20 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </ScrollAnimate>
        </div>
      </div>
    </div>
  )
}
