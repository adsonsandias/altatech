import { partners } from './images';
import { Container } from './styles';

export function Partners() {
  return (
    <Container>
      <div>
        <h1>Parceiros</h1>
        <ul>
          {partners &&
            partners.map((partner) => (
              <li key={partner}>
                <img src={partner} alt="" />
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
}
