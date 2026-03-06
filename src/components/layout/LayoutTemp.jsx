import { Outlet } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function layout() {

  /**
   * O Layout funciona como a estrutura padrão da aplicação.
   * 
   * Tudo que estiver aqui será exibido em TODAS as páginas:
   * - Navbar
   * - Conteúdo da página
   * - Footer
   * 
   * O <Outlet /> é onde o React Router renderiza
   * o conteúdo da rota ativa.
   */

  return (
    <>
      {/* Cabeçalho da aplicação */}
      <Navbar />

      {/* Conteúdo dinâmico das páginas */}
      <main>
        <Outlet />
      </main>

      {/* Rodapé global */}
      <Footer />
    </>
  );
}