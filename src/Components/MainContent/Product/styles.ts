import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 3.88rem;

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
  @media (max-width: 480px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1.5rem;
  }

  & > h1 {
    font-weight: 600;
    font-size: 3rem;
    line-height: 4.5rem;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 680px) {
      font-size: 2.25rem;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      line-height: initial;
    }
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    margin-bottom: 2.63rem;
    gap: 2rem;

    @media (max-width: 880px) {
      grid-template-columns: 1fr 1fr 1fr;
      overflow: auto;
      justify-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
    }
    @media (max-width: 680px) {
      gap: 1rem;
    }
    @media (max-width: 480px) {
      gap: 1rem;
      margin-bottom: 0.5rem;
      padding-bottom: 1.75rem;
    }
  }

  & > button {
    margin: 0 auto;
  }
`;
