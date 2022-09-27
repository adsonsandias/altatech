import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IISACTIVESEARCH {
  isactive: string;
}

interface IISACTIVE {
  isActive: boolean;
}

// Menu Mobile
export const ButtonMenuMobileStyles = styled.button<IISACTIVE>`
  display: none !important;
  @media (max-width: 850px) {
    display: flex !important;
    background: ${(props) =>
      props.isActive ? 'var(--base-color) !important' : 'transparent'};
  }
`;

export const UtilityContentsStyles = styled(motion.div)<IISACTIVESEARCH>`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Search */
  input {
    display: block;
    position: absolute;
    z-index: 9999;
    padding: 1rem 2rem;
    border-radius: 0.94rem;
    border: 1.5px solid var(--details-color);
    background: var(--base-color);
    font-weight: 400;
    font-size: 1rem;
    top: 5rem;
    height: 3rem;
    left: 2rem;
    right: 2rem;
    transition: outline ease 0.3s, border ease 0.3s, box-shadow ease 0.3s;

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
      props.isactive === 'true' ? 'var(--base-color)' : 'transparent'};

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }
  }
`;
