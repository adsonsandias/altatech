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
    height: 2rem;
  }

  button {
    width: 4rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3.13rem;

    &:hover {
      box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
    }

    @media (max-width: 480px) {
      width: 3.38rem;
      height: 2rem;

      svg {
        height: 1.13rem;
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
