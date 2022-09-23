import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary-gradient);
  padding: 0.13rem;
  box-shadow: 10px 15px 25px rgba(192, 192, 192, 0.25),
    -10px -5px 25px rgba(228, 228, 228, 0.25);
  border-radius: 1.56rem;
  overflow: hidden;
  max-width: 22rem;
  @media (max-width: 880px) {
    width: 256px;
  }
  @media (max-width: 680px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 122px;
    border-radius: 1rem;
  }

  & > div {
    background: #fff;
    border-radius: 1.5rem;
    padding: 1.5rem;
    @media (max-width: 680px) {
      padding: 1rem;
    }
    @media (max-width: 480px) {
      padding: 0.5rem;
      border-radius: 0.93rem;
    }

    /* Image Product */
    div:first-child {
      img {
        max-width: 18.75rem;
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    /* Infor Product */
    div:last-child {
      display: flex;
      flex-direction: column;

      span {
        color: #b1b1b1;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
        margin-bottom: 0.38rem;

        @media (max-width: 680px) {
          font-size: 0.75rem;
          margin-bottom: 0.13rem;
          font-weight: 400;
        }

        @media (max-width: 480px) {
          margin-bottom: 0.13rem;
          font-size: 0.5rem;
        }
      }

      strong {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
        margin-bottom: 1.56rem;
        font-size: 1.13rem;

        @media (max-width: 680px) {
          font-size: 0.88rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 480px) {
          margin-bottom: 0rem;
          font-size: 0.75rem;
        }
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 256px;
        width: 100%;
        height: 58px;
        border: none;
        background: #434343;
        border-radius: 0.94rem;
        font-weight: 600;
        font-size: 1.13rem;
        line-height: 1.69rem;
        color: #ffffff;
        padding: 0.13rem;
        align-self: center;
        transition: all 0.3s ease;
        @media (max-width: 980px) {
          font-size: 1rem;
        }
        @media (max-width: 680px) {
          height: 48px;
          font-size: 0.75rem;
          line-height: initial;
        }
        @media (max-width: 480px) {
          display: none;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
