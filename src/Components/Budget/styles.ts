import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-top: 3.88rem;
  @media (max-width: 1180px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: 930px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (max-width: 780px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  & > div {
    background: var(--primary-gradient);
    box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
    border-radius: 1.56rem;
    position: relative;
    padding: 0.13rem;
    flex: 1;
    display: flex;
    overflow: hidden;

    & > div {
      flex: 2;
      width: 100%;
      background: #ffffff;
      border-radius: 1.44rem;
      padding: 3.13rem;

      @media (max-width: 680px) {
        padding: 2rem;
      }
      @media (max-width: 480px) {
        padding: 1rem;
      }

      h1 {
        font-weight: 600;
        font-size: 3rem;
        line-height: 4.5rem;
        color: var(--primary-color);
        text-align: center;
        margin-bottom: 3rem;

        @media (max-width: 680px) {
          font-size: 2.25rem;
          margin-bottom: 1.5rem;
          line-height: initial;
        }

        @media (max-width: 480px) {
          font-size: 1.5rem;
          padding-top: 1.5rem;

          line-height: 1.2;
        }
      }

      form {
        max-width: 34rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        label {
          font-weight: 600;
          font-size: 1.13rem;
          line-height: 1.69rem;
          color: var(--text-color-2);
          margin-bottom: 0.5rem;

          @media (max-width: 680px) {
            font-size: 1rem;
          }

          @media (max-width: 480px) {
            font-size: 0.88rem;
          }

          & + input {
            margin-bottom: 1.5rem;

            @media (max-width: 480px) {
              margin-bottom: 0.75rem;
            }
          }
        }

        textarea {
          display: var(--base-color);
          z-index: 9999;
          padding: 1rem;
          border-radius: 0.94rem;
          transition: all ease 0.3s;
          border: 1.5px solid var(--details-color);
          font-weight: 400;
          font-size: 1rem;
          margin-bottom: 2.63rem;
          resize: none;
          @media (max-width: 480px) {
            margin-bottom: 1rem;
          }

          &:hover,
          &:focus {
            outline: none;
            border: 1.5px solid var(--details-color);
            box-shadow: 0px 0px 0px 4px rgba(242, 243, 252, 0.5),
              0px 0px 0px 5px rgba(180, 183, 251, 0.8);
          }
        }

        button {
          width: 100%;
          margin-bottom: 5.75rem;

          @media (max-width: 680px) {
            margin-bottom: 1.5rem;
          }
        }

        & > div {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0rem 2rem;

          input:nth-child(2) {
            grid-column: 1;
          }
          label:nth-child(3) {
            grid-area: 1/2;
          }

          @media (max-width: 680px) {
            gap: 0rem 0.5rem;
          }
        }
      }
    }

    /* BG Request */
    & > svg:nth-child(1) {
      position: absolute;
      display: block;
      left: -189px;
      top: -81px;
      filter: blur(50px);
      @media (max-width: 480px) {
        top: -178px;
      }
    }

    & > svg:nth-child(2) {
      position: absolute;
      display: block;
      right: -317px;
      top: -208px;
      filter: blur(50px);
      @media (max-width: 480px) {
        top: -435px;
      }
    }

    & > svg:nth-child(3) {
      position: absolute;
      display: block;
      left: -120px;
      bottom: -120px;
      filter: blur(125px);
      @media (max-width: 480px) {
        left: -242px;
        bottom: -244px;
      }
    }

    & > svg:nth-child(4) {
      position: absolute;
      display: block;
      right: -320px;
      bottom: 197px;
      filter: blur(50px);
      @media (max-width: 480px) {
        right: -470px;
      }
    }

    & > svg:nth-child(5) {
      position: absolute;
      display: block;
      right: -354px;
      bottom: -600px;
      filter: blur(50px);
      @media (max-width: 480px) {
        right: -308px;
        bottom: -738px;
      }
    }
  }
`;
