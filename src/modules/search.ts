import { createAsyncAction, ActionType, createReducer } from "typesafe-actions";
import { ICommonMovie } from "../types/types";
import { AxiosError } from "axios";

interface ISearchResults {
  movies: ICommonMovie[];
  tv: ICommonMovie[];
}

interface IInitialState {
  all: ISearchResults | null;
  movies: ICommonMovie[] | null;
  tv: ICommonMovie[] | null;
  isLoading: boolean;
  isLoaded: boolean;
  error: AxiosError | null;
}

export const SEARCH_ALL = "search/SEARCH_ALL";
export const SEARCH_ALL_SUCCESS = "search/SEARCH_ALL_SUCCESS";
export const SEARCH_ALL_FAILURE = "search/SEARCH_ALL_FAILURE";

export const SEARCH_MOVIES = "search/SEARCH_MOVIES";
export const SEARCH_MOVIES_SUCCESS = "search/SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILURE = "serach/SEARCH_MOVIES_FAILURE";

export const SEARCH_TV = "search/SEARCH_TV";
export const SEARCH_TV_SUCCESS = "search/SEARCH_TV_SUCCESS";
export const SEARCH_TV_FAILURE = "serach/SEARCH_TV_FAILURE";

export const searchAllAsync = createAsyncAction(
  SEARCH_ALL,
  SEARCH_ALL_SUCCESS,
  SEARCH_ALL_FAILURE
)<string, ISearchResults, AxiosError>();

export const searchMoviesAsync = createAsyncAction(
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE
)<string, ICommonMovie[], AxiosError>();

export const searchTVAsync = createAsyncAction(
  SEARCH_TV,
  SEARCH_TV_SUCCESS,
  SEARCH_TV_FAILURE
)<string, ICommonMovie[], AxiosError>();

const initialState = {
  all: null,
  movies: null,
  tv: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

const actions = { searchAllAsync, searchMoviesAsync, searchTVAsync };

type ActionAsyncTypes = ActionType<typeof actions>;

const search = createReducer<IInitialState, ActionAsyncTypes>(initialState, {
  [SEARCH_ALL]: (state) => ({ ...state, isLoading: true }),
  [SEARCH_ALL_SUCCESS]: (state, action) => ({
    ...state,
    all: action.payload,
    isLoading: false,
    isLoaded: true,
  }),
  [SEARCH_ALL_FAILURE]: (state, action) => ({
    ...state,
    all: null,
    isLoading: false,
    isLoaded: false,
    error: action.payload,
  }),
  [SEARCH_MOVIES]: (state) => ({ ...state, isLoading: true }),
  [SEARCH_MOVIES_SUCCESS]: (state, action) => ({
    ...state,
    movies: action.payload,
    isLoading: false,
    isLoaded: true,
  }),
  [SEARCH_TV]: (state) => ({ ...state, isLoading: true }),
  [SEARCH_TV_SUCCESS]: (state, action) => ({
    ...state,
    tv: action.payload,
    isLoading: false,
    isLoaded: true,
  }),
  [SEARCH_TV_FAILURE]: (state, action) => ({
    ...state,
    tv: null,
    isLoading: false,
    isLoaded: false,
    error: action.payload,
  }),
});

export default search;
