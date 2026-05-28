import {useGetTopRatedMovieQuery} from '@/entities/api/cardsApi.ts';
import {Cards} from '@/shared/ui/cards/Cards.tsx';

export const TopRatedMovies = ()=>{

  const {data}=useGetTopRatedMovieQuery()


  return (
    <div>
     <Cards data={data}/>
    </div>
  )
 }