import { useGetTopRatedMovieQuery } from "@/entities/api/cardsApi.ts"
import { Cards } from "@/shared/ui/cards/Cards.tsx"
import s from "./../CategoriMovies.module.css"

type Props = {
  className?: string
}
export const TopRatedMovies = ({ className }: Props) => {
  const { data } = useGetTopRatedMovieQuery()

  return (
    <div className={s.container}>
      <h2 className={s.title}>Top rated Movies</h2>
      <Cards data={data} className={className} />
    </div>
  )
}
