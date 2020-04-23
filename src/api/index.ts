import axios from "axios";

const API_KEY = "a691c6e7d12d49d20d6a0e88d9792f16";
const LANGUAGE = "ko";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: LANGUAGE
  }
});

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

export const VIDEO_BASE_URL = "https://www.youtube.com/embed/";

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
  detail: (movie_id: number) =>
    api.get(`movie/${movie_id}`, {
      params: { append_to_response: "videos" }
    }),
  search: (term: string) =>
    api.get("search/movie", {
      params: { query: term }
    })
};

export const tvApi = {
  onTheAir: () => api.get("/tv/on_the_air"),
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("/tv/airing_today"),
  detail: (tv_id: number) =>
    api.get(`tv/${tv_id}`, {
      params: { append_to_response: "seasons" }
    }),
  search: (term: string) =>
    api.get("search/tv", {
      params: { query: term }
    })
};
