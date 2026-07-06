import React from 'react'
import { motion } from 'framer-motion'

export default function DynamicBackground() {
  // Agency ke liye code snippets ki jagah service keywords — 
  // subtle branding, generic developer feel nahi
  const agencyTags = [
    "// Web Development",
    "// Graphic Design",
    "// Brand Identity",
    "// UI/UX Design",
    "// Digital Strategy",
    "// Creative Solutions",
  ]

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#040406] via-[#070709] to-[#040406]">
      
      {/* Subtle Grid Overlay — premium agency signature */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient Glowing Nodes — fewer, slower, more elegant */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#4a9eff]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Minimal Connection Lines — thinner, slower, less "matrix" */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 20}%`}
            y1="15%"
            x2={`${35 + i * 18}%`}
            y2="55%"
            stroke="#4a9eff"
            strokeWidth="0.5"
            animate={{
              strokeDashoffset: [0, 20],
            }}
            strokeDasharray="4 8"
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Soft Radial Glow — center focus, premium depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Subtle Scrolling Service Tags — very low opacity, ambient only */}
      <div className="absolute right-0 top-0 w-1/4 h-full overflow-hidden opacity-[0.06]">
        <motion.div
          animate={{ y: [0, -400] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...agencyTags, ...agencyTags, ...agencyTags].map((line, i) => (
            <div key={i} className="font-mono text-xs text-[#4a9eff] py-3 pl-4 tracking-wider">
              {line}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Vignette — edges dark, focus stays center */}
      <div 
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 200px rgba(0,0,0,0.7)',
        }}
      />
    </div>
  )
}