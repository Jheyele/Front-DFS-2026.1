import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {

  /**
   * O App.jsx agora apenas inicializa o sistema de rotas.
   * Toda a estrutura da aplicação foi delegada para o Layout.
   */

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;