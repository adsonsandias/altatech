import { ButtonStyles } from './styles';

interface IBUTTON {
  title: string;
}

export function Button({ ...props }: IBUTTON) {
  const { title } = props;

  return <ButtonStyles>{title}</ButtonStyles>;
}
