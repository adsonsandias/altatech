import { ButtonStyles } from './styles';

interface IBUTTON {
  children: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export function Button({ children, ...props }: IBUTTON) {
  const { type } = props;

  return (
    <ButtonStyles type={type}>
      <div>{children}</div>
    </ButtonStyles>
  );
}
