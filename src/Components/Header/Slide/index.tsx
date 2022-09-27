import React from 'react';
import { Container } from './styles';

import { wrap } from 'popmotion';
import { motion } from 'framer-motion';

import { Button } from '../../Form/Button';
import { NavSlide } from '../../Help/NavSlide/NavSlide';

import { images, text } from './slides';

// AnimatePresence
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function Slide() {
  const [[page, direction], setPage] = React.useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container>
      <motion.div>
        <motion.div
          drag="x"
          dragElastic={1}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          dragConstraints={{ right: 0, left: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          key={page}
        >
          <div>
            <h1>{text[imageIndex]}</h1>
            <Button type="button">Saiba mais</Button>
          </div>
          <motion.span>
            <img
              src={images[imageIndex]}
              width={549}
              height={410}
              alt="Backup em Nuvem"
            />
          </motion.span>
        </motion.div>
      </motion.div>
      <div>
        <NavSlide next={() => paginate(1)} prev={() => paginate(-1)} />
      </div>
    </Container>
  );
}
