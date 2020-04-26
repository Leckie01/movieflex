import { createAsyncAction, ActionType, createReducer } from "typesafe-actions";
import { ICommonMovie } from "../types/types";
import { AxiosError } from "axios";

export const GET_TV = "tv/GET_TV";
export const GET_TV_SUCCESS = "tv/GET_TV/SUCCESS";
export const GET_TV_FAILURE = "tv/GET_TV/FAILURE";

export const GET_NOWPLAYING = "tv/GET_NOWPLAYING";
export const GET_NOWPLAYING_SUCCESS = "tv/GET_NOWPLAYING_SUCCESS";
export const GET_NOWPLAYING_FAILURE = "tv/GET_NOWPLAYING_FAILURE";

export const GET_TOP_RATED = "tv/GET_TOP_RATED";
export const GET_TOP_RATED_SUCCESS = "tv/GET_TOP_RATED_SUCCESS";
export const GET_TOP_RATED_FAILURE = "tv/GET_TOP_RATED_FAILURE";

export const GET_POPULAR = "tv/GET_POPULAR";
export const GET_POPULAR_SUCCESS = "tv/GET_POPULAR_SUCCESS";
export const GET_POPULAR_FAILURE = "tv/GET_POPULAR_FAILURE";

export const GET_ONTHEAIR = "tv/GET_ONTHEAIR";
export const GET_ONTHEAIR_SUCCESS = "tv/GET_ONTHEAIR_SUCCESS";
export const GET_ONTHEAIR_FAILURE = "tv/GET_ONTHEAIR_FAILURE";

export const GET_DETAIL = "tv/GET_DETAIL";
export const GET_DETAIL_SUCCESS = "tv/GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILURE = "tv/GET_DETAIL_FAILURE";

export const getTVAsync = createAsyncAction(
  GET_TV,
  GET_TV_SUCCESS,
  GET_TV_FAILURE
)<undefined, ITV, AxiosError>();

export const getNowplayingAsync = createAsyncAction(
  GET_NOWPLAYING,
  GET_NOWPLAYING_SUCCESS,
  GET_NOWPLAYING_FAILURE
)<undefined, ICommonMovie[], AxiosError>();

export const getTopRatedAsync = createAsyncAction(
  GET_TOP_RATED,
  GET_TOP_RATED_SUCCESS,
  GET_TOP_RATED_FAILURE
)<undefined, ICommonMovie[], AxiosError>();

export const getOnTheAirAsync = createAsyncAction(
  GET_ONTHEAIR,
  GET_ONTHEAIR_SUCCESS,
  GET_ONTHEAIR_FAILURE
)<undefined, ICommonMovie[], AxiosError>();

export const getPopularAsync = createAsyncAction(
  GET_POPULAR,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAILURE
)<undefined, ICommonMovie[], AxiosError>();

export const getDetailAsync = createAsyncAction(
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILURE
)<number, ICommonMovie, AxiosError>();

export interface ITV {
  nowPlaying: ICommonMovie[];
  topRated: ICommonMovie[];
  popular: ICommonMovie[];
  onTheAir: ICommonMovie[];
}
export interface ITVInitialState {
  tv: {
    data: ITV | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  nowPlaying: {
    data: ICommonMovie[] | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  onTheAir: {
    data: ICommonMovie[] | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  topRated: {
    data: ICommonMovie[] | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  popular: {
    data: ICommonMovie[] | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
  detail: {
    data: ICommonMovie | null;
    isLoading: boolean;
    isLoaded: boolean;
    error: null | AxiosError;
  };
}

const initialState = {
  tv: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  nowPlaying: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  onTheAir: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  popular: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  topRated: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  detail: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null
  }
};

const actions = {
  getTVAsync,
  getNowplayingAsync,
  getTopRatedAsync,
  getOnTheAirAsync,
  getPopularAsync,
  getDetailAsync
};

type ActionAsyncTypes = ActionType<typeof actions>;

const tv = createReducer<ITVInitialState, ActionAsyncTypes>(initialState, {
  [GET_TV]: state => ({
    ...state,
    tv: {
      ...state.tv,
      isLoading: true
    }
  }),
  [GET_TV_SUCCESS]: (state, action) => ({
    ...state,
    tv: {
      ...state.tv,
      data: action.payload,
      isLoading: false,
      isLoaded: true
    }
  }),
  [GET_TV_FAILURE]: (state, action) => ({
    ...state,
    tv: { ...state.tv, data: null, isLoading: false, isLoaded: false },
    error: action.payload
  }),
  [GET_NOWPLAYING]: state => ({
    ...state,
    nowPlaying: {
      ...state.nowPlaying,
      isLoading: true
    }
  }),
  [GET_NOWPLAYING_SUCCESS]: (state, action) => ({
    ...state,
    nowPlaying: {
      ...state.nowPlaying,
      data: action.payload,
      isLoading: false,
      isLoaded: true,
      error: null
    }
  }),
  [GET_NOWPLAYING_FAILURE]: (state, action) => ({
    ...state,
    nowPlaying: {
      ...state.nowPlaying,
      data: null,
      isLoading: false,
      isLoaded: false,
      error: action.payload
    }
  }),
  [GET_TOP_RATED]: state => ({
    ...state,
    topRated: {
      ...state.topRated,
      isLoading: true
    }
  }),
  [GET_TOP_RATED_SUCCESS]: (state, action) => ({
    ...state,
    topRated: {
      ...state.topRated,
      data: action.payload,
      isLoading: false,
      isLoaded: true,
      error: null
    }
  }),
  [GET_TOP_RATED_FAILURE]: (state, action) => ({
    ...state,
    topRated: {
      ...state.topRated,
      data: null,
      isLoading: false,
      isLoaded: false,
      error: action.payload
    }
  }),
  [GET_ONTHEAIR]: state => ({
    ...state,
    onTheAir: {
      ...state.onTheAir,
      isLoading: true
    }
  }),
  [GET_ONTHEAIR_SUCCESS]: (state, action) => ({
    ...state,
    onTheAir: {
      ...state.onTheAir,
      data: action.payload,
      isLoading: false,
      isLoaded: true,
      error: null
    }
  }),
  [GET_ONTHEAIR_FAILURE]: (state, action) => ({
    ...state,
    onTheAir: {
      ...state.onTheAir,
      data: null,
      isLoading: false,
      isLoaded: false,
      error: action.payload
    }
  }),
  [GET_POPULAR]: state => ({
    ...state,
    popular: {
      ...state.popular,
      isLoading: true
    }
  }),
  [GET_POPULAR_SUCCESS]: (state, action) => ({
    ...state,
    popular: {
      ...state.popular,
      data: action.payload,
      isLoading: false,
      isLoaded: true,
      error: null
    }
  }),
  [GET_POPULAR_FAILURE]: (state, action) => ({
    ...state,
    popular: {
      ...state.popular,
      data: null,
      isLoading: false,
      isLoaded: false,
      error: action.payload
    }
  }),
  [GET_DETAIL]: state => ({
    ...state,
    detail: {
      ...state.detail,
      isLoading: true
    }
  }),
  [GET_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    detail: {
      ...state.detail,
      data: action.payload,
      isLoading: false,
      isLoaded: true,
      error: null
    }
  }),
  [GET_DETAIL_FAILURE]: (state, action) => ({
    ...state,
    detail: {
      ...state.detail,
      data: null,
      isLoading: false,
      isLoaded: false,
      error: action.payload
    }
  })
});

export default tv;
