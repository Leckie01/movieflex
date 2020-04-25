import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import movie from "./movie";
import { movieSaga } from "./saga/movie";

const rootReducer = combineReducers({ movie });

export function* rootSaga() {
  yield all([movieSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
