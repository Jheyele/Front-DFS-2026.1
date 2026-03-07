import { Eye, Plus, Search, Signal, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOffers } from "../../services/ApiService";
import "./OffersPage.css";

const OffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  // Novos estados para os filtros
  const [categoria, setCategoria] = useState("");
  const [nivel, setNivel] = useState("");

  const fetchOffers = async () => {
    setLoading(true);
    try {
      const response = await getOffers({
        params: {
          // Garantimos que se o estado for vazio, enviamos undefined para o Prisma ignorar
          busca: busca.trim() || undefined,
          categoria: categoria || undefined,
          nivel: nivel || undefined,
        },
      });
      setOffers(response.data);
    } catch (err) {
      console.error("Erro ao buscar ofertas:", err);
    } finally {
      setLoading(false);
    }
  };
  // O useEffect agora observa busca, categoria e nivel
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchOffers();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [busca, categoria, nivel]);

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

          {/* Novos Selects para Filtros */}
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas Categorias</option>
            <option value="Programação">Programação</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>

          <select
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            className="filter-select"
          >
            <option value="">Todos os Níveis</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <Link to="/offers/create" className="btn-create-offer">
            <Plus size={20} />
            Nova Oferta
          </Link>
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
                    state={{ offerData: offer }}
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
