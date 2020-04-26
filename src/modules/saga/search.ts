import { put, call, takeLatest } from "redux-saga/effects";
import { moviesApi, tvApi } from "../../api";
import {
  searchAllAsync,
  searchMoviesAsync,
  searchTVAsync,
  SEARCH_ALL,
  SEARCH_MOVIES,
  SEARCH_TV,
} from "../search";

export function* searchAllSaga(
  action: ReturnType<typeof searchAllAsync.request>
) {
  try {
    const {
      data: { results: movies },
    } = yield call(moviesApi.search, action.payload);
    const {
      data: { results: tv },
    } = yield call(tvApi.search, action.payload);

    const searchResults = { movies, tv };
    yield put(searchAllAsync.success(searchResults));
  } catch (error) {
    yield put(searchAllAsync.failure(error));
  }
}

export function* searchMoviesSaga(
  action: ReturnType<typeof searchMoviesAsync.request>
) {
  try {
    const {
      data: { results },
    } = yield call(moviesApi.search, action.payload);
    yield put(searchMoviesAsync.success(results));
  } catch (error) {
    yield put(searchMoviesAsync.failure(error));
  }
}

export function* searchTVSaga(
  action: ReturnType<typeof searchTVAsync.request>
) {
  try {
    const {
      data: { results },
    } = yield call(tvApi.search, action.payload);
    yield put(searchTVAsync.success(results));
  } catch (error) {
    yield put(searchTVAsync.failure(error));
  }
}

export function* searchSaga() {
  yield takeLatest(SEARCH_ALL, searchAllSaga);
  yield takeLatest(SEARCH_MOVIES, searchMoviesSaga);
  yield takeLatest(SEARCH_TV, searchTVSaga);
}
