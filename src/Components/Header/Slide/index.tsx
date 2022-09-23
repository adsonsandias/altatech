import { Container } from './styles';
import { ReactComponent as IconeNuvem } from '../../../assets/nuvem.svg';
import { ReactComponent as IconeArrowLeft } from '../../../assets/arrow-left.svg';
import { ReactComponent as IconeArrowRight } from '../../../assets/arrow-right.svg';
import { Button } from '../../Form/Button';

export function Slide() {
  return (
    <Container>
      <div>
        <div>
          <h1>
            Backup em nuvem: <br></br>
            <span>Segurança</span> avançada<br></br> para seus Dados
          </h1>
          <Button title="Saiba mais" />
        </div>
        <IconeNuvem />
      </div>
      <div>
        <button type="button">
          <IconeArrowLeft />
        </button>
        <button type="button">
          <IconeArrowRight />
        </button>
      </div>
    </Container>
  );
}
