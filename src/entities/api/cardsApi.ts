import {baseApi} from '@/app/baseApi/baseApi.ts';
import type {BaseResponse} from '@/entities/model/types/baseResponse.ts';


const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
      getPopularMovie: build.query<BaseResponse,void>({
        query: () => '/movie/popular'
      }),
      getTopRatedMovie: build.query<BaseResponse,void>({
        query: () => '/movie/top_rated'
      }),
      getUpcomingMovie: build.query<BaseResponse,void>({
        query: () => '/movie/upcoming'
      }),
      getNowPlayingMovie: build.query<BaseResponse,void>({
        query: () => 'movie/now_playing'
      }),
    }
  ),

})
export const { useGetPopularMovieQuery, useGetTopRatedMovieQuery,useGetUpcomingMovieQuery,useGetNowPlayingMovieQuery} = cardsApi;
