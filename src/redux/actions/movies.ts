import { ICommonMovie } from "../../types/types";

// 액션 타입
export const GET_MOVIES_NOW_PLAYING = "GET_MOVIES_NOW_PLAYING";
export const GET_MOVIES_TOP_RATED = "GET_MOVIES_TOP_RATED";
export const GET_MOVIES_POPULAR = "GET_MOVIES_POPULAR";
export const GET_MOVIES_UPCOMING = "GET_MOVIES_UPCOMING";
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL";

// 액션 인터페이스
export interface GetMoviesNowPlayingAction {
  type: typeof GET_MOVIES_NOW_PLAYING;
  data: ICommonMovie[];
}

export interface GetMoviesTopRatedAction {
  type: typeof GET_MOVIES_TOP_RATED;
  data: ICommonMovie[];
}

export interface GetMoviesPopularAction {
  type: typeof GET_MOVIES_POPULAR;
  data: ICommonMovie[];
}

export interface GetMoviesUpcomingAction {
  type: typeof GET_MOVIES_UPCOMING;
  data: ICommonMovie[];
}

export interface GetMoviesDetailAction {
  type: typeof GET_MOVIES_DETAIL;
  data: ICommonMovie[];
}

export const getMoviesNowPlaying = (
  data: ICommonMovie[]
): GetMoviesNowPlayingAction => {
  return {
    type: GET_MOVIES_NOW_PLAYING,
    data
  };
};

// 액션
export const getMoviesTopRated = (
  data: ICommonMovie[]
): GetMoviesTopRatedAction => {
  return {
    type: GET_MOVIES_TOP_RATED,
    data
  };
};

export const getMoviesPopular = (
  data: ICommonMovie[]
): GetMoviesPopularAction => {
  return {
    type: GET_MOVIES_POPULAR,
    data
  };
};

export const getMoviesUpcoming = (
  data: ICommonMovie[]
): GetMoviesUpcomingAction => {
  return {
    type: GET_MOVIES_UPCOMING,
    data
  };
};

export const getMoviesDetail = (
  data: ICommonMovie[]
): GetMoviesDetailAction => {
  return {
    type: GET_MOVIES_DETAIL,
    data
  };
};
