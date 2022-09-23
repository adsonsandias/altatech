import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary-gradient);
  padding: 0.13rem;
  box-shadow: 10px 15px 25px rgba(192, 192, 192, 0.25),
    -10px -5px 25px rgba(228, 228, 228, 0.25);
  border-radius: 1.56rem;
  overflow: hidden;
  max-width: 22rem;

  & > div {
    background: #fff;
    border-radius: 1.5rem;
    padding: 1.5rem;

    /* Image Product */
    div:first-child {
      img {
        max-width: 18.75rem;
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
      }

      strong {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
        margin-bottom: 1.56rem;
        font-size: 1.13rem;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 256px;
        height: 58px;
        border: none;
        background: #434343;
        border-radius: 0.94rem;
        font-weight: 600;
        font-size: 1.13rem;
        line-height: 1.69rem;
        color: #ffffff;
        padding: 0.13em;
        align-self: center;
      }
    }
  }
`;
