import { ArrowLeft, Mail, Phone, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OfferDatails.css";

const OfferDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const offer = location.state?.offerData;

  if (!offer) {
    return (
      <div className="error">
        <h2>Ops! Dados não encontrados.</h2>
        <p>Ao recarregar a página, os dados temporários são perdidos.</p>
        <button onClick={() => navigate("/")}>Voltar para a lista</button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)} className="btn-back">
        <ArrowLeft size={20} /> Voltar
      </button>

      <div className="details-card">
        <div className="details-header">
          <span className="category-badge">{offer.category}</span>
          <h1>{offer.title}</h1>
          <div className="level-indicator">Nível: {offer.level}</div>
        </div>

        <div className="details-content">
          <section className="description-section">
            <h2>Descrição</h2>
            <p>{offer.description}</p>
          </section>

          <section className="author-section">
            <h2>Informações de Contacto</h2>
            <div className="author-info-box">
              <div className="info-row">
                <User size={20} color="#6366f1" />
                <span>
                  <strong>Autor:</strong> {offer.user?.name}
                </span>
              </div>
              <div className="info-row">
                <Mail size={20} color="#6366f1" />
                <span>
                  <strong>Email:</strong> {offer.user?.email}
                </span>
              </div>
              <div className="info-row">
                <Phone size={20} color="#6366f1" />
                <span>
                  <strong>Telefone:</strong> {offer.user?.phone}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
