import { useGetPopularMovieQuery } from "@/entities/api/cardsApi.ts"
import { Cards } from "@/shared/ui/cards/Cards.tsx"
import s from "./../CategoriMovies.module.css"
type Props = {
  className?: string
}
export const PopularMovies = ({ className }: Props) => {
  const { data } = useGetPopularMovieQuery()

  return (
    <div className={s.container}>
      <h2 className={s.title}>Popular Movies</h2>
      <Cards data={data} className={className} />
    </div>
  )
}
