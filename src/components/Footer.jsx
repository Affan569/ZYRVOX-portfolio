import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/zyrvox-logo.png'

export default function Footer() {
  const socialLinks = [
    { name: 'IG', label: 'Instagram', href: 'https://instagram.com/ZyrvoxDigital' },
    { name: 'FB', label: 'Facebook', href: '#' },
    { name: 'LI', label: 'LinkedIn', href: 'https://linkedin.com/company/zyrvoxdigital' },
  ]

  return (
    <footer className="relative bg-zyrvox-card border-t border-zyrvox-electric/10 py-16 overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-zyrvox-gold/5 to-zyrvox-electric/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-zyrvox-gold to-zyrvox-electric rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500 scale-90" />
                <img
                  src={logo}
                  alt="Zyrvox Digital"
                  className="relative w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
              <span className="font-display font-bold text-2xl text-zyrvox-text tracking-wide">
                Zyrvox <span className="bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent">Digital</span>
              </span>
            </div>
            <p className="text-zyrvox-text-2 leading-relaxed max-w-md">
              We design and build digital experiences that convert. From stunning graphics to powerful websites, we've got you covered.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold text-zyrvox-text mb-6 tracking-wide">Quick Links</h3>
            <div className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 text-zyrvox-text-2 hover:text-zyrvox-electric transition-colors duration-300 w-fit"
                >
                  <span className="w-0 group-hover:w-3 h-[1.5px] bg-zyrvox-electric transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold text-zyrvox-text mb-6 tracking-wide">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:zyrvoxdigital@gmail.com"
                className="flex items-center gap-3 text-zyrvox-text-2 hover:text-zyrvox-electric transition-colors duration-300 group"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-zyrvox-dark border border-zyrvox-electric/20 rounded-lg group-hover:border-zyrvox-electric/60 group-hover:shadow-zyrvox-glow transition-all duration-300">📧</span>
                <span className="text-sm">zyrvoxdigital@gmail.com</span>
              </a>
              <a
                href="tel:+923148862881"
                className="flex items-center gap-3 text-zyrvox-text-2 hover:text-zyrvox-gold transition-colors duration-300 group"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-zyrvox-dark border border-zyrvox-gold/20 rounded-lg group-hover:border-zyrvox-gold/60 group-hover:shadow-zyrvox-glow transition-all duration-300">📞</span>
                <span className="text-sm">+92 314 886 2881</span>
              </a>
              <a
                href="https://wa.me/923148862881"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zyrvox-text-2 hover:text-zyrvox-gold transition-colors duration-300 group"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-zyrvox-dark border border-zyrvox-gold/20 rounded-lg group-hover:border-zyrvox-gold/60 group-hover:shadow-zyrvox-glow transition-all duration-300">💬</span>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div> <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-zyrvox-dark border border-zyrvox-electric/20 rounded-lg hover:border-transparent hover:bg-gradient-to-br hover:from-zyrvox-gold hover:to-zyrvox-electric hover:text-zyrvox-dark hover:scale-110 hover:shadow-zyrvox-glow transition-all duration-300 text-zyrvox-text-2 font-bold text-sm">
                  {social.name}
                </a>
              ))}
            </div>

          
        </div>

    </footer>
  )
}