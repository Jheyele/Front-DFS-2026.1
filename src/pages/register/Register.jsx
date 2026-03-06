import { useState } from "react";
import {
  FaAlignLeft,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Endpoint fictício seguindo o padrão Node/Prisma do Grupo 10
      // await axios.post('http://localhost:3000/api/users', formData);
      console.log("Dados enviados:", formData);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      alert("Erro ao realizar cadastro.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <FaUserPlus className="register-icon" />
          <h2>Criar Conta</h2>
          <p>Grupo 10 - Bootcamp Atlântico Avanti</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label>
              <FaUser /> Nome
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ex: José"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <FaEnvelope /> E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="jose@jose.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <FaPhone /> Telefone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="81983777777"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <FaAlignLeft /> Descrição
            </label>
            <textarea
              name="description"
              placeholder="Fale um pouco sobre você..."
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
            />
          </div>

          <button type="submit" className="register-btn">
            Cadastrar
          </button>
        </form>

        <div className="register-footer">
          <p>
            Já possui uma conta?{" "}
            <Link to="/login" className="login-link">
              Faça Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
