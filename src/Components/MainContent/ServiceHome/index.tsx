import { Container } from './styles';

import { ServerVPS } from './ServerVPS';
import { ServicesSummary } from './ServicesSummary';
import { NavStyles } from '../../Header/styled';

export function ServiceHome() {
  return (
    <Container>
      <div>
        <h1>Serviços</h1>
        <ServerVPS />
        <ServicesSummary />
      </div>
    </Container>
  );
}
