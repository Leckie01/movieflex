import { COMMON_MOVIE_TYPE } from "../../types/types";

// 액션 타입
export const GET_MOVIES_NOW_PLAYING = "GET_MOVIES_NOW_PLAYING";
export const GET_MOVIES_TOP_RATED = "GET_MOVIES_TOP_RATED";
export const GET_MOVIES_POPULAR = "GET_MOVIES_POPULAR";
export const GET_MOVIES_UPCOMING = "GET_MOVIES_UPCOMING";
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL";

// 액션 인터페이스
export interface GetMoviesNowPlayingAction {
  type: typeof GET_MOVIES_NOW_PLAYING;
  data: COMMON_MOVIE_TYPE[];
}

export interface GetMoviesTopRatedAction {
  type: typeof GET_MOVIES_TOP_RATED;
  data: COMMON_MOVIE_TYPE[];
}

export interface GetMoviesPopularAction {
  type: typeof GET_MOVIES_POPULAR;
  data: COMMON_MOVIE_TYPE[];
}

export interface GetMoviesUpcomingAction {
  type: typeof GET_MOVIES_UPCOMING;
  data: COMMON_MOVIE_TYPE[];
}

export interface GetMoviesDetailAction {
  type: typeof GET_MOVIES_DETAIL;
  data: COMMON_MOVIE_TYPE[];
}

export const getMoviesNowPlaying = (
  data: COMMON_MOVIE_TYPE[]
): GetMoviesNowPlayingAction => {
  return {
    type: GET_MOVIES_NOW_PLAYING,
    data
  };
};

// 액션
export const getMoviesTopRated = (
  data: COMMON_MOVIE_TYPE[]
): GetMoviesTopRatedAction => {
  return {
    type: GET_MOVIES_TOP_RATED,
    data
  };
};

export const getMoviesPopular = (
  data: COMMON_MOVIE_TYPE[]
): GetMoviesPopularAction => {
  return {
    type: GET_MOVIES_POPULAR,
    data
  };
};

export const getMoviesUpcoming = (
  data: COMMON_MOVIE_TYPE[]
): GetMoviesUpcomingAction => {
  return {
    type: GET_MOVIES_UPCOMING,
    data
  };
};

export const getMoviesDetail = (
  data: COMMON_MOVIE_TYPE[]
): GetMoviesDetailAction => {
  return {
    type: GET_MOVIES_DETAIL,
    data
  };
};
