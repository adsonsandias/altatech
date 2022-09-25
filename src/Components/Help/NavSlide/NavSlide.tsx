import { motion } from 'framer-motion';
import { NavStyles } from './styles';

import { ReactComponent as IconeArrowLeft } from '../../../assets/arrow-left.svg';
import { ReactComponent as IconeArrowRight } from '../../../assets/arrow-right.svg';

export function NavSlide() {
  return (
    <NavStyles>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
      >
        <IconeArrowLeft />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
      >
        <IconeArrowRight />
      </motion.button>
    </NavStyles>
  );
}
