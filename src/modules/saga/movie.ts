import { put, call, takeLatest } from "redux-saga/effects";
import {
  GET_NOWPLAYING,
  getNowplayingAsync,
  getPopularAsync,
  GET_POPULAR,
  getUpcomingAsync,
  getTopRatedAsync,
  GET_TOP_RATED,
  GET_UPCOMING,
  GET_MOVIES,
  getMoviesAsync,
  getDetailAsync,
  GET_DETAIL
} from "../movie";
import { moviesApi } from "../../api";

export function* getMoviesSaga() {
  try {
    const {
      data: { results: nowPlaying }
    } = yield call(moviesApi.nowPlaying);
    const {
      data: { results: topRated }
    } = yield call(moviesApi.topRated);
    const {
      data: { results: upcoming }
    } = yield call(moviesApi.upcoming);
    const {
      data: { results: popular }
    } = yield call(moviesApi.popular);

    const movies = { nowPlaying, topRated, upcoming, popular };
    yield put(getMoviesAsync.success(movies));
  } catch (error) {
    yield put(getMoviesAsync.failure(error));
  }
}

export function* getNowplayingSaga() {
  try {
    const {
      data: { results }
    } = yield call(moviesApi.nowPlaying);
    yield put(getNowplayingAsync.success(results));
  } catch (error) {
    yield put(getNowplayingAsync.failure(error));
  }
}

export function* getTopRatedSaga() {
  try {
    const {
      data: { results }
    } = yield call(moviesApi.topRated);
    yield put(getTopRatedAsync.success(results));
  } catch (error) {
    yield put(getTopRatedAsync.failure(error));
  }
}

export function* getPopularSaga() {
  try {
    const {
      data: { results }
    } = yield call(moviesApi.popular);
    yield put(getPopularAsync.success(results));
  } catch (error) {
    yield put(getPopularAsync.failure(error));
  }
}

export function* getUpcomingSaga() {
  try {
    const {
      data: { results }
    } = yield call(moviesApi.upcoming);
    yield put(getUpcomingAsync.success(results));
  } catch (error) {
    yield put(getUpcomingAsync.failure(error));
  }
}

export function* getDetailSaga(
  action: ReturnType<typeof getDetailAsync.request>
) {
  try {
    const { data } = yield call(moviesApi.detail, action.payload);
    yield put(getDetailAsync.success(data));
  } catch (error) {
    yield put(getDetailAsync.failure(error));
  }
}

export function* movieSaga() {
  yield takeLatest(GET_MOVIES, getMoviesSaga);
  yield takeLatest(GET_NOWPLAYING, getNowplayingSaga);
  yield takeLatest(GET_TOP_RATED, getTopRatedSaga);
  yield takeLatest(GET_POPULAR, getPopularSaga);
  yield takeLatest(GET_UPCOMING, getUpcomingSaga);
  yield takeLatest(GET_DETAIL, getDetailSaga);
}
