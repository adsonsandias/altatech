import { Container } from './styles';

interface ICONTACTITEM {
  city: string;
  tel: string;
}

export function ContactItem({ ...props }: ICONTACTITEM) {
  const { city, tel } = props;
  return (
    <Container>
      <div>
        <h5>{city}</h5>
        <span>{tel}</span>
      </div>
    </Container>
  );
}
