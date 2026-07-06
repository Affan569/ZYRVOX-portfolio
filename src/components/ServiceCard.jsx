import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimate from './ScrollAnimate'

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <ScrollAnimate type="fade-up" delay={delay}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="p-8 rounded-3xl bg-bg-card border border-gray-800 hover:border-accent-violet/50 transition-all duration-300"
      >
        <div className="text-5xl mb-6">{icon}</div>
        <h3 className="text-xl font-display font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </ScrollAnimate>
  )
}

export default ServiceCard
