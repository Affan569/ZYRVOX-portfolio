import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-bg-card border border-gray-700/50 hover:border-accent-violet transition-all"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-accent-cyan" />
      ) : (
        <Moon className="w-5 h-5 text-accent-violet" />
      )}
    </motion.button>
  )
}
