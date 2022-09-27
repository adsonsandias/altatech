import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonStyles = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 3.63rem;
  border: none;
  background: var(--primary-gradient);
  border-radius: 0.94rem;
  font-weight: 600;
  font-size: 1.13rem;
  line-height: 1.69rem;
  color: var(--base-color);
  padding: 0.13rem;

  &:hover {
    box-shadow: 10px 15px 25px rgba(0, 124, 255, 0.25),
      -10px -5px 25px rgba(223, 181, 235, 0.25);
  }

  @media (max-width: 680px) {
    width: 11.25rem;
    height: 3rem;
    font-size: 1rem;
    line-height: initial;
  }

  @media (max-width: 480px) {
    width: 10rem;
    height: 2.63rem;
    font-size: 1rem;
    line-height: initial;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    min-height: 100%;
    background: rgba(255, 255, 255, 0.36);
    backdrop-filter: blur(28px);
    border-radius: 0.88rem;
  }
`;
