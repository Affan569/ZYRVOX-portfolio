import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollCinematicBackground from './components/ScrollCinematicBackground'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  const isNotFound = location.pathname === '*' || !['/', '/about', '/services', '/portfolio', '/contact', '/admin', '/blog'].includes(location.pathname)
  const isAdmin = location.pathname === '/admin'

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFound && !isAdmin && <Footer />}
    </AnimatePresence>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

function AppContent() {
  return (
    <>
      <ScrollCinematicBackground />
      <Navbar />
      <AnimatedRoutes />
      <FloatingWhatsApp />
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
    </>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    console.log('%cZYRVOX', 'font-size: 100px; font-weight: bold; background: linear-gradient(to right, #f59e0b, #00d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;')
    console.log('%cWelcome to Zyrvox Digital!', 'font-size: 16px; color: #00d4ff;')

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}
