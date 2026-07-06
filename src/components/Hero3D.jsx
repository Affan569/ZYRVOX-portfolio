import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react'
import affanImg from '../assets/Affan.png'
 
const roles = ['Full Stack Developer', 'UI/UX Designer', 'React Specialist', '3D Web Creator']
 
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
 
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])
 
  return (
    <>
      <style>{`
        .hero-wrap {
          position: relative;
          min-height: 100vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 80px;
        }
 
        /* Spiral concentric rings — centered on the right half */
        .rings-wrap {
          position: absolute;
          right: -80px;
          top: 50%;
          transform: translateY(-50%);
          width: 820px;
          height: 820px;
          pointer-events: none;
          z-index: 0;
        }
        .ring {
          position: absolute;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .ring:nth-child(1)  { width: 820px; height: 820px; }
        .ring:nth-child(2)  { width: 740px; height: 740px; border-color: rgba(255,255,255,0.07); }
        .ring:nth-child(3)  { width: 660px; height: 660px; }
        .ring:nth-child(4)  { width: 580px; height: 580px; border-color: rgba(255,255,255,0.08); }
        .ring:nth-child(5)  { width: 500px; height: 500px; }
        .ring:nth-child(6)  { width: 420px; height: 420px; border-color: rgba(255,255,255,0.09); }
        .ring:nth-child(7)  { width: 340px; height: 340px; }
        .ring:nth-child(8)  { width: 260px; height: 260px; border-color: rgba(255,255,255,0.1); }
        .ring:nth-child(9)  { width: 180px; height: 180px; }
        .ring:nth-child(10) { width: 100px; height: 100px; border-color: rgba(255,255,255,0.12); }
 
        /* Two solid dark circles like the reference */
        .dark-orb-1 {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: #0a0a0a;
          top: 50%;
          left: 50%;
          transform: translate(-160%, -110%);
          z-index: 1;
        }
        .dark-orb-2 {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: #0a0a0a;
          top: 50%;
          left: 50%;
          transform: translate(10%, 30%);
          z-index: 1;
        }
 
        .hero-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 60px;
          align-items: center;
          min-height: calc(100vh - 80px);
          gap: 0;
        }
 
        .hero-left {
          padding-right: 40px;
        }
 
        .avail-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.5);
          font-size: 12px;
          letter-spacing: 0.04em;
          margin-bottom: 10px;
        }
        .avail-line {
          width: 32px;
          height: 1px;
          background: rgba(255,255,255,0.3);
        }
 
        .hero-h1 {
          font-size: clamp(56px, 7vw, 100px);
          font-weight: 900;
          color: #ffffff;
          line-height: 0.95;
          letter-spacing: -3px;
          margin: 16px 0 28px;
          font-family: 'Space Grotesk', sans-serif;
        }
 
        .typing-line {
          font-size: 15px;
          color: rgba(255,255,255,0.4);
          font-family: monospace;
          letter-spacing: 0.05em;
          margin-bottom: 36px;
          height: 24px;
        }
        .cursor {
          display: inline-block;
          width: 2px;
          height: 16px;
          background: #915EFF;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
 
        .work-process-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        .avatar-stack {
          display: flex;
        }
        .avatar-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #1a1a1a;
          border: 2px solid #0a0a0a;
          margin-left: -8px;
        }
        .avatar-dot:first-child { margin-left: 0; background: #2a2a2a; }
        .play-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .play-btn:hover { background: rgba(145,94,255,0.2); border-color: #915EFF; }
        .play-triangle {
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 10px solid rgba(255,255,255,0.7);
          margin-left: 3px;
        }
        .wp-label {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.05em;
        }
 
        .social-row {
          display: flex;
          gap: 10px;
        }
        .soc-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: all 0.25s;
          text-decoration: none;
        }
        .soc-btn:hover {
          background: rgba(145,94,255,0.12);
          border-color: rgba(145,94,255,0.4);
          color: #915EFF;
          transform: translateY(-3px);
        }
 
        /* Right — photo */
        .hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: calc(100vh - 80px);
        }
        .photo-img {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 92%;
          width: auto;
          object-fit: cover;
          object-position: top center;
          z-index: 3;
          display: block;
        }
 
        /* Bottom yellow accent line (like reference) */
        .yellow-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          z-index: 10;
        }
 
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; padding: 24px; }
          .hero-right { display: none; }
          .hero-h1 { font-size: 56px; letter-spacing: -2px; }
          .rings-wrap { right: -200px; }
        }
      `}</style>
 
      <div className="hero-wrap">
 
        {/* Concentric rings */}
        <div className="rings-wrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="ring" />
          ))}
          <div className="dark-orb-1" />
          <div className="dark-orb-2" />
        </div>
 
        <div className="hero-inner">
 
          {/* LEFT */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Available badge */}
            <div className="avail-badge">
              <span>Currently available for freelance worldwide</span>
              <ArrowUpRight size={12} />
            </div>
            <div className="avail-line" />
 
            {/* Big heading */}
            <h1 className="hero-h1">
              Creative<br />
              <span style={{ color: '#915EFF' }}>Visual</span><br />
              Designer
            </h1>
 
            {/* Typing */}
            <div className="typing-line">
              {displayed}<span className="cursor" />
            </div>
 
            {/* Work Process row */}
            <div className="work-process-row">
              <div className="avatar-stack">
                <div className="avatar-dot" />
                <div className="avatar-dot" />
                <div className="avatar-dot" />
              </div>
              <div className="play-btn">
                <div className="play-triangle" />
              </div>
              <div className="wp-label">Work<br />Process</div>
            </div>
 
            {/* Social */}
            <div className="social-row">
              <a href="#" className="soc-btn" aria-label="GitHub"><Github size={16} /></a>
              <a href="#" className="soc-btn" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="soc-btn" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" className="soc-btn" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </motion.div>
 
          {/* RIGHT — Photo */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={affanImg}
              alt="Muhammad Affan"
              className="photo-img"
            />
          </motion.div>
 
        </div>
 
        {/* Bottom gold accent line */}
        <div className="yellow-line" />
 
      </div>
    </>
  )
}x