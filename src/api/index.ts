import axios from "axios";

const API_KEY = "a691c6e7d12d49d20d6a0e88d9792f16";
const LANGUAGE = "ko";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
});

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

export const VIDEO_BASE_URL = "https://www.youtube.com/embed/";

export const moviesApi = {
  nowPlaying: async () => await api.get("movie/now_playing"),
  topRated: async () => await api.get("movie/top_rated"),
  popular: async () => await api.get("movie/popular"),
  upcoming: async () => await api.get("movie/upcoming"),
  detail: (movie_id: number) =>
    api.get(`movie/${movie_id}`, {
      params: { append_to_response: "videos" },
    }),
  search: async (term: string) =>
    await api.get("search/movie", {
      params: { query: term },
    }),
};

export const tvApi = {
  onTheAir: async () => await api.get("/tv/on_the_air"),
  topRated: async () => await api.get("/tv/top_rated"),
  popular: async () => await api.get("/tv/popular"),
  airingToday: async () => await api.get("/tv/airing_today"),
  detail: (tv_id: number) =>
    api.get(`tv/${tv_id}`, {
      params: { append_to_response: "seasons" },
    }),
  search: async (term: string) =>
    await api.get("search/tv", {
      params: { query: term },
    }),
};
