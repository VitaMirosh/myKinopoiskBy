import s from "./FilteredMovies.module.css"
import { FilterMovies } from "@/features/filter/FiterMovies.tsx"
import { useGetPopularMovieQuery } from "@/entities/api/cardsApi.ts"
import { Cards } from "@/shared/ui/cards/Cards.tsx"

export const FilteredMovies = () => {
  const { data } = useGetPopularMovieQuery()
  return (
    <div className={s.container}>
      <FilterMovies data={data} />
      <Cards data={data} />
    </div>
  )
}
