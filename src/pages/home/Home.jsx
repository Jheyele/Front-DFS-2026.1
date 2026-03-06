import { ArrowRight, Award, BookOpen, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const cursosDestaque = [
    {
      id: 1,
      titulo: "Desenvolvimento Web Fullstack",
      preco: "R$ 97,00",
      antigoPreco: "R$ 497,00",
      desc: "Aprenda React, Node e Banco de Dados.",
      tag: "Mais Vendido",
    },
    {
      id: 2,
      titulo: "Design UX/UI Moderno",
      preco: "R$ 47,00",
      antigoPreco: "R$ 197,00",
      desc: "Crie interfaces que encantam usuários.",
      tag: "Oferta",
    },
    {
      id: 3,
      titulo: "Marketing Digital 360",
      preco: "R$ 67,00",
      antigoPreco: "R$ 297,00",
      desc: "Domine anúncios e redes sociais.",
      tag: "Novo",
    },
  ];

  return (
    <main className="">
      <section className="hero">
        <div className="hero-content">
          <span className="badge">🚀 Ofertas de Verão: até 80% OFF</span>
          <h1>
            Domine as habilidades que o <span>mercado procura.</span>
          </h1>
          <p>
            Cursos práticos, direto ao ponto e com certificados reconhecidos.
            Comece a estudar hoje mesmo!
          </p>
          <div className="hero-buttons">
            <Link to={"/offers"} className="btn-primary">
              Ver Cursos
            </Link>
            <Link to={"/sobre"} className="btn-secondary">
              Saiba Mais
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <BookOpen color="#3b82f6" />
            <span>+500 Cursos</span>
          </div>
          <div className="stat-card">
            <Award color="#3b82f6" />
            <span>Certificados Reais</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE OFERTAS - Grid de Cursos */}
      <section id="ofertas" className="courses-section">
        <div className="section-header">
          <h2>Ofertas em Destaque</h2>
          <p>Preços exclusivos por tempo limitado</p>
        </div>

        <div className="courses-grid">
          {cursosDestaque.map((curso) => (
            <div key={curso.id} className="course-card">
              <div className="course-badge">{curso.tag}</div>
              <div className="course-image"></div>
              <div className="course-info">
                <h3>{curso.titulo}</h3>
                <p>{curso.desc}</p>
                <div className="rating">
                  <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  <span>(4.9)</span>
                </div>
                <div className="price-container">
                  <span className="old-price">{curso.antigoPreco}</span>
                  <span className="new-price">{curso.preco}</span>
                </div>
                <button className="btn-enroll">
                  Quero minha vaga <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO POR QUE NÓS? */}
      <section className="features-strip">
        <div className="feature">
          <Clock size={30} />
          <div>
            <h4>Acesso Vitalício</h4>
            <p>Assista quando e onde quiser.</p>
          </div>
        </div>
        <div className="feature">
          <Award size={30} />
          <div>
            <h4>Certificado de Conclusão</h4>
            <p>Válido em todo território nacional.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
