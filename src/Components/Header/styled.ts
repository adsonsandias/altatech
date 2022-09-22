import styled from 'styled-components';

export const HeaderStyles = styled.header`
  height: 714px;
  overflow: hidden;
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);

  @media (max-width: 930px) {
    height: 600px;
  }
  @media (max-width: 780px) {
    height: 576px;
  }
  @media (max-width: 480px) {
    height: 520px;
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 95%);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 95%);
  }
`;

export const ContactHeaderStyles = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(29px);
  height: 2.5rem;
  background: rgba(239, 240, 242, 0.3);
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

  /* Bg Header Elemente */
  & > svg:nth-child(1) {
    pointer-events: none;
    position: absolute;
    right: -224px;
    top: -46px;
    z-index: -1;
    filter: blur(200px);
  }
  & > svg:nth-child(2) {
    position: absolute;
    pointer-events: none;
    right: -370px;
    top: 228px;
    z-index: -1;
    filter: blur(200px);
  }
  & > svg:nth-child(3) {
    pointer-events: none;
    position: absolute;
    left: -166px;
    top: 446px;
    z-index: -1;
    filter: blur(200px);
  }

  & > div {
    & > svg:first-child {
      @media (max-width: 850px) {
        width: 100px;
        height: 18px;
      }
      @media (max-width: 480px) {
        width: 100px;
        height: 18px;
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
      background: #fff;
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
        transition: border-bottom 0.4s ease, background-color 0.4s ease;
        border-bottom: ${(props) =>
          props.isActive ? 'none' : '2px solid transparent'};
        border-radius: ${(props) => (props.isActive ? '0.94rem' : '0')};
        @media (max-width: 850px) {
          display: ${(props) => (props.isActive ? 'flex' : 'none')};
          padding: 0.75rem 1.38rem;
          align-items: center;
          width: 204px;

          span {
            flex: 1;
          }
        }

        &:hover {
          background-color: ${(props) =>
            props.isActive ? ' #edf1f8;' : 'transparent'};
          border-bottom: ${(props) =>
            props.isActive ? 'none' : '2px solid #a0b8ff'};
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
      props.isActive ? '#fff !important' : 'transparent'};
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
    border: 1.5px solid #8f93f1;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    font-weight: 400;
    font-size: 1rem;
    height: 4rem;
    top: 5rem;
    height: 48px;
    left: 2rem;
    right: 2rem;

    @media (max-width: 480px) {
      height: 3.5rem;
      font-size: 0.88rem;
      left: 0rem;
      right: 0rem;
    }

    &::placeholder {
      color: #8f93f1;
    }

    &:hover,
    &:focus {
      outline: none;
      border: 1.5px solid #8f93f1;
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
    width: 40px;
    height: 40px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }

    & + button {
      margin-left: 1rem;

      @media (max-width: 480px) {
        margin-left: 0.5rem;
      }
    }
  }

  button:nth-child(2) {
    background: ${(props) => (props.isOpen ? '#fff' : 'transparent')};

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }
  }
`;
