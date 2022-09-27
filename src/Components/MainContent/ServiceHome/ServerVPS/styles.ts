import styled from 'styled-components';

export const Container = styled.div`
  background: var(--base-color);
  box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
  border-radius: 1.56rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 3.25rem;
  @media (max-width: 1120px) {
    gap: 0 1.75rem;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 680px) {
    padding: 2rem;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }

  & > div:first-child {
    @media (max-width: 1120px) {
      grid-column: span 2;
    }
    @media (max-width: 880px) {
      grid-column: initial;
    }

    h1 {
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 3.38rem;
      color: var(--text-color-2);

      @media (max-width: 680px) {
        font-size: 2rem;
        line-height: initial;
      }

      @media (max-width: 480px) {
        font-size: 1.25rem;
        line-height: initial;
        padding-bottom: 0.25rem;
      }
    }

    & > span {
      display: block;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--text-color-3);
      margin-bottom: 1.5rem;

      @media (max-width: 480px) {
        font-size: 0.88rem;
        line-height: initial;
      }
    }

    p {
      margin-bottom: 2.25rem;
      max-width: 48ch;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--text-color-3);

      @media (max-width: 1120px) {
        max-width: initial;
      }
      @media (max-width: 480px) {
        font-size: 0.88rem;
        line-height: initial;
        padding-bottom: 0.25rem;
      }
    }
  }

  /* Benefit */
  & > div:nth-child(2) {
    grid-area: 2/1;
    @media (max-width: 880px) {
      grid-column: initial;
      grid-row: 3;
    }

    h4 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.25rem;
      color: var(--text-color-2);
      margin-bottom: 0.88rem;

      @media (max-width: 480px) {
        font-size: 1.25rem;
        line-height: initial;
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      list-style: none;
      gap: 2rem;
      max-width: 33.38rem;
      @media (max-width: 1012px) {
        max-width: 30rem;
      }
      @media (max-width: 880px) {
        max-width: 100%;
      }
      @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
      }

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

          @media (max-width: 480px) {
            font-size: 0.75rem;
            line-height: initial;
          }
        }
      }
    }
  }

  /* Image */
  & > div:nth-child(3) {
    grid-area: span 2;

    @media (max-width: 1120px) {
      grid-area: 2/2;
      align-self: center;
      justify-self: end;
      img {
        max-width: 18.75rem;
      }
    }
    @media (max-width: 880px) {
      grid-area: initial;
      align-self: initial;
      justify-self: center;
      order: -1;
    }
    @media (max-width: 480px) {
      img {
        max-width: 9.38rem;
      }
    }
  }

  /* Button */
  & > button {
    margin-top: 3rem;
    justify-self: center;
    position: relative;
    grid-column: 1/-1;
    @media (max-width: 880px) {
      grid-column: initial;
    }

    @media (max-width: 480px) {
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;
