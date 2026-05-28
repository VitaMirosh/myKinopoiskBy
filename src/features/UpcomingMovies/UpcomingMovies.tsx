import { useGetUpcomingMovieQuery} from '@/entities/api/cardsApi.ts';
import {Cards} from '@/shared/ui/cards/Cards.tsx';

export const UpcomingMovies =()=>{
  const {data} = useGetUpcomingMovieQuery()


  return(
    <div>
      <Cards data={data} />
    </div>
  )
}