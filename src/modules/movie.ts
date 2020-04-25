import { ActionType, createReducer, createAsyncAction } from "typesafe-actions";
import { ICommonMovie } from "../types/types";
import { AxiosError } from "axios";

export const GET_MOVIES = "movie/GET_MOVIES";
export const GET_MOVIES_SUCCESS = "movie/GET_MOVIES/SUCCESS";
export const GET_MOVIES_FAILURE = "movie/GET_MOVIES/FAILURE";

export const GET_NOWPLAYING = "movie/GET_NOWPLAYING";
export const GET_NOWPLAYING_SUCCESS = "movie/GET_NOWPLAYING_SUCCESS";
export const GET_NOWPLAYING_FAILURE = "movie/GET_NOWPLAYING_FAILURE";

export const GET_TOP_RATED = "movie/GET_TOP_RATED";
export const GET_TOP_RATED_SUCCESS = "movie/GET_TOP_RATED_SUCCESS";
export const GET_TOP_RATED_FAILURE = "movie/GET_TOP_RATED_FAILURE";

export const GET_POPULAR = "movie/GET_POPULAR";
export const GET_POPULAR_SUCCESS = "movie/GET_POPULAR_SUCCESS";
export const GET_POPULAR_FAILURE = "movie/GET_POPULAR_FAILURE";

export const GET_UPCOMING = "movie/GET_UPCOMING";
export const GET_UPCOMING_SUCCESS = "movie/GET_UPCOMING_SUCCESS";
export const GET_UPCOMING_FAILURE = "movie/GET_UPCOMING_FAILURE";

export const GET_DETAIL = "movie/GET_DETAIL";
export const GET_DETAIL_SUCCESS = "movie/GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILURE = "movie/GET_DETAIL_FAILURE";

export const getMoviesAsync = createAsyncAction(
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE
)<undefined, IMovies, AxiosError>();

export const getNowplayingAsync = createAsyncAction(
  GET_NOWPLAYING,
  GET_NOWPLAYING_SUCCESS,
  GET_NOWPLAYING_FAILURE
)<undefined, ICommonMovie[], AxiosError>();

export const getTopRatedAsync = createAsyncAction(
  GET_TOP_RATED,
  GET_TOP_RATED_SUCCESS,
  GET_TOP_RATED_FAILURE
)<undefined, ICommonMovie[], AxiosError>();

export const getUpcomingAsync = createAsyncAction(
  GET_UPCOMING,
  GET_UPCOMING_SUCCESS,
  GET_UPCOMING_FAILURE
)<undefined, ICommonMovie[], AxiosError>();

export const getPopularAsync = createAsyncAction(
  GET_POPULAR,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAILURE
)<undefined, ICommonMovie[], AxiosError>();

export const getDetailAsync = createAsyncAction(
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILURE
)<number, ICommonMovie[], AxiosError>();

export interface IMovies {
  nowPlaying: ICommonMovie[];
  topRated: ICommonMovie[];
  upcoming: ICommonMovie[];
  popular: ICommonMovie[];
}
export interface IMovieInitialState {
  movies: {
    data: IMovies | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  nowPlaying: {
    movies: ICommonMovie[] | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  upcoming: {
    movies: ICommonMovie[] | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  topRated: {
    movies: ICommonMovie[] | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  popular: {
    movies: ICommonMovie[] | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  detail: {
    movies: ICommonMovie | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
}

const initialState = {
  movies: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  nowPlaying: {
    movies: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  upcoming: {
    movies: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  popular: {
    movies: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  topRated: {
    movies: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  detail: {
    movies: null,
    isLoading: false,
    isLoaded: false,
    error: null
  }
};

const actions = {
  getMoviesAsync,
  getNowplayingAsync,
  getTopRatedAsync,
  getUpcomingAsync,
  getPopularAsync,
  getDetailAsync
};

type ActionAsyncTypes = ActionType<typeof actions>;

const movie = createReducer<IMovieInitialState, ActionAsyncTypes>(
  initialState,
  {
    [GET_MOVIES]: state => ({
      ...state,
      movies: {
        ...state.movies
      },
      isLoading: true
    }),
    [GET_MOVIES_SUCCESS]: (state, action) => ({
      ...state,
      movies: {
        ...state.movies,
        data: action.payload
      },
      isLoading: false,
      isLoaded: true
    }),
    [GET_MOVIES_FAILURE]: (state, action) => ({
      ...state,
      movies: { ...state.movies },
      error: action.payload
    }),
    [GET_NOWPLAYING]: state => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        isLoading: true
      }
    }),
    [GET_NOWPLAYING_SUCCESS]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: action.payload,
        isLoading: false,
        isLoaded: true,
        error: null
      }
    }),
    [GET_NOWPLAYING_FAILURE]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: null,
        isLoading: false,
        isLoaded: false,
        error: action.payload
      }
    }),
    [GET_TOP_RATED]: state => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        isLoading: true
      }
    }),
    [GET_TOP_RATED_SUCCESS]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: action.payload,
        isLoading: false,
        isLoaded: true,
        error: null
      }
    }),
    [GET_TOP_RATED_FAILURE]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: null,
        isLoading: false,
        isLoaded: false,
        error: action.payload
      }
    }),
    [GET_UPCOMING]: state => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        isLoading: true
      }
    }),
    [GET_UPCOMING_SUCCESS]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: action.payload,
        isLoading: false,
        isLoaded: true,
        error: null
      }
    }),
    [GET_UPCOMING_FAILURE]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: null,
        isLoading: false,
        isLoaded: false,
        error: action.payload
      }
    }),
    [GET_POPULAR]: state => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        isLoading: true
      }
    }),
    [GET_POPULAR_SUCCESS]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: action.payload,
        isLoading: false,
        isLoaded: true,
        error: null
      }
    }),
    [GET_POPULAR_FAILURE]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: null,
        isLoading: false,
        isLoaded: false,
        error: action.payload
      }
    }),
    [GET_DETAIL]: state => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        isLoading: true
      }
    }),
    [GET_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: action.payload,
        isLoading: false,
        isLoaded: true,
        error: null
      }
    }),
    [GET_DETAIL_FAILURE]: (state, action) => ({
      ...state,
      nowPlaying: {
        ...state.nowPlaying,
        movies: null,
        isLoading: false,
        isLoaded: false,
        error: action.payload
      }
    })
  }
);

export default movie;
