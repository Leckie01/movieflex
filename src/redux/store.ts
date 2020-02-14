import { createStore } from "redux";

import reducers from "./reducers";

const initailState = {
  movies: {
    nowPlaying: null,
    topRated: null,
    popular: null,
    upcoming: null,
    detail: null
  },
  tv: {
    onTheAir: null,
    topRated: null,
    popular: null,
    airingToday: null,
    detail: null
  }
};

const store = createStore(reducers, initailState);

export default store;
