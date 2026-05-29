import s from "./Cards.module.css"

import type { BaseResponse } from "@/entities/model/types/baseResponse.ts"
import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"

type Props = {
  data: BaseResponse | undefined
  className?: string
}

export const Cards = ({ data, className }: Props) => {
  return (
    <div className={className ? className : s.container}>
      {data?.results.map((cart) => {
        return (
          <ul key={cart.id}>
            <li className={s.cart}>
              <div className={s.vote}>{cart.vote_average?.toFixed(1)}</div>
              {cart.poster_path && (
                <img
                  src={getImageUrl(cart.poster_path, "w500")}
                  alt={cart.title}
                  width={className ? className : "190px"}
                  height={280}
                  style={{ borderRadius: "15px" }}
                />
              )}
              {cart.title}
            </li>
          </ul>
        )
      })}
    </div>
  )
}
