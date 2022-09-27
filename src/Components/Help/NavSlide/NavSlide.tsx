import { motion } from 'framer-motion';
import { NavStyles } from './styles';

import { ReactComponent as IconeArrowLeft } from '../../../assets/arrow-left.svg';
import { ReactComponent as IconeArrowRight } from '../../../assets/arrow-right.svg';

interface INAVSLIDE {
  next?: () => void;
  prev?: () => void;
}

export function NavSlide({ ...props }: INAVSLIDE) {
  const { next, prev } = props;
  return (
    <NavStyles>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={next}
      >
        <IconeArrowLeft />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={prev}
      >
        <IconeArrowRight />
      </motion.button>
    </NavStyles>
  );
}
