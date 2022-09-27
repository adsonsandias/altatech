import styled from 'styled-components';

export const Container = styled.div`
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
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* Conteudo Slide */
  & > div:first-child > div {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 27.75rem;

    @media (max-width: 1020px) {
      margin-bottom: 2.63rem;
      margin-top: 2.63rem;
      height: 18.75rem;
    }
    @media (max-width: 930px) {
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
      height: 12.5rem;
    }
    @media (max-width: 780px) {
      height: 200px;
    }
    @media (max-width: 480px) {
      flex-direction: column-reverse;
      margin-bottom: 0rem;
      margin-top: 0rem;
      height: 22.5rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      & > button {
        margin-top: 1.5rem;

        @media (max-width: 930px) {
          max-width: 12.5rem;
        }
      }

      h1 {
        width: 18ch;
        font-size: 3rem;
        font-weight: 600;
        color: var(--text-color-2);

        @media (max-width: 1120px) {
          font-size: 2.38rem;
        }
        @media (max-width: 930px) {
          font-size: 2rem;
        }
        @media (max-width: 780px) {
          font-size: 1.75rem;
        }
        @media (max-width: 600px) {
          font-size: 1.5rem;
        }
        @media (max-width: 480px) {
          font-size: 1.5rem;
          text-align: center;
        }

        span {
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
    }

    & > span {
      margin-top: 2rem;

      img {
        display: block;
        max-width: 100%;
        height: 100%;
      }

      @media (max-width: 1120px) {
        max-width: 32rem;
      }

      @media (max-width: 1020px) {
        max-width: 26.25rem;
        margin-top: 0rem;
      }
      @media (max-width: 930px) {
        max-width: 22.5rem;
        max-height: 17.5rem;
      }
      @media (max-width: 780px) {
        max-width: 22.5rem;
        max-height: 17.5rem;
      }
      @media (max-width: 480px) {
        margin-top: 0rem;
        max-width: 14.38rem;
        max-height: 11.25rem;
      }
    }
  }
`;
