import { Container } from './styles';

import { Button } from '../../Form/Button';
import { ProductItem } from './ProductItem';

export function Product() {
  return (
    <Container>
      <h1>Produtos</h1>
      <div>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <Button type="button">Ver mais</Button>
    </Container>
  );
}
