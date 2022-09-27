import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-top: 3.88rem;
  background: var(--secondary-gradient);
  padding-bottom: 6.63rem;
  @media (max-width: 480px) {
    padding-bottom: 3.88rem;
  }

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
      font-size: 2.63rem;
      line-height: 4.5rem;
      color: var(--primary-color);
      text-align: center;

      @media (max-width: 680px) {
        font-size: 2.25rem;
        line-height: initial;
        padding-top: 2.25rem;
        padding-bottom: 2rem;
      }
      @media (max-width: 480px) {
        font-size: 1.5rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
    }
  }
`;
