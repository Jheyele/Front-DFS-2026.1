import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isTokenValid } from "../services/ApiService";

export default function AuthRoute({ children }) {

  /**
   * Este componente funciona como uma "rota protegida".
   * 
   * Antes de renderizar o conteúdo da página,
   * verificamos se o usuário possui um token válido.
   * 
   * Caso o token seja inválido ou inexistente,
   * o usuário é redirecionado para a tela de login.
   */

  const { token } = useAuth();

  // Verifica se o token do usuário ainda é válido
  const validToken = isTokenValid(token);

  // Se o token não for válido, redireciona para login
  if (!validToken) {
    return <Navigate to="/login" replace />;
  }

  // Caso o token seja válido, renderiza o conteúdo da rota protegida
  return children;
}