import React from 'react';
import { Link } from 'react-router-dom';

import {
  ContactHeaderStyles,
  ContentsHeaderStyles,
  HeaderStyles,
  NavStyles,
} from './styled';

import { Slide } from './Slide';
import { UtilityContents } from './UtilityMenu';

import { ReactComponent as IconeLogo } from '../../assets/logo.svg';
import { ReactComponent as IconeLogoMobile } from '../../assets/logo-mobile.svg';

import { ReactComponent as IconeMenuProduct } from '../../assets/product.svg';
import { ReactComponent as IconeMenuCloud } from '../../assets/cloud-upload.svg';
import { ReactComponent as IconeMenuService } from '../../assets/service.svg';
import { ReactComponent as IconeMenuLocation } from '../../assets/location.svg';

import BackgroundEffect01 from '../../assets/ellipse1.png';
import BackgroundEffect02 from '../../assets/ellipse2.png';
import BackgroundEffect03 from '../../assets/ellipse3.png';
import { motion } from 'framer-motion';

// MotionEffects

const item = {
  hidden: {
    opacity: 0,
    transform: 'translate3d(-9px, -17px, 10px)',
    width: '10px',
    height: '10px',
    transition: {
      y: { stiffness: 1000 },
    },
  },
  show: {
    opacity: 1,
    transform: 'translate3d(-20px, 0px, 10px)',
    width: '236px',
    height: '224px',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

export const itemVariant = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
// MotionEffects end

export function Header() {
  const [menuMobile, setMenuMobile] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  return (
    <HeaderStyles>
      <img src={BackgroundEffect01} alt="Background Effect 01" />
      <img src={BackgroundEffect02} alt="Background Effect 02" />
      <img src={BackgroundEffect03} alt="Background Effect 03" />

      <ContactHeaderStyles>
        Entre em contato conosco no telefone <span>(43) 2105-1002</span> e faça
        seu orçamento!
      </ContactHeaderStyles>

      <ContentsHeaderStyles>
        <div>
          <IconeLogo />
          <IconeLogoMobile />
        </div>

        <NavStyles isactive={menuMobile.toString()}>
          <motion.ul animate={menuMobile ? 'show' : 'hidden'} variants={item}>
            <motion.li variants={itemVariant}>
              <Link to="/">
                {menuMobile === true ? <IconeMenuProduct /> : ''}
                <span>Produtos</span>
              </Link>
            </motion.li>
            <motion.li variants={itemVariant}>
              <Link to="/">
                {menuMobile === true ? <IconeMenuService /> : ''}
                <span>Serviços</span>
              </Link>
            </motion.li>
            <motion.li variants={itemVariant}>
              <Link to="/">
                {menuMobile === true ? <IconeMenuLocation /> : ''}
                <span>Locação</span>
              </Link>
            </motion.li>
            <motion.li variants={itemVariant}>
              <Link to="/">
                {menuMobile === true ? <IconeMenuCloud /> : ''}
                <span>Cloud</span>
              </Link>
            </motion.li>
          </motion.ul>
        </NavStyles>

        <UtilityContents
          menuMobile={menuMobile}
          setMenuMobile={() => setMenuMobile(!menuMobile)}
          onClick={() => setSearch(!search)}
          search={search}
        />
      </ContentsHeaderStyles>
      <Slide />
    </HeaderStyles>
  );
}
