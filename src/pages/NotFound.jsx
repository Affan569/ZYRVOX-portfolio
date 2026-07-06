import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-9xl md:text-[12rem] font-display font-bold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent mb-4"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-8"
        >
          Lost in Space
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-text-secondary mb-10"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-semibold hover:opacity-90 transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
