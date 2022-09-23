import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 3.88rem;
  display: flex;
  flex-direction: column;

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

    & > div + div {
      margin-left: 2rem;
    }
  }

  & > button {
    align-self: center;
  }
`;
