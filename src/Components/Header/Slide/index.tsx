import { Container } from './styles';

import IconeNuvem from '../../../assets/nuvem.png';

import { Button } from '../../Form/Button';
import { NavSlide } from '../../Help/NavSlide/NavSlide';

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
        <NavSlide />
      </div>
    </Container>
  );
}
