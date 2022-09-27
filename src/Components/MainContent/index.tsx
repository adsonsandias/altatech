import { Container } from './styles';

import { Product } from './Product';
import { ServiceHome } from './ServiceHome';

export function MainContent() {
  return (
    <Container>
      <Product />
      <ServiceHome />
    </Container>
  );
}
