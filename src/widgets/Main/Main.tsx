import { PopularMovies } from "@/pages/PopularMovies/PopularMovies.tsx"
import s from "./Main.module.css"
import { NavLink } from "react-router"
import { Path } from "@/shared/lib/constants"
import { TopRatedMovies } from "@/pages/TopRatedMovies/TopRatedMovies.tsx"
import { UpcomingMovies } from "@/pages/UpcomingMovies/UpcomingMovies.tsx"
import { NowPlayingMovies } from "@/pages/NowPlayingMovies/NowPlayingMovies.tsx"
import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"

import { useGetUpcomingMovieQuery } from "@/entities/api/cardsApi.ts"
import { useEffect, useState } from "react"
import { Welcome } from "@/widgets/Main/Welcome"

const moviesMap = [
  { link: Path.Popular, component: PopularMovies },
  { link: Path.Top, component: TopRatedMovies },
  { link: Path.Upcoming, component: UpcomingMovies },
  { link: Path.Now, component: NowPlayingMovies },
]

export const Main = () => {
  const { data } = useGetUpcomingMovieQuery({ pageNumber: 1 })

  const images = data?.results || []
  const [randomPosterNum, setRandomPosterNum] = useState<number | null>(null)

  useEffect(() => {
    if (images.length > 0) {
      setRandomPosterNum(Math.floor(Math.random() * images.length))
    }
  }, [images])
  if (randomPosterNum === null) return null

  const randomPosterImg = images[randomPosterNum]?.poster_path

  return (
    <div className={s.container}>
      <div className={s.container2}>
        <img src={getImageUrl(randomPosterImg, "w500")} alt="Random movie poster" className={s.img} />
        <Welcome />
      </div>
      <div className={s.title}>
        {moviesMap.map((movie, index) => (
          <div key={index} className={s.block}>
            <NavLink to={movie.link} className={({ isActive }) => (isActive ? s.calm : s.calm)}>
              View more
            </NavLink>
            <movie.component className={s.count} isPagination={false} />
          </div>
        ))}
      </div>
    </div>
  )
}
