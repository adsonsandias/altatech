import styled from 'styled-components';

export const Container = styled.section`
  background: var(--tertiary-color);
  margin-top: 7.5rem;
  padding-bottom: 3.88rem;
  @media (max-width: 480px) {
    padding-bottom: 0rem;
  }

  & > div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.25rem 0;
    padding-bottom: 4.25rem;
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

    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
      gap: 2rem;
    }
  }
`;
