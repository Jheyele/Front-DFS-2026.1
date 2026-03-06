import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img src="/logo.png" className="footer-logo"></img>
          <p>
            Transformando ideias em soluções digitais de alta performance. Sua
            satisfação é o nosso compromisso diário.
          </p>
          <div className="social-icons">
            <a href="#">
              <Facebook size={20} />
            </a>
            <a href="#">
              <Instagram size={20} />
            </a>
            <a href="#">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-section links">
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre Nós</a>
            </li>
            <li>
              <a href="#usuarios">Usuários</a>
            </li>
            <li>
              <a href="#ofertas">Ofertas</a>
            </li>
            <li>
              <a href="#privacidade">Privacidade</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
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
            <span>contato@Avan.com</span>
          </div>
        </div>

        {/* Coluna 4: Newsletter */}
        <div className="footer-section newsletter">
          <h3>Novidades</h3>
          <p>Assine para receber ofertas exclusivas.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Seu melhor e-mail" required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} MinhaLogomarca. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
