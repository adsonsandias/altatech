import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
  border-radius: 1.56rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 3.25rem;

  & > div:first-child {
    h1 {
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 3.38rem;
      color: var(--text-color-2);
    }

    & > span {
      display: block;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: var(--text-color-3);
      margin-bottom: 1.5rem;
    }

    p {
      margin-bottom: 2.25rem;
      max-width: 48ch;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: var(--text-color-3);
    }

    div {
      h4 {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: var(--text-color-2);

        margin-bottom: 0.88rem;
      }

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
        gap: 2.63rem;
        max-width: 33.38rem;

        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 0.94rem;
          background: var(--tertiary-color);
          padding: 1.13rem;

          & > span {
            margin-top: 1rem;
            display: block;
            text-align: center;
            font-weight: 400;
            font-size: 0.88rem;
            line-height: 1.31rem;
          }
        }
      }
    }
  }

  & > button {
    margin-top: 3rem;
    justify-self: center;
    position: relative;
    grid-column: 1/-1;
  }
`;
