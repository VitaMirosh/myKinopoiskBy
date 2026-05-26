import {baseApi} from '@/app/baseApi/baseApi.ts';
import type {BaseResponse, TopRatedBaseResponse} from '@/entities/model/types/baseResponse.ts';


const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
      getPopularMovie: build.query<BaseResponse,void>({
        query: () => '/movie/popular'
      }),
      getTopRated: build.query<TopRatedBaseResponse,void>({
        query: () => '/movie/top_rated'
      }),
    }
  ),

})
export const { useGetPopularMovieQuery, useGetTopRatedQuery} = cardsApi;
