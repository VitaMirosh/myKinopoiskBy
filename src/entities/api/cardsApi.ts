import { baseApi } from "@/app/baseApi/baseApi.ts"
import type {
  BaseResponse,
  GenreResponse,
  KewordResponse,
  MoviesResponse,
} from "@/entities/model/types/baseResponse.ts"

const cardsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovie: build.query<BaseResponse<MoviesResponse>, void>({
      query: () => "/movie/popular",
    }),
    getTopRatedMovie: build.query<BaseResponse<MoviesResponse>, void>({
      query: () => "/movie/top_rated",
    }),
    getUpcomingMovie: build.query<BaseResponse<MoviesResponse>, void>({
      query: () => "/movie/upcoming",
    }),
    getNowPlayingMovie: build.query<BaseResponse<MoviesResponse>, void>({
      query: () => "movie/now_playing",
    }),
    getSearchKeyword: build.query<BaseResponse<KewordResponse>, string>({
      query: (search) => ({
        url: "search/collection",
        params: {
          query: search,
        },
      }),
    }),
    getGenres: build.query<GenreResponse, void>({
      query: () => "genre/movie/list",
    }),
  }),
})
export const {
  useGetPopularMovieQuery,
  useGetTopRatedMovieQuery,
  useGetUpcomingMovieQuery,
  useGetNowPlayingMovieQuery,
  useGetSearchKeywordQuery,
  useGetGenresQuery,
} = cardsApi
