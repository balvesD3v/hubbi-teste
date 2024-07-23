import axios from "axios";

const API_URL = "http://localhost:5000/auth";

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  const { token } = response.data;
  localStorage.setItem("token", token);
  return response.data;
};

export const register = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    password,
  });
  return response.data;
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  const token = getToken();
  return token ? true : false;
};
