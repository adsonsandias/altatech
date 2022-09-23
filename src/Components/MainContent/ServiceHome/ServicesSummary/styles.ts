import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow-x: auto;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 1rem;

  /* Cloud Backup and Lease Unique Styles */
  & > div:first-child,
  & > div:nth-child(4) {
    display: flex;
    flex-direction: column;

    p {
      flex: 1;
    }
  }

  /* Global service styles */
  & > div:not(div:last-child) {
    min-width: 500px;
    background: #ffffff;
    box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
    padding: 3.25rem;
    border-radius: 1.56rem;

    h4 {
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 3.38rem;
      color: var(--text-color-2);
    }

    & > span {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--text-color-3);
      display: block;
      margin-top: 0.25rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--text-color-3);
    }

    ul {
      list-style: none;
      margin-top: 1rem;

      li {
        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          padding: 14px 22px;
          background: #edf1f8;
          border-radius: 10px;

          span {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: var(--text-color-3);
          }
        }

        & + li {
          margin-top: 1rem;
        }
      }
    }

    /* Space between Security in I.T. and IT Solutions. */
    & div + div {
      margin-top: 1rem;
    }
  }
`;

/* Nav slide */
export const NavStyles = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -3rem;
  width: 100%;

  @media (max-width: 930px) {
    padding-top: 1.5rem;
  }
  @media (max-width: 480px) {
    padding-top: 1rem;
    height: 32px;
  }

  button {
    width: 64px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(160, 184, 255, 0.25);
    backdrop-filter: blur(10px);

    svg path {
      fill: #a0b8ff;
    }

    @media (max-width: 480px) {
      width: 54px;
      height: 32px;

      svg {
        height: 18px;
      }
    }

    transition: background-color 0.3s ease, transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
      box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
    }

    @media (max-width: 480px) {
      &:nth-child(2) {
        position: absolute;
        right: 1rem;
      }
      &:nth-child(1) {
        position: absolute;
        left: 1rem;
      }
    }
  }
`;
