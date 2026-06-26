import axios from "axios";

const api = axios.create({
  baseURL: "https://lms-backend-02t5.onrender.com/api",
});

export default api;