import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const fetchPins = () => axios.get(`${API}/api/pins`);

export const updatePin = (id, content) =>
  axios.put(`${API}/api/pins/${id}`, { content });

export const createPin = (pinData) => axios.post(`${API}/api/pins`, pinData);
