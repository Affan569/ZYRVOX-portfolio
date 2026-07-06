import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SidePanel() {
  return (
    <>
      {/* Left Side: Email + Phone */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <a
            href="mailto:affanhussain.developer@gmail.com"
            className="group"
          >
            <div
              className="text-white font-mono font-bold text-sm group-hover:text-accent-cyan transition-colors"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
              affanhussain.developer@gmail.com
            </div>
          </a>
          <a
            href="tel:+923148862881"
            className="group"
          >
            <div
              className="text-white font-mono font-bold text-sm group-hover:text-accent-cyan transition-colors"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
              +92 314 886 2881
            </div>
          </a>
        </motion.div>
      </div>

      {/* Right Side: Projects */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/projects"
            className="group"
          >
            <div
              className="text-white font-mono font-bold text-sm group-hover:text-accent-cyan transition-colors"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              PROJECTS
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent-cyan to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        >
          <ArrowDown className="w-5 h-5 text-accent-cyan" />
        </motion.div>
      </div>
    </>
  )
}
