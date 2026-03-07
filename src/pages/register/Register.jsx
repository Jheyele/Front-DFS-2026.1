import { useState } from "react";
import {
  FaAlignLeft,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastAlert } from "../../../utils/ToastAlerta";
import { saveUser } from "../../services/ApiService";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    try {
      await saveUser(formData);

      ToastAlert(
        "Cadastro realizado com sucesso! Agora você já pode entrar.",
        "sucesso"
      );

      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      ToastAlert(
        error.response?.data?.message ||
          "Erro ao realizar cadastro. Verifique os dados ou tente novamente.",
        "erro"
      );
    } finally {
      setLoading(false);
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
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
