import React, { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'
import ScrollAnimate from '../components/ScrollAnimate'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    console.log('Firestore DB instance:', db)
    console.log('Fetching projects from Firestore...')
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        console.log('Snapshot received! Size:', snapshot.size)
        const projectData = snapshot.docs.map(doc => {
          const data = doc.data()
          console.log('Project doc:', doc.id, data)
          return ({ id: doc.id, ...data })
        })
        setProjects(projectData)
        setLoading(false)
        console.log('Projects set in state:', projectData)
      },
      (error) => {
        console.error('Firestore fetch error:', error)
        setLoading(false)
      }
    )
    return unsubscribe
  }, [])

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimate type="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-electric/10 border border-zyrvox-electric/30 mb-6">
              <span className="text-zyrvox-electric font-mono font-bold uppercase tracking-wider text-xs">
                OUR WORK
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-4">
              Featured <span className="text-zyrvox-electric">Projects</span>
            </h2>
            <p className="text-zyrvox-text-2 text-lg max-w-2xl mx-auto">
              A selection of our best work in graphic design and web development.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate type="fade-up" delay={0.1}>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'web', 'graphic'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark shadow-zyrvox-glow'
                    : 'bg-zyrvox-card border border-zyrvox-electric/20 text-zyrvox-text-2 hover:border-zyrvox-electric/50'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter === 'web' ? 'Web Development' : 'Digital Art'}
              </button>
            ))}
          </div>
        </ScrollAnimate>

       

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="h-48 w-full rounded-2xl bg-gray-800" />
                <div className="h-4 w-1/2 rounded bg-gray-800" />
                <div className="h-4 w-full rounded bg-gray-800" />
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center text-zyrvox-text-2 py-12 bg-zyrvox-card border border-zyrvox-electric/20 rounded-3xl">
            No projects yet
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollAnimate key={project.id} type="fade-up" delay={index * 0.1}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-zyrvox-card border border-zyrvox-electric/20 rounded-2xl overflow-hidden hover:shadow-zyrvox-glow transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3]">
                    {project.imageFilename ? (
                      <img
                        src={`/images/${project.imageFilename}`}
                        alt={project.title}
                        className="w-full h-full object-contain bg-zyrvox-dark"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zyrvox-dark-2 to-zyrvox-card flex items-center justify-center">
                        <span className="text-4xl font-display font-bold text-white/30">{project.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-zyrvox-electric text-xs uppercase tracking-wider font-mono mb-2 block">
                      {project.category === 'web' ? 'Web Development' : 'Digital Art / Graphic Design'}
                    </span>
                    <h3 className="text-xl font-display font-bold text-zyrvox-text mb-2">
                      {project.title}
                    </h3>
                    {project.category === 'web' && project.description && (
                      <p className="text-zyrvox-text-2 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    {project.category === 'web' && (
                      <div className="flex gap-3 flex-wrap">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark text-sm font-semibold hover:opacity-90 transition-opacity"
                          >
                            View Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 rounded-lg bg-gray-800 text-zyrvox-text text-sm hover:bg-gray-700 transition-colors"
                          >
                            View Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zyrvox-dark via-zyrvox-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-6">
                    <div className="mb-auto flex flex-col items-center text-center">
                      <h3 className="text-2xl font-display font-bold text-zyrvox-text mb-4">
                        {project.title}
                      </h3>
                      {project.category === 'web' && (
                        <div className="flex gap-3 flex-wrap justify-center">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-5 py-2 rounded-lg bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-semibold hover:opacity-90 transition-opacity"
                            >
                              View Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-5 py-2 rounded-lg bg-gray-800 text-zyrvox-text font-semibold hover:bg-gray-700 transition-colors"
                            >
                              View Code
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-zyrvox-card border border-zyrvox-electric/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-zyrvox-dark rounded-full text-zyrvox-text hover:text-zyrvox-electric transition-colors"
                >
                  ✕
                </button>
                <div className="aspect-[4/3]">
                  {selectedProject.imageFilename ? (
                    <img
                      src={`/images/${selectedProject.imageFilename}`}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain bg-zyrvox-dark rounded-t-2xl"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zyrvox-dark-2 to-zyrvox-card flex items-center justify-center rounded-t-2xl">
                      <span className="text-6xl font-display font-bold text-white/30">{selectedProject.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block text-zyrvox-electric text-xs uppercase tracking-wider font-mono px-3 py-1 rounded-full bg-zyrvox-electric/10 border border-zyrvox-electric/30 mb-3">
                    {selectedProject.category === 'web' ? 'Web Development' : 'Digital Art / Graphic Design'}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-zyrvox-text mb-4">
                    {selectedProject.title}
                  </h2>
                </div>
                {selectedProject.description && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-zyrvox-text mb-2">Details</h3>
                    <p className="text-zyrvox-text-2">
                      {selectedProject.description}
                    </p>
                  </div>
                )}
                {selectedProject.liveUrl && (
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-semibold hover:opacity-90 transition-opacity"
                    >
                      View Demo
                    </a>
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-xl bg-gray-800 text-zyrvox-text hover:bg-gray-700 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
