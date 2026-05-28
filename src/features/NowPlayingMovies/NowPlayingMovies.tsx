import {useGetNowPlayingMovieQuery} from '@/entities/api/cardsApi.ts';
import {Cards} from '@/shared/ui/cards/Cards.tsx';


export const NowPlayingMovies =()=>{
  const {data} = useGetNowPlayingMovieQuery()


  return(
    <div >
      <Cards data={data} />
    </div>
  )
}