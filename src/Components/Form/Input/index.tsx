import { InputStyles, LabelStyles } from './styles';

interface IINPUT {
  title: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  onChange?: (event: any) => void;
}

export function Input({ ...props }: IINPUT) {
  const { title, type, placeholder, required, onChange, value } = props;

  return (
    <>
      <LabelStyles htmlFor={title}>{title}</LabelStyles>
      <InputStyles
        id={title}
        name={title}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}
