import { ActionType, createReducer, createAsyncAction } from "typesafe-actions";
import { ICommonMovie } from "../types/types";
import { AxiosError } from "axios";

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

interface IInitialState {
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
  getNowplayingAsync,
  getTopRatedAsync,
  getUpcomingAsync,
  getPopularAsync,
  getDetailAsync
};

type ActionAsyncTypes = ActionType<typeof actions>;

const movie = createReducer<IInitialState, ActionAsyncTypes>(initialState, {
  [GET_NOWPLAYING_SUCCESS]: (state, action) => ({
    ...state,
    nowPlaying: {
      movies: action.payload,
      isLoading: false,
      isLoaded: true,
      error: null
    }
  }),
  [GET_NOWPLAYING_FAILURE]: (state, action) => ({
    ...state,
    nowPlaying: {
      movies: null,
      isLoading: false,
      isLoaded: false,
      error: action.payload
    }
  })
});
