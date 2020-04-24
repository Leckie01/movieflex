import { combineReducers } from "redux";
import movie from "./movie";

const rootReducer = combineReducers({ movie });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
