import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import movie from "./movie";
import { movieSaga } from "./saga/movie";
import tv from "./tv";
import { tvSaga } from "./saga/tv";
import search from "./search";
import { searchSaga } from "./saga/search";

const rootReducer = combineReducers({ movie, tv, search });

export function* rootSaga() {
  yield all([movieSaga(), tvSaga(), searchSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
