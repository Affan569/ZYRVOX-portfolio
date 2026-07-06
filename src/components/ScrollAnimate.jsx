import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ScrollAnimate({
  children,
  delay = 0,
  type = "fade-up",
  className = "",
  threshold = 0.2,
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.6, 0.35, 1],
      },
    },
  };

  const scaleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.6, 0.35, 1],
      },
    },
  };

  const slideLeftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.6, 0.35, 1],
      },
    },
  };

  const slideRightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.6, 0.35, 1],
      },
    },
  };

  const getVariants = () => {
    switch (type) {
      case "scale":
        return scaleVariants;
      case "slide-left":
        return slideLeftVariants;
      case "slide-right":
        return slideRightVariants;
      default:
        return variants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
