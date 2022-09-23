import { Button } from '../../Form/Button';
import { ProductItem } from '../../ProductItem';
import { Container } from './styles';

export function Product() {
  return (
    <Container>
      <h1>Product</h1>
      <div>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <Button title="Ver mais" />
    </Container>
  );
}
