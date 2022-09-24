import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-top: 3.88rem;

  & > div {
    background: var(--primary-gradient);
    box-shadow: 0px 6px 19px rgba(160, 184, 255, 0.25);
    border-radius: 1.56rem;
    position: relative;
    padding: 0.13rem;
    flex: 1;
    height: 74.75rem;
    display: flex;
    overflow: hidden;

    & > div {
      flex: 2;
      width: 100%;
      background: #ffffff;
      border-radius: 1.44rem;
      padding: 3.13rem;

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
        }

        @media (max-width: 480px) {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          line-height: initial;
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

          & + input {
            margin-bottom: 1.5rem;
          }
        }

        textarea {
          display: #ffffff;
          z-index: 9999;
          padding: 1rem;
          border-radius: 0.94rem;
          transition: all ease 0.3s;
          border: 1.5px solid #8f93f1;
          font-weight: 400;
          font-size: 1rem;
          margin-bottom: 2.63rem;
          resize: none;

          &:hover,
          &:focus {
            outline: none;
            border: 1.5px solid #8f93f1;
            box-shadow: 0px 0px 0px 4px rgba(242, 243, 252, 0.5),
              0px 0px 0px 5px rgba(180, 183, 251, 0.8);
          }
        }

        button {
          width: 100%;
          margin-bottom: 5.75rem;
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
    }

    & > svg:nth-child(2) {
      position: absolute;
      display: block;
      right: -317px;
      top: -208px;
      filter: blur(50px);
    }

    & > svg:nth-child(3) {
      position: absolute;
      display: block;
      left: -120px;
      bottom: -120px;
      filter: blur(125px);
    }

    & > svg:nth-child(4) {
      position: absolute;
      display: block;
      right: -320px;
      bottom: 197px;
      filter: blur(50px);
    }

    & > svg:nth-child(5) {
      position: absolute;
      display: block;
      right: -354px;
      bottom: -600px;
      filter: blur(50px);
    }
  }
`;
