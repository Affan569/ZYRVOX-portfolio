import React from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zyrvox-dark overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 rounded-full bg-zyrvox-electric/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-zyrvox-gold/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="relative flex items-center justify-center">
        {/* Outer Ring - Counter Clockwise */}
        <motion.div
          className="absolute border-4 border-zyrvox-gold border-t-transparent border-b-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ width: 180, height: 180 }}
        />

        {/* Middle Ring - Clockwise */}
        <motion.div
          className="absolute border-4 border-zyrvox-electric border-l-transparent border-r-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ width: 140, height: 140 }}
        />

        {/* Inner Ring - Counter Clockwise */}
        <motion.div
          className="absolute border-4 border-zyrvox-gold border-t-transparent border-b-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          style={{ width: 100, height: 100 }}
        />

        {/* Pulsing Glow Behind Text */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric blur-xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Agency Logo Text */}
        <motion.h1
          className="text-6xl font-display font-bold bg-gradient-to-r from-zyrvox-gold via-zyrvox-electric to-zyrvox-gold bg-clip-text text-transparent relative z-10 tracking-wider"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{
            opacity: 1,
            scale: [1, 1.1, 1],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 0.5,
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
        >
          ZYRVOX
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="absolute -bottom-16 text-zyrvox-electric font-mono text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            letterSpacing: ["0.2em", "0.3em", "0.2em"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        >
          Loading...
        </motion.p>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-zyrvox-electric"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
