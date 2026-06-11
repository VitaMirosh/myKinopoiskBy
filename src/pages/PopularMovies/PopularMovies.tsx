import { useGetPopularMovieQuery } from "@/entities/api/cardsApi.ts"
import { Cards } from "@/shared/ui/cards/Cards.tsx"
import s from "../CategoriMovies.module.css"
import { Pagination } from "@/shared/ui/Pagination/Pagination.tsx"
import { useState } from "react"
import type { PropsMovies } from "@/shared/lib/types"

export const PopularMovies = ({ className, isPagination = true }: PropsMovies) => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data } = useGetPopularMovieQuery({ pageNumber: currentPage })

  return (
    <div className={s.container}>
      <h2 className={s.title}>Popular Movies</h2>
      <Cards data={data} className={className} />
      {isPagination && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={data?.total_pages || 1} />
      )}
    </div>
  )
}
