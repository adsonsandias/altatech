import styled from 'styled-components';

export const InputStyles = styled.input`
  display: var(--base-color);
  z-index: 9999;
  padding: 1rem;
  border-radius: 0.94rem;
  transition: all ease 0.3s;
  border: 1.5px solid var(--details-color);
  font-weight: 400;
  font-size: 1.13rem;
  line-height: 1.69rem;
  height: 3.63rem;
  width: 100%;

  @media (max-width: 680px) {
    height: 3rem;
  }

  @media (max-width: 480px) {
    height: 2.63rem;
    font-size: 0.88rem;
    left: 0rem;
    right: 0rem;
    border-radius: 0.63rem;
    padding: 0.5rem;
  }

  &::placeholder {
    color: #e1e1e1;
  }

  &:hover,
  &:focus {
    outline: none;
    border: 1.5px solid var(--details-color);
    box-shadow: 0px 0px 0px 4px rgba(242, 243, 252, 0.5),
      0px 0px 0px 5px rgba(180, 183, 251, 0.8);
  }
`;
export const LabelStyles = styled.label`
  font-weight: 600;
  font-size: 1.13rem;
  line-height: 1.69rem;
  color: var(--text-color-2);
  margin-bottom: 0.5rem;

  @media (max-width: 680px) {
    font-size: 1rem;
    line-height: initial;
  }

  @media (max-width: 480px) {
    font-size: 0.88rem;
  }
`;
