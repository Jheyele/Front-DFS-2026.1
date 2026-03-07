import { ArrowRight, MessageSquare, Repeat, Users } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // Dados fictícios baseados na proposta de troca de conhecimento
  const ofertasConhecimento = [
    {
      id: 1,
      titulo: "Lógica de Programação",
      img: "data:image/jpeg;base64,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",
      autor: "Carlos Silva",
      busca: "Quero aprender Inglês",
      desc: "Ensino o básico de algoritmos e JavaScript para iniciantes.",
      tag: "Tecnologia",
    },
    {
      id: 2,
      titulo: "Design de Logotipos",
      autor: "Ana Souza",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEI5rFEqXZTaxnoi5QVTJPCD3oKquVBPDGDw&s",
      busca: "Quero aprender Violão",
      desc: "Posso te ensinar a criar marcas usando o Illustrator ou Canva.",
      tag: "Artes",
    },
    {
      id: 3,
      titulo: "Culinária Vegetariana",
      autor: "Marcos Lima",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGW-iCrSeNBOaatfVdIp6nfwOzwz9Fn6zEQ&s",
      busca: "Quero ajuda em Excel",
      desc: "Troco receitas e técnicas de preparo de marmitas saudáveis.",
      tag: "Gastronomia",
    },
  ];

  return (
    <main className="">
      <section className="hero">
        <div className="hero-content">
          <div className="badge">Comunidade Colaborativa</div>
          <h1>
            Transforme o que você sabe em <span>oportunidade para outros.</span>
          </h1>

          <div className="hero-text-container">
            <p className="hero-subtitle">
              Muitas pessoas querem aprender, mas não podem pagar. Conecte-se
              com quem quer ensinar e ofereça seu conhecimento em troca.
            </p>
            <p className="hero-cta-text">
              <strong>Sem dinheiro, apenas troca de experiências.</strong>
            </p>
          </div>

          <div className="hero-buttons">
            <Link to={"/offers"} className="btn-primary">
              Explorar Ofertas
            </Link>
            <Link to={"/register-knowledge"} className="btn-secondary">
              Oferecer Conhecimento
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <Users color="#3b82f6" />
            <span className="stat">+200 Membros</span>
          </div>
          <div className="stat-card">
            <Repeat color="#3b82f6" />
            <span className="stat">Trocas Ativas</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE OFERTAS */}
      <section id="ofertas" className="courses-section">
        <div className="section-header">
          <h2>Conhecimentos Disponíveis</h2>
          <p>Encontre alguém para ensinar você hoje</p>
        </div>

        <div className="courses-grid">
          {ofertasConhecimento.map((oferta) => (
            <div key={oferta.id} className="course-card">
              <div className="course-badge">{oferta.tag}</div>
              <img src={oferta.img} className="course-image"></img>
              <div className="course-info">
                <h3>{oferta.titulo}</h3>
                <p className="author-name">
                  Por: <strong>{oferta.autor}</strong>
                </p>
                <p className="description">{oferta.desc}</p>

                <Link to={"/offers"} className="btn-enroll">
                  Tenho interesse <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO POR QUE NÓS? */}
      <section className="features-strip">
        <div className="feature">
          <Users size={30} color="#3b82f6" />
          <div>
            <h4>Comunidade Real</h4>
            <p>Conecte-se com pessoas da sua região ou online.</p>
          </div>
        </div>
        <div className="feature">
          <MessageSquare size={30} color="#3b82f6" />
          <div>
            <h4>Troca Direta</h4>
            <p>Combine o horário e o formato direto com o parceiro.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
