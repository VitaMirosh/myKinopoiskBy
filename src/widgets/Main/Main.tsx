import { PopularMovies } from "@/features/PopularMovies/PopularMovies.tsx"
import s from "./Main.module.css"
import { NavLink } from "react-router"
import { Path } from "@/shared/lib/constants"
import { TopRatedMovies } from "@/features/TopRatedMovies/TopRatedMovies.tsx"
import { UpcomingMovies } from "@/features/UpcomingMovies/UpcomingMovies.tsx"
import { NowPlayingMovies } from "@/features/NowPlayingMovies/NowPlayingMovies.tsx"
import { Search } from "@/widgets/Search"
import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"

import { useGetUpcomingMovieQuery } from "@/entities/api/cardsApi.ts"
import { useEffect, useState } from "react"

const moviesMap = [
  { title: "Popular Movies", link: Path.Popular, component: PopularMovies },
  { title: "Top Rated Movies", link: Path.Top, component: TopRatedMovies },
  { title: "Upcoming Movies", link: Path.Upcoming, component: UpcomingMovies },
  { title: "Now Playing Movies", link: Path.Now, component: NowPlayingMovies },
]

export const Main = () => {
  const { data } = useGetUpcomingMovieQuery()

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
        <Search />
      </div>

      <div className={s.title}>
        {moviesMap.map((movie) => (
          <div key={movie.title} className={s.block}>
            <div className={s.wrapper}>
              <h2>{movie.title}</h2>
              <NavLink to={movie.link} className={({ isActive }) => (isActive ? s.calm : s.calm)}>
                View more
              </NavLink>
            </div>

            <div className={s.element}>
              <movie.component />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
