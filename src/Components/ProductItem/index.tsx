import notebook from '../../assets/Notebook.jpg';
import { Container } from './styles';

export function ProductItem() {
  return (
    <Container>
      <div>
        <div>
          <img src={notebook} alt="Notebook Lenovo" />
        </div>
        <div>
          <span>82ME0002BR</span>
          <strong>Notebook Lenovo V15 I5-1135G7 8Gb Ram 500GB SSD</strong>
          <button>Solicitar Orçamento</button>
        </div>
      </div>
    </Container>
  );
}
