import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/zyrvox-logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'SERVICES' },
        { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/blog', label: 'BLOG' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zyrvox-dark/80 backdrop-blur-xl py-3 shadow-zyrvox-glow border-b border-zyrvox-electric/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-zyrvox-gold to-zyrvox-electric rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500 scale-90" />
            <img
              src={logo}
              alt="Zyrvox Digital"
              className="relative w-11 h-11 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
          </div>
          <span className="font-display font-bold text-xl text-zyrvox-text tracking-wider">
            Zyrvox <span className="bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric bg-clip-text text-transparent">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-bold text-sm tracking-wider transition-colors duration-300 py-1 group ${
                location.pathname === link.path
                  ? 'text-zyrvox-electric'
                  : 'text-zyrvox-text-2 hover:text-zyrvox-text'
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Right Side: Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative px-7 py-3 bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-zyrvox-glow active:scale-95 rounded-lg"
            >
              GET QUOTE →
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 bg-zyrvox-card hover:bg-zyrvox-dark-2 transition-all duration-300 border border-zyrvox-electric/20 hover:border-zyrvox-electric/50 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6 text-zyrvox-text" /> : <Menu className="w-6 h-6 text-zyrvox-text" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-zyrvox-dark/95 backdrop-blur-xl border-t border-zyrvox-electric/10 px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-bold text-lg tracking-wider transition-colors ${
                      location.pathname === link.path
                        ? 'text-zyrvox-electric'
                        : 'text-zyrvox-text-2 hover:text-zyrvox-text'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3.5 bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-bold hover:opacity-90 transition-all shadow-zyrvox-glow rounded-lg"
              >
                GET QUOTE →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}