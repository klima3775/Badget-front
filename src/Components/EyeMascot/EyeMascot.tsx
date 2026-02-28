import { motion } from 'motion/react';

interface EyeMascotProps {
  isPasswordVisible: boolean;
}

export default function EyeMascot({ isPasswordVisible }: EyeMascotProps) {
  return (
    <motion.div
      animate={{
        y: isPasswordVisible ? 8 : -8,
        rotateX: isPasswordVisible ? 10 : -10,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{ fontSize: '3rem', textAlign: 'center' as const }}
    >
      {isPasswordVisible ? '😳' : '🫣'}
    </motion.div>
  );
}
