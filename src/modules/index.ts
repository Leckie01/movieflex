import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import movie from "./movie";
import { movieSaga } from "./saga/movie";
import tv from "./tv";
import { tvSaga } from "./saga/tv";

const rootReducer = combineReducers({ movie, tv });

export function* rootSaga() {
  yield all([movieSaga(), tvSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
