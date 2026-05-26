import s from './Cards.module.css'
import {useGetPopularMovieQuery} from '@/entities/api/cardsApi.ts';
import {getImageUrl} from '@/app/baseApi/baseImageApi.ts';



export const Cards =()=>{
  const {data} = useGetPopularMovieQuery()


  return(
    <div className={s.container}>
      {data?.results.map((cart)=>{
        return(
         <ul>
           <li key={cart.id} className={s.cart}>
            <div className={s.vote}>{cart.vote_average?.toFixed(1)}</div>
             {cart.poster_path && (
               <img
                 src={getImageUrl(cart.poster_path, 'w500')}
                 alt={cart.title}
                 width={150}
                 height={220}
               />)}
             {cart.title}
           </li>
         </ul>
        )
      })}
    </div>
    )
}