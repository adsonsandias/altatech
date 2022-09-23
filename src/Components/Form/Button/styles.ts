import styled from 'styled-components';

export const ButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 58px;
  border: none;
  background: var(--primary-gradient);
  border-radius: 0.94rem;
  font-weight: 600;
  font-size: 1.13rem;
  line-height: 1.69rem;
  color: #ffffff;
  padding: 0.13em;

  @media (max-width: 680px) {
    width: 180px;
    height: 48px;
    font-size: 1rem;
    line-height: initial;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 42px;
    font-size: 1rem;
    line-height: initial;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.36);
    backdrop-filter: blur(28px);
    border-radius: 0.88rem;
  }
`;
