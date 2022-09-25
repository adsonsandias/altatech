import { ButtonStyles } from './styles';

interface IBUTTON {
  children: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export function Button({ children, ...props }: IBUTTON) {
  const { type } = props;

  return (
    <ButtonStyles
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={type}
    >
      <div>{children}</div>
    </ButtonStyles>
  );
}
