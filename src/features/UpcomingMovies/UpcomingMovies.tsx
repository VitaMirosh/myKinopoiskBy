import { useGetUpcomingMovieQuery } from "@/entities/api/cardsApi.ts"
import { Cards } from "@/shared/ui/cards/Cards.tsx"
import s from "./../CategoriMovies.module.css"
type Props = {
  className?: string
}
export const UpcomingMovies = ({ className }: Props) => {
  const { data } = useGetUpcomingMovieQuery()

  return (
    <div className={s.container}>
      <h2 className={s.title}>Upcoming Movies</h2>
      <Cards data={data} className={className} />
    </div>
  )
}
