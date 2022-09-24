import styled from 'styled-components';

export const InputStyles = styled.input`
  display: #ffffff;
  z-index: 9999;
  padding: 1rem;
  border-radius: 0.94rem;
  transition: all ease 0.3s;
  border: 1.5px solid #8f93f1;
  font-weight: 400;
  font-size: 1.13rem;
  line-height: 1.69rem;
  height: 3.63rem;

  @media (max-width: 480px) {
    height: 3.5rem;
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
    border: 1.5px solid #8f93f1;
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
`;
