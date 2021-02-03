import axios, { AxiosInstance } from "axios";

const tmdbInstance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default tmdbInstance;
