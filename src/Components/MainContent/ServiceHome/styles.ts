import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-top: 3.88rem;
  background: var(--secondary-gradient);
  padding-bottom: 6.63rem;

  & > div {
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 1180px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    @media (max-width: 980px) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    @media (max-width: 780px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    & > h1 {
      padding-top: 3.38rem;
      padding-bottom: 3rem;
      font-weight: 600;
      font-size: 48px;
      line-height: 72px;
      color: var(--primary-color);
      text-align: center;
    }
  }
`;
