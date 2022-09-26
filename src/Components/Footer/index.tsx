import { Link } from 'react-router-dom';
import { Container, FooterCopyStyles, FooterInforStyles } from './styles';

export function Footer() {
  return (
    <>
      <Container>
        <FooterInforStyles>
          <div>
            <h5>Sobre</h5>
            <ul>
              <li>
                <Link to="/">Contato</Link>
              </li>
              <li>
                <span>comercial@altatech.com.br</span>
              </li>
              <li>
                <Link to="/">Sobre a Altatech</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>Atendimento</h5>
            <ul>
              <li>
                <span>Atendimento de Segunda a Sexta das 08:00 às 18:00</span>
              </li>
              <li>
                <span>CEP 86010-540 - Londrina - PR</span>
              </li>
              <li>
                <span>Av. Juscelino Kubitscheck, 1905 - Centro</span>
              </li>
            </ul>
          </div>

          <div>
            <h5>Termos</h5>
            <ul>
              <li>
                <Link to="/">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/">Política de Cookies</Link>
              </li>
              <li>
                <Link to="/">LGPD</Link>
              </li>
              <li>
                <Link to="/">Perguntas Frequentes</Link>
              </li>
            </ul>
          </div>
        </FooterInforStyles>
        <FooterCopyStyles>
          <div>
            <p>
              Copyright © 2022 Altatech. Todos os direitos reservados. ALTATECH
              SOLUCOES EM TECNOLOGIA LTDA. CNPJ: 05.365.132/0001-30
            </p>
            <div>
              <ul>
                <li>
                  <Link to="/">Política de Cancelamento</Link>
                </li>
                <li>
                  <Link to="/">Política de Garantia</Link>
                </li>
                <li>
                  <Link to="/">Política Comercial</Link>
                </li>
                <li>
                  <Link to="/">Política de Privacidade</Link>
                </li>
              </ul>
            </div>
          </div>
        </FooterCopyStyles>
      </Container>
    </>
  );
}
