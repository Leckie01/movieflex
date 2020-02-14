import {
  GetMoviesNowPlayingAction,
  GET_MOVIES_NOW_PLAYING,
  GetMoviesTopRatedAction,
  GetMoviesPopularAction,
  GetMoviesUpcomingAction,
  GetMoviesDetailAction,
  GET_MOVIES_TOP_RATED,
  GET_MOVIES_POPULAR,
  GET_MOVIES_UPCOMING,
  GET_MOVIES_DETAIL
} from "../actions/movies";

type ActionTypes =
  | GetMoviesNowPlayingAction
  | GetMoviesTopRatedAction
  | GetMoviesPopularAction
  | GetMoviesUpcomingAction
  | GetMoviesDetailAction;

const initialState = {
  nowPlaying: null,
  topRated: null,
  popular: null,
  upcoming: null,
  detail: null
};

const moviesReducer = (prevState = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_MOVIES_NOW_PLAYING: {
      return {
        ...prevState,
        data: action.data
      };
    }
    case GET_MOVIES_TOP_RATED: {
      return {
        ...prevState,
        data: action.data
      };
    }
    case GET_MOVIES_POPULAR: {
      return {
        ...prevState,
        data: action.data
      };
    }
    case GET_MOVIES_UPCOMING: {
      return {
        ...prevState,
        data: action.data
      };
    }
    case GET_MOVIES_DETAIL: {
      return {
        ...prevState,
        data: action.data
      };
    }
    default:
      return {
        ...prevState
      };
  }
};

export default moviesReducer;
