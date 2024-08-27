export const url = "https://api.themoviedb.org/3";
export const imagePrefix = "https://image.tmdb.org/t/p/original";
export const tmdbApiKey = process.env.TMDB_API_KEY;

export type TmdbMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};
