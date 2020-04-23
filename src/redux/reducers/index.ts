import { combineReducers } from "redux";
import moviesReducer from "./movies";

const reducer = combineReducers({
  movies: moviesReducer
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
