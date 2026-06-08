import { FilterMovies } from "@/features/filter/FiterMovies.tsx"
import { Cards } from "@/shared/ui/cards/Cards.tsx"
import { useGetGenresQuery, useGetPopularMovieQuery } from "@/entities/api/cardsApi.ts"
import s from "./FilteredMovies.module.css"
import { useState } from "react"
import type { MoviesResponse } from "@/entities/model/types/baseResponse.ts"

export const FilteredMovies = () => {
  const { data } = useGetPopularMovieQuery()
  const { data: genre } = useGetGenresQuery()

  const [movies, setMovies] = useState<MoviesResponse[] | undefined>()

  const setGenreHandler = (id: number | null) => {
    if (id) {
      const genreFiltered = data?.results.filter((genre) => genre.genre_ids.includes(id))
      setMovies(genreFiltered)
    }
  }
  const setPopularityHandler = (name: string | null) => {
    let sorted
    if (name === "Popularity down") {
      sorted = [...(data?.results ?? [])].sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0))
    }
    if (name === "Popularity up") {
      sorted = [...(data?.results ?? [])].sort((a, b) => (a.popularity ?? 0) - (b.popularity ?? 0))
    }
    if (name === "Rating down") {
      sorted = [...(data?.results ?? [])].sort((a, b) => (b.vote_average ?? 0) - (a.vote_average ?? 0))
    }
    if (name === "Rating up") {
      sorted = [...(data?.results ?? [])].sort((a, b) => (a.vote_average ?? 0) - (b.vote_average ?? 0))
    }
    if (name === "Release date down") {
      sorted = [...(data?.results ?? [])].sort(
        (a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime(),
      )
    }
    if (name === "Release date up") {
      sorted = [...(data?.results ?? [])].sort(
        (a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime(),
      )
    }
    if (name === "Title A-Z") {
      sorted = [...(data?.results ?? [])].sort((a, b) => a.title.localeCompare(b.title))
    }
    if (name === "Title Z-A") {
      sorted = [...(data?.results ?? [])].sort((a, b) => b.title.localeCompare(a.title))
    }
    setMovies(sorted)
  }
  const setRatingMovies = (min: number, max: number) => {
    const ratedMovies = data?.results.filter(
      (movie) => movie.vote_average && movie.vote_average >= min && movie.vote_average <= max,
    )

    setMovies(ratedMovies)
  }
  const resetAllFilters = () => {
    const allMovies = data?.results.map((movie) => movie)
    setMovies(allMovies)
  }

  return (
    <div className={s.container}>
      <FilterMovies
        setGenreHandler={setGenreHandler}
        genre={genre}
        setPopularityHandler={setPopularityHandler}
        resetAllFilters={resetAllFilters}
        setRatingMovies={setRatingMovies}
      />
      {!movies ? <Cards data={data} /> : <Cards filtered={movies} />}
    </div>
  )
}
