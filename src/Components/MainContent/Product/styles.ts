import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 3.88rem;
  display: flex;
  flex-direction: column;
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
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 48px;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin-bottom: 2.63rem;
    gap: 2rem;
  }

  & > button {
    align-self: center;
  }
`;
