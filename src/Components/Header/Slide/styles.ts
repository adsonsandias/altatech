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
  & > div:first-child {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 1020px) {
      margin-bottom: 2.63rem;
      margin-top: 2.63rem;
    }
    @media (max-width: 930px) {
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
    }
    @media (max-width: 480px) {
      flex-direction: column-reverse;
      margin-bottom: 0rem;
      margin-top: 0rem;
    }

    & > div {
      @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      & > button {
        margin-top: 1.5rem;

        @media (max-width: 930px) {
          max-width: 200px;
        }
      }

      h1 {
        max-width: 18ch;
        font-size: 3rem;
        font-weight: 600;
        color: var(--text-color-2);
        white-space: nowrap;
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
        max-width: 512px;
      }

      @media (max-width: 1020px) {
        max-width: 420px;
        margin-top: 0rem;
      }
      @media (max-width: 930px) {
        max-width: 360px;
        max-height: 280px;
      }
      @media (max-width: 780px) {
        max-width: 360px;
        max-height: 280px;
      }
      @media (max-width: 480px) {
        margin-top: 0rem;
        max-width: 230px;
        max-height: 180px;
      }
    }
  }
`;
