import s from "./Search.module.css"
import { SearchInput } from "@/shared/ui/SearchInput/SearchInput.tsx"
import { useGetSearchKeywordQuery } from "@/entities/api/cardsApi.ts"
import { type ChangeEvent, useState } from "react"
import { getImageUrl } from "@/app/baseApi/baseImageApi.ts"
import { Btn } from "@/shared/ui/Btn"
import { useSearchParams } from "react-router"

export const Search = () => {
  const [params, setParams] = useSearchParams()
  const query = params.get("query") ?? ""
  const [search, setSearch] = useState(query)
  const { data } = useGetSearchKeywordQuery(search, { skip: !query })

  const searchMovies = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const sendTitle = () => {
    if (search.trim()) {
      setParams({ query: search })
    } else {
      setParams({})
    }
  }

  return (
    <div className={s.container}>
      <h1 className={s.searchTitle}>Search results</h1>
      <div className={s.inputButton}>
        <SearchInput query={search} changeHandler={searchMovies} />
        <Btn onClick={sendTitle} className={!search ? s.disabled : s.button} disabled={!search}>
          Send
        </Btn>
      </div>
      {!query && <p>Enter a movie title to start searching</p>}
      <div className={s.containerCardS}>
        {data?.results &&
          data?.results.map((keyWord) => (
            <ul key={keyWord.id}>
              <li className={s.cart}>
                <img
                  src={getImageUrl(keyWord.poster_path, "w500")}
                  width={200}
                  height={280}
                  style={{ borderRadius: "15px" }}
                />
                <p className={s.noposter}>No poster</p>
              </li>
              {keyWord.name}
            </ul>
          ))}
      </div>
    </div>
  )
}
