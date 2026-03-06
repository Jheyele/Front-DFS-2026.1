import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Link } from "react-router-dom"; // usamos Link para navegação interna
import "./Footer.css";

const Footer = () => {

  // pega automaticamente o ano atual
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Coluna 1 - Sobre a empresa */}
        <div className="footer-section about">

          {/* Adicionamos alt para acessibilidade */}
          <img src="/logo.png" className="footer-logo" alt="Logo da plataforma" />

          <p>
            Transformando ideias em soluções digitais de alta performance.
            Sua satisfação é o nosso compromisso diário.
          </p>

          {/* Redes sociais */}
          <div className="social-icons">

            {/* target="_blank" abre em nova aba */}
            {/* rel="noopener noreferrer" evita vulnerabilidades */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>

          </div>
        </div>

        {/* Coluna 2 - Navegação interna */}
        <div className="footer-section links">

          <h3>Links Rápidos</h3>

          <ul>

            {/* Link do React Router evita reload da página */}
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/sobre">Sobre Nós</Link>
            </li>

            <li>
              <Link to="/users">Usuários</Link>
            </li>

            <li>
              <Link to="/offers">Ofertas</Link>
            </li>

            <li>
              <Link to="/contact">Contato</Link>
            </li>

          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div className="footer-section contact">

          <h3>Contato</h3>

          <div className="contact-item">
            <MapPin size={18} />
            <span>Bootcamp Atlântico Avanti - Brasil</span>
          </div>

          <div className="contact-item">
            <Phone size={18} />
            <span>(11) 99999-0000</span>
          </div>

          <div className="contact-item">
            <Mail size={18} />
            <span>contato@avan.com</span>
          </div>

        </div>

        {/* Coluna 4 - Newsletter */}
        <div className="footer-section newsletter">

          <h3>Novidades</h3>

          <p>Assine para receber ofertas exclusivas.</p>

          <form className="newsletter-form">

            {/* type email ajuda validação automática do navegador */}
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required
            />

            <button type="submit">Enviar</button>

          </form>

        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">

        <p>
          © {currentYear} MinhaLogomarca. Todos os direitos reservados.
        </p>

      </div>

    </footer>
  );
};

export default Footer;