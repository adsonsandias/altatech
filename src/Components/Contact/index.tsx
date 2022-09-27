import { Container } from './styles';

import { ContactItem } from './ContactItem';
import { contactslist } from './contactslist';

export function Contact() {
  return (
    <>
      <Container>
        <div>
          <h1>Contact</h1>
          <ul>
            {contactslist.map(({ city, tel }) => (
              <ContactItem key={city} city={city} tel={tel} />
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
