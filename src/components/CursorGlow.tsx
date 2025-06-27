import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

const CursorGlow: React.FC = () => {
  const { position, isHovering } = useCursor();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-300/50 rounded-full pointer-events-none z-40"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
        }}
      />
    </>
  );
};

export default CursorGlow;