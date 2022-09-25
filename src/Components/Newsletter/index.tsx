import React from 'react';
import { Container } from './styles';

import { ReactComponent as IconSend } from '../../assets/go.svg';

export function Newsletter() {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Here I would send the data to the server through a Rest API for example
    console.log('email da newsletter', {
      email,
    });
  };

  return (
    <Container>
      <h1>Receba nossa newsletter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          <button type="submit">
            <div>
              <IconSend />
              <span>Inscreva-se</span>
            </div>
          </button>
        </div>
      </form>
    </Container>
  );
}
