import styled from 'styled-components';

export const ButtonStyles = styled.button`
  width: 256px;
  height: 58px;
  border: none;
  background: linear-gradient(274.05deg, #007cff 33.64%, #dfb5eb 122.13%);
  border-radius: 0.94rem;
  font-weight: 600;
  font-size: 1.13rem;
  line-height: 1.69rem;
  color: #ffffff;

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
`;
