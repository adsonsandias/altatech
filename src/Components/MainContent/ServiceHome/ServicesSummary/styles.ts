import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;

  & > div:first-child {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
    padding-bottom: 1rem;
    @media (max-width: 480px) {
      gap: 1rem;
      margin-top: 1rem;
    }

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
    & > div {
      min-width: 31.25rem;
      background: var(--base-color);
      box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
      padding: 3.25rem;
      border-radius: 1.56rem;
      cursor: grab;
      @media (max-width: 680px) {
        padding: 2rem;
        min-width: 23.25rem;
      }
      @media (max-width: 480px) {
        padding: 1rem;
        min-width: 15.31rem;
      }

      h4 {
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
        }
      }

      & > span {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--text-color-3);
        display: block;
        margin-top: 0.25rem;
        margin-bottom: 1.5rem;

        @media (max-width: 480px) {
          font-size: 0.88rem;
          line-height: initial;
        }
      }

      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--text-color-3);

        @media (max-width: 480px) {
          font-size: 0.88rem;
          line-height: initial;
        }
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
            padding: 0.88rem 1.38rem;
            background: #edf1f8;
            border-radius: 0.63rem;
            @media (max-width: 480px) {
              padding: 0.5rem 1rem;
            }

            span {
              font-weight: 400;
              font-size: 1rem;
              line-height: 1.5rem;
              color: var(--text-color-3);

              @media (max-width: 680px) {
                width: 15.13rem;
              }
              @media (max-width: 480px) {
                font-size: 0.88rem;
                line-height: initial;
                width: 9.25rem;
              }
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
  }
`;
