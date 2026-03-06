import axios from "axios";
import { Eye, Search, Signal, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OffersPage.css";

const OffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  const fetchOffers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/offers", {
        params: {
          busca: busca || undefined,
        },
      });
      setOffers(response.data);
    } catch (err) {
      console.error("Erro ao buscar ofertas:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchOffers();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [busca]);

  return (
    <div className="container">
      <header className="header">
        <h1>Ofertas</h1>
        <div className="filter-bar">
          <div className="search-input">
            <Search size={20} />
            <input
              type="text"
              placeholder="Buscar por título ou descrição..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>
      </header>

      {loading ? (
        <div className="loading">Filtrando ofertas...</div>
      ) : (
        <div className="offers-grid">
          {offers.length > 0 ? (
            offers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="card-badge">{offer.category}</div>
                <div className="card-content">
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-description">{offer.description}</p>
                  <div className="offer-details">
                    <div className="detail-item">
                      <Signal size={16} /> {offer.level}
                    </div>
                    <div className="detail-item">
                      <User size={16} /> {offer.user?.name}
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <Link
                    to={`/offers/${offer.id}`}
                    state={{ offerData: offer }} // Aqui enviamos a oferta completa
                    className="btn-details"
                  >
                    <Eye size={18} /> Ver Detalhes
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-data">
              Nenhum resultado encontrado para os filtros selecionados.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OffersPage;
