import { Link } from 'react-router-dom';
import { Button } from '../../../Form/Button';
import { Container, NavStyles } from './styles';

import { ReactComponent as IconeArrowServices } from '../../../../assets/arrow-services.svg';
import { ReactComponent as IconeArrowLeft } from '../../../../assets/arrow-left.svg';
import { ReactComponent as IconeArrowRight } from '../../../../assets/arrow-right.svg';

export function ServicesSummary() {
  return (
    <Container>
      <div>
        <h4>Backup em Nuvem</h4>
        <span>Altatech Cloud</span>
        <p>
          Conheça a melhor opação em <span>backup em nuvem</span> para sua
          empresa
          <br />
          <span>Opções flexíveis de armazenamento</span> solicite mais
          informações
        </p>
        <Button title="Ver mais" />
      </div>
      <div>
        <h4>Infraestrutura</h4>
        <ul>
          <li>
            <Link to="/">
              <span>Infraestrutura como Serviço (IaaS)</span>
              <IconeArrowServices />
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Projetos de Virtualização</span>
              <IconeArrowServices />
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Projetos em nuvem</span>
              <IconeArrowServices />
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Projetos personalizados</span>
              <IconeArrowServices />
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Smart T.I.</span>
              <IconeArrowServices />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <h4>Segurança em T.I.</h4>
          <ul>
            <li>
              <Link to="/">
                <span>Proteção contra Malware</span>
                <IconeArrowServices />
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Proteção contra SPAM</span>
                <IconeArrowServices />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Soluções em T.I.</h4>
          <ul>
            <li>
              <Link to="/">
                <span>Outsourcing de TI</span>
                <IconeArrowServices />
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>✔️ Revolucione seu escritório virtual</span>
                <IconeArrowServices />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4>Locação</h4>
        <span>Locação de computadores e equipamentos </span>
        <p>
          O aluguel de desktops permite que você foque no seu negócio e no seu
          time, deixando que o fornecedor cuide daquilo que não faz parte do seu
          core business!
        </p>
        <Button title="Ver mais" />
      </div>

      <NavStyles>
        <button type="button">
          <IconeArrowLeft />
        </button>
        <button type="button">
          <IconeArrowRight />
        </button>
      </NavStyles>
    </Container>
  );
}
