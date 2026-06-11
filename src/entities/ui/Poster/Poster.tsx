import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"
import s from "./Poster.module.css"

type Props = {
  poster: string
  title: string
}

export const Poster = ({ poster, title }: Props) => {
  return (
    <div className={s.containerImg}>
      <img src={getImageUrl(poster, "w500")} alt={title} className={s.img} />
    </div>
  )
}
