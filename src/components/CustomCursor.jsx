import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function CustomCursor() {
  const { theme } = useTheme()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMouse)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMouse)
    }
  }, [])

  const color = theme === 'dark' ? '#915EFF' : '#6D28D9'

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: mousePos.x - (isHovering ? 20 : 8),
        y: mousePos.y - (isHovering ? 20 : 8),
        width: isHovering ? 40 : 16,
        height: isHovering ? 40 : 16,
        backgroundColor: `${color}33`,
        borderColor: color,
        borderWidth: 2,
        borderRadius: '50%',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 8 : 4,
          height: isHovering ? 8 : 4,
          backgroundColor: color,
          borderRadius: '50%',
        }}
      />
    </motion.div>
  )
}
