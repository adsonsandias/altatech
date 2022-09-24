import React from 'react';
import { Container } from './styles';

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
            <div>Inscreva-se</div>
          </button>
        </div>
      </form>
    </Container>
  );
}
