import { Button } from '../../../Form/Button';
import { Container } from './styles';

import { ReactComponent as IconeLowLatency } from '../../../../assets/benefit/low-latency.svg';
import { ReactComponent as IconePayInReais } from '../../../../assets/benefit/pay-in-reais.svg';
import { ReactComponent as IconeHighConnectivity } from '../../../../assets/benefit/high-connectivity.svg';
import { ReactComponent as IconePossibilityUpgrade } from '../../../../assets/benefit/possibility-upgrade.svg';
import { ReactComponent as IconeHighAvailability } from '../../../../assets/benefit/high-availability.svg';
import { ReactComponent as IconeSupportDedicated } from '../../../../assets/benefit/support-dedicated.svg';
import IconeServeVps from '../../../../assets/icone-server-vps.png';

export function ServerVPS() {
  return (
    <Container>
      <div>
        <h1>Server VPS</h1>
        <span>Tenha seu servidor virtual</span>
        <p>
          Nosso server Cloud dispõe de seguraçã para sua aplicação e
          performance. Com preços previsíveis e escalabilidade para suportar seu
          crescimento em qualquer estágio.
        </p>
      </div>
      <div>
        <h4>Benefício</h4>
        <ul>
          <li>
            <IconePayInReais />
            <span>Pague em reais!</span>
          </li>
          <li>
            <IconeHighConnectivity />
            <span>Alta Conectividade</span>
          </li>
          <li>
            <IconeLowLatency />
            <span>Baixa Latência</span>
          </li>
          <li>
            <IconePossibilityUpgrade />
            <span>Possibilidade de Upgrade</span>
          </li>
          <li>
            <IconeHighAvailability />
            <span>Alta Disponibilidade</span>
          </li>
          <li>
            <IconeSupportDedicated />
            <span>Suporte Dedicado</span>
          </li>
        </ul>
      </div>
      <div>
        <img src={IconeServeVps} alt="Server VPS" />
      </div>
      <Button type="button">Ver mais</Button>
    </Container>
  );
}
