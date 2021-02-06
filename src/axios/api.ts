import axios from "axios";

const apiInstance = axios.create({
  baseURL: `${window.location.origin}/api`,
});

export default apiInstance;
