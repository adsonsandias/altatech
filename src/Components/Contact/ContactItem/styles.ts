import styled from 'styled-components';

export const Container = styled.li`
  background: linear-gradient(274.05deg, #a0b8ff 33.64%, #f3feff 122.13%);
  padding: 0.13rem;
  border-radius: 0.94rem;

  div {
    padding: 1.13rem;
    background: #ffffff;
    border-radius: 0.81rem;

    h5,
    span {
      display: block;
      font-size: 1.13rem;
      line-height: 2rem;
      text-align: center;
      color: var(--text-color-2);
    }

    h5 {
      font-weight: 600;
    }

    span {
      font-weight: 400;
    }
  }
`;
