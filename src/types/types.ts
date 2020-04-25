export interface ICommonMovie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path?: string;
  release_data?: string;
  overview?: string;
  original_language?: string;
  original_title?: string;
  genres?: [{ id: number; name: string }];
  spoken_languages?: [{ iso_639_1: string; name: string }];
  seasons?: ISeasons[];
  runtime?: number;
  vote_average?: number;
  videos?: {
    results: IVideo[];
  };
}

export interface IVideo {
  id: string;
  iso_693_1: string;
  key: string;
  name: string;
  site: string;
  size: string;
  type: string;
}

export interface ISeasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

declare module "*.svg";
