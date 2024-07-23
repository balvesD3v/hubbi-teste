import axios from "axios";

const SWAPI_URL = "https://swapi.dev/api";

export const fetchCharacters = () => axios.get(`${SWAPI_URL}/people/`);
export const fetchCharacterById = (id: string) =>
  axios.get(`${SWAPI_URL}/people/${id}/`);
export const fetchShips = () => axios.get(`${SWAPI_URL}/starships/`);
export const fetchShipById = (id: string) =>
  axios.get(`${SWAPI_URL}/starships/${id}/`);
export const fetchSkills = () => axios.get(`${SWAPI_URL}/skills/`);
export const fetchWeapons = () => axios.get(`${SWAPI_URL}/vehicles/`);
export const fetchWeaponById = (id: string) =>
  axios.get(`${SWAPI_URL}/vehicles/${id}`);
