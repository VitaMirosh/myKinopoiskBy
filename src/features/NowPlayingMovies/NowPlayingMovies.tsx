import { useGetNowPlayingMovieQuery } from "@/entities/api/cardsApi.ts"
import { Cards } from "@/shared/ui/cards/Cards.tsx"
import s from "./../CategoriMovies.module.css"

type Props = {
  className?: string
}
export const NowPlayingMovies = ({ className }: Props) => {
  const { data } = useGetNowPlayingMovieQuery()

  return (
    <div className={s.container}>
      <h2 className={s.title}>Now Playing Movies</h2>
      <Cards data={data} className={className} />
    </div>
  )
}
