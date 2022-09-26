import { Link } from 'react-router-dom';
import { Slide } from './Slide';
import { motion } from 'framer-motion';

import { ReactComponent as IconeBag } from '../../assets/bag.svg';
import { ReactComponent as IconeLogo } from '../../assets/logo.svg';
import { ReactComponent as IconeLogoMobile } from '../../assets/logo-mobile.svg';
import { ReactComponent as IconeSearch } from '../../assets/search.svg';
import { ReactComponent as IconeUser } from '../../assets/user.svg';
import { ReactComponent as IconeMenu } from '../../assets/menu.svg';

import { ReactComponent as IconeMenuProduct } from '../../assets/product.svg';
import { ReactComponent as IconeMenuCloud } from '../../assets/cloud-upload.svg';
import { ReactComponent as IconeMenuService } from '../../assets/service.svg';
import { ReactComponent as IconeMenuLocation } from '../../assets/location.svg';

import BackgroundEffect01 from '../../assets/ellipse1.png';
import BackgroundEffect02 from '../../assets/ellipse2.png';
import BackgroundEffect03 from '../../assets/ellipse3.png';

import {
  ButtonMenuMobileStyles,
  ContactHeaderStyles,
  ContentsHeaderStyles,
  HeaderStyles,
  NavStyles,
  UtilityContentsStyles,
} from './styled';
import React from 'react';

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
        <NavStyles isActive={menuMobile}>
          <ul>
            <li>
              <Link to="/">
                {menuMobile === true ? <IconeMenuProduct /> : ''}
                <span>Produtos</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {menuMobile === true ? <IconeMenuService /> : ''}
                <span>Serviços</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {menuMobile === true ? <IconeMenuLocation /> : ''}
                <span>Locação</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                {menuMobile === true ? <IconeMenuCloud /> : ''}
                <span>Cloud</span>
              </Link>
            </li>
          </ul>
        </NavStyles>

        <UtilityContentsStyles isOpen={search}>
          <input
            type="search"
            placeholder="Buscar..."
            name="search"
            id="search"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSearch(!search)}
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
            onClick={() => setMenuMobile(!menuMobile)}
            type="button"
          >
            <IconeMenu />
          </ButtonMenuMobileStyles>
        </UtilityContentsStyles>
      </ContentsHeaderStyles>
      <Slide />
    </HeaderStyles>
  );
}
