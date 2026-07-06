import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const skillData = {
  'React': {
    what: 'A JavaScript library for building fast, interactive user interfaces.',
    uses: ['Single Page Applications (SPAs)', 'Dynamic dashboards & admin panels', 'Reusable component libraries', 'Complex state management apps'],
    level: 90
  },
  'Next.js': {
    what: 'React framework with server-side rendering and full-stack capabilities.',
    uses: ['SEO-friendly websites', 'Full-stack web apps', 'E-commerce platforms', 'API routes & serverless functions'],
    level: 85
  },
  'Node.js': {
    what: 'JavaScript runtime for building fast and scalable server-side applications.',
    uses: ['REST & GraphQL APIs', 'Real-time chat applications', 'Microservices architecture', 'CLI tools & automation scripts'],
    level: 80
  },
  'Firebase': {
    what: "Google's platform for building apps without managing servers.",
    uses: ['Real-time databases & live sync', 'User authentication systems', 'File storage & CDN', 'Serverless cloud functions'],
    level: 88
  },
  'MongoDB': {
    what: 'NoSQL document database for flexible and scalable data storage.',
    uses: ['Flexible schema data storage', 'E-commerce product catalogs', 'User profiles & activity logs', 'Content management systems'],
    level: 75
  },
  'TailwindCSS': {
    what: 'Utility-first CSS framework for rapidly building custom designs.',
    uses: ['Pixel-perfect responsive layouts', 'Custom design systems', 'Dark/light theme switching', 'Rapid UI prototyping'],
    level: 95
  },
  'TypeScript': {
    what: 'Typed superset of JavaScript that catches errors before runtime.',
    uses: ['Large-scale app development', 'Type-safe API integrations', 'Better code documentation', 'Team collaboration at scale'],
    level: 78
  },
  'Git': {
    what: 'Version control system for tracking code changes and collaboration.',
    uses: ['Code version tracking', 'Team collaboration workflows', 'Branch-based feature development', 'Open source contributions'],
    level: 85
  },
  'Figma': {
    what: 'Collaborative design tool for creating UI/UX prototypes.',
    uses: ['UI/UX wireframing & prototyping', 'Design system creation', 'Client presentation mockups', 'Developer handoff specs'],
    level: 80
  }
}

export default function SkillCard({ skill }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 10
    const y = (e.clientY - rect.top - rect.height / 2) / 10
    setRotate({ x: -y, y: x })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setProgress(skillData[skill]?.level || 0)
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
    setProgress(0)
  }

  const colors = {
    'React': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Next.js': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    'Node.js': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Firebase': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'MongoDB': 'bg-green-500/20 text-green-400 border-green-500/30',
    'TailwindCSS': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'TypeScript': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Git': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Figma': 'bg-pink-500/20 text-pink-400 border-pink-500/30'
  }

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{ rotateX: rotate.x, rotateY: rotate.y, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`p-6 rounded-2xl border-2 ${colors[skill] || 'bg-accent-violet/10 text-accent-violet border-accent-violet/30'} bg-bg-card text-center font-semibold text-lg cursor-pointer`}
      >
        {skill}
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute z-[9999] -top-2 left-1/2 -translate-x-1/2 -translate-y-full mb-3 w-[280px] bg-[rgba(13,17,23,0.97)] border border-accent-violet rounded-2xl p-4 shadow-2xl"
          >
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">{skill}</h3>
            <p className="text-text-secondary text-sm mb-4">{skillData[skill]?.what}</p>
            <ul className="space-y-1 mb-4">
              {skillData[skill]?.uses.map((use, i) => (
                <li key={i} className="text-text-secondary text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
                  {use}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-secondary">Proficiency</span>
                <span className="text-accent-violet font-semibold">{skillData[skill]?.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
