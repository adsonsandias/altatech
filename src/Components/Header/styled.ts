import styled from 'styled-components';

export const HeaderStyles = styled.header`
  overflow: hidden;
  position: relative;
  padding-bottom: 5.13rem;
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);

  @media (max-width: 480px) {
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 95%);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 95%);
  }

  /* Bg Header Elemente */

  & > img:nth-child(1) {
    pointer-events: none;
    position: absolute;
    right: -638px;
    top: -513px;
    z-index: -2;

    @media (max-width: 980px) {
      right: -768px;
      top: -626px;
    }
  }

  & > img:nth-child(2) {
    position: absolute;
    pointer-events: none;
    right: -660px;
    bottom: -758px;
    z-index: -1;
    @media (max-width: 980px) {
      right: -826px;
      bottom: -1032px;
    }
    @media (max-width: 480px) {
      width: 950px;
      height: 950px;
      right: -503px;
      bottom: -439px;
    }
  }
  & > img:nth-child(3) {
    pointer-events: none;
    position: absolute;
    left: -648px;
    bottom: -418px;
    z-index: -3;
    @media (max-width: 980px) {
      left: -732px;
      bottom: -598px;
    }
  }
`;

export const ContactHeaderStyles = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background: rgba(239, 240, 242, 0.5);
  font-size: 0.75rem;
  line-height: 1.13rem;
  @media (max-width: 530px) {
    display: none;
  }

  span {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    color: var(--secondary-color);
  }
`;
export const ContentsHeaderStyles = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.25rem;
  position: relative;
  @media (max-width: 1180px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (max-width: 930px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  @media (max-width: 780px) {
    margin-left: 1rem;
    margin-right: 1rem;
    height: 4rem;
  }

  & > div {
    & > svg:first-child {
      @media (max-width: 850px) {
        width: 6.25rem;
        height: 1.13rem;
      }
      @media (max-width: 480px) {
        width: 100px;
        height: 1.13rem;
        display: none;
      }
    }

    & > svg:last-child {
      display: none;
      @media (max-width: 480px) {
        display: flex;
      }
    }
  }
`;

interface IISACTIVE {
  isActive: boolean;
}

/* Nav menu */
export const NavStyles = styled.nav<IISACTIVE>`
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 850px) {
      display: ${(props) => (props.isActive ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      position: absolute;
      border-radius: ${(props) =>
        props.isActive ? '1.56rem 0.5rem 1.56rem 1.56rem' : '0'};
      top: 4.5rem;
      right: 1rem;
      background: var(--base-color);
      padding: 1rem;
      z-index: 9999;
    }

    li {
      a {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--text-color-2);
        text-decoration: none;
        padding: 0.5rem 1rem;
        background-color: transparent;
        transition: all 0.3s ease;
        border-bottom: ${(props) =>
          props.isActive ? 'none' : '2px solid transparent'};
        border-radius: ${(props) => (props.isActive ? '0.94rem' : '0')};

        @media (max-width: 850px) {
          display: ${(props) => (props.isActive ? 'flex' : 'none')};
          padding: 0.75rem 1.38rem;
          align-items: center;
          width: 12.75rem;

          span {
            flex: 1;
          }
        }

        &:hover {
          background-color: ${(props) =>
            props.isActive ? ' #edf1f8;' : 'transparent'};
          border-bottom: ${(props) =>
            props.isActive ? 'none' : '2px solid var(--details-color)'};
        }

        svg {
          display: none;
        }

        @media (max-width: 850px) {
          svg {
            display: flex;
            margin-right: 1.5rem;
          }
        }
      }

      & + li {
        margin-left: 0.5rem;
        @media (max-width: 850px) {
          margin-left: 0rem;
        }
      }
    }
  }
`;

// Menu Mobile
export const ButtonMenuMobileStyles = styled.button<IISACTIVE>`
  display: none !important;
  @media (max-width: 850px) {
    display: flex !important;
    background: ${(props) =>
      props.isActive ? 'var(--base-color) !important' : 'transparent'};
  }
`;

interface IISACTIVESEARCH {
  isOpen: boolean;
}

export const UtilityContentsStyles = styled.div<IISACTIVESEARCH>`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Search */
  input {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    z-index: 9999;
    padding: 1rem 2rem;
    border-radius: 0.94rem;
    transition: all ease 0.3s;
    border: 1.5px solid var(--details-color);
    background: var(--base-color);
    font-weight: 400;
    font-size: 1rem;
    height: 4rem;
    top: 5rem;
    height: 3rem;
    left: 2rem;
    right: 2rem;

    @media (max-width: 480px) {
      height: 3.5rem;
      font-size: 0.88rem;
      left: 0rem;
      right: 0rem;
    }

    &::placeholder {
      color: var(--details-color);
    }

    &:hover,
    &:focus {
      outline: none;
      border: 1.5px solid var(--details-color);
      box-shadow: 0px 0px 0px 4px rgba(242, 243, 252, 0.5),
        0px 0px 0px 5px rgba(180, 183, 251, 0.8);
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    background-color: transparent;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }

    & + button {
      margin-left: 1rem;

      @media (max-width: 480px) {
        margin-left: 0.5rem;
      }
    }
  }

  button:nth-child(2) {
    background: ${(props) =>
      props.isOpen ? 'var(--base-color)' : 'transparent'};

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }
  }
`;
