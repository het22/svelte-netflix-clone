import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

tmdb.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: "b7d889c9a3a1fbbb77079cd6961f20df"
  }
  return config;
});

tmdb.interceptors.response.use(res => {
  return res.data;
})

export function popularMovies() {
  return tmdb.get("/movie/popular");
}
