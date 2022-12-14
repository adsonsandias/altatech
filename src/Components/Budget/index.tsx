import React from 'react';
import { Container } from './styles';

import { Button } from '../Form/Button';
import { Input } from '../Form/Input';

import { ReactComponent as BgRequest01 } from '../../assets/request/bg-request-01.svg';
import { ReactComponent as BgRequest02 } from '../../assets/request/bg-request-02.svg';
import { ReactComponent as BgRequest03 } from '../../assets/request/bg-request-03.svg';
import { ReactComponent as BgRequest04 } from '../../assets/request/bg-request-04.svg';
import { ReactComponent as BgRequest05 } from '../../assets/request/bg-request-05.svg';

export function Budget() {
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [cnpj, setCnpj] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Here I would send the data to the server through a rest API for example
    console.log('informações de contato', {
      phone,
      name,
      cnpj,
      email,
      message,
    });
  };

  return (
    <Container>
      <div>
        <BgRequest01 />
        <BgRequest02 />
        <BgRequest03 />
        <BgRequest04 />
        <BgRequest05 />
        <div>
          <h1>Solicite agora seu orçamento</h1>
          <form onSubmit={handleSubmit}>
            <Input
              title="Nome"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />
            <div>
              <Input
                title="Telefone"
                type="tel"
                placeholder="Ex: (99) 9 9999-999"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <Input
                title="CNPJ"
                type="text"
                placeholder="Ex: 99.999.999/0001-99"
                value={cnpj}
                onChange={(event) => setCnpj(event.target.value)}
              />
            </div>
            <Input
              title="E-mail"
              type="text"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              rows={10}
              cols={2000}
              id="mensagem"
              name="mensagem"
              title="mensagem"
              value={message}
              required
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button type="submit">Enviar mensagem</Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
