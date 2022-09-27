import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Container } from './styles';

import { Button } from '../../../Form/Button';
import { ReactComponent as IconeArrowServices } from '../../../../assets/arrow-services.svg';

export function ServicesSummary() {
  const [width, setWidth] = React.useState(0);
  const carousel = React.useRef<any>();

  React.useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Container ref={carousel}>
      <AnimatePresence>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
          <motion.div key={1}>
            <h4>Backup em Nuvem</h4>
            <span>Altatech Cloud</span>
            <p>
              Conheça a melhor opação em <span>backup em nuvem</span> para sua
              empresa
              <br />
              <span>Opções flexíveis de armazenamento</span> solicite mais
              informações
            </p>
            <Button type="button">Ver mais</Button>
          </motion.div>
          <motion.div key={2}>
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
          </motion.div>
          <motion.div key={3}>
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
          </motion.div>
          <motion.div key={4}>
            <h4>Locação</h4>
            <span>Locação de computadores e equipamentos </span>
            <p>
              O aluguel de desktops permite que você foque no seu negócio e no
              seu time, deixando que o fornecedor cuide daquilo que não faz
              parte do seu core business!
            </p>
            <Button type="button">Ver mais</Button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
