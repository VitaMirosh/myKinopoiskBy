import { Poster } from "@/entities/ui/Poster/Poster.tsx"
import { useGetDetailsMovieQuery } from "@/entities/api/cardsApi.ts"
import { useNavigate, useParams } from "react-router"
import { Btn } from "@/shared/ui/Btn"
import s from "./Details.module.css"

export const Details = () => {
  const { id } = useParams()
  const movieId = Number(id)
  const { data } = useGetDetailsMovieQuery(movieId)
  const navigate = useNavigate()
  const backNavigate = () => {
    navigate(-1)
  }

  return (
    <div className={s.containerDetalis}>
      <div className={s.containerUp}>
        {data?.poster_path && <Poster poster={data.poster_path} title={data.title} />}
        <div className={s.conteinerInfo}>
          <div className={s.containerTitle}>
            <h2 className={s.title}>{data?.title}</h2>
            <Btn onClick={backNavigate} className={s.batton}>
              Back
            </Btn>
          </div>
          <div className={s.info}>
            <p className={s.release}>Release year: {data?.release_date.slice(0, 4)}</p>
            <p
              className={
                data?.vote_average && data?.vote_average > 7.5
                  ? s.average
                  : data?.vote_average && data?.vote_average > 5.5
                    ? s.medaverage
                    : s.smallaverage
              }
            >
              {data?.vote_average.toFixed(1)}
            </p>
            <p className={s.runtime}>Runtime: {data?.runtime} min</p>
          </div>
          <p className={s.overview}>{data?.overview}</p>
          <div>
            <h3 className={s.genre}>Genres</h3>
            <div className={s.p}>
              {data?.genres.map((g) => (
                <p className={s.genreTitle}>{g.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
