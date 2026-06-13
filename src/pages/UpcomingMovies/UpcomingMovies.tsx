import { useGetUpcomingMovieQuery } from "@/entities/api/cardsApi.ts"
import { Cards } from "@/shared/ui/cards/Cards.tsx"
import s from "../CategoriMovies.module.css"
import { Pagination } from "@/shared/ui/Pagination/Pagination.tsx"
import { useState } from "react"
import type { PropsMovies } from "@/shared/lib/types"
import { Skeletons } from "@/shared/ui/Skeletons/Skeletons.tsx"

export const UpcomingMovies = ({ className, isPagination }: PropsMovies) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isFetching } = useGetUpcomingMovieQuery({ pageNumber: currentPage })

  return (
    <div className={s.container}>
      <h2 className={s.title}>Upcoming Movies</h2>
      {isFetching ? <Skeletons skeleton={className} /> : <Cards data={data} className={className} />}
      {isPagination && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={data?.total_pages || 1} />
      )}
    </div>
  )
}
