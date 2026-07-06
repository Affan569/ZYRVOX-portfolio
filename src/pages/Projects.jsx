import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const categories = ['All', 'Frontend', 'Full Stack', '3D', 'Design']

export default function Projects() {
  const { variants } = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('All')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setProjects(projectData)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="bg-bg-primary min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
            My Projects
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            A collection of my recent work and personal projects
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white'
                    : 'bg-bg-card text-text-secondary border border-gray-700 hover:border-accent-violet'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-56 w-full rounded-3xl bg-gray-800" />
                <div className="h-4 w-2/3 rounded bg-gray-800" />
                <div className="h-4 w-full rounded bg-gray-800" />
                <div className="flex gap-2">
                  <div className="h-8 w-20 rounded-full bg-gray-800" />
                  <div className="h-8 w-20 rounded-full bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center text-text-secondary py-20 bg-bg-card border border-gray-800 rounded-3xl">
            No projects yet
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-bg-card border border-gray-800 hover:border-accent-violet/50 transition-all"
              >
                <div
                  className="h-56 bg-gradient-to-br"
                  style={{ backgroundColor: project.imageUrl ? 'transparent' : '#915eff', backgroundImage: project.imageUrl ? `url(${project.imageUrl})` : 'linear-gradient(135deg, #915eff, #00d4ff)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  {project.videoUrl && (
                    <video
                      src={project.videoUrl}
                      poster={project.imageUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )}
                  {!project.imageUrl && !project.videoUrl && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl font-display font-bold text-white/30">{project.title.charAt(0)}</span>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-bg-card rounded-full font-medium text-text-primary hover:text-accent-violet transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-bg-card rounded-full font-medium text-text-primary hover:text-accent-violet transition-colors"
                      >
                        <GitBranch className="w-4 h-4" /> Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    project.category === 'Frontend' ? 'bg-blue-500/20 text-blue-400' :
                    project.category === 'Full Stack' ? 'bg-green-500/20 text-green-400' :
                    project.category === '3D' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-pink-500/20 text-pink-400'
                  }`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
