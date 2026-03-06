import { FaGithub, FaLinkedin } from "react-icons/fa"; // Instale react-icons
import "./About.css";

const teamMembers = [
  {
    id: 1,
    name: "Dayane Alves",
    role: "Desenvolvedor Full Stack",
    image: "https://avatars.githubusercontent.com/u/160778587?v=4",
    github: "https://github.com/devalvesff00ff",
    linkedin: "https://www.linkedin.com/in/dayane-alves-329a3626b",
  },
  {
    id: 2,
    name: "Marcos Alexandre",
    role: "Desenvolvedor Full Stack",
    image: "https://avatars.githubusercontent.com/u/131191211?v=4",
    github: "https://github.com/Marcsfic98",
    linkedin: "https://www.linkedin.com/in/marcsfic/",
  },
  {
    id: 3,
    name: "Nome do Integrante",
    role: "Desenvolvedor Full Stack",
    image: "https://via.placeholder.com/150",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Patrik Vilela",
    role: "Desenvolvedor Full Stack",
    image: "https://via.placeholder.com/150",
    github: "https://github.com/Patrikdevs",
    linkedin: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Saulo Cavalcante",
    role: "Desenvolvedor Full Stack",
    image: "https://avatars.githubusercontent.com/u/144395959?v=4",
    github: "https://github.com/SauloLobo",
    linkedin: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Kesia Pimenta",
    role: "Desenvolvedor Full Stack",
    image: "https://avatars.githubusercontent.com/u/233766893?v=4",
    github: "https://github.com/kesiapimentaferreira525-eng",
    linkedin: "https://www.linkedin.com/in/kesia-pimenta-ferreira-7ab5a3331",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>Sobre o Projeto</h1>
        <p>
          Somos o <strong>Grupo 10</strong> do bootcamp{" "}
          <strong>Atlântico Avanti</strong>.
        </p>
        <div className="tech-stack">
          <div className="stack-box">
            <h3>Backend</h3>
            <p>Node.js • Prisma • JWT</p>
          </div>
          <div className="stack-box">
            <h3>Frontend</h3>
            <p>React • CSS • Axios</p>
          </div>
        </div>
        <p className="description">
          Nossa equipe desenvolveu esta aplicação do zero, integrando uma API
          robusta com uma interface intuitiva e responsiva.
        </p>
      </section>

      <section className="team-section">
        <h2>Nossa Equipe</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="member-card">
              <img
                src={member.image}
                alt={member.name}
                className="member-photo"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links">
                <a href={member.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
