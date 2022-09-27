import { ButtonMenuMobileStyles, UtilityContentsStyles } from './styles';

import { ReactComponent as IconeBag } from '../../../assets/bag.svg';
import { ReactComponent as IconeSearch } from '../../../assets/search.svg';
import { ReactComponent as IconeUser } from '../../../assets/user.svg';
import { ReactComponent as IconeMenu } from '../../../assets/menu.svg';
import { motion } from 'framer-motion';

interface IUTILITY {
  onClick: () => void;
  setMenuMobile: () => void;
  menuMobile: boolean;
  search: boolean;
}
// MotionEffects
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};
// MotionEffects end

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function UtilityContents({ ...props }: IUTILITY) {
  const { onClick, setMenuMobile, menuMobile, search } = props;
  return (
    <>
      <UtilityContentsStyles
        variants={container}
        initial="hidden"
        animate="show"
        isactive={search.toString()}
      >
        <motion.input
          variants={item}
          animate={{
            scale: search ? 1 : 0,
          }}
          type="search"
          placeholder="Buscar..."
          name="search"
          id="search"
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          type="button"
        >
          <IconeSearch />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
        >
          <IconeBag />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
        >
          <IconeUser />
        </motion.button>

        <ButtonMenuMobileStyles
          isActive={menuMobile}
          onClick={setMenuMobile}
          type="button"
        >
          <IconeMenu />
        </ButtonMenuMobileStyles>
      </UtilityContentsStyles>
    </>
  );
}
