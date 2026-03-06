import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Exemplo de integração com o backend do Grupo 10
      // await axios.post('http://localhost:3000/api/contact', formData);
      alert("Mensagem enviada com sucesso! O Grupo 10 entrará em contato.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Ops, algo deu errado. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <section className="contact-info">
          <h2>Entre em Contato</h2>
          <p>
            Dúvidas sobre o projeto ou interessado em colaborar? Mande uma
            mensagem para o <strong>Grupo 10</strong>.
          </p>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>contato.grupo10@atlantico.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Localização</h4>
              <p>Bootcamp Atlântico Avanti - Brasil</p>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Como podemos ajudar?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensagem <FaPaperPlane />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
