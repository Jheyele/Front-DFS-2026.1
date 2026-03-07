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
    name: "Math Menezes ",
    role: "Desenvolvedor Full Stack",
    image:
      "https://media.licdn.com/dms/image/v2/D4E35AQH1t4TfT0rTMg/profile-framedphoto-shrink_400_400/B4EZwUcAliIkAc-/0/1769869413214?e=1773446400&v=beta&t=9mkM8sEQ4Ae2Akhtev42FLtRKUTL08dImxjcx4JI9vM",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/math-menezes-07101b329/",
  },
  {
    id: 4,
    name: "Patrik Vilela",
    role: "Desenvolvedor Full Stack",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQE4snkX5n00Ng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1543269001064?e=1774483200&v=beta&t=BHaAugp67-NLBerH80dKzO1msT_eBK5NJMogjdCejn4",
    github: "https://github.com/Patrikdevs",
    linkedin:
      "https://www.linkedin.com/in/patrikvilela/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
