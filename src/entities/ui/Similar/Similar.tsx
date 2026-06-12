import { useGetPopularMovieQuery } from "@/entities/api/cardsApi.ts"
import { Cards } from "@/shared/ui/cards/Cards.tsx"
import s from "./Similar.module.css"

type Props = {
  id: number[]
}

export const Similar = ({ id }: Props) => {
  const { data } = useGetPopularMovieQuery({ pageNumber: 4 })

  const newData = data?.results.filter((movie) => movie.genre_ids.some((genre) => id.includes(genre)))

  return (
    <>
      <p className={s.similarTitle}>Similar Movies</p>
      <div className={s.similarContainer}>
        <Cards filtered={newData} className={s.similar} />
      </div>
    </>
  )
}
