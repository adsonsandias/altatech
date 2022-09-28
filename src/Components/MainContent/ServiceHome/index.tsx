import { Container } from './styles';

import { ServerVPS } from './ServerVPS';
import { ServicesSummary } from './ServicesSummary';

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
