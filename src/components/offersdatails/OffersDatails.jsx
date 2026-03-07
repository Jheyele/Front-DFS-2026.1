import axios from "axios";
import { ArrowLeft, Edit, Save, Trash2, User, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastAlert } from "../../../utils/ToastAlerta";
import "./OfferDatails.css";

const OfferDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const offer = location.state?.offerData;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...offer });

  if (!offer) {
    return (
      <div className="error-container">
        <h2>Dados não encontrados!</h2>
        <button onClick={() => navigate("/")}>Voltar para a Home</button>
      </div>
    );
  }

  const handleDelete = async () => {
    if (window.confirm("Tem certeza que deseja excluir esta oferta?")) {
      try {
        await axios.delete(`https://squad10.onrender.com/offers/${offer.id}`);
        ToastAlert("Oferta removida com sucesso!", "sucesso");
        navigate("/");
      } catch (err) {
        ToastAlert("Erro ao deletar oferta.", "erro");
        console.error(err);
      }
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://squad10.onrender.com/offers/${offer.id}`,
        formData
      );
      ToastAlert("Oferta atualizada!", "sucesso");
      setIsEditing(false);
      navigate("/");
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      ToastAlert("Erro ao atualizar oferta.", "erro");
    }
  };

  return (
    <div className="details-container">
      <div className="nav-header">
        <button onClick={() => navigate(-1)} className="btn-back">
          <ArrowLeft size={20} /> Voltar
        </button>

        <div className="admin-actions">
          {!isEditing ? (
            <>
              <button onClick={() => setIsEditing(true)} className="btn-edit">
                <Edit size={18} /> Editar
              </button>
              <button onClick={handleDelete} className="btn-delete">
                <Trash2 size={18} /> Deletar
              </button>
            </>
          ) : (
            <>
              <button onClick={handleSave} className="btn-save">
                <Save size={18} /> Salvar
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn-cancel"
              >
                <X size={18} /> Cancelar
              </button>
            </>
          )}
        </div>
      </div>

      <div className="details-card">
        {isEditing ? (
          <div className="edit-form">
            <input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Título"
            />
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Descrição"
            />
            <select
              value={formData.level}
              onChange={(e) =>
                setFormData({ ...formData, level: e.target.value })
              }
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
        ) : (
          <>
            <div className="details-header">
              <span className="category-badge">{offer.category}</span>
              <h1>{offer.title}</h1>
              <div className="level-indicator">Nível: {offer.level}</div>
            </div>
            <div className="details-content">
              <p className="description">{offer.description}</p>
              <div className="author-box">
                <h3>
                  <User size={18} /> Contato do Ofertante
                </h3>
                <p>
                  <strong>Nome:</strong> {offer.user?.name}
                </p>
                <p>
                  <strong>WhatsApp:</strong> {offer.user?.phone}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OfferDetails;
