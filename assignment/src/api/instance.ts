import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/`,
});

instance.interceptors.request.use(function (config) {
  const key = import.meta.env.VITE_API_KEY;

  config.params = {
    ...config.params,
    key,
  };

  return config;
});

export default instance;
