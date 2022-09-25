import { Container } from './styles';

import IconeNuvem from '../../../assets/nuvem.png';
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
          <Button type="button">Saiba mais</Button>
        </div>
        <span>
          <img
            src={IconeNuvem}
            width={549}
            height={410}
            alt="Backup em Nuvem"
          />
        </span>
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
