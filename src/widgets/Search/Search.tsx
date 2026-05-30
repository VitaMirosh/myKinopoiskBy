import { Btn } from "@/shared/ui/Btn"
import { type ChangeEvent, useState } from "react"
import s from "./Search.module.css"
import { useGetSearchKeywordQuery } from "@/entities/api/cardsApi.ts"
import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"

export const Search = () => {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const { data } = useGetSearchKeywordQuery(query)

  const searchMovies = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }
  const sendTitle = () => {
    setQuery(search)
  }

  return (
    <div className={s.container}>
      <h1>Search results</h1>
      <div className={s.inputButton}>
        <input
          type={"search"}
          placeholder={"Search for movie"}
          value={search}
          onChange={searchMovies}
          className={s.input}
        />
        <Btn onClick={sendTitle} className={s.button}>
          Send
        </Btn>
      </div>
      <div className={s.containerCardS}>
        {search &&
          data?.results?.map((keyWord) => (
            <ul key={keyWord.id}>
              <li className={s.cart}>
                <img
                  src={getImageUrl(keyWord.poster_path, "w500")}
                  width={200}
                  height={280}
                  style={{ borderRadius: "15px" }}
                />{" "}
                <p className={s.noposter}>No poster</p>
              </li>
              {keyWord.name}
            </ul>
          ))}
        {!search && <p>Enter a movie title to start searching</p>}
      </div>
    </div>
  )
}
