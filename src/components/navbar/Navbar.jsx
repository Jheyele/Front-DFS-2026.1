import { UserCircle } from "lucide-react"; // Ícone moderno de usuário
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="" />
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/users">Usuários</Link>
        </li>
        <li>
          <Link to="/offers">Ofertas</Link>
        </li>
      </ul>

      <div className="navbar-login">
        <Link to={"/login"} className="login-button">
          <UserCircle size={24} />
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
