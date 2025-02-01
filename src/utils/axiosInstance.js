import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.example.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
