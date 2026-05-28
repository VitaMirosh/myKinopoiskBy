import {useGetPopularMovieQuery} from '@/entities/api/cardsApi.ts';
import {Cards} from '@/shared/ui/cards/Cards.tsx';


export const PopularMovies =()=>{
  const {data} = useGetPopularMovieQuery()

  return(
    <div>
      <Cards data={data} />
    </div>
    )
}