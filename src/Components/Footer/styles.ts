import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--tertiary-color);
  padding-top: 3.88rem;
  position: relative;
  @media (max-width: 480px) {
    padding-top: 0rem;
  }

  &::before {
    max-width: 1120px;
    margin: 0 auto;
    content: '';
    width: 100%;
    height: 2px;
    display: block;
    background: linear-gradient(274.05deg, #a0b8ff 33.64%, #f3feff 122.13%);
    border-radius: 0.63rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const FooterInforStyles = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3.25rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 4fr 5fr 3fr;

  @media (max-width: 1180px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @media (max-width: 930px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 780px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  h5 {
    font-weight: 600;
    font-size: 1.25rem;

    color: var(--text-color-2);
    margin-bottom: 1.5rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  ul {
    list-style: none;
    li {
      max-width: 22rem;

      a,
      span {
        display: block;
        text-decoration: none;
        font-weight: 400;
        font-size: 1rem;
        color: var(--text-color-2);

        @media (max-width: 480px) {
          font-size: 0.88rem;
        }
      }

      a {
        transition: all 0.3s ease;
        &:hover {
          color: var(--details-color);
        }
      }

      & + li {
        margin-top: 1rem;
        @media (max-width: 480px) {
          margin-top: 0.88rem;
        }
      }
    }
  }
`;

export const FooterCopyStyles = styled.div`
  background: var(--primary-gradient);

  & > div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.25rem 0;

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

    & > div {
      max-width: 720px;
      margin: 0 auto;

      ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
        justify-items: center;
        align-items: center;
        list-style: none;
        margin-top: 2rem;
        gap: 2rem;

        li {
          a {
            text-decoration: none;
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 1.13rem;
            color: var(--base-color);
            transition: all 0.3s ease;

            &:hover {
              color: var(--text-color-2);
            }
          }
        }
      }
    }

    p {
      font-weight: 400;
      font-size: 0.88rem;
      text-align: center;
      color: var(--base-color);
    }
  }
`;
