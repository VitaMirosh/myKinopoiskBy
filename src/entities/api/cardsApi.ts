import { baseApi } from "@/app/baseApi/baseApi.ts"
import type {
  BaseResponse,
  CreditsResponse,
  DetailsResponse,
  GenreResponse,
  KewordResponse,
  MoviesResponse,
} from "@/entities/model/types/baseResponse.ts"

const cardsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovie: build.query<BaseResponse<MoviesResponse>, { pageNumber: number }>({
      query: ({ pageNumber }) => ({
        url: "/movie/popular",
        params: {
          page: pageNumber,
        },
      }),
    }),
    getTopRatedMovie: build.query<BaseResponse<MoviesResponse>, { pageNumber: number }>({
      query: ({ pageNumber }) => ({
        url: "/movie/top_rated",
        params: {
          page: pageNumber,
        },
      }),
    }),
    getUpcomingMovie: build.query<BaseResponse<MoviesResponse>, { pageNumber: number }>({
      query: ({ pageNumber }) => ({
        url: "/movie/upcoming",
        params: {
          page: pageNumber,
        },
      }),
    }),
    getNowPlayingMovie: build.query<BaseResponse<MoviesResponse>, { pageNumber: number }>({
      query: ({ pageNumber }) => ({
        url: "movie/now_playing",
        params: {
          page: pageNumber,
        },
      }),
    }),
    getSearchKeyword: build.query<BaseResponse<KewordResponse>, { search: string; page?: number }>({
      query: ({ search, page = 1 }) => ({
        url: "search/collection",
        params: {
          query: search,
          page,
        },
      }),
    }),
    getGenres: build.query<GenreResponse, void>({
      query: () => "genre/movie/list",
    }),
    getDetailsMovie: build.query<DetailsResponse, number>({
      query: (id) => ({
        url: `movie/${id}`,
      }),
    }),
    getMovieCredits: build.query<CreditsResponse, number>({
      query: (id) => ({
        url: `movie/${id}/credits`,
      }),
    }),
  }),
})
export const {
  useGetPopularMovieQuery,
  useGetTopRatedMovieQuery,
  useGetUpcomingMovieQuery,
  useGetNowPlayingMovieQuery,
  useLazyGetSearchKeywordQuery,
  useGetGenresQuery,
  useGetDetailsMovieQuery,
  useGetMovieCreditsQuery,
} = cardsApi
