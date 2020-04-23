import { ActionType, createReducer, createAsyncAction } from "typesafe-actions";
import { ICommonMovie } from "../types/types";
import { AxiosError } from "axios";
import { call } from "redux-saga/effects";
import { moviesApi } from "../api";

const GET_MOVIES = "movie/GET_MOVIES";
const GET_MOIVES_SUCCESS = "moive/GET_MOIVES_SUCCESS";
const GET_MOVIES_ERROR = "movie/GET_MOVIES_ERROR";

const getMoviesAsync = createAsyncAction(
  GET_MOVIES,
  GET_MOIVES_SUCCESS,
  GET_MOVIES_ERROR
)<string, ICommonMovie[], AxiosError>();

type MovieActionType = ActionType<typeof getMoviesAsync>;

function* getMoviesSaga(action: ReturnType<typeof getMoviesAsync.request>) {
  try {
    const movies: ICommonMovie[] = yield call(moviesApi.nowPlaying);
  } catch (error) {}
}

const initialState = {
  movies: null
};

type initialStateType = {
  movies: null | {
    nowplaying: ICommonMovie[] | null;
    topRated: ICommonMovie[] | null;
    popular: ICommonMovie[] | null;
    upcoming: ICommonMovie[] | null;
  };
};

const movie = createReducer<initialStateType, MovieActionType>(
  initialState,
  {}
);
