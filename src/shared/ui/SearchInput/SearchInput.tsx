import s from "./SearchInput.module.css"
import type { ChangeEvent } from "react"

type Props = {
  query: string
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ query, changeHandler }: Props) => {
  return (
    <input
      type={"search"}
      placeholder={"Search for movie"}
      value={query}
      onChange={changeHandler}
      className={s.input}
    />
  )
}
