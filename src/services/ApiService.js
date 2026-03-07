import axios from "axios";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  baseURL: "https://squad10.onrender.com/",
});

export const getAllUsers = () => api.get(`/users`);
export const deleteUser = (id) => api.delete(`/users/${id}`);
export const getUserById = (id) => api.get(`/users/${id}`);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const saveUser = (data) => api.post(`/users`, data);

export const loginUser = async ({ email }) => {
  const response = await getAllUsers();
  const users = response.data;

  const userFound = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );

  if (!userFound) {
    throw new Error("Usuário não encontrado.");
  }

  return {
    data: {
      ...userFound,
      token: "simulated-token-for-" + userFound.id,
    },
  };
};

export const getOffers = (config = {}) => api.get(`/offers`, config);

export function isTokenValid(token) {
  if (!token || token.startsWith("simulated-token")) return true;
  try {
    const { id, exp } = jwtDecode(token);
    const now = Date.now() / 1000;
    return !!id && exp > now;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return false;
  }
}
