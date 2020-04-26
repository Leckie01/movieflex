import { put, call, takeLatest } from "redux-saga/effects";
import { tvApi } from "../../api";
import {
  getTVAsync,
  getNowplayingAsync,
  getTopRatedAsync,
  getPopularAsync,
  getOnTheAirAsync,
  GET_TV,
  GET_NOWPLAYING,
  GET_POPULAR,
  GET_ONTHEAIR,
  getDetailAsync,
} from "../tv";
import { GET_TOP_RATED } from "../movie";

export function* getTVSaga() {
  try {
    const {
      data: { results: nowPlaying },
    } = yield call(tvApi.airingToday);
    const {
      data: { results: topRated },
    } = yield call(tvApi.topRated);
    const {
      data: { results: onTheAir },
    } = yield call(tvApi.onTheAir);
    const {
      data: { results: popular },
    } = yield call(tvApi.popular);

    const shows = { nowPlaying, topRated, onTheAir, popular };
    yield put(getTVAsync.success(shows));
  } catch (error) {
    yield put(getTVAsync.failure(error));
  }
}

export function* getNowplayingSaga() {
  try {
    const {
      data: { results },
    } = yield call(tvApi.airingToday);
    yield put(getNowplayingAsync.success(results));
  } catch (error) {
    yield put(getNowplayingAsync.failure(error));
  }
}

export function* getTopRatedSaga() {
  try {
    const {
      data: { results },
    } = yield call(tvApi.topRated);
    yield put(getTopRatedAsync.success(results));
  } catch (error) {
    yield put(getTopRatedAsync.failure(error));
  }
}

export function* getPopularSaga() {
  try {
    const {
      data: { results },
    } = yield call(tvApi.popular);
    yield put(getPopularAsync.success(results));
  } catch (error) {
    yield put(getPopularAsync.failure(error));
  }
}

export function* getOnTheAirSaga() {
  try {
    const {
      data: { results },
    } = yield call(tvApi.onTheAir);
    yield put(getOnTheAirAsync.success(results));
  } catch (error) {
    yield put(getOnTheAirAsync.failure(error));
  }
}

export function* getDetailSaga(
  action: ReturnType<typeof getDetailAsync.request>
) {
  const {
    data: { results },
  } = yield call(tvApi.detail, action.payload);
  console.log(results);
  yield put(getDetailAsync.success(results));
  try {
  } catch (error) {
    yield put(getDetailAsync.failure(error));
  }
}

export function* tvSaga() {
  yield takeLatest(GET_TV, getTVSaga);
  yield takeLatest(GET_NOWPLAYING, getNowplayingSaga);
  yield takeLatest(GET_TOP_RATED, getTopRatedSaga);
  yield takeLatest(GET_POPULAR, getPopularSaga);
  yield takeLatest(GET_ONTHEAIR, getOnTheAirSaga);
}
