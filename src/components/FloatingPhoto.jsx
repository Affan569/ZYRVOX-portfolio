import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import affanImg from '../assets/Affan.png';

export default function FloatingPhoto() {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [isAboutInView, setIsAboutInView] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const heroObserver = new IntersectionObserver(([entry]) => {
      setIsHeroInView(entry.isIntersecting);
    }, observerOptions);

    const aboutObserver = new IntersectionObserver(([entry]) => {
      setIsAboutInView(entry.isIntersecting);
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (aboutRef.current) aboutObserver.observe(aboutRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
    };
  }, []);

  const x = useTransform(
    scrollY,
    [0, 500],
    ['5%', '-5%']
  );

  const opacity = useTransform(
    scrollY,
    [0, 400],
    [1, 1]
  );

  return (
    <>
      <div ref={heroRef} id="hero" className="absolute top-0 left-0 w-1 h-1 pointer-events-none opacity-0"></div>
      <div ref={aboutRef} id="about" className="absolute top-[100vh] left-0 w-1 h-1 pointer-events-none opacity-0"></div>
      
      <motion.div
        style={{ x, opacity }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: isHeroInView ? '5%' : (isAboutInView ? '5%' : '5%'),
          right: isHeroInView ? '5%' : 'auto',
          left: isAboutInView ? '5%' : 'auto',
          bottom: isHeroInView ? 0 : 'auto',
          top: isAboutInView ? '50%' : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        className="fixed z-30 pointer-events-none"
      >
        <img
          src={affanImg}
          alt="Muhammad Affan"
          className="w-auto h-screen object-cover object-top-center pointer-events-auto"
          style={{ minHeight: '100vh', maxHeight: '100vh' }}
        />
      </motion.div>
    </>
  );
}
