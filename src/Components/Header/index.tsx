import { Link } from 'react-router-dom';
import { Slide } from '../Slide';

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

import { ReactComponent as Bg01 } from '../../assets/Ellipse1.svg';
import { ReactComponent as Bg02 } from '../../assets/Ellipse2.svg';
import { ReactComponent as Bg03 } from '../../assets/Ellipse3.svg';

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

  console.log(search);

  return (
    <HeaderStyles>
      <ContactHeaderStyles>
        Entre em contato conosco no telefone <span>(43) 2105-1002</span> e faça
        seu orçamento!
      </ContactHeaderStyles>
      <ContentsHeaderStyles>
        <Bg01 />
        <Bg02 />
        <Bg03 />
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
          <button onClick={() => setSearch(!search)} type="button">
            <IconeSearch />
          </button>
          <button type="button">
            <IconeBag />
          </button>
          <button type="button">
            <IconeUser />
          </button>
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
