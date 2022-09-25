import styled from 'styled-components';

export const Container = styled.section`
  background: var(--primary-gradient);
  margin-top: 3.88rem;

  div {
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

    h1 {
      font-weight: 600;
      font-size: 3rem;
      line-height: 4.5rem;
      color: #ffffff;
      text-align: center;
      margin-bottom: 3rem;

      @media (max-width: 680px) {
        font-size: 2.25rem;
        margin-bottom: 1.5rem;
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        line-height: initial;
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      list-style: none;
      gap: 0.75rem;
      justify-items: center;
      align-items: center;
      padding-bottom: 2rem;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @media (max-width: 680px) {
        overflow: auto;
        height: 300px;
        grid-template-columns: repeat(8, 100px);

        li {
          img {
            max-width: 100px;
          }
        }
      }

      @media (max-width: 480px) {
        grid-template-columns: repeat(8, 68px);
        height: 258px;

        li {
          img {
            max-width: 68px;
          }
        }
      }
    }
  }
`;
