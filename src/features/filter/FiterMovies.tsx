import s from "./FilterMovies.module.css"
import { type ChangeEvent, useState } from "react"
import type { GenreResponse } from "@/entities/model/types/baseResponse.ts"

type Props = {
  genre?: GenreResponse
  setGenreHandler: (id: number) => void
  setPopularityHandler: (name: string) => void
  resetAllFilters: () => void
  setRatingMovies: (movies: number, range: number) => void
}

const arraySelect = [
  { name: "Popularity down" },
  { name: "Popularity up" },
  { name: "Rating down" },
  { name: "Rating up" },
  { name: "Release date down" },
  { name: "Release date up" },
  { name: "Title A-Z" },
  { name: "Title Z-A" },
]

export const FilterMovies = ({
  genre,
  setGenreHandler,
  setPopularityHandler,
  resetAllFilters,
  setRatingMovies,
}: Props) => {
  const [range1, setRange1] = useState(0)
  const [range2, setRange2] = useState(10)
  const [selectedSort, setSelectedSort] = useState("")

  const handleRange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (value <= range2) {
      setRange1(value)
      setRatingMovies(value, range2)
    }
  }

  const handleRange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (value >= range1) {
      setRange2(value)
      setRatingMovies(range1, value)
    }
  }
  const genreHandler = (id: number) => {
    setGenreHandler(id)
  }
  const handlePopularityHandler = (event: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
    setPopularityHandler(event.target.value)
    setSelectedSort(event.target.value)
  }
  const resetHandler = () => {
    resetAllFilters()
    setRange1(0)
    setRange2(10)
    setSelectedSort(arraySelect[0].name)
  }
  return (
    <div className={s.container}>
      <h2> Filter / Sort</h2>
      <div className={s.selectWrapper}>
        <p>Sort by</p>
        <select className={s.select} value={selectedSort} onChange={handlePopularityHandler}>
          {arraySelect.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={s.sliderWrapper}>
        <p>Rating</p>
        <p>
          {range1.toFixed(1)} - {range2.toFixed(1)}
        </p>
      </div>
      <div className={s.wrapper}>
        <input type="range" min={0} max={10} step={0.1} value={range1} onChange={handleRange1} className={s.range} />
        <input type="range" min={0} max={10} step={0.1} value={range2} onChange={handleRange2} className={s.range} />
      </div>
      <div className={s.btnWrapper}>
        {genre?.genres?.map((g) => (
          <button key={g.id} onClick={() => genreHandler(g.id)} className={s.btn}>
            {g.name}
          </button>
        ))}
      </div>
      <button className={s.btnReset} onClick={resetHandler}>
        Reset filters
      </button>
    </div>
  )
}
