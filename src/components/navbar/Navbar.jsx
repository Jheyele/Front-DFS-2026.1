import { LogOut, UserCircle } from "lucide-react";
// 1. Troque Link por NavLink
import { NavLink, useNavigate } from "react-router-dom";

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
          {/* 2. Use NavLink e o atributo 'end' na Home para evitar que ela fique ativa em todas as rotas */}
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contato</NavLink>
        </li>
        <li>
          <NavLink to="/offers">Ofertas</NavLink>
        </li>
      </ul>

      <div className="navbar-login">
        {token ? (
          <button onClick={handleLogout} className="login-button logout-btn">
            <LogOut size={24} />
            <span>Sair</span>
          </button>
        ) : (
          <NavLink to="/login" className="login-button">
            <UserCircle size={24} />
            <span>Login</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
