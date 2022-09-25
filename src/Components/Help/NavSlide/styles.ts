import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavStyles = styled(motion.div)`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 930px) {
    padding-top: 1.5rem;
  }
  @media (max-width: 480px) {
    padding-top: 1rem;
    height: 32px;
  }

  button {
    width: 64px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50px;

    &:hover {
      box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
    }

    @media (max-width: 480px) {
      width: 54px;
      height: 32px;

      svg {
        height: 18px;
      }
    }

    @media (max-width: 480px) {
      &:nth-child(2) {
        position: absolute;
        right: 1rem;
      }
      &:nth-child(1) {
        position: absolute;
        left: 1rem;
      }
    }
  }
`;
