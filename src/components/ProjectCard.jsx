import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'

export default function ProjectCard({ title, category, description, tags, color1, color2 }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 10
    const y = (e.clientY - rect.top - rect.height / 2) / 10
    setRotate({ x: -y, y: x })
  }

  return (
    <motion.div
      style={{ rotateX: rotate.x, rotateY: rotate.y, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      className="group relative rounded-3xl overflow-hidden bg-bg-card border border-gray-800 hover:border-accent-violet/50 transition-all"
    >
      <div
        className="h-56 bg-gradient-to-br"
        style={{ backgroundColor: color1, backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})` }}
      >
        <div className="h-full flex items-center justify-center">
          <span className="font-display font-bold text-4xl text-white/30">{title[0]}</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="flex gap-4">
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-bg-card rounded-full font-medium text-text-primary hover:text-accent-violet transition-colors">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-bg-card rounded-full font-medium text-text-primary hover:text-accent-violet transition-colors">
            <GitBranch className="w-4 h-4" /> Code
          </a>
        </div>
      </div>

      <div className="p-6">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
          category === 'Full Stack' ? 'bg-green-500/20 text-green-400' :
          category === 'Frontend' ? 'bg-blue-500/20 text-blue-400' :
          category === '3D' ? 'bg-purple-500/20 text-purple-400' :
          'bg-pink-500/20 text-pink-400'
        }`}>
          {category}
        </span>
        <h3 className="text-xl font-display font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
