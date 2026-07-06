import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923148862881"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/30"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-zyrvox-card px-4 py-2 rounded-lg border border-zyrvox-electric/20 whitespace-nowrap"
      >
        <span className="text-zyrvox-text font-semibold text-sm">Chat with us</span>
      </motion.div>
    </a>
  )
}
