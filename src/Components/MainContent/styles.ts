import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
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
`;
