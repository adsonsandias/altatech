import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 7.5rem;
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
  @media (max-width: 680px) {
    margin-top: 3.88rem;
  }

  h1 {
    font-weight: 600;
    font-size: 3rem;
    line-height: 4.5rem;
    text-align: center;
    margin-bottom: 3rem;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (max-width: 680px) {
      font-size: 2.25rem;
      line-height: 1;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      line-height: initial;
    }
  }

  form {
    max-width: 58rem;
    margin: 0 auto;
    width: 100%;
    padding: 0.19rem;
    background: var(--primary-gradient);
    border-radius: 0.94rem;
    overflow: hidden;

    & > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
      border-radius: 0.94rem;
      position: relative;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16rem;
        height: 4rem;
        border: none;
        background: var(--primary-gradient);
        border-radius: 0.88rem;
        font-weight: 600;
        font-size: 1.13rem;
        line-height: 1.69rem;
        color: var(--base-color);
        padding: 0.19rem;
        transition: all 0.3s ease;
        position: absolute;
        right: -0.19rem;
        top: -0.19rem;
        z-index: 1;
        @media (max-width: 680px) {
          width: 12.5rem;
          height: 3.38rem;
        }
        @media (max-width: 480px) {
          font-size: 1rem;
          width: 4rem;
          height: 3rem;
        }

        &:hover {
          font-size: 1.25rem;
          box-shadow: 10px 15px 25px rgba(0, 124, 255, 0.25),
            -10px -5px 25px rgba(223, 181, 235, 0.25);
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 100%;
          min-height: 100%;
          background: rgba(255, 255, 255, 0.36);
          backdrop-filter: blur(28px);
          border-radius: 0.75rem;

          svg {
            display: none;
          }
          @media (max-width: 480px) {
            span {
              display: none;
            }

            svg {
              display: block;
            }
          }
        }
      }

      input {
        width: 100%;
        display: var(--base-color);
        padding: 1rem;
        border-radius: 0.81rem;
        transition: all ease 0.3s;
        border: none;
        font-weight: 400;
        font-size: 1.13rem;
        line-height: 1.69rem;
        height: 3.63rem;
        @media (max-width: 680px) {
          height: 3rem;
        }

        @media (max-width: 480px) {
          height: 2.63rem;
          font-size: 0.88rem;
          left: 0rem;
          right: 0rem;
        }

        &::placeholder {
          color: #e1e1e1;
        }

        &:hover,
        &:focus {
          outline: none;
          border: 1.5px solid var(--details-color);
          box-shadow: inset 0px 0px 0px 4px rgba(242, 243, 252, 0.5),
            inset 0px 0px 0px 5px rgba(180, 183, 251, 0.8);
        }
      }
    }
  }
`;
