import { Button } from '../../Form/Button';
import { ProductItem } from './ProductItem';
import { Container } from './styles';

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
