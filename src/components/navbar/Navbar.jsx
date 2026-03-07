import { LogOut, UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
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
          <Link to="/offers">Ofertas</Link>
        </li>
      </ul>

      <div className="navbar-login">
        {token ? (
          <button onClick={handleLogout} className="login-button logout-btn">
            <LogOut size={24} />
            <span>Sair</span>
          </button>
        ) : (
          <Link to="/login" className="login-button">
            <UserCircle size={24} />
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
