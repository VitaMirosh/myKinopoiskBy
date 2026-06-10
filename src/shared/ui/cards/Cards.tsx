import s from "./Cards.module.css"
import type { BaseResponse, MoviesResponse } from "@/entities/model/types/baseResponse.ts"
import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"
import { Btn } from "@/shared/ui/Btn"
import like from "./../../../assets/img/like.svg"
import { useAppDispatch } from "@/app/hooks/useDispatchType.ts"
import { toggleFavoriteMovieAC } from "@/app/app-slice/app-slice.ts"

type Props = {
  data?: BaseResponse<MoviesResponse>
  className?: string
  filtered?: MoviesResponse[]
}

export const Cards = ({ data, className, filtered }: Props) => {
  const dispatch = useAppDispatch()
  const filteredResponse: MoviesResponse[] = filtered && filtered.length > 0 ? filtered : (data?.results ?? [])
  const getFavoriteMovies = (id: number) => {
    const movie = filteredResponse.find((m) => m.id === id)
    if (!movie) return
    dispatch(toggleFavoriteMovieAC({ movie }))
  }

  return (
    <div className={className ? className : s.container}>
      {filteredResponse.map((cart) => {
        return (
          <ul key={cart.id}>
            <li className={s.cart}>
              <Btn className={s.btn} onClick={() => getFavoriteMovies && cart.id && getFavoriteMovies?.(cart.id)}>
                <img src={like} />
              </Btn>
              {cart.vote_average && (
                <div className={cart.vote_average > 7.5 ? s.vote : cart.vote_average > 5.5 ? s.medVote : s.smallVote}>
                  {cart.vote_average.toFixed(1)}
                </div>
              )}
              {cart.poster_path && (
                <div className={s.imgWrap}>
                  <img src={getImageUrl(cart.poster_path, "w500")} alt={cart.title} className={s.img} />
                </div>
              )}
              {cart.title}
            </li>
          </ul>
        )
      })}
    </div>
  )
}
