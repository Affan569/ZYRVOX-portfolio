import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore'
import toast from 'react-hot-toast'
import { db } from '../firebase/config'

export default function Admin() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('isAdmin')
    if (isAdmin) {
      setUser({ isAdmin: true })
    }
    setLoading(false)
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin')
    window.location.reload()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zyrvox-dark flex items-center justify-center">
        <div className="animate-pulse text-zyrvox-text text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <Login />
  }

  return <Dashboard user={user} onLogout={handleLogout} />
}

function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const ADMIN_USERNAME = 'admin'
  const ADMIN_PASSWORD = 'admin123'

  const onSubmit = async (data) => {
    try {
      if (data.username === ADMIN_USERNAME && data.password === ADMIN_PASSWORD) {
        toast.success('Welcome back!')
        sessionStorage.setItem('isAdmin', 'true')
        window.location.reload()
      } else {
        toast.error('Invalid username or password')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-zyrvox-dark flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-zyrvox-card border border-gray-800 rounded-3xl p-8"
      >
        <h1 className="text-3xl font-display font-bold text-zyrvox-text mb-2">Admin Login</h1>
        <p className="text-zyrvox-text-2 mb-8">Sign in to manage your portfolio</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-zyrvox-text font-medium mb-2">Username</label>
            <input
              {...register('username', { required: 'Username is required' })}
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-gray-700 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
              placeholder="Enter username"
            />
            {errors.username && <p className="text-red-400 text-sm mt-2">{errors.username.message}</p>}
          </div>
          <div>
            <label className="block text-zyrvox-text font-medium mb-2">Password</label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-gray-700 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-semibold hover:opacity-90 transition-opacity disabled:opacity-70"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

function Dashboard({ user, onLogout }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingProject, setEditingProject] = useState(null)
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const selectedCategory = watch('category')

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setProjects(projectData)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (editingProject) {
      Object.keys(editingProject).forEach(key => {
        if (key !== 'id' && key !== 'createdAt') {
          setValue(key, editingProject[key])
        }
      })
    } else {
      reset()
    }
  }, [editingProject, setValue, reset])

  const onSubmit = async (data) => {
    console.log('Form submitted with data:', data)
    setIsSubmitting(true)
    try {
      const projectData = {
        title: data.title,
        description: data.description || '',
        category: data.category,
        liveUrl: data.liveUrl || '',
        githubUrl: data.githubUrl || '',
        imageFilename: data.imageFilename || '',
        createdAt: editingProject ? editingProject.createdAt : serverTimestamp()
      }

      console.log('Saving project data to Firestore:', projectData)

      if (editingProject) {
        await updateDoc(doc(db, 'projects', editingProject.id), projectData)
        toast.success('Project updated successfully!')
      } else {
        await addDoc(collection(db, 'projects'), projectData)
        toast.success('Project added successfully!')
      }

      setEditingProject(null)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error(`Error: ${error.message || 'Something went wrong'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (project) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    try {
      await deleteDoc(doc(db, 'projects', project.id))
      toast.success('Project deleted!')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-zyrvox-dark pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-zyrvox-text">Admin Dashboard</h1>
          <button
            onClick={onLogout}
            className="px-6 py-2 rounded-xl bg-gray-800 text-zyrvox-text-2 hover:bg-zyrvox-electric/20 hover:text-zyrvox-electric transition-all"
          >
            Logout
          </button>
        </div>

        <div className="bg-zyrvox-card border border-gray-800 rounded-3xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-display font-bold text-zyrvox-text mb-6">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h2>

          <div className="mb-6 p-4 bg-zyrvox-dark border border-zyrvox-electric/30 rounded-xl">
            <h4 className="text-zyrvox-electric font-bold mb-2">Instructions:</h4>
            <ol className="text-zyrvox-text-2 text-sm space-y-1 list-decimal list-inside">
              <li>Pehlay apni image ko <code className="bg-gray-800 px-1 rounded">public/images/</code> folder mein copy paste karein</li>
              <li>Phir yahan bas image ka naam likhein (e.g., <code className="bg-gray-800 px-1 rounded">my-artwork.jpg</code>, <code className="bg-gray-800 px-1 rounded">website-design.png</code>)</li>
            </ol>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-zyrvox-text font-medium mb-2">Title</label>
                <input
                  {...register('title', { required: 'Title is required' })}
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-gray-700 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                  placeholder="Project title"
                />
                {errors.title && <p className="text-red-400 text-sm mt-2">{errors.title.message}</p>}
              </div>
              <div>
                <label className="block text-zyrvox-text font-medium mb-2">Category</label>
                <select
                  {...register('category', { required: 'Category is required' })}
                  className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-gray-700 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                >
                  <option value="">Select category</option>
                  <option value="web">Web Development</option>
                  <option value="graphic">Digital Art / Graphic Design</option>
                </select>
                {errors.category && <p className="text-red-400 text-sm mt-2">{errors.category.message}</p>}
              </div>
            </div>

            {selectedCategory === 'web' && (
              <>
                <div>
                  <label className="block text-zyrvox-text font-medium mb-2">Description</label>
                  <textarea
                    {...register('description', {
                      required: (value, formValues) => formValues.category === 'web' ? 'Description is required' : false
                    })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-gray-700 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all resize-none"
                    placeholder="Project description"
                  />
                  {errors.description && <p className="text-red-400 text-sm mt-2">{errors.description.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zyrvox-text font-medium mb-2">Live URL</label>
                    <input
                      {...register('liveUrl')}
                      type="url"
                      className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-gray-700 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <label className="block text-zyrvox-text font-medium mb-2">GitHub URL</label>
                    <input
                      {...register('githubUrl')}
                      type="url"
                      className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-gray-700 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                      placeholder="https://github.com/"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-zyrvox-text font-medium mb-2">
                Image Filename (from public/images/)
              </label>
              <input
                {...register('imageFilename')}
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-zyrvox-dark border border-gray-700 text-zyrvox-text focus:border-zyrvox-electric focus:outline-none transition-all"
                placeholder="e.g., my-artwork.jpg"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-zyrvox-gold to-zyrvox-electric text-zyrvox-dark font-semibold hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {isSubmitting ? 'Saving...' : editingProject ? 'Update Project' : 'Add Project'}
              </button>
              {editingProject && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingProject(null)
                    reset()
                  }}
                  className="px-6 py-3 rounded-xl bg-gray-800 text-zyrvox-text-2 hover:bg-gray-700 transition-all"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold text-zyrvox-text mb-6">Existing Projects</h2>
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse space-y-4">
                  <div className="h-48 w-full rounded-2xl bg-gray-800" />
                  <div className="h-4 w-1/2 rounded bg-gray-800" />
                  <div className="h-4 w-full rounded bg-gray-800" />
                </div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center text-zyrvox-text-2 py-12 bg-zyrvox-card border border-gray-800 rounded-3xl">
              No projects yet
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="rounded-2xl overflow-hidden border border-gray-800 bg-zyrvox-card">
                  <div className="h-48 w-full bg-gradient-to-br from-zyrvox-gold/20 to-zyrvox-electric/20 flex items-center justify-center">
                    {project.imageFilename ? (
                      <img
                        src={`/images/${project.imageFilename}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zyrvox-gold to-zyrvox-electric flex items-center justify-center">
                        <span className="text-4xl font-display font-bold text-white/30">{project.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display font-semibold text-zyrvox-text">{project.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.category === 'web' ? 'bg-blue-500/20 text-blue-400' : 'bg-pink-500/20 text-pink-400'
                      }`}>
                        {project.category === 'web' ? 'Web Development' : 'Digital Art'}
                      </span>
                    </div>
                    <p className="text-zyrvox-text-2 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingProject(project)}
                        className="flex-1 py-2 rounded-xl bg-zyrvox-electric/20 text-zyrvox-electric font-medium hover:bg-zyrvox-electric/30 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project)}
                        className="flex-1 py-2 rounded-xl bg-red-500/20 text-red-400 font-medium hover:bg-red-500/30 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
