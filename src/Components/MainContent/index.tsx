import { Product } from './Product';
import { ServiceHome } from './ServiceHome';
import { Container } from './styles';

export function MainContent() {
  return (
    <Container>
      <Product />
      <ServiceHome />
    </Container>
  );
}
