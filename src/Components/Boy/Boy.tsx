import { motion } from 'motion/react';
import boy from '../../assets/boy.png';
import s from './Boy.module.scss';

function Boy() {
  return (
    <div className={s.boyContainer}>
      <motion.img
        src={boy}
        alt="Boy"
        animate={{
          y: [0, -20, 0],
          rotate: [4, 0, 4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default Boy;
