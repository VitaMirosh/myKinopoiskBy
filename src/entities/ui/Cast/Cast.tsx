import { useGetMovieCreditsQuery } from "@/entities/api/cardsApi.ts"
import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"
import s from "./Cast.module.css"
import face from "./../../../assets/img/face.svg"

type Props = {
  id: number
}
export const Cast = ({ id }: Props) => {
  const { data } = useGetMovieCreditsQuery(id)

  return (
    <>
      <p className={s.cast}>Cast</p>
      <div className={s.castConteiner}>
        {data?.id === id &&
          data?.cast.map((actor) => (
            <div className={s.container}>
              <div className={s.imgConteiner}>
                {actor.profile_path ? (
                  <img src={getImageUrl(actor.profile_path, "w500")} alt={actor.name} className={s.img} />
                ) : (
                  <img src={face} alt={actor.name} className={s.img} />
                )}
              </div>
              <p className={s.name1}>{actor.name}</p>
              <p className={s.name2}>{actor.character}</p>
            </div>
          ))}
      </div>
    </>
  )
}
